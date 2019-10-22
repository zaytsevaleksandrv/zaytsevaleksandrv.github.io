const initialState = {
  loadingUser: true
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USER_INFO_REQ":
      return {
        ...state,
        loadingUser: true
      };
    case "GET_USER_INFO_RES":
      return {
        ...state,
        ...action.payload,
        loadingUser: false
      };
    default:
      return state;
  }
};

export default user;
