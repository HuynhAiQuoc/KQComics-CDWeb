import axios from "axios";

const API_URL = "http://localhost:8081/rest/user/";

class AuthService {
  logIn(email, password) {
    return axios
      .post(API_URL + "authenticate", {
        email,
        password,
      })
      .then((response) => {
        if (response.data.token) {
          console.log(response.data);
          localStorage.setItem(
            "user",
            JSON.stringify({
              id: response.data.id,
              email: response.data.email,
              username: response.data.username,
            })
          );
          return "successfully";
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(username, email, password) {
    return axios
      .post(API_URL + "register", {
        username,
        email,
        password,
      })
      .then((response) => {
        localStorage.setItem(
          "user",
          JSON.stringify({
            id: response.data.id,
            email: response.data.email,
            username: response.data.username,
          })
        );

        return response.data;
      });
  }

  checkUser(email) {
    return axios.post(API_URL + "check_user", { email }).then((response) => {
      return response.data;
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }
}

export default new AuthService();
