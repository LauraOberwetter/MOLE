import React from "react";
import "./style.css";
import { NavLink, useHistory } from "react-router-dom";
import { Nav, Bars, NavMenu } from "./navElements";
import logo from "./logo.svg";
// import { LocalDiningOutlined } from "@material-ui/icons";

// const history=useHistory();
// Function logOut() {
//   localStorage.clear();
//   history.push('/register')
// }

class Navbar extends React.Component {
  render() {
    //const [click, setClick] = useState(false); //currently hamburger, once true, change to menu
    //const handleClick = () => setClick(!click); //allows to toggle between hamburger and menu

    return (
      <Nav className="border-bottom">
        <NavLink to="/" className="logo">
          <img src={logo} alt="HVPT Logo" />
        </NavLink>
        {/* <div className="hamburger" onClick={this.handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'}/> */}
        <Bars />
        {/* </div> */}
        {/* div for wrapping links */}
        <NavMenu className="nav">

          {/* <NavLink className="navLink" to="/">
            Dashboard{" "}
          </NavLink> */}
          {/* <NavLink className="navLink" onClick={logOut}>
            Logout{" "}
          </NavLink> */}

          <NavLink className="navLink" to="/login">
            Already Registered? Sign In Here!{" "}
          </NavLink>

        </NavMenu>
      </Nav>
    );
  }
}

export default Navbar;
