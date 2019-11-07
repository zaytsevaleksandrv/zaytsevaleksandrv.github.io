const initialState = {
  loadingGroup: true,
  loadingGroupMembers: true,
  startLoadingGroupMembers: false,
};

const group = (state = initialState, action) => {
  switch (action.type) {
    case "GET_GROUP_REQ":
      return {
        ...state,
        loadingGroup: true
      };
    case "GET_GROUP_RES":
      return {
        ...state,
        ...action.payload.response[0],
        loadingGroup: false
      };
    case "GET_GROUP_MEMBERS_REQ":
      return {
        ...state,
        loadingGroupMembers: true,
        startLoadingGroupMembers: true
      };
    case "GET_GROUP_MEMBERS_RES":
      return {
        ...state,
        loadingGroupMembers: false,
        startLoadingGroupMembers: false
      };
    case "GROUP_RESET_RES":
      return {
        ...initialState
      };
    default:
      return state;
  }
};

export default group;
