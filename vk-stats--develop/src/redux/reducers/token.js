const initialState = {};

const token = (state = initialState, action) => {
  if (action.type === "GET_AUTH_TOKEN_RES") {
    return {
      ...state,
      ...action.payload
    };
  } else {
    return state;
  }
};

export default token;
