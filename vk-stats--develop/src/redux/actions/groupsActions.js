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
        // filter: "admin,editor,moder",
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

  let membersGroups = [];
  async function getMembers(group_id, members_count) {
    const code = `var members = API.groups.getMembers({"group_id": ${group_id}, "v": "5.27", "sort": "id_asc", "count": "1000", "offset": '${
      membersGroups.length
    }'}).items; var offset = 1000; while (offset < 25000 && (offset + ${
      membersGroups.length
    }) < ${members_count}) { members = members + "," + API.groups.getMembers({"group_id": ${group_id}, "v": "5.27", "sort": "id_asc", "count": "1000", "offset": '${
      membersGroups.length
    } + offset'}).items; offset = offset + 1000;}; return members;`;

    const executePromise = await connect.sendPromise("VKWebAppCallAPIMethod", {
      method: "execute",
      params: {
        code: code,
        access_token: token,
        v: "5.102"
      }
    });

    if (executePromise.response) {
      membersGroups = membersGroups.concat(
        JSON.parse("[" + executePromise.response + "]")
      );
      console.log("загрузка", membersGroups.length, "из", members_count);

      if (members_count > membersGroups.length) {
        setTimeout(function() {
          getMembers(group_id, members_count);
        }, 333);
      } else {
        console.log(
          "Ура тест закончен! В массиве membersGroups теперь " +
            membersGroups.length +
            " элементов."
        );

        return membersGroups;
      }
    } else {
      console.log(executePromise.error_msg);
    }

    return membersGroups;
  }

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

    const res = await getMembers(id, req.response[0].members_count);

    dispatch({ type: "GET_GROUP_RES", payload: req, members: res });
    return req;
  } catch (error) {
    dispatch({ type: "GET_GROUP_FAIL", payload: error.message });
  }
};

export const groupReset = () => async dispatch => {
  dispatch({ type: "GROUP_RESET_RES" });
};
