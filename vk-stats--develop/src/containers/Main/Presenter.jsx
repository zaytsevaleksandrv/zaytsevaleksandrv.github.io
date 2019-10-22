import React, { Component } from "react";
import connect from "@vkontakte/vk-connect";
import { get } from "lodash";
import { push } from "react-router-redux";
import "@vkontakte/vkui/dist/vkui.css";
import { View, Panel, PanelHeader, Tabs, TabsItem } from "@vkontakte/vkui";

import Items from "../../components/Items";

import { block } from "bem-cn";
import { Link } from "react-router";

import "./style.css";

export default class Presenter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tab: "tab1"
    };

    this.fetchData = this.fetchData.bind(this);
    this.handlerForGetGroups = this.handlerForGetGroups.bind(this);
    this.handlerForPushRoute = this.handlerForPushRoute.bind(this);
  }

  componentDidMount() {
    const { user } = this.props;

    connect.subscribe(({ detail: { type, data } }) => {
      if (type === "VKWebAppUpdateConfig") {
        const schemeAttribute = document.createAttribute("scheme");
        schemeAttribute.value = data.scheme ? data.scheme : "client_light";
        document.body.attributes.setNamedItem(schemeAttribute);
      }
    });

    if (!get(user, "id")) {
      this.fetchData();
    }
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

  async handlerForPushRoute(id) {
    const { getGroup, token, dispatch } = this.props;

    await dispatch(push(`/card/${id}`));
    await getGroup(id, token.access_token);
  }

  render() {
    const { loadingGroups, groups } = this.props;
    return (
      <View>
        <Panel>
          <PanelHeader>
            <Tabs theme="header" type="buttons">
              <TabsItem
                onClick={() => this.setState({ tab: "tab1" })}
                selected={this.state.tab === "tab1"}
              >
                Сегодня
              </TabsItem>
              <TabsItem
                onClick={() => this.setState({ tab: "tab2" })}
                selected={this.state.tab === "tab2"}
              >
                Вчера
              </TabsItem>
              <TabsItem
                onClick={() => this.setState({ tab: "tab3" })}
                selected={this.state.tab === "tab3"}
              >
                5 дней назад
              </TabsItem>
              <TabsItem
                onClick={() => this.setState({ tab: "tab4" })}
                selected={this.state.tab === "tab4"}
              >
                Месяц назад
              </TabsItem>
            </Tabs>
          </PanelHeader>
          {!loadingGroups && (
            <Items
              items={groups.items}
              title={"Мои группы"}
              push={this.handlerForPushRoute}
            />
          )}
        </Panel>
      </View>
    );
  }
}
