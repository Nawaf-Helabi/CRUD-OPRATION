import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  function handelLogout() {
    window.localStorage.removeItem('email')
    location.pathname='/'
    
  }
  return (
    <nav className="d-flex ">
      <div className="d-flex">
        <Link to="/" style={{ padding: "10px" }}>
          Home
        </Link>
        <Link to="/about" style={{ padding: "10px" }}>
          About
        </Link>
      </div>
      <div className="d-flex">
        {window.localStorage.getItem("email") ? (
          <div className="register-nav" onClick={handelLogout}>Log out</div>
        ) : (
          <>
            <Link
              to="./register"
              style={{ textAlign: "center" }}
              className="register-nav">
              Register
            </Link>

            <Link
              to="./login" 
              style={{ textAlign: "center" }}
              className="register-nav">
              login
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
