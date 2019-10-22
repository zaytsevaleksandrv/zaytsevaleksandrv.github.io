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

  async function getMembers(groupId, membersCount) {
    let membersGroup = [];
    const code = `let members = await connect.sendPromise("VKWebAppCallAPIMethod", {
            method: "groups.getMembers",
            request_id: "groupsUser",
            params: {
              group_id: groupId,
              sort: "id_asc",
              offset: membersGroup.length,
              fields: "id,photo_50",
              v: "5.102",
              access_token: token
            }
          });

          members = members.response.items;
          let offset = 1000;

          while (
            offset < 25000 &&
            offset + membersGroup.length < membersCount
          ) {
            const innerMembersWhile = await connect.sendPromise(
              "VKWebAppCallAPIMethod",
              {
                method: "groups.getMembers",
                request_id: "groupsUser",
                params: {
                  group_id: groupId,
                  sort: "id_asc",
                  offset: membersGroup.length + offset,
                  fields: "id,photo_50",
                  v: "5.102",
                  access_token: token
                }
              }
            );
            members = [...members, ...innerMembersWhile.response.items];
            offset = offset + 1000;
          }

          return members;`;
    const executePromise = await connect.sendPromise("VKWebAppCallAPIMethod", {
      method: "execute",
      code: code
    });
    if (executePromise.response) {
      membersGroup = [...membersGroup, executePromise.response.items];
      console.log("загрузка", membersGroup.length, "из", membersCount);

      if (membersCount > membersGroup.length) {
        setTimeout(() => {
          getMembers(groupId, membersCount);
        }, 333);
      } else {
        console.log(
          "Ура тест закончен! В массиве membersGroups теперь " +
            membersGroup.length +
            " элементов."
        );

        return membersGroup;
      }
    } else {
      console.log(executePromise.error.error_msg);
    }

    return membersGroup;
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
