import React from "react";
import { render } from "react-dom";
import { Router, Route, browserHistory } from "react-router";
import { syncHistoryWithStore } from "react-router-redux";
import { Provider } from "react-redux";
import configureStore from "./redux/stores/configureStore";
import Main from "./containers/Main";
import Card from "./containers/Card";

import "./styles/main.css";

const store = configureStore();

const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Main} />
      <Route path="/card/:id" exact component={Card} />
    </Router>
  </Provider>,
  document.getElementById("root")
);
