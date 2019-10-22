import React, { Component, Fragment } from "react";
import connect from "@vkontakte/vk-connect";
import { get } from "lodash";
import View from "@vkontakte/vkui/dist/components/View/View";
import ScreenSpinner from "@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner";
import "@vkontakte/vkui/dist/vkui.css";

import Items from "../../components/Items";

import { block } from "bem-cn";
import { Link } from "react-router";

import "./style.css";

export default class Presenter extends Component {
  constructor(props) {
    super(props);

    this.fetchData = this.fetchData.bind(this);
    this.handlerForGetGroups = this.handlerForGetGroups.bind(this);
  }
  componentDidMount() {
    connect.subscribe(({ detail: { type, data } }) => {
      if (type === "VKWebAppUpdateConfig") {
        const schemeAttribute = document.createAttribute("scheme");
        schemeAttribute.value = data.scheme ? data.scheme : "client_light";
        document.body.attributes.setNamedItem(schemeAttribute);
      }
    });

    this.fetchData();
  }

  async fetchData() {
    const { getUserInfo, getAuthToken } = this.props;

    await getUserInfo();
    await getAuthToken();
    await this.handlerForGetGroups();
  }

  handlerForGetGroups() {
    const { getGroups, user, token } = this.props;

    getGroups(get(user, "id"), get(token, "access_token"));
  }

  render() {
    const { loadingGroups, groups } = this.props;
    return (
      <Fragment>
        {!loadingGroups && <Items items={groups.items} title={"Мои группы"} />}
      </Fragment>
    );
  }
}
