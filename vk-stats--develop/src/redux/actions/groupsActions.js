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

export const getGroup = (id, token) => async dispatch => {
  dispatch({ type: "GET_GROUP_REQ" });

  try {
    const req = await connect.sendPromise("VKWebAppCallAPIMethod", {
      method: "groups.getById",
      request_id: "groupCurrent",
      params: {
        group_id: id,
        fields:
          "id,is_admin,admin_level,name,photo_50,screen_name,type,members_count",
        v: "5.102",
        access_token: token
      }
    });

    dispatch({ type: "GET_GROUP_RES", payload: req });
    return req;
  } catch (error) {
    dispatch({ type: "GET_GROUP_FAIL", payload: error.message });
  }
};

export const getGroupMembers = (
  group_id,
  members_count,
  token
) => async dispatch => {
  dispatch({ type: "GET_GROUP_MEMBERS_REQ" });

  let membersGroups = [];
  async function getMembers(group_id, members_count) {
    const executePromise = await connect.sendPromise("VKWebAppCallAPIMethod", {
      method: "execute.getMembers",
      params: {
        group_id: group_id,
        offset: 0,
        total_count: members_count,
        access_token: token,
        v: "5.102"
      }
    });

    if (executePromise.response) {
      membersGroups = membersGroups.concat(
        JSON.parse("[" + executePromise.response + "]")
      );

      if (members_count > membersGroups.length) {
        setTimeout(function() {
          getMembers(group_id, members_count);
        }, 333);
      } else {
        return dispatch({
          type: "GET_GROUP_MEMBERS_RES",
          payload: membersGroups
        });
      }
    } else {
      console.log(executePromise.error_msg);
    }
  }

  try {
    await getMembers(group_id, members_count);
  } catch (error) {
    dispatch({ type: "GET_GROUP_MEMBERS_FAIL", payload: error.message });
  }
};

export const groupReset = () => async dispatch => {
  dispatch({ type: "GROUP_RESET_RES" });
};
