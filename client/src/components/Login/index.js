import React, { useState } from "react";
import api from "../../utils/API";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//import Button from "react-bootstrap/Button";
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

      <Container>
        <h1>Please Log In</h1>
        <Row className="mb-3">
          <Form.Group
            as={Col}
            className="mb-3 mt-3"
            controlId="formBasicUsername"
          >
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              name="username"
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
            />
          </Form.Group>
          <Form.Group
            as={Col}
            className="mb-3 mt-3"
            controlId="formBasicPassword"
          >
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter username"
            />
          </Form.Group>
        </Row>
        <div>
          <Button type="button" onClick={handleLoginClick}>
            Login
          </Button>
        </div>
        <p>
          Not Registered Yet?{" "}
          <a
            onClick={() => {
              changeScreen("register");
            }}
          >
            Register
          </a>
        </p>
      </Container>
    </div>
  );
}

/* <Form>

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

        
      </Form> */

/* <button

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

      </button> 

      </Button>
    </div>
  );
}*/


export default Login;
