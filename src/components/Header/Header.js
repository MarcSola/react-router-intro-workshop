import React from "react";
import { NavLink } from "react-router-dom";

function Header({ isAuthenticated, login, logout }) {
  return (
    <header className="bg-light">
      <nav className="container navbar-expand">
        <div className="nav nav-pills">
          <NavLink
            className="nav-item nav-link"
            exact
            to="/"
            activeClassName="active"
          >
            Home
          </NavLink>
          <NavLink
            className="nav-item nav-link"
            exact
            to="/profile"
            activeClassName="active"
          >
            Profile
          </NavLink>
          <NavLink
            className="nav-item nav-link"
            exact
            to="/about"
            activeClassName="active"
          >
            About
          </NavLink>
        </div>
        <div className="d-flex ml-auto">
          {isAuthenticated ? (
            <div className="d-flex align-items-center">
              <p className="mb-0 mr-3">Hello!</p>
              <button className="btn btn-primary" onClick={logout}>
                Logout
              </button>
            </div>
          ) : (
            <button className="btn btn-primary" onClick={login}>
              Login
            </button>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
