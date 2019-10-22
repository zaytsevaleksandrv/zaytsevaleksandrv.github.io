import React from "react";
import { connect } from "react-redux";
import Presenter from "./Presenter";
import { getUserInfo, getAuthToken, getGroups } from "../../redux/actions";

const mapStateToProps = state => ({
  state,
  user: state.user,
  token: state.token,
  loadingGroups: state.groups.loadingGroups,
  groups: state.groups,
});

const mapDispatchToProps = dispatch => ({
  dispatch,
  getUserInfo: () => dispatch(getUserInfo()),
  getAuthToken: () => dispatch(getAuthToken()),
  getGroups: (id, token) => dispatch(getGroups(id, token)),

});

const Main = connect(
  mapStateToProps,
  mapDispatchToProps
)(Presenter);

export default Main;
