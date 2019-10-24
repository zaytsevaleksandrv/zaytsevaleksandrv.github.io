import React, { Component, Fragment } from "react";
import Icon24Back from "@vkontakte/icons/dist/24/back";
import Icon24Spinner from "@vkontakte/icons/dist/24/spinner";
import "@vkontakte/vkui/dist/vkui.css";
import {
  View,
  Panel,
  PanelHeader,
  HeaderButton,
  Avatar,
  Button
} from "@vkontakte/vkui";
import { push } from "react-router-redux";

import { block } from "bem-cn";

import "./style.css";

const cn = block("card");

export default class Presenter extends Component {
  constructor(props) {
    super(props);

    this.handlerForPushMain = this.handlerForPushMain.bind(this);
    this.handlerForGetMembers = this.handlerForGetMembers.bind(this);
  }

  componentWillUnmount() {
    const { groupReset } = this.props;
    groupReset();
  }

  handlerForPushMain() {
    const { dispatch } = this.props;

    dispatch(push(`/`));
  }

  handlerForGetMembers() {
    const { group, token, getGroupMembers } = this.props;
    getGroupMembers(group.id, group.members_count, token.access_token);
  }

  render() {
    const {
      loadingGroup,
      group,
      loadingGroupMembers,
      startLoadingGroupMembers
    } = this.props;

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
                <div className={"flex ai_c jc_fs"}>
                  <Button
                    onClick={this.handlerForGetMembers}
                    disabled={startLoadingGroupMembers}
                  >
                    Обновить данные
                  </Button>
                  {startLoadingGroupMembers && (
                    <span className={"indent__left_10"}>
                      <Icon24Spinner
                        fill={"#99b1c6"}
                        className={cn("loading")}
                      />
                    </span>
                  )}
                </div>
                {!loadingGroupMembers && (
                  <p>Мы обновили данные.</p>
                )}
              </div>
            </Fragment>
          )}
        </Panel>
      </View>
    );
  }
}
