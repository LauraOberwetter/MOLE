
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Consent from "./components/Consent";
import Login from "./components/Login";
//import Register from "./components/Register";
import RegisterLogin from "./pages/RegisterLogin";
import NotFound from "./pages/NotFound";
import Nav from "./components/Nav";
import { Helmet } from "react-helmet";
import JSPsych from "./components/JSPsych";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  const [user, setUser] = useState(null);
  const [userLogged, setUserLogged] = useState(0);

  useEffect(() => {    const unsubscribe = () => {
      let userInfo = localStorage.getItem("user");
      if (userInfo) {
        let userInSession = JSON.parse(userInfo);
        console.log("User in session: ", userInSession);
        setUser(userInSession);
      } else console.log("No user in session");
    };
    return unsubscribe();
  }, [userLogged]);

  return (
    <Router>
      <div>
        <Helmet>
          <style>
            {`
              body {
                background-color: #FAF3F0;
            `}
          </style>
        </Helmet>
        <Nav />
        {!user ? <Redirect to="/" /> : <Redirect to="/dashboard" />}
        <Switch>
          <Route exact path="/" component={Consent} />
          {/* clean this up later...just replaced Dashboard with Consent comp */}
          <Route exact path="/dashboard" component={Consent} />

          {/* update these pages to take in parameters to display based on the selected module or activity */}
          {/* <Route exact path="/" component={Register} /> */}
          <Route exact path="/">
            <RegisterLogin
              userLogged={userLogged}
              setUserLogged={setUserLogged}
            />
          </Route>
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={RegisterLogin}/>
          <Route exact path="/jspsych" component={JSPsych} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
