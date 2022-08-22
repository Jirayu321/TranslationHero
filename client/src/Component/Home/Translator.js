import * as React from "react";

import Navbars from "../Navbar/navbarHome";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

import { FaLanguage, FaUserCheck, FaMedal } from "react-icons/fa";

const Translator = () => {
  const { innerWidth: width, innerHeight: height } = window;

  return (
    <>
      <header className="App-header">
        <Navbars />
      </header>

      <div>
        <div>
          <div
            style={{
              top: 100,
              background: "#97D5FF",
              opacity: 0.3,
              filter: "blur(20px)",
              position: "absolute",
              width: 400,
              height: 400,
              borderRadius: 200,
            }}
          ></div>

          <div
            style={{
              top: 100,
              background: "#FFEDB2",
              opacity: 0.3,
              filter: "blur(20px)",
              position: "absolute",
              width: 400,
              height: 400,
              left: 1000,
              borderRadius: 200,
            }}
          ></div>
        </div>

        <div
          style={{
            textAlign: "center",
            justifyItems: "center",
            width: 1100,
            display: "inline-grid",
            marginTop: 50,
          }}
        >
          <div>
            <text
              style={{
                fontWeight: "bold",
                fontSize: 56,
                color: "#0097FE",
              }}
            >
              Translator
            </text>
          </div>
          <div>
            <text style={{ fontSize: 28, color: "#444444" }}>
              For translators who want to earn extra money or find work related
              to translation Content of documents that need to reduce working
              time translator hero As an alternative, we can help you because we
              have a document translation support system for you.
            </text>
          </div>
          <div
            style={{
              position: "absolute",
              top: 380,
            }}
          >
            <button
              className="box5"
              style={{ width: 220, height: 50, borderRadius: 40 }}
            >
              <Link
                to="/Signup"
                style={{
                  color: "#FFFF",
                  fontSize: 18,
                  lineHeight: 21,
                  textDecorationLine: "none",
                }}
              >
                Get Start
              </Link>
            </button>
          </div>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          top: height * 0.7,
          width: width,
          height: 800,
        }}
      >
        <div>
          <div
            style={{
              textAlign: "center",
              marginBottom: 30,
            }}
          >
            <text
              style={{
                fontWeight: "bold",
                fontSize: 56,
                color: "#0097FE",
              }}
            >
              Pricing Plan
            </text>
          </div>

          <div style={{ display: "inline-flex" }}>
            <div
              style={{
                width: width * 0.25,
                height: width * 0.3,
                background: "#FFFFFF",
                border: "1px solid #E5E5E5",
                boxSizing: "border-box",
                padding: 30,
                textAlign: "center",
                float: "left",
                marginRight: 70,
              }}
            >
              <div style={{ marginBottom: 20 }}>
                <text
                  style={{
                    color: "#333333",
                    fontWeight: 700,
                    fontSize: 24,
                  }}
                >
                  Economy
                </text>
              </div>
              <div
                style={{
                  color: "#606060",
                  fontSize: 18,
                }}
              >
                <FaLanguage size="18px" style={{ marginRight: 10 }} />
                <text>Machine Translation</text>
              </div>
              <div
                style={{
                  color: "#606060",
                  fontSize: 18,
                  marginBottom: 60,
                }}
              >
                <FaUserCheck size="18px" />
                <text> Light Human Review</text>
              </div>
              <div>
                <text style={{ color: "#858585", fontSize: 14 }}>
                  Guaranteed finished date by
                </text>
                <br />
                <text style={{ color: "#333333", fontSize: 18 }}>
                  Tue 15 Mar 09:00 PM
                </text>
              </div>
              <div style={{ marginBottom: 35, marginTop: 35 }}>
                <text
                  style={{
                    color: "#333333",
                    fontWeight: 700,
                    fontSize: 24,
                  }}
                >
                  $56.84
                </text>
              </div>

              <button
                style={{
                  background: "#0097FE",
                  borderRadius: 20,
                  color: "#FFFFFF",
                  borderColor: "transparent",
                  width: width * 0.2,
                }}
              >
                <a
                  href="/Login"
                  style={{ color: "#FFFFFF", textDecoration: "none" }}
                >
                  Order
                </a>
              </button>
            </div>

            <div
              style={{
                width: width * 0.25,
                height: width * 0.3,
                background: "#FFFFFF",
                border: "1px solid #E5E5E5",
                boxSizing: "border-box",
                padding: 30,
                textAlign: "center",
                float: "left",
                marginRight: 70,
              }}
            >
              <div style={{ marginBottom: 20 }}>
                <text
                  style={{
                    color: "#333333",
                    fontWeight: 700,
                    fontSize: 24,
                  }}
                >
                  Professional
                </text>
              </div>
              <div
                style={{
                  color: "#606060",
                  fontSize: 18,
                }}
              >
                <FaLanguage size="18px" style={{ marginRight: 10 }} />
                <text>Machine Translation</text>
              </div>
              <div
                style={{
                  color: "#606060",
                  fontSize: 18,
                }}
              >
                <FaUserCheck size="18px" />
                <text> Light Human Review</text>
              </div>
              <div
                style={{
                  color: "#606060",
                  fontSize: 18,
                  marginBottom: 10,
                  marginTop: 20,
                }}
              >
                <FaMedal size="18px" />
                <text> Quality Control</text>
              </div>
              <div>
                <text style={{ color: "#858585", fontSize: 14 }}>
                  Guaranteed finished date by
                </text>
                <br />
                <text style={{ color: "#333333", fontSize: 18 }}>
                  Tue 15 Mar 09:00 PM
                </text>
              </div>
              <div style={{ marginBottom: 35, marginTop: 35 }}>
                <text
                  style={{
                    color: "#333333",
                    fontWeight: 700,
                    fontSize: 24,
                  }}
                >
                  $156.84
                </text>
              </div>

              <button
                style={{
                  background: "#0097FE",
                  borderRadius: 20,
                  color: "#FFFFFF",
                  borderColor: "transparent",
                  width: width * 0.2,
                }}
              >
                <a
                  href="/Login"
                  style={{ color: "#FFFFFF", textDecoration: "none" }}
                >
                  Order
                </a>
              </button>
            </div>

            <div
              style={{
                width: width * 0.25,
                height: width * 0.3,
                background: "#FFFFFF",
                border: "1px solid #E5E5E5",
                boxSizing: "border-box",
                padding: 30,
                textAlign: "center",
                float: "left",
                marginRight: 0,
              }}
            >
              <div style={{ marginBottom: 20 }}>
                <text
                  style={{
                    color: "#333333",
                    fontWeight: 700,
                    fontSize: 24,
                  }}
                >
                  Premium
                </text>
              </div>
              <div
                style={{
                  color: "#606060",
                  fontSize: 18,
                }}
              >
                <FaLanguage size="18px" style={{ marginRight: 10 }} />
                <text>Machine Translation</text>
              </div>
              <div
                style={{
                  color: "#606060",
                  fontSize: 18,
                }}
              >
                <FaUserCheck size="18px" />
                <text> Light Human Review</text>
              </div>
              <div
                style={{
                  color: "#606060",
                  fontSize: 18,
                  marginBottom: 10,
                  marginTop: 20,
                }}
              >
                <FaMedal size="18px" />
                <text> Quality Control</text>
              </div>
              <div>
                <text style={{ color: "#858585", fontSize: 14 }}>
                  Guaranteed finished date by
                </text>
                <br />
                <text style={{ color: "#333333", fontSize: 18 }}>
                  Tue 15 Mar 09:00 PM
                </text>
              </div>
              <div style={{ marginBottom: 35, marginTop: 35 }}>
                <text
                  style={{
                    color: "#333333",
                    fontWeight: 700,
                    fontSize: 24,
                  }}
                >
                  $146.84
                </text>
              </div>

              <button
                style={{
                  background: "#0097FE",
                  borderRadius: 20,
                  color: "#FFFFFF",
                  borderColor: "transparent",
                  width: width * 0.2,
                }}
              >
                <a
                  href="/Login"
                  style={{ color: "#FFFFFF", textDecoration: "none" }}
                >
                  Order
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div style={{ top: height * 1.2, position: "relative" }}>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};
export default Translator;
