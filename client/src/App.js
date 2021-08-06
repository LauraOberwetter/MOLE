import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Consent from "./components/Consent";
//import Dashboard from "./pages/Dashboard";
// import Login from "./components/Login";
import Register from "./components/Register";
import NotFound from "./pages/NotFound";
import Nav from "./components/Nav";
import { Helmet } from "react-helmet";
import JSPsych from "./components/JSPsych";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div>
        <Helmet>
          <style>{"body { background-color:#FAF3F0; }"}</style>
        </Helmet>
        <Nav />
        <Switch>
          <Route exact path="/" component={Consent} />
          {/* clean this up later...just replaced Dashboard with Consent comp */}
          <Route exact path="/dashboard" component={Consent} />
          {/* update these pages to take in parameters to display based on the selected module or activity */}
          {/* <Route exact path="/login" component={Login} /> */}
          <Route exact path="/register" component={Register} />
          <Route exact path="/jspsych" component={JSPsych} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
