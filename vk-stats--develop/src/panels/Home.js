import React from "react";
import PropTypes from "prop-types";
import Panel from "@vkontakte/vkui/dist/components/Panel/Panel";
import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";

import Items from "./Items/";

const Home = ({ id, go, fetchedGroups }) => (
  <Panel id={id}>
    <PanelHeader>Статистика Вконтакте</PanelHeader>
    {fetchedGroups && (
      <Items items={fetchedGroups} title={"Мои группы"} go={go} />
    )}
  </Panel>
);

Home.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
  fetchedUser: PropTypes.shape({
    photo_200: PropTypes.string,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    city: PropTypes.shape({
      title: PropTypes.string
    })
  })
};

export default Home;
