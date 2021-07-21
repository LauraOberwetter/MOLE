import React, { useState } from "react";
import api from "../../utils/API"
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleLoginClick() {
    // Get the values from username and password elements and POST them to api/login
    console.log(username)
    console.log(password)
    api.login(username, password)
  }

  return (
    <div className="login-wrapper">
      <h1
        style={{
          color: "#072AC8",
          paddingTop: "35px",
          paddingBottom: "35px",
          fontFamily: "Playfair Display",
        }}
      >Please Log In</h1>
      <form>
        <label>
          <p>Username</p>
          <input type="text" onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={(e) => setPassword(e.target.value)}/>
        </label>
        <div>
          <button type = "button" onClick={handleLoginClick}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
