import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import Img from "../asset/image/butterfly.png";
import "../asset/css/nav.css";
import { Link } from "react-router-dom";

const MainNav = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        sticky="top"
        bg="light"
        style={{
          borderBottomLeftRadius: "15px",
          borderBottomRightRadius: "15px",
        }}
      >
        <Navbar.Brand href="/" className="navpaddingleft">
          <img src={Img} alt="img" className="logoTop" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto navpaddingright">
            <Link to="/" style={{ color: "#000" }} className="nav-link">
              Home
            </Link>
            <Link to="/about" style={{ color: "#000" }} className="nav-link">
              About
            </Link>
            <Link to="/venus" style={{ color: "#000" }} className="nav-link">
              Venus
            </Link>
            <Link
              to="/special-pairing"
              style={{ color: "#000" }}
              className="nav-link"
            >
              Special Pairing
            </Link>
            <Link
              to="/contact"
              style={{ color: "#000", paddingRight: "30px" }}
              className="nav-link"
            >
              Contact
            </Link>
            <Link to="/cv-bank" className="nav-link">
              <p id="buttonCV">CV Bank</p>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default MainNav;
