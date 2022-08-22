import * as React from "react";

import Navbars from "../Navbar/navbarHome";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

import { BsArrowRightShort } from "react-icons/bs";

import Online_document from "../../Images/Online_document.png";
import Documents from "../../Images/Documents-amico.png";
import Translator from "../../Images/Translator-bro.png";
import Selecting_team from "../../Images/Selecting_team.png";

const Home = () => {
  const { innerWidth: width, innerHeight: height } = window;
  // const [type, settype] = React.useState(null);
  // const [textarea, setTextarea] = React.useState("");
  // const [file, setFile] = React.useState("");
  // const [promo, setPromo] = React.useState("");

  // const handleChange = (event) => {
  //   setTextarea(event.target.value);
  // };

  // const promotion = (x) => {
  //   setPromo(x);
  //   window.scrollTo(0, 1500);
  // };

  return (
    <>
      <header className="App-header">
        <Navbars />
      </header>

      <div>
        <div
          style={{
            position: "absolute",
            top: 145,
            left: width * 0.03,
            textAlign: "left",
          }}
        >
          <text
            style={{
              fontWeight: "bold",
              fontSize: 60,
              color: "#0097FE",
            }}
          >
            Translation Hero
          </text>
          <br />
          <text style={{ fontSize: 40 }}>
            New options to help you translate
            <br /> the language you want.
          </text>
          <div
            style={{
              left: -15,
              marginTop: 20,
              display: "flex",
              position: "absolute",
            }}
          >
            <button className="box5">
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

        <div
          style={{
            top: 100,
            background: "#97D5FF",
            opacity: 0.8,
            filter: "blur(50px)",
            position: "absolute",
            width: 330,
            height: 330,
            left: 800,
            borderRadius: 100,
          }}
        ></div>
        <div
          style={{
            top: 100,
            background: "#FFEDB2",
            opacity: 0.8,
            filter: "blur(50px)",
            position: "absolute",
            width: 330,
            height: 330,
            left: 1000,
            borderRadius: 100,
          }}
        ></div>
        <div style={{ position: "absolute", top: 120, left: width * 0.6 }}>
          <img
            src={Online_document}
            alt="Online_document"
            style={{ width: 450 }}
          />
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
        <div
          style={{
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontWeight: "bold",
              fontSize: 45,
              color: "#0097FE",
              marginBottom: 70,
            }}
          >
            <text>Why Us?</text>
          </div>

          <div
            style={{
              width: 350,
              height: 500,
              background: " #FFFFFF",
              border: "1px solid #E5E5E5",
              boxShadow: "0px 4px 20px rgb(0 0 0 / 20%)",
              borderRadius: 20,
              position: "absolute",
              left: 50,
            }}
          >
            <div
              style={{
                textAlign: "center",
              }}
            >
              <img
                src={Documents}
                alt="Documents"
                style={{ width: width * 0.18 }}
              />
            </div>

            <div
              style={{
                position: "absolute",
                width: 280,
                height: 231,
                // left: 124,
                // top: 1029,
                fontStyle: "normal",
                fontWeight: 600,
                fontSize: 20,
                display: "flex",
                alignItems: "center",
                textAlign: "center",
                color: " #333333",
                margin: 30,
                top: 185,
              }}
            >
              <text>
                translate many documents Official documents with more than 50
                forms to choose from, or general translations such as articles,
                movies,thesis, letters, etc.
              </text>
            </div>
          </div>

          <div
            style={{
              width: 350,
              height: 500,
              background: " #FFFFFF",
              border: "1px solid #E5E5E5",
              boxShadow: "0px 4px 20px rgb(0 0 0 / 20%)",
              borderRadius: 20,
              position: "absolute",
              left: 520,
            }}
          >
            <div
              style={{
                textAlign: "center",
              }}
            >
              <img
                src={Translator}
                alt="Translator"
                style={{ width: width * 0.18 }}
              />
            </div>

            <div
              style={{
                position: "absolute",
                width: 280,
                height: 231,
                // left: 124,
                // top: 1029,
                fontStyle: "normal",
                fontWeight: 600,
                fontSize: 20,
                display: "flex",
                alignItems: "center",
                textAlign: "center",
                color: " #333333",
                margin: 30,
                top: 185,
              }}
            >
              <text>
                Supports translations for more than 15 languages worldwide.
              </text>
            </div>
          </div>

          <div
            style={{
              width: 350,
              height: 500,
              background: " #FFFFFF",
              border: "1px solid #E5E5E5",
              boxShadow: "0px 4px 20px rgb(0 0 0 / 20%)",
              borderRadius: 20,
              position: "absolute",
              left: 980,
            }}
          >
            <div
              style={{
                textAlign: "center",
              }}
            >
              <img
                src={Selecting_team}
                alt="Selecting_team"
                style={{ width: width * 0.18 }}
              />
            </div>

            <div
              style={{
                position: "absolute",
                width: 280,
                height: 231,
                // left: 124,
                // top: 1029,
                fontStyle: "normal",
                fontWeight: 600,
                fontSize: 20,
                display: "flex",
                alignItems: "center",
                textAlign: "center",
                color: " #333333",
                margin: 30,
                top: 185,
              }}
            >
              <text>
                We have a team of quality translators both internally and
                externally that guarantee quality, grammatical and safe
                translations.
              </text>
            </div>
          </div>
        </div>
      </div>

      <div style={{ top: height * 1.56, position: "relative" }}>
        <div
          style={{
            backgroundColor: "#FEF9E9",
            width: width,
            position: "relative",
            padding: 100,
            textAlign: "left",
          }}
        >
          <div
            style={{
              width: 211,
              height: 56,

              fontWeight: 800,
              fontSize: 48,
              color: "#0097FE",
              margin: 10,
            }}
          >
            <text>Customer</text>
          </div>

          <div
            style={{
              width: 1240,
              height: 66,
              fontWeight: 400,
              fontSize: 28,
              color: "#333333",
              margin: 15,
            }}
          >
            <text>
              For customers who want to translate documents translator hero
              There is a translation system that calculates all costs. Including
              professional translators who guarantee excellent translation
              quality.
            </text>
          </div>

          <div
            style={{
              width: 203,
              height: 28,
              fontWeight: 400,
              fontSize: 24,
              textDecorationLine: "underline",
              color: "#0865A8",
              margin: 20,
            }}
          >
            <Link
              to="/Home/Services/Customer"
              style={{
                color: "#0865A8",
              }}
            >
              see more details
            </Link>
            <BsArrowRightShort />
          </div>
        </div>

        <div
          style={{
            backgroundColor: "#E5F4FF",
            width: width,
            position: "relative",
            padding: 100,
            textAlign: "right",
          }}
        >
          <div
            style={{
              fontWeight: 800,
              fontSize: 48,
              color: "#FFC100",
              margin: 0,
            }}
          >
            <text>Translator</text>
          </div>

          <div
            style={{
              fontWeight: 400,
              fontSize: 28,
              color: "#333333",
              margin: 0,
            }}
          >
            <text>
              For customers who want to translate documents translator hero
              There is a translation system that calculates all costs. Including
              professional translators who guarantee excellent translation
              quality.
            </text>
          </div>

          <div
            style={{
              fontWeight: 400,
              fontSize: 24,
              textDecorationLine: "underline",
              color: "#FFC100",
              margin: 10,
              marginRight: 0,
            }}
          >
            <Link to="/Home/Services/Translator" style={{ color: "#FFC100" }}>
              see more details
            </Link>
            <BsArrowRightShort />
          </div>
        </div>

        <div
          style={{
            backgroundColor: "#FFFFF",
            width: width,
            position: "relative",
            padding: 120,
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontWeight: 800,
              fontSize: 48,
              color: "#0097FE",
              margin: 0,
            }}
          >
            <text>Translation Hero</text>
          </div>

          <div
            style={{
              fontWeight: 400,
              fontSize: 28,
              color: "#444444",
              margin: 0,
              width: 400,
              display: "inline-block",
            }}
          >
            <text>
              New options to help you translate the language you want.
            </text>
          </div>

          <div
            style={{
              fontWeight: 400,
              fontSize: 24,
              color: "#FFC100",
              margin: 10,
              marginRight: 0,
            }}
          >
            <button
              className="box5"
              style={{ display: "inline-flex", width: 200, marginTop: 20 }}
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

        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};
export default Home;
