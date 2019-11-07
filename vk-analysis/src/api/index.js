import axios from "axios";

import { API_GET_HISTORY } from "../api/urls";

export default {
  history: {
    create: (group_id, object_ids, user_id, status) =>
      axios.get(API_GET_HISTORY, {
        params: {
          key: `${group_id}_${user_id}`,
          object_ids,
          user_id,
          status
        }
      })
  }
};
