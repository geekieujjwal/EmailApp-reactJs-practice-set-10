import React from "react";
import { NavLink } from "react-router-dom";
import "./Components.css";

const Navbar = () => {
  const getActive = ({ isActive }) =>
    isActive
      ? {
          color: "red",
          fontWeight: "600",
          textDecoration: "none",
          borderRight: "3px solid black",
          paddingRight: "34px",
          height: "50px",
          display: "flex",
          alignItems: "center",
        }
      : {
          textDecoration: "none",
          paddingRight: "35px",
        };

  return (
    <div className="navbar">
      <NavLink to="/" style={getActive}>
        Inbox{" "}
      </NavLink>
      <NavLink to="/spam" style={getActive}>
        Spam
      </NavLink>
      <NavLink to="/trash" style={getActive}>
        Trash
      </NavLink>
    </div>
  );
};

export default Navbar;
