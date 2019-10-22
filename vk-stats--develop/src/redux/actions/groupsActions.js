import connect from "@vkontakte/vk-connect";

export const getGroups = (id, token) => async dispatch => {
  dispatch({ type: "GET_GROUPS_REQ" });

  try {
    const req = await connect.sendPromise("VKWebAppCallAPIMethod", {
      method: "groups.get",
      request_id: "groupsUser",
      params: {
        user_id: id,
        extended: "1",
        filter: "admin,editor,moder",
        fields:
          "id,is_admin,admin_level,name,photo_50,screen_name,type,members_count",
        v: "5.102",
        access_token: token
      }
    });
    dispatch({ type: "GET_GROUPS_RES", payload: req });
    return req;
  } catch (error) {
    dispatch({ type: "GET_GROUPS_FAIL", payload: error.message });
  }
};
