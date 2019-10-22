import React from "react";
import { connect } from "react-redux";
import Presenter from "./Presenter";
import { groupReset } from "../../redux/actions";

const mapStateToProps = state => ({
  state,
  loadingGroup: state.groups.loadingGroup,
  group: state.group
});

const mapDispatchToProps = dispatch => ({
  dispatch,
  groupReset: () => dispatch(groupReset())
});

const Card = connect(
  mapStateToProps,
  mapDispatchToProps
)(Presenter);

export default Card;
