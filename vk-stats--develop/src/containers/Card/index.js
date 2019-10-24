import React from "react";
import { connect } from "react-redux";
import Presenter from "./Presenter";
import { getGroupMembers, groupReset } from "../../redux/actions";

const mapStateToProps = state => ({
  state,
  loadingGroup: state.groups.loadingGroup,
  loadingGroupMembers: state.group.loadingGroupMembers,
  startLoadingGroupMembers: state.group.startLoadingGroupMembers,
  group: state.group,
  token: state.token
});

const mapDispatchToProps = dispatch => ({
  dispatch,
  groupReset: () => dispatch(groupReset()),
  getGroupMembers: (id, members_count, token) =>
    dispatch(getGroupMembers(id, members_count, token))
});

const Card = connect(
  mapStateToProps,
  mapDispatchToProps
)(Presenter);

export default Card;
