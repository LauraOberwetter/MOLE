import React, { useState, useEffect } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./style.css";

const Register = ({ changeScreen, setUserLogged, userLogged }) => {
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    language: "",
    course: "",
    instructor: "",
    password: "",
  });

  const [load, setLoad] = useState(0);

  const [users, setUsers] = useState([]);
  // @INCOMPLETE remove this before final version
  useEffect(() => {
    axios
      .get("http://localhost:3001/api/users")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [load]);

  const submitUser = (e) => {
    e.preventDefault();
    console.log(user);
    axios
      .post("http://localhost:3001/api/users", user)
      .then((res) => {
        setUser({
          first_name: "",
          last_name: "",
          username: "",
          email: "",
          language: "",
          course: "",
          instructor: "",
          password: "",
        });
        console.log(res);
        localStorage.setItem("user", JSON.stringify(res.data.user.id));
        userLogged === 0 ? setUserLogged(1) : setUserLogged(0);
        load === 0 ? setLoad(1) : setLoad(0);
      })
      .catch((err) => {
        console.log(err);
        load === 0 ? setLoad(1) : setLoad(0);
      });
  };

  const changeHandler = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <Container>
        <Form style={{ width: "75%" }} onSubmit={submitUser}>
          <Row className="mb-3">
            <Form.Group
              as={Col}
              className="mb-3 mt-3"
              controlId="formBasicFirstName"
            >
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                name="first_name"
                value={user.first_name}
                onChange={changeHandler}
                placeholder="Enter first name"
              />
            </Form.Group>
            <Form.Group
              as={Col}
              className="mb-3 mt-3"
              controlId="formBasicLastName"
            >
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                name="last_name"
                value={user.last_name}
                onChange={changeHandler}
                placeholder="Enter last name"
              />
            </Form.Group>
          </Row>
          <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={user.email}
              onChange={changeHandler}
              placeholder="Enter email"
            />
          </Form.Group>
          <Form.Group className="mb-3 mt-3" controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              name="username"
              value={user.username}
              onChange={changeHandler}
              placeholder="Enter username"
            />
          </Form.Group>
          <Form.Group className="mb-3 mt-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={user.password}
              onChange={changeHandler}
              placeholder="Enter password"
            />
          </Form.Group>
          <Row className="mb-3">
            <Form.Group
              as={Col}
              className="mb-3 mt-3"
              controlId="formBasicLanguage"
            >
              <Form.Label>Language</Form.Label>
              <Form.Control
                as="select"
                name="language"
                onChange={changeHandler}
                aria-label="Language"
              >
                <option>Select Language</option>
                <option value="French">French</option>
                <option value="Spanish">Spanish</option>
                <option value="Japanese">Japanese</option>
              </Form.Control>
            </Form.Group>
            <Form.Group
              as={Col}
              className="mb-3 mt-3"
              controlId="formBasicCourse"
            >
              <Form.Label>Course</Form.Label>
              <Form.Control
                as="select"
                name="course"
                onChange={changeHandler}
                aria-label="Course"
              >
                <option>Select Course</option>
                <option value="French">French 101</option>
                <option value="Spanish">Spanish 101</option>
                <option value="Japanese">Japanese 101</option>
              </Form.Control>
            </Form.Group>
            <Form.Group
              as={Col}
              className="mb-3 mt-3"
              controlId="formBasicInstructor"
            >
              <Form.Label>Instructor</Form.Label>
              <Form.Control
                as="select"
                name="language"
                onChange={changeHandler}
                aria-label="Language"
              >
                <option>Select Intructor</option>
                <option value="French">French Instructor</option>
                <option value="Spanish">Spanish Instructor</option>
                <option value="Japanese">Japanese Instructor</option>
              </Form.Control>
            </Form.Group>
          </Row>
          <Button type="submit">Submit</Button>
        </Form>
      </Container>
      <Button
        onClick={() => {
          changeScreen("login");
        }}
      >
        Login
      </Button>
    </div>
  );
};

{
  /* <Form>
        <Form.Group
          style={{ display: "flex", flexDirection: "column" }}
          onSubmit={submitUser}

        >
          <input
            type="text"
            name="first_name"
            value={user.first_name}
            onChange={changeHandler}
            placeholder="First name"
          />
          <input
            type="text"
            name="last_name"
            value={user.last_name}
            onChange={changeHandler}
            placeholder="Last name"
          />
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={changeHandler}
            placeholder="Username"
          />
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={changeHandler}
            placeholder="Email"
          />
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={changeHandler}
            placeholder="Password"
          />
          <button type="submit">Submit</button>
        </Form.Group>
      </Form> */
}

export default Register;
