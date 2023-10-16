import * as React from "react";
import logo from "../../logo.svg";
import {
  Navbar,
  Container,
  // Nav,
  NavDropdown,
  Offcanvas,
} from "react-bootstrap";

import { OverviewEN, OverviewTH, OverviewDE } from "../Data/DataLanguage2";

// import { Link } from "react-router-dom";
import { AiFillCaretDown } from "react-icons/ai";
// import { GrLanguage } from "react-icons/gr";
import manu from "../../Images/menu01.svg";
import styles from "./Navbar.module.css";
import "./Navbar.css";

const navbarHome = (props) => {
  // const { innerWidth: width } = window;
  const you = props?.languages;
  const pathname = window.location.pathname;
  const navigate = props?.navigate;

  const promotion = (x) => {
    if (x === 1) {
      window.scrollTo(0, 0);
    } else {
      navigate("/About_us", { state: { languages: `${you}`, accept: true } });
    }
  };

  const gologin = (x) => {
    navigate("/Login", { state: { languages: `${x}`, accept: true } });
  };

  const goHome = (x) => {
    navigate("/", { state: { languages: `${x}`, accept: true } });
  };

  // console.log("you:", you);
  return (
    <Navbar
      expand="lg"
      style={{ transition: "initial", boxShadow: "none", position: "initial" }}
    >
      <Container fluid style={{ backgroundColor: "transparent" }}>
        <Navbar.Brand href="/" onClick={() => goHome(you)}>
          <div style={{ left: "40%", position: "relative" }}>
            <img src={logo} alt="Logo" />
          </div>
        </Navbar.Brand>

        <Navbar.Toggle>
          <img src={manu} alt="toggle icon" />
        </Navbar.Toggle>
        {/* <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} /> */}

        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-md`}
          aria-labelledby={`offcanvasNavbarLabel-expand-md`}
          placement="end"
        >
          <Offcanvas.Header closeButton></Offcanvas.Header>
          <Offcanvas.Body>
            {you === undefined ? (
              <>
                <div className={styles.dd}>
                  {pathname === "/" || pathname === "/Home/Order/Customer" ? (
                    <div
                      className={styles.NavLi}
                      onClick={() =>
                        navigate("/", {
                          state: { languages: `${you}`, accept: true },
                        })
                      }
                    >
                      <p className={styles.textNavA}>
                        {OverviewEN.at(0).label}
                        {/* home */}
                      </p>
                    </div>
                  ) : (
                    <div
                      className={styles.NavLi}
                      onClick={() =>
                        navigate("/", {
                          state: { languages: `${you}`, accept: true },
                        })
                      }
                    >
                      <p className={styles.textNavO}>
                        {OverviewEN.at(0).label}
                        {/* home */}
                      </p>
                    </div>
                  )}

                  {pathname === "/About_us" ? (
                    <div
                      className={styles.NavLi}
                      style={{ color: "black" }}
                      onClick={() => promotion(2)}
                    >
                      <p className={styles.textNavA}>
                        {OverviewEN.at(1).label}
                      </p>
                    </div>
                  ) : (
                    <div
                      className={styles.NavLi}
                      style={{ color: "black" }}
                      onClick={() => promotion(2)}
                    >
                      <p className={styles.textNavO}>
                        {" "}
                        {OverviewEN.at(1).label}
                      </p>
                    </div>
                  )}
                  {pathname === "/Services_general" ||
                  pathname === "/Services_official" ? (
                    <NavDropdown
                      className={styles.NavLi}
                      style={{
                        marginLeft: 10,
                        color: "#808080",
                        fontSize: 20,
                        float: "left",
                        padding: 0,
                      }}
                      title={
                        <div className={styles.icon_accounts}>
                          <p className={styles.textNavA}>
                            {OverviewEN.at(2).label}
                          </p>
                          <AiFillCaretDown
                            className={styles.AiFillCaretDown1}
                          />
                        </div>
                      }
                    >
                      <NavDropdown.Item
                        onClick={() =>
                          navigate("/Services_general", {
                            state: { languages: `${you}`, accept: true },
                          })
                        }
                      >
                        {OverviewEN.at(5).label}
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        onClick={() =>
                          navigate("/Services_official", {
                            state: { languages: `${you}`, accept: true },
                          })
                        }
                      >
                        {OverviewEN.at(6).label}
                      </NavDropdown.Item>
                    </NavDropdown>
                  ) : (
                    <NavDropdown
                      className={styles.NavLi}
                      style={{
                        color: "#808080",
                        fontSize: 20,
                        float: "left",
                        padding: 0,
                      }}
                      title={
                        <div className={styles.icon_accounts}>
                          <p className={styles.textNavO}>
                            {" "}
                            {OverviewEN.at(2).label}
                          </p>
                          <AiFillCaretDown
                            className={styles.AiFillCaretDown2}
                          />
                        </div>
                      }
                    >
                      <NavDropdown.Item
                        onClick={() =>
                          navigate("/Services_general", {
                            state: { languages: `${you}`, accept: true },
                          })
                        }
                      >
                        {OverviewEN.at(5).label}
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        onClick={() =>
                          navigate("/Services_official", {
                            state: { languages: `${you}`, accept: true },
                          })
                        }
                      >
                        {OverviewEN.at(6).label}
                      </NavDropdown.Item>
                    </NavDropdown>
                  )}

                  {pathname === "/Price" ? (
                    <div
                      className={styles.NavLi}
                      onClick={() =>
                        navigate("/Price", {
                          state: { languages: `${you}`, accept: true },
                        })
                      }
                    >
                      <p className={styles.textNavA}>
                        {" "}
                        {OverviewEN.at(3).label}
                      </p>
                    </div>
                  ) : (
                    <div
                      className={styles.NavLi}
                      onClick={() =>
                        navigate("/Price", {
                          state: { languages: `${you}`, accept: true },
                        })
                      }
                    >
                      <p className={styles.textNavO}>
                        {" "}
                        {OverviewEN.at(3).label}
                      </p>
                    </div>
                  )}

                  {/* {pathname === "/FAQs" ? (
                  <div
                    className={styles.NavLi}
                    style={{ color: "black" }}
                    onClick={() => navigate("/FAQs" {
                      state: { languages: `${you}`, accept: true },
                    })}
                  >
                    <p className={styles.textNavA}>FAQs</p>
                  </div>
                ) : (
                  <div
                    className={styles.NavLi}
                    style={{ color: "black" }}
                    onClick={() => navigate("/FAQs")}
                  >
                    <p className={styles.textNavO}>FAQs</p>
                  </div>
                )} */}
                  <div className={styles.dd2}>
                    <button
                      className={styles.buttonLogin}
                      onClick={() => gologin("English")}
                    >
                      <p className={styles.textP}> {OverviewEN.at(4).label}</p>
                    </button>
                  </div>
                </div>
              </>
            ) : you === "Thai" ? (
              <>
                <div className={styles.dd}>
                  {pathname === "/" || pathname === "/Home/Order/Customer" ? (
                    <div
                      className={styles.NavLi}
                      onClick={() =>
                        navigate("/", {
                          state: { languages: `${you}`, accept: true },
                        })
                      }
                    >
                      <p className={styles.textNavA}>
                        {OverviewTH.at(0).label}
                        {/* home */}
                      </p>
                    </div>
                  ) : (
                    <div
                      className={styles.NavLi}
                      onClick={() =>
                        navigate("/", {
                          state: { languages: `${you}`, accept: true },
                        })
                      }
                    >
                      <p className={styles.textNavO}>
                        {OverviewTH.at(0).label}
                        {/* home */}
                      </p>
                    </div>
                  )}

                  {pathname === "/About_us" ? (
                    <div
                      className={styles.NavLi}
                      style={{ color: "black" }}
                      onClick={() => promotion(2)}
                    >
                      <p className={styles.textNavA}>
                        {OverviewTH.at(1).label}
                      </p>
                    </div>
                  ) : (
                    <div
                      className={styles.NavLi}
                      style={{ color: "black" }}
                      onClick={() => promotion(2)}
                    >
                      <p className={styles.textNavO}>
                        {" "}
                        {OverviewTH.at(1).label}
                      </p>
                    </div>
                  )}
                  {pathname === "/Services_general" ||
                  pathname === "/Services_official" ? (
                    <NavDropdown
                      className={styles.NavLi}
                      style={{
                        marginLeft: 10,
                        color: "#808080",
                        fontSize: 20,
                        float: "left",
                        padding: 0,
                      }}
                      title={
                        <div className={styles.icon_accounts}>
                          <p className={styles.textNavA}>
                            {OverviewTH.at(2).label}
                          </p>
                          <AiFillCaretDown
                            className={styles.AiFillCaretDown1}
                          />
                        </div>
                      }
                    >
                      <NavDropdown.Item
                        onClick={() =>
                          navigate("/Services_general", {
                            state: { languages: `${you}`, accept: true },
                          })
                        }
                      >
                        {OverviewTH.at(5).label}
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        onClick={() =>
                          navigate("/Services_official", {
                            state: { languages: `${you}`, accept: true },
                          })
                        }
                      >
                        {OverviewTH.at(6).label}
                      </NavDropdown.Item>
                    </NavDropdown>
                  ) : (
                    <NavDropdown
                      className={styles.NavLi}
                      style={{
                        color: "#808080",
                        fontSize: 20,
                        float: "left",
                        padding: 0,
                      }}
                      title={
                        <div className={styles.icon_accounts}>
                          <p className={styles.textNavO}>
                            {" "}
                            {OverviewTH.at(2).label}
                          </p>
                          <AiFillCaretDown
                            className={styles.AiFillCaretDown2}
                          />
                        </div>
                      }
                    >
                      <NavDropdown.Item
                        onClick={() =>
                          navigate("/Services_general", {
                            state: { languages: `${you}`, accept: true },
                          })
                        }
                      >
                        {OverviewTH.at(5).label}
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        onClick={() =>
                          navigate("/Services_official", {
                            state: { languages: `${you}`, accept: true },
                          })
                        }
                      >
                        {OverviewTH.at(6).label}
                      </NavDropdown.Item>
                    </NavDropdown>
                  )}

                  {pathname === "/Price" ? (
                    <div
                      className={styles.NavLi}
                      onClick={() =>
                        navigate("/Price", {
                          state: { languages: `${you}`, accept: true },
                        })
                      }
                    >
                      <p className={styles.textNavA}>
                        {" "}
                        {OverviewTH.at(3).label}
                      </p>
                    </div>
                  ) : (
                    <div
                      className={styles.NavLi}
                      onClick={() =>
                        navigate("/Price", {
                          state: { languages: `${you}`, accept: true },
                        })
                      }
                    >
                      <p className={styles.textNavO}>
                        {" "}
                        {OverviewTH.at(3).label}
                      </p>
                    </div>
                  )}

                  {/* {pathname === "/FAQs" ? (
                  <div
                    className={styles.NavLi}
                    style={{ color: "black" }}
                    onClick={() => navigate("/FAQs" {
                      state: { languages: `${you}`, accept: true },
                    })}
                  >
                    <p className={styles.textNavA}>FAQs</p>
                  </div>
                ) : (
                  <div
                    className={styles.NavLi}
                    style={{ color: "black" }}
                    onClick={() => navigate("/FAQs")}
                  >
                    <p className={styles.textNavO}>FAQs</p>
                  </div>
                )} */}
                  <div className={styles.dd2}>
                    <button
                      className={styles.buttonLogin}
                      onClick={() => gologin("Thai")}
                    >
                      <p className={styles.textP}> {OverviewTH.at(4).label}</p>
                    </button>
                  </div>
                </div>
              </>
            ) : you === "German" ? (
              <>
                <div className={styles.dd}>
                  {pathname === "/" || pathname === "/Home/Order/Customer" ? (
                    <div
                      className={styles.NavLi}
                      onClick={() =>
                        navigate("/", {
                          state: { languages: `${you}`, accept: true },
                        })
                      }
                    >
                      <p className={styles.textNavA}>
                        {OverviewDE.at(0).label}
                        {/* home */}
                      </p>
                    </div>
                  ) : (
                    <div
                      className={styles.NavLi}
                      onClick={() =>
                        navigate("/", {
                          state: { languages: `${you}`, accept: true },
                        })
                      }
                    >
                      <p className={styles.textNavO}>
                        {OverviewDE.at(0).label}
                        {/* home */}
                      </p>
                    </div>
                  )}

                  {pathname === "/About_us" ? (
                    <div
                      className={styles.NavLi}
                      style={{ color: "black" }}
                      onClick={() => promotion(2)}
                    >
                      <p className={styles.textNavA}>
                        {OverviewDE.at(1).label}
                      </p>
                    </div>
                  ) : (
                    <div
                      className={styles.NavLi}
                      style={{ color: "black" }}
                      onClick={() => promotion(2)}
                    >
                      <p className={styles.textNavO}>
                        {" "}
                        {OverviewDE.at(1).label}
                      </p>
                    </div>
                  )}
                  {pathname === "/Services_general" ||
                  pathname === "/Services_official" ? (
                    <NavDropdown
                      className={styles.NavLi}
                      style={{
                        marginLeft: 10,
                        color: "#808080",
                        fontSize: 20,
                        float: "left",
                        padding: 0,
                      }}
                      title={
                        <div className={styles.icon_accounts}>
                          <p className={styles.textNavA}>
                            {OverviewDE.at(2).label}
                          </p>
                          <AiFillCaretDown
                            className={styles.AiFillCaretDown1}
                          />
                        </div>
                      }
                    >
                      <NavDropdown.Item
                        onClick={() =>
                          navigate("/Services_general", {
                            state: { languages: `${you}`, accept: true },
                          })
                        }
                      >
                        {OverviewDE.at(5).label}
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        onClick={() =>
                          navigate("/Services_official", {
                            state: { languages: `${you}`, accept: true },
                          })
                        }
                      >
                        {OverviewDE.at(6).label}
                      </NavDropdown.Item>
                    </NavDropdown>
                  ) : (
                    <NavDropdown
                      className={styles.NavLi}
                      style={{
                        color: "#808080",
                        fontSize: 20,
                        float: "left",
                        padding: 0,
                      }}
                      title={
                        <div className={styles.icon_accounts}>
                          <p className={styles.textNavO}>
                            {" "}
                            {OverviewDE.at(2).label}
                          </p>
                          <AiFillCaretDown
                            className={styles.AiFillCaretDown2}
                          />
                        </div>
                      }
                    >
                      <NavDropdown.Item
                        onClick={() =>
                          navigate("/Services_general", {
                            state: { languages: `${you}`, accept: true },
                          })
                        }
                      >
                        {OverviewDE.at(5).label}
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        onClick={() =>
                          navigate("/Services_official", {
                            state: { languages: `${you}`, accept: true },
                          })
                        }
                      >
                        {OverviewDE.at(6).label}
                      </NavDropdown.Item>
                    </NavDropdown>
                  )}

                  {pathname === "/Price" ? (
                    <div
                      className={styles.NavLi}
                      onClick={() =>
                        navigate("/Price", {
                          state: { languages: `${you}`, accept: true },
                        })
                      }
                    >
                      <p className={styles.textNavA}>
                        {" "}
                        {OverviewDE.at(3).label}
                      </p>
                    </div>
                  ) : (
                    <div
                      className={styles.NavLi}
                      onClick={() =>
                        navigate("/Price", {
                          state: { languages: `${you}`, accept: true },
                        })
                      }
                    >
                      <p className={styles.textNavO}>
                        {" "}
                        {OverviewDE.at(3).label}
                      </p>
                    </div>
                  )}

                  {/* {pathname === "/FAQs" ? (
                  <div
                    className={styles.NavLi}
                    style={{ color: "black" }}
                    onClick={() => navigate("/FAQs" {
                      state: { languages: `${you}`, accept: true },
                    })}
                  >
                    <p className={styles.textNavA}>FAQs</p>
                  </div>
                ) : (
                  <div
                    className={styles.NavLi}
                    style={{ color: "black" }}
                    onClick={() => navigate("/FAQs")}
                  >
                    <p className={styles.textNavO}>FAQs</p>
                  </div>
                )} */}
                  <div className={styles.dd2}>
                    <button
                      className={styles.buttonLogin}
                      onClick={() => gologin("German")}
                    >
                      <p className={styles.textP}> {OverviewDE.at(4).label}</p>
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className={styles.dd}>
                  {pathname === "/" || pathname === "/Home/Order/Customer" ? (
                    <div
                      className={styles.NavLi}
                      onClick={() =>
                        navigate("/", {
                          state: { languages: `${you}`, accept: true },
                        })
                      }
                    >
                      <p className={styles.textNavA}>
                        {OverviewEN.at(0).label}
                        {/* home */}
                      </p>
                    </div>
                  ) : (
                    <div
                      className={styles.NavLi}
                      onClick={() =>
                        navigate("/", {
                          state: { languages: `${you}`, accept: true },
                        })
                      }
                    >
                      <p className={styles.textNavO}>
                        {OverviewEN.at(0).label}
                        {/* home */}
                      </p>
                    </div>
                  )}

                  {pathname === "/About_us" ? (
                    <div
                      className={styles.NavLi}
                      style={{ color: "black" }}
                      onClick={() => promotion(2)}
                    >
                      <p className={styles.textNavA}>
                        {OverviewEN.at(1).label}
                      </p>
                    </div>
                  ) : (
                    <div
                      className={styles.NavLi}
                      style={{ color: "black" }}
                      onClick={() => promotion(2)}
                    >
                      <p className={styles.textNavO}>
                        {" "}
                        {OverviewEN.at(1).label}
                      </p>
                    </div>
                  )}
                  {pathname === "/Services_general" ||
                  pathname === "/Services_official" ? (
                    <NavDropdown
                      className={styles.NavLi}
                      style={{
                        marginLeft: 10,
                        color: "#808080",
                        fontSize: 20,
                        float: "left",
                        padding: 0,
                      }}
                      title={
                        <div className={styles.icon_accounts}>
                          <p className={styles.textNavA}>
                            {OverviewEN.at(2).label}
                          </p>
                          <AiFillCaretDown
                            className={styles.AiFillCaretDown1}
                          />
                        </div>
                      }
                    >
                      <NavDropdown.Item
                        onClick={() =>
                          navigate("/Services_general", {
                            state: { languages: `${you}`, accept: true },
                          })
                        }
                      >
                        {OverviewEN.at(5).label}
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        onClick={() =>
                          navigate("/Services_official", {
                            state: { languages: `${you}`, accept: true },
                          })
                        }
                      >
                        {OverviewEN.at(6).label}
                      </NavDropdown.Item>
                    </NavDropdown>
                  ) : (
                    <NavDropdown
                      className={styles.NavLi}
                      style={{
                        color: "#808080",
                        fontSize: 20,
                        float: "left",
                        padding: 0,
                      }}
                      title={
                        <div className={styles.icon_accounts}>
                          <p className={styles.textNavO}>
                            {" "}
                            {OverviewEN.at(2).label}
                          </p>
                          <AiFillCaretDown
                            className={styles.AiFillCaretDown2}
                          />
                        </div>
                      }
                    >
                      <NavDropdown.Item
                        onClick={() =>
                          navigate("/Services_general", {
                            state: { languages: `${you}`, accept: true },
                          })
                        }
                      >
                        {OverviewEN.at(5).label}
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        onClick={() =>
                          navigate("/Services_official", {
                            state: { languages: `${you}`, accept: true },
                          })
                        }
                      >
                        {OverviewEN.at(6).label}
                      </NavDropdown.Item>
                    </NavDropdown>
                  )}

                  {pathname === "/Price" ? (
                    <div
                      className={styles.NavLi}
                      onClick={() =>
                        navigate("/Price", {
                          state: { languages: `${you}`, accept: true },
                        })
                      }
                    >
                      <p className={styles.textNavA}>
                        {" "}
                        {OverviewEN.at(3).label}
                      </p>
                    </div>
                  ) : (
                    <div
                      className={styles.NavLi}
                      onClick={() =>
                        navigate("/Price", {
                          state: { languages: `${you}`, accept: true },
                        })
                      }
                    >
                      <p className={styles.textNavO}>
                        {" "}
                        {OverviewEN.at(3).label}
                      </p>
                    </div>
                  )}

                  {/* {pathname === "/FAQs" ? (
                  <div
                    className={styles.NavLi}
                    style={{ color: "black" }}
                    onClick={() => navigate("/FAQs" {
                      state: { languages: `${you}`, accept: true },
                    })}
                  >
                    <p className={styles.textNavA}>FAQs</p>
                  </div>
                ) : (
                  <div
                    className={styles.NavLi}
                    style={{ color: "black" }}
                    onClick={() => navigate("/FAQs")}
                  >
                    <p className={styles.textNavO}>FAQs</p>
                  </div>
                )} */}
                  <div className={styles.dd2}>
                    <button
                      className={styles.buttonLogin}
                      onClick={() => gologin("English")}
                    >
                      <p className={styles.textP}> {OverviewEN.at(4).label}</p>
                    </button>
                    {/* <button className={styles.buttonLanguage}> */}
                      {/* <GrLanguage className={styles.GrLanguage} /> */}
                      {/* <p className={styles.textP}> {OverviewEN.at(4).label}</p> */}
                    {/* </button> */}
                  </div>
                </div>
              </>
            )}
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};
export default navbarHome;
