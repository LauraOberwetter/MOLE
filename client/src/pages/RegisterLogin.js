import React, { useState } from "react";
import Register from "../components/Register";
import Login from "../components/Login";

const RegisterLogin = ({ userLogged, setUserLogged }) => {
  const [screen, setScreen] = useState("register");

  const changeScreen = (str) => {
    setScreen(str);
  };

  return (
    <div>
      {screen === "register" ? (
        <Register
          userLogged={userLogged}
          setUserLogged={setUserLogged}
          changeScreen={changeScreen}
        />
      ) : (
        <Login
          userLogged={userLogged}
          setUserLogged={setUserLogged}
          changeScreen={changeScreen}
        />
      )}
    </div>
  );
};

export default RegisterLogin;
