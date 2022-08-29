import * as React from "react";
import "./Home.css";
import Navbars from "../Navbar/navbarHome";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

import { BsArrowRightShort } from "react-icons/bs";

import Online_document from "../../Images/Online_document.png";
import Documents from "../../Images/Documents-amico.png";
import Translator from "../../Images/Translator-bro.png";
import Selecting_team from "../../Images/Selecting_team.png";

const Home = () => {

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
        <div className="boxleft">
          <p className="textHeading1">Translation Hero</p>
          <p className="textDescription1">
            New options to help you translate
            <br /> the language you want.
          </p>
          <div className="boxleftbutton">
            <button className="buttonGetStart">
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

        <div className="boxBlue"></div>
        <div className="boxYellow"></div>
        <div className="boxImg1">
          <img src={Online_document} alt="Online_document" className="img1" />
        </div>
      </div>

      <div className="box2">
        <div
          style={{
            textAlign: "center",
          }}
        >
          <p className="textHeading2">Why Us?</p>

          <div className="ContentBox2_1">
            <div
              style={{
                textAlign: "center",
              }}
            >
              <img src={Documents} alt="Documents" className="ContentBox2Img" />
            </div>

            <p className="textDescriptionBox2">
              translate many documents Official documents with more than 50
              forms to choose from, or general translations such as articles,
              movies,thesis, letters, etc.
            </p>
          </div>

          <div className="ContentBox2_2">
            <div
              style={{
                textAlign: "center",
              }}
            >
              <img
                src={Translator}
                alt="Translator"
                className="ContentBox2Img"
              />
            </div>

            <p className="textDescriptionBox2">
              Supports translations for more than 15 languages worldwide.
            </p>
          </div>

          <div className="ContentBox2_3">
            <div
              style={{
                textAlign: "center",
              }}
            >
              <img
                src={Selecting_team}
                alt="Selecting_team"
                className="ContentBox2Img"
              />
            </div>

            <p className="textDescriptionBox2">
              We have a team of quality translators both internally and
              externally that guarantee quality, grammatical and safe
              translations.
            </p>
          </div>
        </div>
      </div>

      <div className="box3">
        <div className="ContentBox3_1">
          <p className="textHeading3_1">Customer</p>

          <p className="textDescription2_1">
            For customers who want to translate documents translator hero There
            is a translation system that calculates all costs. Including
            professional translators who guarantee excellent translation
            quality.
          </p>

          <div className="textLink1">
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

        <div className="ContentBox3_2">
          <p className="textHeading3_2">Translator</p>

          <p className="textDescription2_2">
            For translators who want to earn extra money or find work related to
            translation Content of documents that need to reduce working time
            translator hero As an alternative, we can help you because we have a
            document translation support system for you.
          </p>

          <div className="textLink2">
            <Link to="/Home/Services/Translator" style={{ color: "#FFC100" }}>
              see more details
            </Link>
            <BsArrowRightShort />
          </div>
        </div>

        <div className="box4">
          <p className="textHeading4">Translation Hero</p>

          <p className="textDescription3">
            New options to help you translate the language you want.
          </p>

          <div className="boxButtonLink">
            <button
              className="buttonGetStart"
              style={{ display: "inline-flex", width: 200, marginTop: 20 }}
            >
              <Link
                to="/Signup"
                style={{
                  color: "#FFFF",
                  fontSize: 18,
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
