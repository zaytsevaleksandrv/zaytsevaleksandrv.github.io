import React  from "react";


import { IOS, PanelHeader, Panel, platform} from "@vkontakte/vkui";
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import HeaderButton from "@vkontakte/vkui/dist/components/HeaderButton/HeaderButton";
import PropTypes from "prop-types";


const osName = platform();

const Presenter = props => (
    <Panel id={props.id}>
      <PanelHeader
          left={<HeaderButton onClick={props.go} data-to="home">
            {osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
          </HeaderButton>}
      >
        Persik
      </PanelHeader>
      sssss
    </Panel>
);

Presenter.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
};

export default Presenter;
