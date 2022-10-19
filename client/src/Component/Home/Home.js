import * as React from "react";
import "./Home.css";
import Navbars from "../Navbar/navbarHome";
import Footer from "../Footer/Footer";


import { BsArrowRightShort } from "react-icons/bs";

import Online_document from "../../Images/Online_document.png";
import Documents from "../../Images/Documents-amico.png";
import Translator from "../../Images/Translator-bro.png";
import Selecting_team from "../../Images/Selecting_team.png";

import { useNavigate, useLocation } from "react-router-dom";
import { overviewEN, overviewTH, overviewDE } from "../Data/DataLanguage";

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();

  let Doc = location?.state?.languages;

  const goSignup = (x) => {
    navigate("/Signup", { state: { languages: `${x}` } });
  };

  const goCustomer = (x) => {
    navigate("/Home/Services/Customer", { state: { languages: `${x}` } });
  };

  const goTranslator = (x) => {
    navigate("/Home/Services/Translator", { state: { languages: `${x}` } });
  };

  // const pathname = window.location.pathname;
  // console.log("Doc:", typeof Doc);
  // console.log("pathname:", pathname);

  // const [type, settype] = React.useState(null);
  // const [textarea, setTextarea] = React.useState("");
  // const [file, setFile] = React.useState("");

  // const handleChange = (event) => {
  //   setTextarea(event.target.value);
  // };

  // const promotion = (x) => {
  //   window.scrollTo(0, 1500);
  // };

  return (
    <>
      <header className="App-header">
        {Doc === undefined ? (
          <Navbars navigate={navigate} languages="English" />
        ) : Doc === "Thai" ? (
          <Navbars navigate={navigate} languages="Thai" />
        ) : Doc === "German" ? (
          <Navbars navigate={navigate} languages="German" />
        ) : (
          <Navbars navigate={navigate} languages="English" />
        )}
      </header>

      {Doc === undefined ? (
        <>
          <div>
            <div className="boxleft_overviwe">
              <p className="textHeading1_overviwe">{overviewEN[5].label}</p>
              <p className="textDescription1_overviwe">{overviewEN[6].label}</p>
              <div className="boxleftbutton_overviwe">
                <button className="buttonGetStart_overviwe " 
                onClick={()=>goSignup("English")}
                >
                  <p
                    style={{
                      color: "#FFFF",
                      fontSize: 18,
                      lineHeight: 21,
                      textDecorationLine: "none",
                    }}
                  >
                    {overviewEN[7].label}
                  </p>
                </button>
              </div>
            </div>

            <div className="boxBlue_overviwe" />
            <div className="boxYellow_overviwe" />
            <div className="boxImg1_overviwe">
              <img
                src={Online_document}
                alt="Online_document"
                className="img1_overviwe"
              />
            </div>
          </div>

          <div className="box2_overviwe">
            <div
              style={{
                textAlign: "center",
              }}
            >
              <p className="textHeading2_overviwe">{overviewEN[11].label}</p>

              <div className="ContentBox2_1_overviwe">
                <div
                  style={{
                    textAlign: "center",
                  }}
                >
                  <img
                    src={Documents}
                    alt="Documents"
                    className="ContentBox2Img_overviwe"
                  />
                </div>

                <p className="textDescriptionBox2_overviwe ">
                  {overviewEN[12].label}
                </p>
              </div>

              <div className="ContentBox2_2_overviwe ">
                <div
                  style={{
                    textAlign: "center",
                  }}
                >
                  <img
                    src={Translator}
                    alt="Translator"
                    className="ContentBox2Img_overviwe "
                  />
                </div>

                <p className="textDescriptionBox2_overviwe ">
                  {overviewEN[13].label}
                </p>
              </div>

              <div className="ContentBox2_3_overviwe ">
                <div
                  style={{
                    textAlign: "center",
                  }}
                >
                  <img
                    src={Selecting_team}
                    alt="Selecting_team"
                    className="ContentBox2Img_overviwe "
                  />
                </div>

                <p className="textDescriptionBox2_overviwe ">
                  {overviewEN[14].label}
                </p>
              </div>
            </div>
          </div>

          <div className="box3_overviwe">
            <div className="ContentBox3_1_overviwe ">
              <p className="textHeading3_1_overviwe ">{overviewEN[15].label}</p>

              <p className="textDescription2_1_overviwe ">
                {overviewEN[16].label}
              </p>

              <button
                className="textLink1_overviwe "
                onClick={() => goCustomer("English")}
              >
                <p
                  style={{
                    color: "#0865A8",
                    float: "left",
                    textDecorationLine: "underline",
                  }}
                >
                  {overviewEN[17].label}
                </p>
                <BsArrowRightShort />
              </button>
            </div>

            <div className="ContentBox3_2_overviwe ">
              <p className="textHeading3_2_overviwe ">
                {" "}
                {overviewEN[18].label}
              </p>

              <p className="textDescription2_2_overviwe ">
                {overviewEN[19].label}
              </p>

              <button
                className="textLink2_overviwe "
                onClick={() => goTranslator("English")}
              >
                <p
                  style={{
                    color: "#FFC100",
                    float: "left",
                    textDecorationLine: "underline",
                  }}
                >
                  {overviewEN[17].label}
                </p>
                <BsArrowRightShort />
                </button>
            </div>

            <div className="box4_overviwe ">
              <p className="textHeading4_overviwe ">{overviewEN[5].label}</p>

              <p className="textDescription3_overviwe ">
                {overviewEN[6].label}
              </p>

              <div className="boxButtonLink_overviwe ">
                <button
                  className="buttonGetStart_overviwe "
                  style={{ display: "inline-flex", width: 200, marginTop: 20 }}
                  onClick={()=>goSignup("English")}
                >
                  <p
                    style={{
                      color: "#FFFF",
                      fontSize: 18,
                      textDecorationLine: "none",
                    }}
                  >
                    {overviewEN[7].label}
                  </p>
                </button>
              </div>
            </div>

            <div>
              <Footer v="English" />
            </div>
          </div>
        </>
      ) : Doc === "German" ? (
        <>
          <div>
            <div className="boxleft_overviwe">
              <p className="textHeading1_overviwe">{overviewDE[5].label}</p>
              <p className="textDescription1_overviwe">{overviewDE[6].label}</p>
              <div className="boxleftbutton_overviwe">
                <button className="buttonGetStart_overviwe "
                onClick={()=>goSignup("German")}
                >
                  <p
                    style={{
                      color: "#FFFF",
                      fontSize: 18,
                      lineHeight: 21,
                      textDecorationLine: "none",
                    }}
                  >
                    {overviewDE[7].label}
                  </p>
                </button>
              </div>
            </div>

            <div className="boxBlue_overviwe" />
            <div className="boxYellow_overviwe" />
            <div className="boxImg1_overviwe">
              <img
                src={Online_document}
                alt="Online_document"
                className="img1_overviwe"
              />
            </div>
          </div>

          <div className="box2_overviwe">
            <div
              style={{
                textAlign: "center",
              }}
            >
              <p className="textHeading2_overviwe">{overviewDE[11].label}</p>

              <div className="ContentBox2_1_overviwe">
                <div
                  style={{
                    textAlign: "center",
                  }}
                >
                  <img
                    src={Documents}
                    alt="Documents"
                    className="ContentBox2Img_overviwe"
                  />
                </div>

                <p className="textDescriptionBox2_overviwe ">
                  {overviewDE[12].label}
                </p>
              </div>

              <div className="ContentBox2_2_overviwe ">
                <div
                  style={{
                    textAlign: "center",
                  }}
                >
                  <img
                    src={Translator}
                    alt="Translator"
                    className="ContentBox2Img_overviwe "
                  />
                </div>

                <p className="textDescriptionBox2_overviwe ">
                  {overviewDE[13].label}
                </p>
              </div>

              <div className="ContentBox2_3_overviwe ">
                <div
                  style={{
                    textAlign: "center",
                  }}
                >
                  <img
                    src={Selecting_team}
                    alt="Selecting_team"
                    className="ContentBox2Img_overviwe "
                  />
                </div>

                <p className="textDescriptionBox2_overviwe ">
                  {overviewDE[14].label}
                </p>
              </div>
            </div>
          </div>

          <div className="box3_overviwe">
            <div className="ContentBox3_1_overviwe ">
              <p className="textHeading3_1_overviwe ">{overviewDE[15].label}</p>

              <p className="textDescription2_1_overviwe ">
                {overviewDE[16].label}
              </p>

              <button
                className="textLink1_overviwe"
                onClick={() => goCustomer("German")}
              >
                <p
                  style={{
                    color: "#0865A8",
                    float: "left",
                    textDecorationLine: "underline",
                  }}
                >
                  {overviewDE[17].label}
                </p>
                <BsArrowRightShort />
              </button>
            </div>

            <div className="ContentBox3_2_overviwe ">
              <p className="textHeading3_2_overviwe ">
                {" "}
                {overviewDE[18].label}
              </p>

              <p className="textDescription2_2_overviwe ">
                {overviewDE[19].label}
              </p>

              <button
                className="textLink2_overviwe "
                onClick={() => goTranslator("German")}
              >
                <p
                  style={{
                    color: "#FFC100",
                    float: "left",
                    textDecorationLine: "underline",
                  }}
                >
                  {overviewDE[17].label}
                </p>
                <BsArrowRightShort />
              </button>
            </div>

            <div className="box4_overviwe ">
              <p className="textHeading4_overviwe ">{overviewDE[5].label}</p>

              <p className="textDescription3_overviwe ">
                {overviewDE[6].label}
              </p>

              <div className="boxButtonLink_overviwe ">
                <button
                  className="buttonGetStart_overviwe "
                  style={{ display: "inline-flex", width: 200, marginTop: 20 }}
                  onClick={() => goSignup("German")}
                >
                  <p
                    style={{
                      color: "#FFFF",
                      fontSize: 18,
                      textDecorationLine: "none",
                    }}
                  >
                    {overviewDE[7].label}
                  </p>
                </button>
              </div>
            </div>

            <div>
              <Footer v="German" />
            </div>
          </div>
        </>
      ) : Doc === "Thai" ? (
        <>
          <div>
            <div className="boxleft_overviwe">
              <p className="textHeading1_overviwe">{overviewTH[5].label}</p>
              <p className="textDescription1_overviwe">{overviewTH[6].label}</p>
              <div className="boxleftbutton_overviwe">
                <button className="buttonGetStart_overviwe "
                onClick={() => goSignup("Thai")}
                >
                  <p
                    style={{
                      color: "#FFFF",
                      fontSize: 18,
                      lineHeight: 21,
                      textDecorationLine: "none",
                    }}
                  >
                    {overviewTH[7].label}
                  </p>
                </button>
              </div>
            </div>

            <div className="boxBlue_overviwe" />
            <div className="boxYellow_overviwe" />
            <div className="boxImg1_overviwe">
              <img
                src={Online_document}
                alt="Online_document"
                className="img1_overviwe"
              />
            </div>
          </div>

          <div className="box2_overviwe">
            <div
              style={{
                textAlign: "center",
              }}
            >
              <p className="textHeading2_overviwe">{overviewTH[11].label}</p>

              <div className="ContentBox2_1_overviwe">
                <div
                  style={{
                    textAlign: "center",
                  }}
                >
                  <img
                    src={Documents}
                    alt="Documents"
                    className="ContentBox2Img_overviwe"
                  />
                </div>

                <p className="textDescriptionBox2_overviwe ">
                  {overviewTH[12].label}
                </p>
              </div>

              <div className="ContentBox2_2_overviwe ">
                <div
                  style={{
                    textAlign: "center",
                  }}
                >
                  <img
                    src={Translator}
                    alt="Translator"
                    className="ContentBox2Img_overviwe "
                  />
                </div>

                <p className="textDescriptionBox2_overviwe ">
                  {overviewTH[13].label}
                </p>
              </div>

              <div className="ContentBox2_3_overviwe ">
                <div
                  style={{
                    textAlign: "center",
                  }}
                >
                  <img
                    src={Selecting_team}
                    alt="Selecting_team"
                    className="ContentBox2Img_overviwe "
                  />
                </div>

                <p className="textDescriptionBox2_overviwe ">
                  {overviewTH[14].label}
                </p>
              </div>
            </div>
          </div>

          <div className="box3_overviwe">
            <div className="ContentBox3_1_overviwe ">
              <p className="textHeading3_1_overviwe ">{overviewTH[15].label}</p>

              <p className="textDescription2_1_overviwe ">
                {overviewTH[16].label}
              </p>

              <button
                className="textLink1_overviwe"
                onClick={() => goCustomer("Thai")}
              >
                <p
                  style={{
                    color: "#0865A8",
                    float: "left",
                    textDecorationLine: "underline",
                  }}
                >
                  {overviewTH[17].label}
                </p>
                <BsArrowRightShort />
              </button>
            </div>

            <div className="ContentBox3_2_overviwe ">
              <p className="textHeading3_2_overviwe ">
                {" "}
                {overviewTH[18].label}
              </p>

              <p className="textDescription2_2_overviwe ">
                {overviewTH[19].label}
              </p>

              <button
                className="textLink2_overviwe "
                onClick={() => goTranslator("Thai")}
              >
                <p
                  style={{
                    color: "#FFC100",
                    float: "left",
                    textDecorationLine: "underline",
                  }}
                >
                  {overviewTH[17].label}
                </p>
                <BsArrowRightShort />
              </button>
            </div>

            <div className="box4_overviwe ">
              <p className="textHeading4_overviwe ">{overviewTH[5].label}</p>

              <p className="textDescription3_overviwe ">
                {overviewTH[6].label}
              </p>

              <div className="boxButtonLink_overviwe ">
                <button
                  className="buttonGetStart_overviwe "
                  style={{ display: "inline-flex", width: 200, marginTop: 20 }}
                  onClick={() => goSignup("Thai")}
                >
                  <p
                    style={{
                      color: "#FFFF",
                      fontSize: 18,
                      textDecorationLine: "none",
                    }}
                  >
                    {overviewTH[7].label}
                  </p>
                </button>
              </div>
            </div>

            <div>
              <Footer v="Thai" />
            </div>
          </div>
        </>
      ) : (
        <>
          <div>
            <div className="boxleft_overviwe">
              <p className="textHeading1_overviwe">{overviewEN[5].label}</p>
              <p className="textDescription1_overviwe">{overviewEN[6].label}</p>
              <div className="boxleftbutton_overviwe">
                <button className="buttonGetStart_overviwe "
                onClick={() => goSignup("English")}
                >
                  <p
                    style={{
                      color: "#FFFF",
                      fontSize: 18,
                      lineHeight: 21,
                      textDecorationLine: "none",
                    }}
                  >
                    {overviewEN[7].label}
                  </p>
                </button>
              </div>
            </div>

            <div className="boxBlue_overviwe" />
            <div className="boxYellow_overviwe" />
            <div className="boxImg1_overviwe">
              <img
                src={Online_document}
                alt="Online_document"
                className="img1_overviwe"
              />
            </div>
          </div>

          <div className="box2_overviwe">
            <div
              style={{
                textAlign: "center",
              }}
            >
              <p className="textHeading2_overviwe">{overviewEN[11].label}</p>

              <div className="ContentBox2_1_overviwe">
                <div
                  style={{
                    textAlign: "center",
                  }}
                >
                  <img
                    src={Documents}
                    alt="Documents"
                    className="ContentBox2Img_overviwe"
                  />
                </div>

                <p className="textDescriptionBox2_overviwe ">
                  {overviewEN[12].label}
                </p>
              </div>

              <div className="ContentBox2_2_overviwe ">
                <div
                  style={{
                    textAlign: "center",
                  }}
                >
                  <img
                    src={Translator}
                    alt="Translator"
                    className="ContentBox2Img_overviwe "
                  />
                </div>

                <p className="textDescriptionBox2_overviwe ">
                  {overviewEN[13].label}
                </p>
              </div>

              <div className="ContentBox2_3_overviwe ">
                <div
                  style={{
                    textAlign: "center",
                  }}
                >
                  <img
                    src={Selecting_team}
                    alt="Selecting_team"
                    className="ContentBox2Img_overviwe "
                  />
                </div>

                <p className="textDescriptionBox2_overviwe ">
                  {overviewEN[14].label}
                </p>
              </div>
            </div>
          </div>

          <div className="box3_overviwe">
            <div className="ContentBox3_1_overviwe ">
              <p className="textHeading3_1_overviwe ">{overviewEN[15].label}</p>

              <p className="textDescription2_1_overviwe ">
                {overviewEN[16].label}
              </p>

              <button
                className="textLink1_overviwe"
                onClick={() => goCustomer("English")}
              >
                <p
                  style={{
                    color: "#0865A8",
                    float: "left",
                    textDecorationLine: "underline",
                  }}
                >
                  {overviewEN[17].label}
                </p>
                <BsArrowRightShort />
              </button>
            </div>

            <div className="ContentBox3_2_overviwe ">
              <p className="textHeading3_2_overviwe ">
                {" "}
                {overviewEN[18].label}
              </p>

              <p className="textDescription2_2_overviwe ">
                {overviewEN[19].label}
              </p>

              <button
                className="textLink2_overviwe "
                onClick={() => goTranslator("English")}
              >
                <p
                  style={{
                    color: "#FFC100",
                    float: "left",
                    textDecorationLine: "underline",
                  }}
                >
                  {overviewEN[17].label}
                </p>
                <BsArrowRightShort />
              </button>
            </div>

            <div className="box4_overviwe ">
              <p className="textHeading4_overviwe ">{overviewEN[5].label}</p>

              <p className="textDescription3_overviwe ">
                {overviewEN[6].label}
              </p>

              <div className="boxButtonLink_overviwe ">
                <button
                  className="buttonGetStart_overviwe "
                  style={{ display: "inline-flex", width: 200, marginTop: 20 }}
                  onClick={()=>goSignup("English")}
                
                >
                  <p
                    style={{
                      color: "#FFFF",
                      fontSize: 18,
                      textDecorationLine: "none",
                    }}
                  >
                    {overviewEN[7].label}
                  </p>
                </button>
              </div>
            </div>

            <div>
              <Footer v="English" />
            </div>
          </div>
        </>
      )}
    </>
  );
};
export default Home;
