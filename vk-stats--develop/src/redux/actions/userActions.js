import connect from "@vkontakte/vk-connect";

export const getUserInfo  = () => async dispatch => {
  dispatch({ type: "GET_USER_INFO_REQ" });

  try {
    const req = await connect.sendPromise("VKWebAppGetUserInfo");
    dispatch({ type: "GET_USER_INFO_RES", payload: req });
    return req;
  } catch (error) {
    dispatch({ type: "GET_USER_INFO_FAIL", payload: error.message });
  }
};
