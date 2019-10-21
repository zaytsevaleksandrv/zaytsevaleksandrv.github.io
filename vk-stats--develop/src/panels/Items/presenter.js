import React, { Fragment } from "react";
import { get } from "lodash";
import PropTypes from "prop-types";

import { Group, List, Avatar, Cell, Counter } from "@vkontakte/vkui";
import Icon20UserOutline from "@vkontakte/icons/dist/20/user_outline";

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

const Presenter = ({ items, go, title }) => (
  <Group title={title}>
    <List>
      {get(items, "response.items.length") > 0 &&
        items.response.items.map((it, index) => (
          <Cell
            key={`${it.id}_${index}`}
            expandable
            onClick={go}
            data-to="card"
            before={<Avatar src={it.photo_50} />}
            indicator={
              <Fragment>
                {it.is_admin === 1 ? (
                  <Counter type="prominent">{getAdmin(it.admin_level)}</Counter>
                ) : (
                  <Counter>Вы участник</Counter>
                )}
              </Fragment>
            }
            size="l"
            description={
              <Fragment>
                {getType(it.type)}
                <div className={"flex ai_c indent_t_5"}>
                  <Icon20UserOutline width={16} height={16} fill={"#99b1c6"} />
                  <span>{it.members_count}</span>
                </div>
              </Fragment>
            }
            bottomContent={<div />}
          >
            {it.name}
          </Cell>
        ))}
    </List>
  </Group>
);

Presenter.propTypes = {
  title: PropTypes.string,
  go: PropTypes.func.isRequired,
  items: PropTypes.shape({
    id: PropTypes.string.isRequired,
    photo_50: PropTypes.string,
    name: PropTypes.string,
    screen_name: PropTypes.string,
    is_admin: PropTypes.number,
    members_count: PropTypes.number
  })
};

export default Presenter;
