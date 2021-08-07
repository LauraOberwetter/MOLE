import axios from "axios";

export default {
  // Gets all modules
  getModules: function () {
    return axios.get("api/modules");
  },
  login: function (username, password) {
    return axios.post("api/users/login", { data: { username, password } });
  },
};
