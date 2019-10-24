import React from "react";
import { block } from "bem-cn";
import PropTypes from "prop-types";

import { Group, List, Avatar, Cell, Counter } from "@vkontakte/vkui";
import Icon24Users from '@vkontakte/icons/dist/24/users';
import Icon24UserIncoming from '@vkontakte/icons/dist/24/user_incoming';
import Icon24UserOutgoing from "@vkontakte/icons/dist/24/user_outgoing";
import Icon24Comment from "@vkontakte/icons/dist/24/comment";
import Icon24Like from "@vkontakte/icons/dist/24/like";
import Icon24Share from "@vkontakte/icons/dist/24/share";
import Icon24Locate from "@vkontakte/icons/dist/24/locate";

import "./style.css";

function getType(type) {
  switch (type) {
    case "group":
      return "Группа";
    case "page":
      return "Публичная страница";
    default:
      return "Мероприятие";
  }
}

function getAdmin(level) {
  switch (level) {
    case 1:
      return "Вы модератор";
    case 2:
      return "Вы редактор";
    default:
      return "Вы администратор";
  }
}

const cn = block("item");

const Presenter = ({ items, push }) => (
  <div className={cn("wrapper")}>
    {items.map((it, index) => (
      <section className={cn()} key={`${it.id}_${index}`} title={'Открыть больше данных'} onClick={() => push(it.id)}>
        <Avatar src={it.photo_50} />
        <div>
          <h5 className={"indent_reset indent__top_10 indent__bottom_6"}>
            {it.name}
          </h5>
          <p className={"p2 indent_reset indent__bottom_6"}>
            {" "}
            {getType(it.type)}
          </p>
        </div>
        <div className={"flex ai_c indent_t_5"} title={"Подписчиков"}>
          <Icon24Users width={18} height={18} fill={"#99b1c6"} />
          <span className={"p2 indent__left_3"}>{it.members_count}</span>
        </div>
        <div className={"flex ai_c indent_t_5"} title={"Подписалось"}>
          <Icon24UserIncoming width={16} height={16} fill={"#99b1c6"} />
          <span className={"p2 indent__left_3"} style={{ color: "#4bb34b" }}>
            {it.members_count}
          </span>
        </div>
        <div className={"flex ai_c indent_t_5"} title={"Отписалось"}>
          <Icon24UserOutgoing width={16} height={16} fill={"#99b1c6"} />
          <span className={"p2 indent__left_3"} style={{ color: "#e64646" }}>
            {it.members_count}
          </span>
        </div>
        <div className={"flex ai_c indent_t_5"} title={"Комментариев"}>
          <Icon24Comment width={16} height={16} fill={"#99b1c6"} />
          <span className={"p2 indent__left_3"}>{it.members_count}</span>
        </div>
        <div className={"flex ai_c indent_t_5"} title={"Лайков"}>
          <Icon24Like width={16} height={16} fill={"#99b1c6"} />
          <span className={"p2 indent__left_3"}>{it.members_count}</span>
        </div>
        <div className={"flex ai_c indent_t_5"} title={"Репостов"}>
          <Icon24Share width={16} height={16} fill={"#99b1c6"} />
          <span className={"p2 indent__left_3"}>{it.members_count}</span>
        </div>
        <div className={"flex ai_c indent_t_5"} title={"Упоминаний"}>
          <Icon24Locate width={16} height={16} fill={"#99b1c6"} />
          <span className={"p2 indent__left_3"}>{it.members_count}</span>
        </div>
      </section>
    ))}
  </div>
);

Presenter.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array
};

export default Presenter;
