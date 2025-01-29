import React from "react";
import logo from "../assets/logo.svg";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="navbar navbar-expand-lg header">
      <div className="container-fluid">
        <div className="d-flex align-items-center">
          <img src={logo} alt="DS Studios Logo" className="navbar-logo me-2" />
          <h1
            className="site-title mb-0"
            onClick={() => window.location.reload()}
          >
            DS STUDIOS
          </h1>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <nav>
            <ul className="nav">
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#vision-mission">
                  Vision & Mission
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#clients">
                  Collaboration & Clients
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#connect">
                  Connect
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
