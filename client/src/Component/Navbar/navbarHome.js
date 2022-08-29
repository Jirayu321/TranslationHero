import * as React from "react";
import logo from "../../logo.svg";
import "./Navbar.css"
import { Navbar, Container, Nav } from "react-bootstrap";

import { Link } from "react-router-dom";

const navbarHome = () => {
  const { innerWidth: width } = window;

  // const promotion = (x) => {
  //   if (x === 1) {
  //     window.scrollTo(0, 3500);
  //   } else {
  //     window.scrollTo(0, 1500);
  //   }
  // };

  return (
    <Navbar
      expand="lg"
      style={{ transition: "initial", boxShadow: "none", position: "initial" }}
    >
      <Container fluid style={{ backgroundColor: "transparent",width: '97%' }}>
        <Navbar.Brand href="/">
          <div style={{ left: width * 0.3 }}>
            <img src={logo} alt="Logo" />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <div className="dd" style={{ left: width * 0.3 }}>
            <div className="NavLi">
              <p
                style={{ fontWeight: "bold", fontSize: 24, lineHeight: 28 }}
              >
                Home
              </p>
            </div>
            <div
              className="NavLi"
              // onClick={() => promotion(0)}
              style={{ color: "black" }}
            >
              <p>Services</p>
            </div>
            <div
              className="NavLi"
              // onClick={() => promotion(1)}
              style={{ color: "black" }}
            >
              <p>Blogs</p>
            </div>
            <div
              className="NavLi"
              // onClick={() => promotion(1)}
              style={{ color: "black" }}
            >
              <p>Why us</p>
            </div>
          </div>
          <div className="dd" style={{ left: width * 0.86 }}>
            <button className="buttonLogin">
              <Link
                to="/Login"
                style={{
                  color: "#FFFF",
                  fontSize: 18,
                  lineHeight: 21,
                  textDecorationLine: "none",
                }}
              >
                Login
              </Link>
            </button>
          </div>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default navbarHome;
