import React, { useState } from "react";
import api from "../../utils/API";
import {Button} from "../Button/Button.jsx";
import "./login.css";


function Login({ userLogged, setUserLogged, changeScreen }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleLoginClick() {
    // Get the values from username and password elements and POST them to api/login
    api
      .login(username, password)
      .then((res) => {
        console.log(res);
        setUsername("");
        setPassword("");
        localStorage.setItem("user", JSON.stringify(res.data.user.id));
        userLogged === 0 ? setUserLogged(1) : setUserLogged(0);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="login-wrapper">
      <h1 className="loginHead">
        Please Log In
      </h1>
      <form>
        <label>
          <p>Username</p>
          <input type="text" onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <div>
          <Button type="button" onClick={handleLoginClick}>
            Submit
          </Button>
        </div>
      </form>
      <Button
        onClick={() => {
          changeScreen("register");
        }}
      >
        Register
      </Button>
    </div>
  );
}

export default Login;
