import React, { Component, Fragment } from "react";
import Icon24Back from "@vkontakte/icons/dist/24/back";
import "@vkontakte/vkui/dist/vkui.css";
import {
  View,
  Panel,
  PanelHeader,
  HeaderButton,
  Avatar
} from "@vkontakte/vkui";
import { push } from "react-router-redux";

import { block } from "bem-cn";

import "./style.css";

export default class Presenter extends Component {
  constructor(props) {
    super(props);

    this.handlerForPushMain = this.handlerForPushMain.bind(this);
  }

  componentWillUnmount() {
    const { groupReset } = this.props;
    groupReset();
  }

  handlerForPushMain() {
    const { dispatch } = this.props;

    dispatch(push(`/`));
  }

  render() {
    const { loadingGroup, group } = this.props;
    return (
      <View>
        <Panel>
          <PanelHeader
            noShadow
            left={
              <HeaderButton onClick={this.handlerForPushMain}>
                <Icon24Back />
              </HeaderButton>
            }
          >
            card
          </PanelHeader>
          {!loadingGroup && (
            <Fragment>
              <Avatar src={group.photo_50} />
              <div>
                <h5 className={"indent_reset indent__top_10 indent__bottom_6"}>
                  {group.name}
                </h5>
              </div>
            </Fragment>
          )}
        </Panel>
      </View>
    );
  }
}
