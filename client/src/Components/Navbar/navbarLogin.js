import * as React from "react";
import logo from "../../logo.svg";
import { Navbar, Container } from "react-bootstrap";
import styles from "./Navbar.module.css";

const navbarLogin = (props) => {
  const you = props?.languages;
  const navigate = props?.navigate;

  // const pathname = window.location.pathname;

  const goHome = (x) => {
    navigate("/", { state: { languages: `${x}`, accept: true } });
  };
  return (
    <Navbar
      expand="lg"
      style={{ transition: "initial", boxShadow: "none", position: "initial" }}
    >
      <Container fluid style={{ backgroundColor: "transparent" }}>
        <Navbar.Brand href="/" onClick={() => goHome(you)}>
          <img src={logo} alt="Logo" style={{ marginLeft: "3rem" }} />
        </Navbar.Brand>
        <Navbar.Collapse>
          <button className={styles.button} onClick={() => goHome(you)}>
            <p className={styles.text}>Home</p>
          </button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default navbarLogin;
