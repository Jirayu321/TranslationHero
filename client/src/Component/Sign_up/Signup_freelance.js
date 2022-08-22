import React, { useState } from "react";

import { MdCameraAlt } from "react-icons/md";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaUserAlt,
  FaAddressCard,
} from "react-icons/fa";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FiEyeOff, FiEye, FiImage } from "react-icons/fi";
import { IconButton, Input, Avatar } from "@mui/material";

import Navbars from "../Navbar/navbarSignup";

import Login1 from "../../Images/Sign _up2.png";
import App_store from "../../Images/App_store.png";
import Google_play from "../../Images/Google_play.png";
import logo from "../../logo.svg";


import PropTypes from "prop-types";
import MultiSelectUnstyled from "@mui/base/MultiSelectUnstyled";
import { selectUnstyledClasses } from "@mui/base/SelectUnstyled";
import OptionUnstyled, {
  optionUnstyledClasses,
} from "@mui/base/OptionUnstyled";
import PopperUnstyled from "@mui/base/PopperUnstyled";
import { styled } from "@mui/system";
import { datatest, data5 } from "../Data/data";

import Question from "../Data/Question";



const Signup_freelance = () => {
  const { innerWidth: width, innerHeight: height } = window;
  const [file, setFile] = useState("");
  const [bank, setBank] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [mobilephone, setMobilephone] = useState("");
  const [screen, setScreen] = useState(1);
  const [type, setType] = useState("password");
  const [values, setValues] = useState(false);
  const [values2, setValues2] = useState(false);

  const [languages, setLanguages] = useState([]);
  const [answer, setAnswer] = useState([]);
  const [documents, setDocuments] = useState([]);
  

  const handleClickShowPassword = (i) => {
    if (i === 1) {
      if (type === "password") {
        setValues(!values);
        setType("text");
      } else if (type === "text") {
        setValues(!values);
        setType("password");
      }
    } else if (i === 2) {
      if (type === "password") {
        setValues2(!values2);
        setType("text");
      } else if (type === "text") {
        setValues2(!values2);
        setType("password");
      }
    }
  };

  const Settest = (i, j) => {
    if (i === 1) {
      setLanguages(j);
    } else if (i === 2) {
      setAnswer(j);
    } else if (i === "company") {
      setDocuments(j);
    }
  };

  const Selects = (props) => {
    const type = props?.x;
    
    const blue = {
      100: "#DAECFF",
      200: "#99CCF3",
      400: "#3399FF",
      500: "#007FFF",
      600: "#0072E5",
      900: "#003A75",
    };
  
    const grey = {
      100: "#E7EBF0",
      200: "#E0E3E7",
      300: "#CDD2D7",
      400: "#B2BAC2",
      500: "#A0AAB4",
      600: "#6F7E8C",
      700: "#3E5060",
      800: "#2D3843",
      900: "#1A2027",
    };
  
    const StyledButton = styled("button")(
      ({ theme }) => `
             font-family: IBM Plex Sans, sans-serif;
             font-size: 0.875rem;
             box-sizing: border-box;
             min-height: calc(1.5em + 22px);
             min-width: 650px;
             background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
             border: 1px solid ${
               theme.palette.mode === "dark" ? grey[800] : grey[300]
             };
             border-radius: 10em;
             margin: 0.5em;
             padding: 10px;
             text-align: left;
             line-height: 1.5;
             margin-top: 12px;
             margin-left: 0px;
             margin-bttom:12px;
             
             color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
           
             &:hover {
               background: ${theme.palette.mode === "dark" ? "" : grey[100]};
               border-color: ${
                 theme.palette.mode === "dark" ? grey[700] : grey[400]
               };
             }
           
             &.${selectUnstyledClasses.focusVisible} {
               outline: 3px solid ${
                 theme.palette.mode === "dark" ? blue[600] : blue[100]
               };
             }
           
             &.${selectUnstyledClasses.expanded} {
               &::after {
                 content: '▴';
               }
             }
           
             &::after {
               content: '▾';
               float: right;
             }
             `
    );
  
    const StyledListbox = styled("ul")(
      ({ theme }) => `
             font-family: IBM Plex Sans, sans-serif;
             font-size: 0.875rem;
             box-sizing: border-box;
             padding: 5px;
             margin: 10px 0;
             min-width: 650px;
             height:150px;
             background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
             border: 1px solid ${
               theme.palette.mode === "dark" ? grey[800] : grey[300]
             };
             border-radius: 0.75em;
             color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
             overflow: auto;
             outline: 0px;
             `
    );
  
    const StyledOption = styled(OptionUnstyled)(
      ({ theme }) => `
             list-style: none;
             padding: 8px;
             border-radius: 0.45em;
             cursor: default;
           
             &:last-of-type {
               border-bottom: none;
             }
           
             &.${optionUnstyledClasses.selected} {
               background-color: ${
                 theme.palette.mode === "dark" ? blue[900] : blue[100]
               };
               color: ${theme.palette.mode === "dark" ? blue[100] : blue[900]};
             }
           
             &.${optionUnstyledClasses.highlighted} {
               background-color: ${
                 theme.palette.mode === "dark" ? grey[800] : grey[100]
               };
               color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
             }
           
             &.${optionUnstyledClasses.highlighted}.${
        optionUnstyledClasses.selected
      } {
               background-color: ${
                 theme.palette.mode === "dark" ? blue[900] : blue[100]
               };
               color: ${theme.palette.mode === "dark" ? blue[100] : blue[900]};
             }
           
             &.${optionUnstyledClasses.disabled} {
               color: ${theme.palette.mode === "dark" ? grey[700] : grey[400]};
             }
           
             &:hover:not(.${optionUnstyledClasses.disabled}) {
               background-color: ${
                 theme.palette.mode === "dark" ? grey[800] : grey[100]
               };
               color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
             }
             `
    );
  
    const StyledPopper = styled(PopperUnstyled)`
      z-index: 1;
    `;
  
    const CustomMultiSelect = React.forwardRef(function CustomMultiSelect(
      props,
      ref
    ) {
      const components = {
        Root: StyledButton,
        Listbox: StyledListbox,
        Popper: StyledPopper,
        ...props.components,
      };
  
      return <MultiSelectUnstyled {...props} ref={ref} components={components} />;
    });
  
    CustomMultiSelect.propTypes = {
      components: PropTypes.shape({
        Listbox: PropTypes.elementType,
        Popper: PropTypes.func,
        Root: PropTypes.elementType,
      }),
    };
  
    return (
      <>
        {type === "company" ? (
          <CustomMultiSelect
            onChange={(event) => Settest(type, event)}
            value={documents}
            defaultValue={documents}
          >
            {data5.map((x) => (
              <StyledOption value={x?.label}>{x?.label}</StyledOption>
            ))}
          </CustomMultiSelect>
        ) : type === 1 ? (
          <CustomMultiSelect
            onChange={(event) => Settest(type, event)}
            value={languages}
            defaultValue={languages}
          >
            {datatest.map((x) => (
              <StyledOption value={x?.label}>{x?.label}</StyledOption>
            ))}
          </CustomMultiSelect>
        ) : type === 2 ? (
          <CustomMultiSelect
            onChange={(event) => Settest(type, event)}
            value={answer}
            defaultValue={answer}
          >
            {datatest.map((x) => (
              <StyledOption value={x?.label}>{x?.label}</StyledOption>
            ))}
          </CustomMultiSelect>
        ) : null}
      </>
    );
  };

  console.log("languages", languages);
  console.log("documents", documents);
  console.log("answer", answer);

  return (
    <>
      <header className="App-header">
        <Navbars />
      </header>
      <div>
        <div className="GGlogin" style={{ left: width * 0.1, top: 100 }}></div>
        <div style={{ position: "absolute", top: 95 }}>
          <img src={Login1} alt="Login" style={{ width: 600, height: 600 }} />
        </div>
        <div
          className="GGlogin2"
          style={{ left: width * 0.49, top: 100 }}
        ></div>
        <div style={{ position: "absolute", top: 90, left: width * 0.5 }}>
          <h5>Sign up</h5>

          {screen === "" ? (
            <div>
              <div>
                <button
                  style={{
                    background: "transparent",
                    borderColor: "transparent",
                    color: "#0865A8",
                    borderBottomColor: "#047ACF",
                    marginBottom: 40,
                    marginRight: 150,
                    borderRadius: 3,
                    padding: 10,
                    width: 200,
                  }}
                  onClick={() => setScreen("")}
                >
                  <FaUserAlt style={{ margin: 0, marginRight: 5 }} />
                  <text>For Customers</text>
                </button>
                <button
                  style={{
                    background: "transparent",
                    borderColor: "transparent",
                    borderBottomColor: "transparent",
                    color: "#263238",
                    marginBottom: 40,
                    borderRadius: 3,
                    padding: 10,
                    width: 200,
                  }}
                  onClick={() => setScreen(1)}
                >
                  <FaAddressCard style={{ margin: 0, marginRight: 5 }} />
                  <text>For translators</text>
                </button>
              </div>

              {file === "" ? (
                <div
                  style={{
                    background: "#FFFFFF",
                    borderRadius: 100,
                    width: 83,
                    height: 80,
                    padding: 15,
                    position: "relative",
                    left: 300,
                    borderStyle: " dotted ",
                    borderColor: "#0865A8",
                    borderWidth: 2,
                  }}
                >
                  <label htmlFor="icon-button-file">
                    <Input
                      accept="image/*"
                      id="icon-button-file"
                      type="file"
                      style={{ display: "none" }}
                      onChange={(e) => setFile(e.target.value)}
                    />
                    <IconButton
                      color="primary"
                      aria-label="upload picture"
                      component="span"
                    >
                      <MdCameraAlt
                        style={{ fontSize: 35, position: "absolute" }}
                      />
                      <text
                        style={{
                          fontSize: 8,
                          position: "absolute",
                          top: 20,
                          width: 63,
                        }}
                      >
                        Upload File
                      </text>
                    </IconButton>
                  </label>
                </div>
              ) : (
                <div
                  style={{
                    borderRadius: 100,
                    width: 83,
                    height: 80,
                    position: "relative",
                    borderWidth: 2,
                  }}
                >
                  <label htmlFor="icon-button-file">
                    <Input
                      accept="image/*"
                      id="icon-button-file"
                      type="file"
                      style={{ display: "none" }}
                      onChange={(e) => setFile(e.target.value)}
                    />
                    <IconButton
                      color="primary"
                      aria-label="upload picture"
                      component="span"
                    >
                      <Avatar
                        alt="avatar"
                        src={require("../../Images/Avatar2.png")}
                        id={"avatar3"}
                        style={{
                          float: "none",
                          position: "relative",
                          width: "100%",
                          left: 300,
                        }}
                      />
                    </IconButton>
                  </label>
                </div>
              )}

              <div style={{ textAlign: "left", float: "left", marginTop: 20 }}>
                <text
                  style={{
                    fontWeight: 500,
                    fontSize: 15,
                    color: "#242424",
                  }}
                >
                  First name
                </text>
                <br />
                <input
                  type="text"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                  placeholder="First name"
                  style={{
                    background: "#FFFFFF",
                    border: 1,
                    borderRadius: 20,
                    borderColor: "#F1F1F1",
                    width: width * 0.22,
                    height: 30,
                    padding: 20,
                    paddingLeft: 12,
                    margin: 10,
                    fontSize: 13,
                  }}
                />
              </div>

              <div style={{ textAlign: "left", marginTop: 20 }}>
                <text
                  style={{
                    fontWeight: 500,
                    fontSize: 15,
                    color: "#242424",
                  }}
                >
                  Last name
                </text>
                <br />
                <input
                  type="text"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                  placeholder="Last name"
                  style={{
                    background: "#FFFFFF",
                    border: 1,
                    borderRadius: 20,
                    borderColor: "#F1F1F1",
                    width: width * 0.215,
                    height: 30,
                    padding: 20,
                    paddingLeft: 12,
                    margin: 10,
                    fontSize: 13,
                  }}
                />
              </div>

              <div style={{ textAlign: "left" }}>
                <text
                  style={{
                    fontWeight: 500,
                    fontSize: 15,
                    color: "#242424",
                  }}
                >
                  E-mail
                </text>
                <br />
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="E-mail"
                  style={{
                    background: "#FFFFFF",
                    border: 1,
                    borderRadius: 20,
                    borderColor: "#F1F1F1",
                    width: width * 0.45,
                    height: 30,
                    padding: 20,
                    paddingLeft: 12,
                    margin: 10,
                    fontSize: 13,
                  }}
                />
              </div>

              <div style={{ textAlign: "left" }}>
                <text
                  style={{
                    fontWeight: 500,
                    fontSize: 15,
                    color: "#242424",
                  }}
                >
                  Password
                </text>
                <br />
                <input
                  type={type}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  style={{
                    background: "#FFFFFF",
                    border: 1,
                    borderRadius: 20,
                    borderColor: "#F1F1F1",
                    width: width * 0.45,
                    height: 30,
                    padding: 20,
                    paddingLeft: 12,
                    margin: 10,
                    fontSize: 13,
                  }}
                />
                <IconButton
                  onClick={() => handleClickShowPassword(1)}
                  edge="end"
                  style={{ position: "absolute", right: 40, top: 422 }}
                >
                  {values ? <FiEye /> : <FiEyeOff />}
                </IconButton>
              </div>

              <div style={{ textAlign: "left" }}>
                <text
                  style={{
                    fontWeight: 500,
                    fontSize: 15,
                    color: "#242424",
                  }}
                >
                  Confirm password
                </text>
                <br />
                <input
                  type={type}
                  value={confirmpassword}
                  onChange={(e) => setConfirmpassword(e.target.value)}
                  placeholder="Password"
                  style={{
                    background: "#FFFFFF",
                    border: 1,
                    borderRadius: 20,
                    borderColor: "#F1F1F1",
                    width: width * 0.45,
                    height: 30,
                    padding: 20,
                    paddingLeft: 12,
                    margin: 10,
                    fontSize: 13,
                  }}
                />
                <IconButton
                  onClick={() => handleClickShowPassword(2)}
                  edge="end"
                  style={{ position: "absolute", right: 40, top: 505 }}
                >
                  {values2 ? <FiEye /> : <FiEyeOff />}
                </IconButton>
              </div>

              <div style={{ textAlign: "left", marginBottom: 20 }}>
                <text
                  style={{
                    fontWeight: 500,
                    fontSize: 15,
                    color: "#242424",
                  }}
                >
                  Mobile phone
                </text>
                <br />
                <input
                  type="text"
                  value={mobilephone}
                  onChange={(e) => setMobilephone(e.target.value)}
                  placeholder="Mobile phone"
                  style={{
                    background: "#FFFFFF",
                    border: 1,
                    borderRadius: 20,
                    borderColor: "#F1F1F1",
                    width: width * 0.45,
                    height: 30,
                    padding: 20,
                    paddingLeft: 12,
                    margin: 10,
                    fontSize: 13,
                  }}
                />
              </div>

              <button
                style={{
                  width: width * 0.45,
                  borderRadius: 20,
                  background: "#034D82",
                  height: 40,
                  color: "#FFF0C1",
                  fontSize: 18,
                  borderColor: "transparent",
                }}
              >
                Sign up
              </button>
            </div>
          ) : screen === 1 ? (
            <div>
              <div>
                <button
                  style={{
                    background: "transparent",
                    borderColor: "transparent",
                    borderBottomColor: "transparent",
                    color: "#263238",
                    marginBottom: 10,
                    marginRight: 150,
                    padding: 10,
                    width: 200,
                  }}
                  onClick={() => setScreen("")}
                >
                  <FaUserAlt style={{ margin: 0, marginRight: 5 }} />
                  <text>For Customers</text>
                </button>
                <button
                  style={{
                    background: "transparent",
                    borderColor: "transparent",
                    borderBottomColor: "#047ACF",
                    color: "#0865A8",
                    marginBottom: 10,
                    borderRadius: 3,
                    padding: 10,
                    width: 200,
                  }}
                  onClick={() => setScreen(1)}
                >
                  <FaAddressCard style={{ margin: 0, marginRight: 5 }} />
                  <text>For translators</text>
                </button>
              </div>

              <div
                style={{ textAlign: "left", color: "#242424", fontWeight: 500 }}
              >
                <text>Upload a picture of your ID card </text>
                <br />
                <text style={{ fontSize: 10 }}>
                  (such as JPG, PDF, PNG and the file size does not exceed
                  25Mb.)
                </text>
                <div style={{ textAlign: "center" }}>
                  {file === "" ? (
                    <div
                      style={{
                        background: "#FFFFFF",
                        borderRadius: 20,
                        width: 645,
                        height: 200,
                        padding: 50,
                        position: "relative",
                        borderStyle: " dotted ",
                        borderColor: "#0865A8",
                        borderWidth: 2,
                        margin: 20,
                        marginLeft: 0,
                      }}
                    >
                      <label htmlFor="icon-button-file">
                        <Input
                          accept="image/*"
                          id="icon-button-file"
                          type="file"
                          style={{ display: "none" }}
                          onChange={(e) => setFile(e.target.value)}
                        />
                        <IconButton
                          color="primary"
                          aria-label="upload picture"
                          component="span"
                        >
                          <FiImage
                            style={{
                              fontSize: 50,
                              position: "absolute",
                              marginTop: 30,
                            }}
                          />
                          <text
                            style={{
                              fontSize: 10,
                              position: "absolute",
                              top: 60,
                              width: 100,
                            }}
                          >
                            Upload File
                          </text>
                        </IconButton>
                      </label>
                    </div>
                  ) : (
                    <div
                      style={{
                        background: "#FFFFFF",
                        borderRadius: 20,
                        width: 645,
                        height: 200,
                        padding: 50,
                        position: "relative",
                        borderStyle: " dotted ",
                        borderColor: "#0865A8",
                        borderWidth: 2,
                        margin: 20,
                        marginLeft: 0,
                      }}
                    >
                      <label htmlFor="icon-button-file">
                        <Input
                          accept="image/*"
                          id="icon-button-file"
                          type="file"
                          style={{ display: "none" }}
                          onChange={(e) => setFile(e.target.value)}
                        />
                        <IconButton
                          color="primary"
                          aria-label="upload picture"
                          component="span"
                        >
                          <FiImage
                            style={{
                              fontSize: 50,
                              position: "absolute",
                              marginTop: 30,
                            }}
                          />
                          <text
                            style={{
                              fontSize: 10,
                              position: "absolute",
                              top: 60,
                              width: 100,
                            }}
                          >
                            `${file}`
                          </text>
                        </IconButton>
                      </label>
                    </div>
                  )}
                </div>
                <text
                  style={{ color: "#666666", textDecorationLine: "underline" }}
                >
                  An example of uploading a picture of your ID card.
                </text>
              </div>
              <hr style={{ width: "96%", height: 2 }} />
              <div
                style={{ textAlign: "left", color: "#242424", fontWeight: 500 }}
              >
                <div style={{ width: 550 }}>
                  <text>
                    Upload a picture of the front page of the bank book or
                    Details of your digital bank account your digital bank
                    account.
                  </text>
                  <br />
                  <text style={{ fontSize: 10 }}>
                    (such as JPG, PDF, PNG and the file size does not exceed
                    25Mb.)
                  </text>
                </div>

                <div style={{ textAlign: "center" }}>
                  {bank === "" ? (
                    <div
                      style={{
                        background: "#FFFFFF",
                        borderRadius: 20,
                        width: 645,
                        height: 200,
                        padding: 50,
                        position: "relative",
                        borderStyle: " dotted ",
                        borderColor: "#0865A8",
                        borderWidth: 2,
                        margin: 20,
                        marginLeft: 0,
                      }}
                    >
                      <label>
                        <Input
                          accept="image/*"
                          id="icon-button-file2"
                          type="file"
                          style={{ display: "none" }}
                          onChange={(e) => setBank(e.target.value)}
                        />
                        <IconButton
                          color="primary"
                          aria-label="upload picture"
                          component="span"
                        >
                          <FiImage
                            style={{
                              fontSize: 50,
                              position: "absolute",
                              marginTop: 30,
                            }}
                          />
                          <text
                            style={{
                              fontSize: 10,
                              position: "absolute",
                              top: 60,
                              width: 100,
                            }}
                          >
                            Upload File
                          </text>
                        </IconButton>
                      </label>
                    </div>
                  ) : (
                    <div
                      style={{
                        background: "#FFFFFF",
                        borderRadius: 20,
                        width: 645,
                        height: 200,
                        padding: 50,
                        position: "relative",
                        borderStyle: " dotted ",
                        borderColor: "#0865A8",
                        borderWidth: 2,
                        margin: 20,
                        marginLeft: 0,
                      }}
                    >
                      <label>
                        <Input
                          accept="image/*"
                          id="icon-button-file"
                          type="file"
                          style={{ display: "none" }}
                          onChange={(e) => setBank(e.target.value)}
                        />
                        <IconButton
                          color="primary"
                          aria-label="upload picture"
                          component="span"
                        >
                          <FiImage
                            style={{
                              fontSize: 50,
                              position: "absolute",
                              marginTop: 30,
                            }}
                          />
                          <text
                            style={{
                              fontSize: 10,
                              position: "absolute",
                              top: 60,
                              width: 100,
                            }}
                          >
                            `${bank}`
                          </text>
                        </IconButton>
                      </label>
                    </div>
                  )}
                </div>
                <text
                  style={{ color: "#666666", textDecorationLine: "underline" }}
                >
                  An example of uploading a picture of your bankbook page.
                </text>
              </div>

              <button
                style={{
                  width: width * 0.45,
                  borderRadius: 20,
                  background: "#034D82",
                  height: 40,
                  color: "#FFF0C1",
                  fontSize: 18,
                  borderColor: "transparent",
                  marginTop: 20,
                  position: "relative",
                  right: 25,
                }}
                onClick={() => setScreen(3)}
              >
                <text
                  style={{
                    color: "#FFF0C1",
                    fontSize: 18,
                    textDecorationLine: "none",
                  }}
                >
                  Next
                </text>
              </button>
            </div>
          ) : screen === 2 ? (
            <div>
              <div>
                <button
                  style={{
                    background: "transparent",
                    borderColor: "transparent",
                    borderBottomColor: "transparent",
                    color: "#263238",
                    marginBottom: 10,
                    marginRight: 150,
                    padding: 10,
                    width: 200,
                  }}
                  onClick={() => setScreen("")}
                >
                  <FaUserAlt style={{ margin: 0, marginRight: 5 }} />
                  <text>For Customers</text>
                </button>
                <button
                  style={{
                    background: "transparent",
                    borderColor: "transparent",
                    borderBottomColor: "#047ACF",
                    color: "#0865A8",
                    marginBottom: 10,
                    borderRadius: 3,
                    padding: 10,
                    width: 200,
                  }}
                  onClick={() => setScreen(1)}
                >
                  <FaAddressCard style={{ margin: 0, marginRight: 5 }} />
                  <text>For translators</text>
                </button>
              </div>
              <div
                style={{
                  textAlign: "left",
                  fontWeight: 500,
                  color: "#242424",
                  fontSize: 17,
                }}
              >
                <text style={{ fontSize: 22 }}>Skills</text>
                <br />
                <text>What languages can you translate?</text>
                <br />
                <Selects x={1} />
                <br />
                <text>What kind of documents can you translate?</text>
                <br />
                <Selects x={"company"} />
                <hr style={{ width: 650 }} />
                <text style={{ fontSize: 23 }}>Language Competency Test</text>
                <br />
                <text>Language to answer</text>
                <br />
                <Selects x={2}/>
                <br />
                <button
                  style={{
                    width: width * 0.45,
                    borderRadius: 20,
                    background: "#034D82",
                    height: 40,
                    color: "#FFF0C1",
                    fontSize: 18,
                    borderColor: "transparent",
                    position: "relative",
                    top: 50,
                  }}
                  onClick={()=>setScreen(4)}
                >
                  Next
                </button>
              </div>
            </div>
          ) : screen === 3 ? (
            <div>
              <div>
                <button
                  style={{
                    background: "transparent",
                    borderColor: "transparent",
                    borderBottomColor: "transparent",
                    color: "#263238",
                    marginBottom: 10,
                    marginRight: 150,
                    padding: 10,
                    width: 200,
                  }}
                  onClick={() => setScreen("")}
                >
                  <FaUserAlt style={{ margin: 0, marginRight: 5 }} />
                  <text>For Customers</text>
                </button>
                <button
                  style={{
                    background: "transparent",
                    borderColor: "transparent",
                    borderBottomColor: "#047ACF",
                    color: "#0865A8",
                    marginBottom: 10,
                    borderRadius: 3,
                    padding: 10,
                    width: 200,
                  }}
                  onClick={() => setScreen(1)}
                >
                  <FaAddressCard style={{ margin: 0, marginRight: 5 }} />
                  <text>For translators</text>
                </button>
              </div>

              <div
                style={{ textAlign: "left", color: "#242424", fontWeight: 500 }}
              >
                <text>Education/Certificate/Proof of Language Competency </text>
                <br />
                <text style={{ fontSize: 10 }}>
                  (such as JPG, PDF, PNG and the file size does not exceed
                  25Mb.)
                </text>
                <div style={{ textAlign: "center" }}>
                  {file === "" ? (
                    <div
                      style={{
                        background: "#FFFFFF",
                        borderRadius: 20,
                        width: 645,
                        height: 200,
                        padding: 50,
                        position: "relative",
                        borderStyle: " dotted ",
                        borderColor: "#0865A8",
                        borderWidth: 2,
                        margin: 20,
                        marginLeft: 0,
                      }}
                    >
                      <label htmlFor="icon-button-file">
                        <Input
                          accept="image/*"
                          id="icon-button-file"
                          type="file"
                          style={{ display: "none" }}
                          onChange={(e) => setFile(e.target.value)}
                        />
                        <IconButton
                          color="primary"
                          aria-label="upload picture"
                          component="span"
                        >
                          <FiImage
                            style={{
                              fontSize: 50,
                              position: "absolute",
                              marginTop: 30,
                            }}
                          />
                          <text
                            style={{
                              fontSize: 10,
                              position: "absolute",
                              top: 60,
                              width: 100,
                            }}
                          >
                            Upload File
                          </text>
                        </IconButton>
                      </label>
                    </div>
                  ) : (
                    <div
                      style={{
                        background: "#FFFFFF",
                        borderRadius: 20,
                        width: 645,
                        height: 200,
                        padding: 50,
                        position: "relative",
                        borderStyle: " dotted ",
                        borderColor: "#0865A8",
                        borderWidth: 2,
                        margin: 20,
                        marginLeft: 0,
                      }}
                    >
                      <label htmlFor="icon-button-file">
                        <Input
                          accept="image/*"
                          id="icon-button-file"
                          type="file"
                          style={{ display: "none" }}
                          onChange={(e) => setFile(e.target.value)}
                        />
                        <IconButton
                          color="primary"
                          aria-label="upload picture"
                          component="span"
                        >
                          <FiImage
                            style={{
                              fontSize: 50,
                              position: "absolute",
                              marginTop: 30,
                            }}
                          />
                          <text
                            style={{
                              fontSize: 10,
                              position: "absolute",
                              top: 60,
                              width: 100,
                            }}
                          >
                            `${file}`
                          </text>
                        </IconButton>
                      </label>
                    </div>
                  )}
                </div>
              </div>
              <hr style={{ width: "96%", height: 2 }} />
              <div
                style={{ textAlign: "left", color: "#242424", fontWeight: 500 }}
              >
                <div style={{ width: 550 }}>
                  <text>Portfolio/CV</text>
                  <text style={{ fontSize: 10 }}>
                    (such as JPG, PDF, PNG and the file size does not exceed
                    25Mb.)
                  </text>
                </div>

                <div style={{ textAlign: "center" }}>
                  {bank === "" ? (
                    <div
                      style={{
                        background: "#FFFFFF",
                        borderRadius: 20,
                        width: 645,
                        height: 200,
                        padding: 50,
                        position: "relative",
                        borderStyle: " dotted ",
                        borderColor: "#0865A8",
                        borderWidth: 2,
                        margin: 20,
                        marginLeft: 0,
                      }}
                    >
                      <label>
                        <Input
                          accept="image/*"
                          id="icon-button-file2"
                          type="file"
                          style={{ display: "none" }}
                          onChange={(e) => setBank(e.target.value)}
                        />
                        <IconButton
                          color="primary"
                          aria-label="upload picture"
                          component="span"
                        >
                          <FiImage
                            style={{
                              fontSize: 50,
                              position: "absolute",
                              marginTop: 30,
                            }}
                          />
                          <text
                            style={{
                              fontSize: 10,
                              position: "absolute",
                              top: 60,
                              width: 100,
                            }}
                          >
                            Upload File
                          </text>
                        </IconButton>
                      </label>
                    </div>
                  ) : (
                    <div
                      style={{
                        background: "#FFFFFF",
                        borderRadius: 20,
                        width: 645,
                        height: 200,
                        padding: 50,
                        position: "relative",
                        borderStyle: " dotted ",
                        borderColor: "#0865A8",
                        borderWidth: 2,
                        margin: 20,
                        marginLeft: 0,
                      }}
                    >
                      <label>
                        <Input
                          accept="image/*"
                          id="icon-button-file"
                          type="file"
                          style={{ display: "none" }}
                          onChange={(e) => setBank(e.target.value)}
                        />
                        <IconButton
                          color="primary"
                          aria-label="upload picture"
                          component="span"
                        >
                          <FiImage
                            style={{
                              fontSize: 50,
                              position: "absolute",
                              marginTop: 30,
                            }}
                          />
                          <text
                            style={{
                              fontSize: 10,
                              position: "absolute",
                              top: 60,
                              width: 100,
                            }}
                          >
                            `${bank}`
                          </text>
                        </IconButton>
                      </label>
                    </div>
                  )}
                </div>
              </div>

              <button
                style={{
                  width: width * 0.45,
                  borderRadius: 20,
                  background: "#034D82",
                  height: 40,
                  color: "#FFF0C1",
                  fontSize: 18,
                  borderColor: "transparent",
                  marginTop: 20,
                  position: "relative",
                  right: 25,
                }}
                onClick={() => setScreen(2)}
              >
                <text
                  style={{
                    color: "#FFF0C1",
                    fontSize: 18,
                    textDecorationLine: "none",
                  }}
                >
                  Next
                </text>
              </button>
            </div>
          ):screen === 4 ? (
            <Question x={languages}  y={answer} />
          ): null}

          <div className="GGlogin2" style={{ left: -680, top: 370 }}></div>
          {screen !== 2 &&  screen !== 4 ? (
            <div
              className="GGlogin"
              style={{ left: 60, position: "relative", height: 400 }}
            ></div>
          ) : null}
        </div>
      </div>

      {/* bttom */}
      {screen === "" ? (
        <>
          <div
            style={{
              backgroundColor: "#FDEFC2",
              width: width,
              position: "relative",
              top: height * 2.3,
              textAlign: "left",
              padding: 50,
              marginTop: 100,
            }}
          >
            <img src={logo} alt="logo" style={{ width: 160, float: "left" }} />

            <div style={{ float: "left", marginLeft: 100 }}>
              <text
                style={{
                  fontWeight: 500,
                  fontSize: 16,
                  lineHeight: 3,
                  color: "#034D82",
                }}
              >
                Helps
              </text>
              <br />
              <text
                style={{
                  fontWeight: 500,
                  fontSize: 16,
                  lineHeight: 3,
                  color: "#034D82",
                }}
              >
                Follow us
              </text>
              <br />
              <text
                style={{
                  fontWeight: 500,
                  fontSize: 16,
                  lineHeight: 3,
                  color: "#034D82",
                }}
              >
                Download
              </text>
              <br />
              <div style={{ margin: 0, marginTop: 60 }}>
                <div
                  style={{
                    backgroundColor: "#ffff",
                    borderRadius: 20,
                    border: "1px solid #000",
                    textAlign: "center",
                    float: "left",
                  }}
                >
                  <img
                    style={{ margin: 10, marginLeft: 16, width: 90 }}
                    src={App_store}
                    alt="App_store"
                  />
                </div>

                <div
                  style={{
                    backgroundColor: "#ffff",
                    borderRadius: 20,
                    border: "1px solid #000",
                    textAlign: "center",
                    float: "left",
                    marginLeft: 16,
                  }}
                >
                  <img
                    style={{ margin: 10, marginLeft: 16, width: 100 }}
                    src={Google_play}
                    alt="Google_play"
                  />
                </div>
              </div>
            </div>

            <div style={{ float: "left", marginLeft: 120 }}>
              <text
                style={{
                  fontWeight: 500,
                  fontSize: 16,
                  lineHeight: 3,
                  color: "#034D82",
                }}
              >
                FAQs
              </text>
              <br />
              <text
                style={{
                  fontWeight: 500,
                  fontSize: 16,
                  lineHeight: 3,
                  color: "#034D82",
                }}
              >
                Terms and Conditions
              </text>
              <br />
              <text
                style={{
                  fontWeight: 500,
                  fontSize: 16,
                  lineHeight: 3,
                  color: "#034D82",
                }}
              >
                Privacy policy
              </text>
            </div>

            <div style={{ float: "left", marginLeft: 150 }}>
              <text
                style={{
                  fontWeight: 500,
                  fontSize: 16,
                  lineHeight: 3,
                  color: "#034D82",
                }}
              >
                Contact us
              </text>
              <br />
              <text
                style={{
                  fontWeight: 500,
                  fontSize: 12,
                  lineHeight: 3,
                  color: "#034D82",
                  width: 200,
                }}
              >
                Tel. +66 803265329
                <br />
                GIVE NETWORK GLOBAL INTERPRETER AND VOLUNTEER <br />
                EDUCATION NETWORK 178/49 Moo 11 Tambol Huay Yai, Amphur <br />
                Banglamung, Chonburi 20150
              </text>
              <br />
              <div style={{ marginTop: 10 }}>
                <div
                  style={{
                    backgroundColor: "#FFC100",
                    borderRadius: 30,
                    border: "1px solid #ffff",
                    textAlign: "center",
                    float: "left",
                  }}
                >
                  <FaFacebookF
                    style={{ margin: 10, width: 15, height: 15, color: "#fff" }}
                  />
                </div>
                <div
                  style={{
                    backgroundColor: "#FFC100",
                    borderRadius: 30,
                    border: "1px solid #ffff",
                    textAlign: "center",
                    float: "left",
                    marginLeft: 16,
                  }}
                >
                  <BsInstagram
                    style={{ margin: 10, width: 15, height: 15, color: "#fff" }}
                  />
                </div>
                <div
                  style={{
                    backgroundColor: "#FFC100",
                    borderRadius: 30,
                    border: "1px solid #ffff",
                    textAlign: "center",
                    float: "left",
                    marginLeft: 16,
                  }}
                >
                  <FaLinkedinIn
                    style={{ margin: 10, width: 15, height: 15, color: "#fff" }}
                  />
                </div>
                <div
                  style={{
                    backgroundColor: "#FFC100",
                    borderRadius: 30,
                    border: "1px solid #ffff",
                    textAlign: "center",
                    float: "left",
                    marginLeft: 16,
                  }}
                >
                  <BsTwitter
                    style={{ margin: 10, width: 15, height: 15, color: "#fff" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundColor: "#034D82",
              width: width,
              position: "relative",
              top: height * 2.3,
              textAlign: "center",
              padding: 10,
            }}
          >
            <text style={{ color: "#FCC33E" }}>
              Copyrights Give Network 2021.
            </text>
            <text style={{ color: "#FCC33E", marginLeft: 60 }}>
              Privacy policy
            </text>
          </div>
        </>
      ) : screen === 1 ? (
        <>
          <div
            style={{
              backgroundColor: "#FDEFC2",
              width: width,
              position: "relative",
              top: height * 1.2,
              textAlign: "left",
              padding: 50,
              marginTop: 100,
            }}
          >
            <img src={logo} alt="logo" style={{ width: 160, float: "left" }} />

            <div style={{ float: "left", marginLeft: 100 }}>
              <text
                style={{
                  fontWeight: 500,
                  fontSize: 16,
                  lineHeight: 3,
                  color: "#034D82",
                }}
              >
                Helps
              </text>
              <br />
              <text
                style={{
                  fontWeight: 500,
                  fontSize: 16,
                  lineHeight: 3,
                  color: "#034D82",
                }}
              >
                Follow us
              </text>
              <br />
              <text
                style={{
                  fontWeight: 500,
                  fontSize: 16,
                  lineHeight: 3,
                  color: "#034D82",
                }}
              >
                Download
              </text>
              <br />
              <div style={{ margin: 0, marginTop: 60 }}>
                <div
                  style={{
                    backgroundColor: "#ffff",
                    borderRadius: 20,
                    border: "1px solid #000",
                    textAlign: "center",
                    float: "left",
                  }}
                >
                  <img
                    style={{ margin: 10, marginLeft: 16, width: 90 }}
                    src={App_store}
                    alt="App_store"
                  />
                </div>

                <div
                  style={{
                    backgroundColor: "#ffff",
                    borderRadius: 20,
                    border: "1px solid #000",
                    textAlign: "center",
                    float: "left",
                    marginLeft: 16,
                  }}
                >
                  <img
                    style={{ margin: 10, marginLeft: 16, width: 100 }}
                    src={Google_play}
                    alt="Google_play"
                  />
                </div>
              </div>
            </div>

            <div style={{ float: "left", marginLeft: 120 }}>
              <text
                style={{
                  fontWeight: 500,
                  fontSize: 16,
                  lineHeight: 3,
                  color: "#034D82",
                }}
              >
                FAQs
              </text>
              <br />
              <text
                style={{
                  fontWeight: 500,
                  fontSize: 16,
                  lineHeight: 3,
                  color: "#034D82",
                }}
              >
                Terms and Conditions
              </text>
              <br />
              <text
                style={{
                  fontWeight: 500,
                  fontSize: 16,
                  lineHeight: 3,
                  color: "#034D82",
                }}
              >
                Privacy policy
              </text>
            </div>

            <div style={{ float: "left", marginLeft: 150 }}>
              <text
                style={{
                  fontWeight: 500,
                  fontSize: 16,
                  lineHeight: 3,
                  color: "#034D82",
                }}
              >
                Contact us
              </text>
              <br />
              <text
                style={{
                  fontWeight: 500,
                  fontSize: 12,
                  lineHeight: 3,
                  color: "#034D82",
                  width: 200,
                }}
              >
                Tel. +66 803265329
                <br />
                GIVE NETWORK GLOBAL INTERPRETER AND VOLUNTEER <br />
                EDUCATION NETWORK 178/49 Moo 11 Tambol Huay Yai, Amphur <br />
                Banglamung, Chonburi 20150
              </text>
              <br />
              <div style={{ marginTop: 10 }}>
                <div
                  style={{
                    backgroundColor: "#FFC100",
                    borderRadius: 30,
                    border: "1px solid #ffff",
                    textAlign: "center",
                    float: "left",
                  }}
                >
                  <FaFacebookF
                    style={{ margin: 10, width: 15, height: 15, color: "#fff" }}
                  />
                </div>
                <div
                  style={{
                    backgroundColor: "#FFC100",
                    borderRadius: 30,
                    border: "1px solid #ffff",
                    textAlign: "center",
                    float: "left",
                    marginLeft: 16,
                  }}
                >
                  <BsInstagram
                    style={{ margin: 10, width: 15, height: 15, color: "#fff" }}
                  />
                </div>
                <div
                  style={{
                    backgroundColor: "#FFC100",
                    borderRadius: 30,
                    border: "1px solid #ffff",
                    textAlign: "center",
                    float: "left",
                    marginLeft: 16,
                  }}
                >
                  <FaLinkedinIn
                    style={{ margin: 10, width: 15, height: 15, color: "#fff" }}
                  />
                </div>
                <div
                  style={{
                    backgroundColor: "#FFC100",
                    borderRadius: 30,
                    border: "1px solid #ffff",
                    textAlign: "center",
                    float: "left",
                    marginLeft: 16,
                  }}
                >
                  <BsTwitter
                    style={{ margin: 10, width: 15, height: 15, color: "#fff" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundColor: "#034D82",
              width: width,
              position: "relative",
              top: height * 1.2,
              textAlign: "center",
              padding: 10,
            }}
          >
            <text style={{ color: "#FCC33E" }}>
              Copyrights Give Network 2021.
            </text>
            <text style={{ color: "#FCC33E", marginLeft: 60 }}>
              Privacy policy
            </text>
          </div>
        </>
      ) : screen === 2 ? (
        <>
          <div
            style={{
              backgroundColor: "#FDEFC2",
              width: width,
              position: "relative",
              top: height * 0.7,
              textAlign: "left",
              padding: 50,
              marginTop: 100,
            }}
          >
            <img src={logo} alt="logo" style={{ width: 160, float: "left" }} />

            <div style={{ float: "left", marginLeft: 100 }}>
              <text
                style={{
                  fontWeight: 500,
                  fontSize: 16,
                  lineHeight: 3,
                  color: "#034D82",
                }}
              >
                Helps
              </text>
              <br />
              <text
                style={{
                  fontWeight: 500,
                  fontSize: 16,
                  lineHeight: 3,
                  color: "#034D82",
                }}
              >
                Follow us
              </text>
              <br />
              <text
                style={{
                  fontWeight: 500,
                  fontSize: 16,
                  lineHeight: 3,
                  color: "#034D82",
                }}
              >
                Download
              </text>
              <br />
              <div style={{ margin: 0, marginTop: 60 }}>
                <div
                  style={{
                    backgroundColor: "#ffff",
                    borderRadius: 20,
                    border: "1px solid #000",
                    textAlign: "center",
                    float: "left",
                  }}
                >
                  <img
                    style={{ margin: 10, marginLeft: 16, width: 90 }}
                    src={App_store}
                    alt="App_store"
                  />
                </div>

                <div
                  style={{
                    backgroundColor: "#ffff",
                    borderRadius: 20,
                    border: "1px solid #000",
                    textAlign: "center",
                    float: "left",
                    marginLeft: 16,
                  }}
                >
                  <img
                    style={{ margin: 10, marginLeft: 16, width: 100 }}
                    src={Google_play}
                    alt="Google_play"
                  />
                </div>
              </div>
            </div>

            <div style={{ float: "left", marginLeft: 120 }}>
              <text
                style={{
                  fontWeight: 500,
                  fontSize: 16,
                  lineHeight: 3,
                  color: "#034D82",
                }}
              >
                FAQs
              </text>
              <br />
              <text
                style={{
                  fontWeight: 500,
                  fontSize: 16,
                  lineHeight: 3,
                  color: "#034D82",
                }}
              >
                Terms and Conditions
              </text>
              <br />
              <text
                style={{
                  fontWeight: 500,
                  fontSize: 16,
                  lineHeight: 3,
                  color: "#034D82",
                }}
              >
                Privacy policy
              </text>
            </div>

            <div style={{ float: "left", marginLeft: 150 }}>
              <text
                style={{
                  fontWeight: 500,
                  fontSize: 16,
                  lineHeight: 3,
                  color: "#034D82",
                }}
              >
                Contact us
              </text>
              <br />
              <text
                style={{
                  fontWeight: 500,
                  fontSize: 12,
                  lineHeight: 3,
                  color: "#034D82",
                  width: 200,
                }}
              >
                Tel. +66 803265329
                <br />
                GIVE NETWORK GLOBAL INTERPRETER AND VOLUNTEER <br />
                EDUCATION NETWORK 178/49 Moo 11 Tambol Huay Yai, Amphur <br />
                Banglamung, Chonburi 20150
              </text>
              <br />
              <div style={{ marginTop: 10 }}>
                <div
                  style={{
                    backgroundColor: "#FFC100",
                    borderRadius: 30,
                    border: "1px solid #ffff",
                    textAlign: "center",
                    float: "left",
                  }}
                >
                  <FaFacebookF
                    style={{ margin: 10, width: 15, height: 15, color: "#fff" }}
                  />
                </div>
                <div
                  style={{
                    backgroundColor: "#FFC100",
                    borderRadius: 30,
                    border: "1px solid #ffff",
                    textAlign: "center",
                    float: "left",
                    marginLeft: 16,
                  }}
                >
                  <BsInstagram
                    style={{ margin: 10, width: 15, height: 15, color: "#fff" }}
                  />
                </div>
                <div
                  style={{
                    backgroundColor: "#FFC100",
                    borderRadius: 30,
                    border: "1px solid #ffff",
                    textAlign: "center",
                    float: "left",
                    marginLeft: 16,
                  }}
                >
                  <FaLinkedinIn
                    style={{ margin: 10, width: 15, height: 15, color: "#fff" }}
                  />
                </div>
                <div
                  style={{
                    backgroundColor: "#FFC100",
                    borderRadius: 30,
                    border: "1px solid #ffff",
                    textAlign: "center",
                    float: "left",
                    marginLeft: 16,
                  }}
                >
                  <BsTwitter
                    style={{ margin: 10, width: 15, height: 15, color: "#fff" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundColor: "#034D82",
              width: width,
              position: "relative",
              top: height * 0.7,
              textAlign: "center",
              padding: 10,
            }}
          >
            <text style={{ color: "#FCC33E" }}>
              Copyrights Give Network 2021.
            </text>
            <text style={{ color: "#FCC33E", marginLeft: 60 }}>
              Privacy policy
            </text>
          </div>
        </>
      ) : screen === 3 ? (
        <>
          <div
            style={{
              backgroundColor: "#FDEFC2",
              width: width,
              position: "relative",
              top: height * 1,
              textAlign: "left",
              padding: 50,
              marginTop: 100,
            }}
          >
            <img src={logo} alt="logo" style={{ width: 160, float: "left" }} />

            <div style={{ float: "left", marginLeft: 100 }}>
              <text
                style={{
                  fontWeight: 500,
                  fontSize: 16,
                  lineHeight: 3,
                  color: "#034D82",
                }}
              >
                Helps
              </text>
              <br />
              <text
                style={{
                  fontWeight: 500,
                  fontSize: 16,
                  lineHeight: 3,
                  color: "#034D82",
                }}
              >
                Follow us
              </text>
              <br />
              <text
                style={{
                  fontWeight: 500,
                  fontSize: 16,
                  lineHeight: 3,
                  color: "#034D82",
                }}
              >
                Download
              </text>
              <br />
              <div style={{ margin: 0, marginTop: 60 }}>
                <div
                  style={{
                    backgroundColor: "#ffff",
                    borderRadius: 20,
                    border: "1px solid #000",
                    textAlign: "center",
                    float: "left",
                  }}
                >
                  <img
                    style={{ margin: 10, marginLeft: 16, width: 90 }}
                    src={App_store}
                    alt="App_store"
                  />
                </div>

                <div
                  style={{
                    backgroundColor: "#ffff",
                    borderRadius: 20,
                    border: "1px solid #000",
                    textAlign: "center",
                    float: "left",
                    marginLeft: 16,
                  }}
                >
                  <img
                    style={{ margin: 10, marginLeft: 16, width: 100 }}
                    src={Google_play}
                    alt="Google_play"
                  />
                </div>
              </div>
            </div>

            <div style={{ float: "left", marginLeft: 120 }}>
              <text
                style={{
                  fontWeight: 500,
                  fontSize: 16,
                  lineHeight: 3,
                  color: "#034D82",
                }}
              >
                FAQs
              </text>
              <br />
              <text
                style={{
                  fontWeight: 500,
                  fontSize: 16,
                  lineHeight: 3,
                  color: "#034D82",
                }}
              >
                Terms and Conditions
              </text>
              <br />
              <text
                style={{
                  fontWeight: 500,
                  fontSize: 16,
                  lineHeight: 3,
                  color: "#034D82",
                }}
              >
                Privacy policy
              </text>
            </div>

            <div style={{ float: "left", marginLeft: 150 }}>
              <text
                style={{
                  fontWeight: 500,
                  fontSize: 16,
                  lineHeight: 3,
                  color: "#034D82",
                }}
              >
                Contact us
              </text>
              <br />
              <text
                style={{
                  fontWeight: 500,
                  fontSize: 12,
                  lineHeight: 3,
                  color: "#034D82",
                  width: 200,
                }}
              >
                Tel. +66 803265329
                <br />
                GIVE NETWORK GLOBAL INTERPRETER AND VOLUNTEER <br />
                EDUCATION NETWORK 178/49 Moo 11 Tambol Huay Yai, Amphur <br />
                Banglamung, Chonburi 20150
              </text>
              <br />
              <div style={{ marginTop: 10 }}>
                <div
                  style={{
                    backgroundColor: "#FFC100",
                    borderRadius: 30,
                    border: "1px solid #ffff",
                    textAlign: "center",
                    float: "left",
                  }}
                >
                  <FaFacebookF
                    style={{ margin: 10, width: 15, height: 15, color: "#fff" }}
                  />
                </div>
                <div
                  style={{
                    backgroundColor: "#FFC100",
                    borderRadius: 30,
                    border: "1px solid #ffff",
                    textAlign: "center",
                    float: "left",
                    marginLeft: 16,
                  }}
                >
                  <BsInstagram
                    style={{ margin: 10, width: 15, height: 15, color: "#fff" }}
                  />
                </div>
                <div
                  style={{
                    backgroundColor: "#FFC100",
                    borderRadius: 30,
                    border: "1px solid #ffff",
                    textAlign: "center",
                    float: "left",
                    marginLeft: 16,
                  }}
                >
                  <FaLinkedinIn
                    style={{ margin: 10, width: 15, height: 15, color: "#fff" }}
                  />
                </div>
                <div
                  style={{
                    backgroundColor: "#FFC100",
                    borderRadius: 30,
                    border: "1px solid #ffff",
                    textAlign: "center",
                    float: "left",
                    marginLeft: 16,
                  }}
                >
                  <BsTwitter
                    style={{ margin: 10, width: 15, height: 15, color: "#fff" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundColor: "#034D82",
              width: width,
              position: "relative",
              top: height * 1,
              textAlign: "center",
              padding: 10,
            }}
          >
            <text style={{ color: "#FCC33E" }}>
              Copyrights Give Network 2021.
            </text>
            <text style={{ color: "#FCC33E", marginLeft: 60 }}>
              Privacy policy
            </text>
          </div>
        </>
      ): screen === 4 ? (
        <>
          <div
            style={{
              backgroundColor: "#FDEFC2",
              width: width,
              position: "relative",
              top: height * 1.2,
              textAlign: "left",
              padding: 50,
              marginTop: 100,
            }}
          >
            <img src={logo} alt="logo" style={{ width: 160, float: "left" }} />

            <div style={{ float: "left", marginLeft: 100 }}>
              <text
                style={{
                  fontWeight: 500,
                  fontSize: 16,
                  lineHeight: 3,
                  color: "#034D82",
                }}
              >
                Helps
              </text>
              <br />
              <text
                style={{
                  fontWeight: 500,
                  fontSize: 16,
                  lineHeight: 3,
                  color: "#034D82",
                }}
              >
                Follow us
              </text>
              <br />
              <text
                style={{
                  fontWeight: 500,
                  fontSize: 16,
                  lineHeight: 3,
                  color: "#034D82",
                }}
              >
                Download
              </text>
              <br />
              <div style={{ margin: 0, marginTop: 60 }}>
                <div
                  style={{
                    backgroundColor: "#ffff",
                    borderRadius: 20,
                    border: "1px solid #000",
                    textAlign: "center",
                    float: "left",
                  }}
                >
                  <img
                    style={{ margin: 10, marginLeft: 16, width: 90 }}
                    src={App_store}
                    alt="App_store"
                  />
                </div>

                <div
                  style={{
                    backgroundColor: "#ffff",
                    borderRadius: 20,
                    border: "1px solid #000",
                    textAlign: "center",
                    float: "left",
                    marginLeft: 16,
                  }}
                >
                  <img
                    style={{ margin: 10, marginLeft: 16, width: 100 }}
                    src={Google_play}
                    alt="Google_play"
                  />
                </div>
              </div>
            </div>

            <div style={{ float: "left", marginLeft: 120 }}>
              <text
                style={{
                  fontWeight: 500,
                  fontSize: 16,
                  lineHeight: 3,
                  color: "#034D82",
                }}
              >
                FAQs
              </text>
              <br />
              <text
                style={{
                  fontWeight: 500,
                  fontSize: 16,
                  lineHeight: 3,
                  color: "#034D82",
                }}
              >
                Terms and Conditions
              </text>
              <br />
              <text
                style={{
                  fontWeight: 500,
                  fontSize: 16,
                  lineHeight: 3,
                  color: "#034D82",
                }}
              >
                Privacy policy
              </text>
            </div>

            <div style={{ float: "left", marginLeft: 150 }}>
              <text
                style={{
                  fontWeight: 500,
                  fontSize: 16,
                  lineHeight: 3,
                  color: "#034D82",
                }}
              >
                Contact us
              </text>
              <br />
              <text
                style={{
                  fontWeight: 500,
                  fontSize: 12,
                  lineHeight: 3,
                  color: "#034D82",
                  width: 200,
                }}
              >
                Tel. +66 803265329
                <br />
                GIVE NETWORK GLOBAL INTERPRETER AND VOLUNTEER <br />
                EDUCATION NETWORK 178/49 Moo 11 Tambol Huay Yai, Amphur <br />
                Banglamung, Chonburi 20150
              </text>
              <br />
              <div style={{ marginTop: 10 }}>
                <div
                  style={{
                    backgroundColor: "#FFC100",
                    borderRadius: 30,
                    border: "1px solid #ffff",
                    textAlign: "center",
                    float: "left",
                  }}
                >
                  <FaFacebookF
                    style={{ margin: 10, width: 15, height: 15, color: "#fff" }}
                  />
                </div>
                <div
                  style={{
                    backgroundColor: "#FFC100",
                    borderRadius: 30,
                    border: "1px solid #ffff",
                    textAlign: "center",
                    float: "left",
                    marginLeft: 16,
                  }}
                >
                  <BsInstagram
                    style={{ margin: 10, width: 15, height: 15, color: "#fff" }}
                  />
                </div>
                <div
                  style={{
                    backgroundColor: "#FFC100",
                    borderRadius: 30,
                    border: "1px solid #ffff",
                    textAlign: "center",
                    float: "left",
                    marginLeft: 16,
                  }}
                >
                  <FaLinkedinIn
                    style={{ margin: 10, width: 15, height: 15, color: "#fff" }}
                  />
                </div>
                <div
                  style={{
                    backgroundColor: "#FFC100",
                    borderRadius: 30,
                    border: "1px solid #ffff",
                    textAlign: "center",
                    float: "left",
                    marginLeft: 16,
                  }}
                >
                  <BsTwitter
                    style={{ margin: 10, width: 15, height: 15, color: "#fff" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundColor: "#034D82",
              width: width,
              position: "relative",
              top: height * 1.2,
              textAlign: "center",
              padding: 10,
            }}
          >
            <text style={{ color: "#FCC33E" }}>
              Copyrights Give Network 2021.
            </text>
            <text style={{ color: "#FCC33E", marginLeft: 60 }}>
              Privacy policy
            </text>
          </div>
        </>
      ): null}
    </>
  );
};
export default Signup_freelance;
