import React, { useState, useEffect } from "react";
import axios from "axios";
//import Form from "react-bootstrap/Form";
//import Button from "react-bootstrap/Button";
//import Row from "react-bootstrap/Row";
//import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Consent from "../Consent";
import FormForRegistration from "../FormForRegistration/FormForRegistration";
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
    opt_in: false,
  });
  const [actionTakenOnConsent, setActionTakenOnConsent] = useState(false);

  // const [load, setLoad] = useState(0);

  // // @INCOMPLETE remove this before final version
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:3001/api/users")
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, [load]);

  const acceptHandler = (e) => {
    e.preventDefault();
    setUser({
        ...user,
        opt_in: true,
    });
};

const declineHandler = (e) => {
    e.preventDefault();
    setUser({
        ...user,
        opt_in: false,
    });
};

return (
  <div>
      <Container>
          <div className="registrationForm">
              <div className="Consent">
                  <div className="register-content">
                      {
                          !actionTakenOnConsent ? <Consent setActionTakenOnConsent={setActionTakenOnConsent}/>
                              :
                              <FormForRegistration setUserLogged={setUserLogged} userLogged={userLogged}
                                                   user={user}
                                                   setUser={setUser} changeScreen={changeScreen}/>
                      }
                  </div>
              </div>
          </div>
      </Container>
  </div>
);
};

export default Register;

  // const submitUser = (e) => {
  //   e.preventDefault();
  //   console.log(user);
  //   axios
  //     .post("http://localhost:3001/api/users", user)
  //     .then((res) => {
  //       setUser({
  //         first_name: "",
  //         last_name: "",
  //         username: "",
  //         email: "",
  //         language: "",
  //         course: "",
  //         instructor: "",
  //         password: "",
  //         opt_in: false,
  //       });
  //       console.log(res);
  //       localStorage.setItem("user", JSON.stringify(res.data.user.id));
  //       userLogged === 0 ? setUserLogged(1) : setUserLogged(0);
  //       load === 0 ? setLoad(1) : setLoad(0);
  //       window.location.replace("https://ling.towson.edu/");
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       load === 0 ? setLoad(1) : setLoad(0);
  //     });
  // };

  // const changeHandler = (e) => {
  //   e.preventDefault();
  //   setUser({
  //     ...user,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // const acceptHandler = (e) => {
  //   e.preventDefault();
  //   setUser({
  //     ...user,
  //     opt_in: true,
  //   });
  // };

  // const declineHandler = (e) => {
  //   e.preventDefault();
  //   setUser({
  //     ...user,
  //     opt_in: false,
  //   });
  // };

//   return (
//     <div>
//       <Container>
//         <div className="registrationForm">
//           <Form onSubmit={submitUser}>
//             <div>
//               <Consent accept={acceptHandler} decline={declineHandler} />
//             </div>
//             <div className="registrationForm">
//               <Row className="mb-3">
//                 <Form.Group
//                   as={Col}
//                   className="mb-3 mt-3"
//                   controlId="formBasicFirstName"
//                 >
//                   <Form.Label>First Name</Form.Label>
//                   <Form.Control
//                     type="text"
//                     name="first_name"
//                     value={user.first_name}
//                     onChange={changeHandler}
//                     placeholder="Enter first name"
//                   />
//                 </Form.Group>
//                 <Form.Group
//                   as={Col}
//                   className="mb-3 mt-3"
//                   controlId="formBasicLastName"
//                 >
//                   <Form.Label>Last Name</Form.Label>
//                   <Form.Control
//                     type="text"
//                     name="last_name"
//                     value={user.last_name}
//                     onChange={changeHandler}
//                     placeholder="Enter last name"
//                   />
//                 </Form.Group>
//               </Row>
//               <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
//                 <Form.Label>Email</Form.Label>
//                 <Form.Control
//                   type="email"
//                   name="email"
//                   value={user.email}
//                   onChange={changeHandler}
//                   placeholder="Enter email"
//                 />
//               </Form.Group>
//               <Form.Group className="mb-3 mt-3" controlId="formBasicUsername">
//                 <Form.Label>Username</Form.Label>
//                 <Form.Control
//                   type="text"
//                   name="username"
//                   value={user.username}
//                   onChange={changeHandler}
//                   placeholder="Enter username"
//                 />
//               </Form.Group>
//               <Form.Group className="mb-3 mt-3" controlId="formBasicPassword">
//                 <Form.Label>Password</Form.Label>
//                 <Form.Control
//                   type="password"
//                   name="password"
//                   value={user.password}
//                   onChange={changeHandler}
//                   placeholder="Enter password"
//                 />
//               </Form.Group>
//               <Row className="mb-3">
//                 <Form.Group
//                   as={Col}
//                   className="mb-3 mt-3"
//                   controlId="formBasicLanguage"
//                 >
//                   <Form.Label>Language</Form.Label>
//                   <Form.Control
//                     as="select"
//                     name="language"
//                     onChange={changeHandler}
//                     aria-label="Language"
//                   >
//                     <option>Select Language</option>
//                     <option value="French">French</option>
//                     <option value="Spanish">Spanish</option>
//                     <option value="Japanese">Japanese</option>
//                   </Form.Control>
//                 </Form.Group>
//                 <Form.Group
//                   as={Col}
//                   className="mb-3 mt-3"
//                   controlId="formBasicCourse"
//                 >
//                   <Form.Label>Course</Form.Label>
//                   <Form.Control
//                     as="select"
//                     name="course"
//                     onChange={changeHandler}
//                     aria-label="Course"
//                   >
//                     <option>Select Course</option>
//                     <option value="French 101">French 101</option>
//                     <option value="Spanish 101">Spanish 101</option>
//                     <option value="Japanese 101">Japanese 101</option>
//                   </Form.Control>
//                 </Form.Group>
//                 <Form.Group
//                   as={Col}
//                   className="mb-3 mt-3"
//                   controlId="formBasicInstructor"
//                 >
//                   <Form.Label>Instructor</Form.Label>
//                   <Form.Control
//                     as="select"
//                     name="instructor"
//                     onChange={changeHandler}
//                     aria-label="Instructor"
//                   >
//                     <option>Select Instructor</option>
//                     <option value="French Instructor">French Instructor</option>
//                     <option value="Spanish Instructor">
//                       Spanish Instructor
//                     </option>
//                     <option value="Japanese Instructor">
//                       Japanese Instructor
//                     </option>
//                   </Form.Control>
//                 </Form.Group>
//               </Row>
//               <Button type="submit">Sign Up</Button>
//               <p>
//                 Already Registered?{" "}
//                 <a
//                   onClick={() => {
//                     changeScreen("login");
//                   }}
//                 >
//                   Login
//                 </a>
//               </p>
//               {/* <Button
//               onClick={() => {
//                 changeScreen("login");
//               }}
//             >
//               Login
//             </Button> */}
//             </div>
//           </Form>
//         </div>
//       </Container>
//     </div>
//   );
// };

// export default Register;
