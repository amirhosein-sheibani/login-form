import React from "react";
import { NavLink } from "react-router-dom";
import "./navBar.scss";
import { useNavigate } from "react-router-dom";

export default function NavBar({ username }) {
  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.removeItem("username");
  };
  return (
    <div className="container-nav">
      <div className="navbar-box">
        {username ? (
          <React.Fragment>
            <div className="left">
              <ion-icon name="person-circle-outline"></ion-icon>
              <p>{username}</p>
            </div>
            <div className="right">
              <NavLink
                className="Nav-Link"
                to="/register"
                onClick={handleClick}
              >
                Logout
              </NavLink>
            </div>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <div className="left">
              <NavLink className="Nav-Link" to="/register">
                Register
              </NavLink>
            </div>
            <div className="right">
              <NavLink className="Nav-Link" to="/login">
                Login
              </NavLink>
            </div>
          </React.Fragment>
        )}
      </div>
    </div>
  );
}
