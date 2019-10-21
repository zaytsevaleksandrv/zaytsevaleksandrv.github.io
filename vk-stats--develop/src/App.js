import React, { useState, useEffect } from "react";
import connect from "@vkontakte/vk-connect";
import View from "@vkontakte/vkui/dist/components/View/View";
import ScreenSpinner from "@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner";
import "@vkontakte/vkui/dist/vkui.css";

import Home from "./panels/Home";
import Card from "./panels/Card";

const App = () => {
  const [activePanel, setActivePanel] = useState("home");
  const [fetchedUser, setUser] = useState(null);
  const [fetchedGroups, setGroups] = useState(null);
  const [popout, setPopout] = useState(<ScreenSpinner size="large" />);

  useEffect(() => {
    connect.subscribe(({ detail: { type, data } }) => {
      if (type === "VKWebAppUpdateConfig") {
        const schemeAttribute = document.createAttribute("scheme");
        schemeAttribute.value = data.scheme ? data.scheme : "client_light";
        document.body.attributes.setNamedItem(schemeAttribute);
      }
    });
    async function fetchData() {
      const user = await connect.sendPromise("VKWebAppGetUserInfo");
      const token = await connect.sendPromise("VKWebAppGetAuthToken", {
        app_id: 7178535,
        scope: "groups,stats"
      });
      const groups = await connect.sendPromise("VKWebAppCallAPIMethod", {
        method: "groups.get",
        request_id: "groupsUser",
        params: {
          user_id: user.id,
          extended: "1",
          fields:
            "id,is_admin,admin_level,name,photo_50,screen_name,type,members_count",
          v: "5.102",
          access_token: token.access_token
        }
      });
      setUser(user);
      setGroups(groups);

      setPopout(null);
    }
    fetchData();
  }, []);

  const go = e => {
    setActivePanel(e.currentTarget.dataset.to);
    console.log('s')
  };

  return (
    <View activePanel={activePanel} popout={popout}>
      <Home
        id="home"
        fetchedUser={fetchedUser}
        fetchedGroups={fetchedGroups}
        go={go}
      />
      <Card id="card" go={go} />
    </View>
  );
};

export default App;
