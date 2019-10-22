import connect from "@vkontakte/vk-connect";

export const getAuthToken = () => async dispatch => {
  dispatch({ type: "GET_AUTH_TOKEN_REQ" });

  try {
    const req = await connect.sendPromise("VKWebAppGetAuthToken", {
      app_id: 7178535,
      scope: "groups,stats"
    });
    dispatch({ type: "GET_AUTH_TOKEN_RES", payload: req });
    return req;
  } catch (error) {
    dispatch({ type: "GET_AUTH_TOKEN_FAIL", payload: error.message });
  }
};
