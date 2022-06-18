import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="d-flex flex-row justify-content-between px-4 border-bottom header">
      <div className="d-flex flex-row align-items-center me-auto">
        <h1 className="font-weight-light fs-4 ms-2 mb-0">Logo</h1>
      </div>

      <div className="d-md-flex flex-row align-items-center d-none">
        <Link
          to="/login"
          className="d-flex justify-content-center align-items-center rounded-pill p-3 text-decoration-none bg-black text-white text-center me-3 button-link"
        >
          Log In
        </Link>
        <Link
          to="/login"
          className="d-flex justify-content-center align-items-center rounded-pill p-3 text-decoration-none text-black text-center button-link"
        >
          Sign Up
        </Link>
      </div>
    </header>
  );
};

export default Header;
