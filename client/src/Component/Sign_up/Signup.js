import * as React from "react";
import logo from "../../logo.svg";
import Navbars from "../Navbar/navbarSignup";
// import { FaUserAlt, FaAddressCard } from "react-icons/fa";
import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs";
import { FiEyeOff, FiEye, FiImage } from "react-icons/fi";
import { AiFillCheckCircle } from "react-icons/ai";
import { MdCameraAlt, MdArrowDropDown } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { data, data5 } from "../Data/data";
import emailjs from "@emailjs/browser";

import Login1 from "../../Images/Sign_up.png";

import {
  IconButton,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Input,
  Modal,
  Typography,
  Box,
  Checkbox,
  Autocomplete,
  TextField,
} from "@mui/material";

const Signup = () => {
  const { innerWidth: width } = window;
  const [file2, setFile2] = React.useState("");
  const [file3, setFile3] = React.useState("");
  const [firstname, setFirstname] = React.useState("");
  const [district, setDistrict] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [province, setProvince] = React.useState("");
  const [country, setCountry] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmpassword, setConfirmpassword] = React.useState("");
  const [mobilephone, setMobilephone] = React.useState("");
  const [screen, setScreen] = React.useState("");
  const [postalcode, setPostalCode] = React.useState("");
  const [companyname, setCompanyname] = React.useState("");
  const [juristicPersonNumber, setJuristicPersonNumber] = React.useState("");
  const [website, setWebsite] = React.useState("");
  const [bankname, setBankname] = React.useState("");
  const [branchname, setBranchname] = React.useState("");
  const [accountname, setAccountname] = React.useState("");
  const [accountnumber, setAccountnumber] = React.useState("");

  const [type, setType] = React.useState("password");
  const [type2, setType2] = React.useState("password");
  const [values, setValues] = React.useState(false);
  const [values2, setValues2] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);

  const [open3, setOpen3] = React.useState(false);
  const [open4, setOpen4] = React.useState(false);
  const [checked, setChecked] = React.useState(false);
  const [checked2, setChecked2] = React.useState(false);

  const [images, setImages] = React.useState([]);
  const [imageURLs, setImageURLs] = React.useState([]);
  const [languages, setLanguages] = React.useState("");
  // const [answerLanguages, setAnswerLanguages] = React.useState("");
  const Form = React.useRef();

  React.useEffect(() => {
    if (images.length < 1) return;
    const newImageUrls = [];
    images.forEach((image) => newImageUrls.push(URL.createObjectURL(image)));
    setImageURLs(newImageUrls);
  }, [images]);

  function onImageChange(e) {
    setImages([...e.target.files]);
  }

  const navigate = useNavigate();

  const handleOpen = () => setOpen(true);

  const handleClose = () => {
    setOpen(false);
    setChecked(false);
    setOpen2(true);
  };

  const send_Mail = (e) => {
    e.preventDefault();
    var templateParams = {
      user_email: `${email}`,
    };
    emailjs
      .send(
        "service_u5757dr",
        "template_dueh1d9",
        templateParams,
        "Npnv-PIsN0-rxduac"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    // e.target.reset();
    handleClose();
    navigate("/Login");
  };

  const handleClose2 = () => setOpen2(false);
  const handleClose3 = () => setOpen3(false);

  const handleClose4 = () => {
    setOpen3(false);
    setChecked2(false);
    setOpen4(true);
  };

  const handleClose5 = () => {
    setOpen4(false);
    navigate("/Login");
  };

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
      if (type2 === "password") {
        setValues2(!values2);
        setType2("text");
      } else if (type === "text") {
        setValues2(!values2);
        setType2("password");
      }
    }
  };

  const handleChange = (event) => {
    // console.log(event.target.value);
    setScreen(event.target.value);
  };

  const handleChange2 = (event) => {
    setChecked(event.target.checked);
    setChecked2(event.target.checked);
  };

  return (
    <>
      <header
        className="App-header"
        style={{ color: "transparent", position: "absolute" }}
      >
        <Navbars />
      </header>

      <div>
        <div
          style={{
            position: "absolute",
            width: "50%",
            height: " -webkit-fill-available",
            background: "#66C0FE",
          }}
        >
          <img
            src={Login1}
            alt="resgister"
            style={{ width: 460, position: "absolute", top: " 10%", left: 100 }}
          />
        </div>

        <div
          style={{
            position: "absolute",
            width: "50%",
            height: "-webkit-fill-available",
            left: "50%",
            background: "#FFF3CC",
          }}
        >
          {screen === "" ? (
            <div>
              <div
                style={{
                  position: "fixed",
                  top: 20,
                  left: width * 0.59,
                  textAlign: "-webkit-center",
                  width: 500,
                  background: " #FFFFFF",
                  boxShadow: " 0px 4px 25px rgba(0, 0, 0, 0.15)",
                  borderRadius: 20,
                  padding: 30,
                }}
              >
                <div
                  style={{
                    fontWeight: 400,
                    fontSize: 18,
                    textDecorationLine: "none",
                    color: "#D9D9D9",
                    textAlign: "left",
                    marginBottom: 20,
                    float: "left",
                  }}
                >
                  <BsArrowLeftShort />
                  <Link
                    to="/"
                    style={{
                      color: "#D9D9D9",
                      fontSize: 18,
                      textDecorationLine: "none",
                    }}
                  >
                    Home
                  </Link>
                </div>
                <div
                  style={{
                    fontWeight: 400,
                    textAlign: "right",
                    marginBottom: 20,
                    float: "right",
                    color: "#D9D9D9",
                  }}
                >
                  <Link
                    to="/Login"
                    style={{
                      color: "#D9D9D9",
                      fontSize: 18,
                      textDecorationLine: "none",
                    }}
                  >
                    Login
                  </Link>
                  <BsArrowRightShort />
                </div>

                <h2 className="textSignup">Sign up</h2>
                <div>
                  <FormControl style={{ display: "inherit" }}>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
                    >
                      <FormControlLabel
                        checked={true}
                        onChange={handleChange}
                        name="radio-buttons"
                        value=""
                        control={<Radio />}
                        label="For Customers"
                        style={{ marginRight: 50 }}
                      />
                      <FormControlLabel
                        onChange={handleChange}
                        name="radio-buttons"
                        value="For Translators"
                        control={<Radio />}
                        label="For Translators"
                      />
                    </RadioGroup>
                  </FormControl>
                </div>

                <div style={{ textAlign: "left", marginTop: 10 }}>
                  <p
                    style={{
                      fontWeight: 500,
                      fontSize: 15,
                      color: "#242424",
                    }}
                  >
                    Name
                  </p>
                  <input
                    type="text"
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                    placeholder="Name"
                    style={{
                      background: "#FFFFFF",
                      border: "1px solid #F1F1F1 ",
                      borderRadius: 20,
                      width: "100%",
                      height: 30,
                      padding: 20,
                      paddingLeft: 12,
                      margin: 10,
                      fontSize: 13,
                    }}
                  />
                </div>

                <div style={{ textAlign: "left" }}>
                  <p
                    style={{
                      fontWeight: 500,
                      fontSize: 15,
                      color: "#242424",
                    }}
                  >
                    E-mail
                  </p>
                  <input
                    type="text"
                    name="user_email"
                    // value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Example@mail.com"
                    style={{
                      background: "#FFFFFF",
                      border: "1px solid #F1F1F1",
                      borderRadius: 20,
                      width: "100%",
                      height: 30,
                      padding: 20,
                      paddingLeft: 12,
                      margin: 10,
                      fontSize: 13,
                    }}
                  />
                </div>

                <div style={{ textAlign: "left" }}>
                  <p
                    style={{
                      fontWeight: 500,
                      fontSize: 15,
                      color: "#242424",
                    }}
                  >
                    Password
                  </p>

                  <input
                    type={type}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    style={{
                      background: "#FFFFFF",
                      border: "1px solid #F1F1F1 ",
                      borderRadius: 20,
                      borderColor: "#F1F1F1",
                      width: "100%",
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
                    style={{ position: "absolute", right: 40, top: 380 }}
                  >
                    {values ? <FiEye /> : <FiEyeOff />}
                  </IconButton>
                </div>

                <div style={{ textAlign: "left" }}>
                  <p
                    style={{
                      fontWeight: 500,
                      fontSize: 15,
                      color: "#242424",
                    }}
                  >
                    Confirm password
                  </p>

                  <input
                    type={type2}
                    value={confirmpassword}
                    onChange={(e) => setConfirmpassword(e.target.value)}
                    placeholder="Enter your password"
                    style={{
                      background: "#FFFFFF",
                      border: "1px solid #F1F1F1 ",
                      borderRadius: 20,
                      borderColor: "#F1F1F1",
                      width: "100%",
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
                    style={{ position: "absolute", right: 40, top: 465 }}
                  >
                    {values2 ? <FiEye /> : <FiEyeOff />}
                  </IconButton>
                </div>

                <div style={{ textAlign: "left", marginBottom: 10 }}>
                  <p
                    style={{
                      fontWeight: 500,
                      fontSize: 15,
                      color: "#242424",
                    }}
                  >
                    Mobile phone
                  </p>

                  <input
                    type="text"
                    value={mobilephone}
                    onChange={(e) => setMobilephone(e.target.value)}
                    placeholder="Mobile phone"
                    style={{
                      background: "#FFFFFF",
                      border: "1px solid #F1F1F1 ",
                      borderRadius: 20,
                      borderColor: "#F1F1F1",
                      width: "100%",
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
                    width: "100%",
                    borderRadius: 20,
                    background: " #001E33",
                    height: 40,
                    color: "#FFFFFF",
                    fontSize: 18,
                    borderColor: "transparent",
                  }}
                  onClick={() => setScreen("3")}
                >
                  Next
                </button>
              </div>
            </div>
          ) : screen === "For Translators" ? (
            <div>
              <div
                style={{
                  position: "fixed",
                  top: 20,
                  left: width * 0.59,
                  textAlign: "-webkit-center",
                  width: 500,
                  background: " #FFFFFF",
                  boxShadow: " 0px 4px 25px rgba(0, 0, 0, 0.15)",
                  borderRadius: 20,
                  padding: 30,
                }}
              >
                <div
                  style={{
                    fontWeight: 400,
                    fontSize: 18,
                    textDecorationLine: "none",
                    color: "#D9D9D9",
                    textAlign: "left",
                    marginBottom: 20,
                    float: "left",
                  }}
                >
                  <BsArrowLeftShort />
                  <Link
                    to="/"
                    style={{
                      color: "#D9D9D9",
                      fontSize: 18,
                      textDecorationLine: "none",
                    }}
                  >
                    Home
                  </Link>
                </div>
                <div
                  style={{
                    fontWeight: 400,
                    textAlign: "right",
                    marginBottom: 20,
                    float: "right",
                    color: "#D9D9D9",
                  }}
                >
                  <Link
                    to="/Login"
                    style={{
                      color: "#D9D9D9",
                      fontSize: 18,
                      textDecorationLine: "none",
                    }}
                  >
                    Login
                  </Link>
                  <BsArrowRightShort />
                </div>

                <h2 className="textSignup">Sign up</h2>

                <div>
                  <FormControl style={{ display: "inherit" }}>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
                    >
                      <FormControlLabel
                        onChange={handleChange}
                        name="radio-buttons"
                        value=""
                        control={<Radio />}
                        label="For Customers"
                        style={{ marginRight: 50 }}
                      />
                      <FormControlLabel
                        checked={true}
                        onChange={handleChange}
                        name="radio-buttons"
                        value="For Translators"
                        control={<Radio />}
                        label="For Translators"
                      />
                    </RadioGroup>
                  </FormControl>
                </div>

                <div style={{ textAlign: "left", marginTop: 10 }}>
                  <p
                    style={{
                      fontWeight: 500,
                      fontSize: 15,
                      color: "#242424",
                    }}
                  >
                    Name
                  </p>
                  <input
                    type="text"
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                    placeholder="Name"
                    style={{
                      background: "#FFFFFF",
                      border: "1px solid #F1F1F1 ",
                      borderRadius: 20,
                      width: "100%",
                      height: 30,
                      padding: 20,
                      paddingLeft: 12,
                      margin: 10,
                      fontSize: 13,
                    }}
                  />
                </div>

                <div style={{ textAlign: "left" }}>
                  <p
                    style={{
                      fontWeight: 500,
                      fontSize: 15,
                      color: "#242424",
                    }}
                  >
                    E-mail
                  </p>
                  <input
                    type="text"
                    name="user_email"
                    // value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Example@mail.com"
                    style={{
                      background: "#FFFFFF",
                      border: "1px solid #F1F1F1",
                      borderRadius: 20,
                      width: "100%",
                      height: 30,
                      padding: 20,
                      paddingLeft: 12,
                      margin: 10,
                      fontSize: 13,
                    }}
                  />
                </div>

                <div style={{ textAlign: "left" }}>
                  <p
                    style={{
                      fontWeight: 500,
                      fontSize: 15,
                      color: "#242424",
                    }}
                  >
                    Password
                  </p>

                  <input
                    type={type}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    style={{
                      background: "#FFFFFF",
                      border: "1px solid #F1F1F1 ",
                      borderRadius: 20,
                      borderColor: "#F1F1F1",
                      width: "100%",
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
                    style={{ position: "absolute", right: 40, top: 380 }}
                  >
                    {values ? <FiEye /> : <FiEyeOff />}
                  </IconButton>
                </div>

                <div style={{ textAlign: "left" }}>
                  <p
                    style={{
                      fontWeight: 500,
                      fontSize: 15,
                      color: "#242424",
                    }}
                  >
                    Confirm password
                  </p>

                  <input
                    type={type2}
                    value={confirmpassword}
                    onChange={(e) => setConfirmpassword(e.target.value)}
                    placeholder="Enter your password"
                    style={{
                      background: "#FFFFFF",
                      border: "1px solid #F1F1F1 ",
                      borderRadius: 20,
                      borderColor: "#F1F1F1",
                      width: "100%",
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
                    style={{ position: "absolute", right: 40, top: 465 }}
                  >
                    {values2 ? <FiEye /> : <FiEyeOff />}
                  </IconButton>
                </div>

                <div style={{ textAlign: "left", marginBottom: 10 }}>
                  <p
                    style={{
                      fontWeight: 500,
                      fontSize: 15,
                      color: "#242424",
                    }}
                  >
                    Mobile phone
                  </p>

                  <input
                    type="text"
                    value={mobilephone}
                    onChange={(e) => setMobilephone(e.target.value)}
                    placeholder="Mobile phone"
                    style={{
                      background: "#FFFFFF",
                      border: "1px solid #F1F1F1 ",
                      borderRadius: 20,
                      borderColor: "#F1F1F1",
                      width: "100%",
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
                    width: "100%",
                    borderRadius: 20,
                    background: " #001E33",
                    height: 40,
                    color: "#FFFFFF",
                    fontSize: 18,
                    borderColor: "transparent",
                  }}
                  onClick={() => setScreen("4")}
                >
                  Next
                </button>
              </div>
            </div>
          ) : screen === "3" ? (
            <>
              <div
                style={{
                  position: "fixed",
                  top: 120,
                  left: width * 0.59,
                  textAlign: "-webkit-center",
                  width: 500,
                  background: " #FFFFFF",
                  boxShadow: " 0px 4px 25px rgba(0, 0, 0, 0.15)",
                  borderRadius: 20,
                  padding: 30,
                }}
              >
                <button
                  style={{
                    fontWeight: 400,
                    fontSize: 18,
                    textDecorationLine: "none",
                    color: "#D9D9D9",
                    textAlign: "left",
                    marginBottom: 20,
                    float: "left",
                    background: "transparent",
                    border: "transparent",
                  }}
                  onClick={() => setScreen("")}
                >
                  <BsArrowLeftShort />
                  <p
                    style={{
                      color: "#D9D9D9",
                      fontSize: 18,
                      textDecorationLine: "none",
                      float: "right",
                    }}
                  >
                    Back
                  </p>
                </button>

                <button
                  style={{
                    fontWeight: 400,
                    textAlign: "right",
                    marginBottom: 20,
                    float: "right",
                    color: "#D9D9D9",
                    background: "transparent",
                    border: "transparent",
                  }}
                  onClick={() => setScreen("5")}
                >
                  <p
                    style={{
                      color: "#D9D9D9",
                      fontSize: 18,
                      textDecorationLine: "none",
                      float: "left",
                    }}
                  >
                    Skip
                  </p>
                  <BsArrowRightShort />
                </button>

                <h2 className="textSignup">Sign up</h2>
                <div style={{ margin: 25 }}>
                  <p>Upload Image</p>
                </div>
                {images.length < 1 ? (
                  <div
                    style={{
                      background: "#FFFFFF",
                      borderRadius: 100,
                      width: 83,
                      height: 80,
                      padding: 15,
                      position: "relative",
                      borderStyle: " dotted ",
                      borderColor: "#0865A8",
                      borderWidth: 2,
                      margin: 25,
                    }}
                  >
                    <label htmlFor="icon-button-file">
                      <Input
                        accept="image/*"
                        id="icon-button-file"
                        type="file"
                        style={{ display: "none" }}
                        onChange={onImageChange}
                      />
                      <IconButton
                        color="primary"
                        aria-label="upload picture"
                        component="span"
                      >
                        <MdCameraAlt
                          style={{ fontSize: 35, position: "absolute" }}
                        />
                        <p
                          style={{
                            fontSize: 8,
                            position: "absolute",
                            top: 20,
                            width: 63,
                          }}
                        >
                          Upload File
                        </p>
                      </IconButton>
                    </label>
                  </div>
                ) : (
                  <div
                    style={{
                      borderRadius: 100,
                      width: 100,
                      height: 100,
                      position: "relative",
                      borderWidth: 2,
                      margin: 25,
                    }}
                  >
                    <label htmlFor="icon-button-file">
                      <Input
                        accept="image/*"
                        id="icon-button-file"
                        type="file"
                        style={{ display: "none" }}
                        onChange={onImageChange}
                      />
                      <IconButton
                        color="primary"
                        aria-label="upload picture"
                        component="span"
                      >
                        {imageURLs.map((imageSrc, idx) => (
                          <img
                            key={idx}
                            src={imageSrc}
                            alt="imageURLs"
                            style={{
                              position: "absolute",
                              width: 90,
                              height: 90,
                              borderRadius: "100%",
                              top: -20,
                            }}
                          />
                        ))}
                      </IconButton>
                    </label>
                  </div>
                )}

                <button
                  style={{
                    width: "100%",
                    borderRadius: 20,
                    background: " #001E33",
                    height: 40,
                    color: "#FFFFFF",
                    fontSize: 18,
                    borderColor: "transparent",
                    marginBottom: 10,
                  }}
                  onClick={() => setScreen("5")}
                >
                  Next
                </button>
              </div>
            </>
          ) : screen === "4" ? (
            <>
              <div
                style={{
                  position: "fixed",
                  top: 120,
                  left: width * 0.59,
                  textAlign: "-webkit-center",
                  width: 500,
                  background: " #FFFFFF",
                  boxShadow: " 0px 4px 25px rgba(0, 0, 0, 0.15)",
                  borderRadius: 20,
                  padding: 30,
                }}
              >
                <button
                  style={{
                    fontWeight: 400,
                    fontSize: 18,
                    textDecorationLine: "none",
                    color: "#D9D9D9",
                    textAlign: "left",
                    marginBottom: 20,
                    float: "left",
                    background: "transparent",
                    border: "transparent",
                  }}
                  onClick={() => setScreen("For Translators")}
                >
                  <BsArrowLeftShort />
                  <p
                    to="/"
                    style={{
                      color: "#D9D9D9",
                      fontSize: 18,
                      textDecorationLine: "none",
                      float: "right",
                    }}
                  >
                    Back
                  </p>
                </button>

                <button
                  style={{
                    fontWeight: 400,
                    textAlign: "right",
                    marginBottom: 20,
                    float: "right",
                    color: "#D9D9D9",
                    background: "transparent",
                    border: "transparent",
                  }}
                  onClick={() => setScreen("6")}
                >
                  <p
                    style={{
                      color: "#D9D9D9",
                      fontSize: 18,
                      textDecorationLine: "none",
                      float: "left",
                    }}
                  >
                    Skip
                  </p>
                  <BsArrowRightShort />
                </button>

                <h2 className="textSignup">Sign up</h2>
                <div style={{ margin: 25 }}>
                  <p>Upload Image</p>
                </div>
                {images.length < 1 ? (
                  <div
                    style={{
                      background: "#FFFFFF",
                      borderRadius: 100,
                      width: 83,
                      height: 80,
                      padding: 15,
                      position: "relative",
                      borderStyle: " dotted ",
                      borderColor: "#0865A8",
                      borderWidth: 2,
                      margin: 25,
                    }}
                  >
                    <label htmlFor="icon-button-file">
                      <Input
                        accept="image/*"
                        id="icon-button-file"
                        type="file"
                        style={{ display: "none" }}
                        onChange={onImageChange}
                      />
                      <IconButton
                        color="primary"
                        aria-label="upload picture"
                        component="span"
                      >
                        <MdCameraAlt
                          style={{ fontSize: 35, position: "absolute" }}
                        />
                        <p
                          style={{
                            fontSize: 8,
                            position: "absolute",
                            top: 20,
                            width: 63,
                          }}
                        >
                          Upload File
                        </p>
                      </IconButton>
                    </label>
                  </div>
                ) : (
                  <div
                    style={{
                      borderRadius: 100,
                      width: 100,
                      height: 100,
                      position: "relative",
                      borderWidth: 2,
                      margin: 25,
                    }}
                  >
                    <label htmlFor="icon-button-file">
                      <Input
                        accept="image/*"
                        id="icon-button-file"
                        type="file"
                        style={{ display: "none" }}
                        onChange={onImageChange}
                      />
                      <IconButton
                        color="primary"
                        aria-label="upload picture"
                        component="span"
                      >
                        {imageURLs.map((imageSrc, idx) => (
                          <img
                            key={idx}
                            src={imageSrc}
                            alt="imageURLs"
                            style={{
                              position: "absolute",
                              width: 90,
                              height: 90,
                              borderRadius: "100%",
                              top: -20,
                            }}
                          />
                        ))}
                      </IconButton>
                    </label>
                  </div>
                )}

                <button
                  style={{
                    width: "100%",
                    borderRadius: 20,
                    background: " #001E33",
                    height: 40,
                    color: "#FFFFFF",
                    fontSize: 18,
                    borderColor: "transparent",
                    marginBottom: 10,
                  }}
                  onClick={() => setScreen("6")}
                >
                  Next
                </button>
              </div>
            </>
          ) : screen === "5" ? (
            <div>
              <div
                style={{
                  position: "fixed",
                  top: 20,
                  left: width * 0.59,
                  textAlign: "-webkit-center",
                  width: 500,
                  background: " #FFFFFF",
                  boxShadow: " 0px 4px 25px rgba(0, 0, 0, 0.15)",
                  borderRadius: 20,
                  padding: 30,
                }}
              >
                <button
                  style={{
                    fontWeight: 400,
                    fontSize: 18,
                    textDecorationLine: "none",
                    color: "#D9D9D9",
                    textAlign: "left",
                    marginBottom: 20,
                    float: "left",
                    background: "transparent",
                    border: "transparent",
                  }}
                  onClick={() => setScreen("3")}
                >
                  <BsArrowLeftShort />
                  <p
                    style={{
                      color: "#D9D9D9",
                      fontSize: 18,
                      textDecorationLine: "none",
                      float: "right",
                    }}
                  >
                    Back
                  </p>
                </button>

                <h2 className="textSignup">Sign up</h2>

                <div style={{ textAlign: "left", marginTop: 10 }}>
                  <p
                    style={{
                      fontWeight: 500,
                      fontSize: 15,
                      color: "#242424",
                    }}
                  >
                    Address
                  </p>
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Address"
                    style={{
                      background: "#FFFFFF",
                      border: "1px solid #F1F1F1 ",
                      borderRadius: 20,
                      width: "100%",
                      height: 30,
                      padding: 20,
                      paddingLeft: 12,
                      margin: 10,
                      fontSize: 13,
                    }}
                  />
                </div>

                <div style={{ textAlign: "left" }}>
                  <p
                    style={{
                      fontWeight: 500,
                      fontSize: 15,
                      color: "#242424",
                    }}
                  >
                    District
                  </p>
                  <input
                    type="text"
                    value={district}
                    onChange={(e) => setDistrict(e.target.value)}
                    placeholder="District"
                    style={{
                      background: "#FFFFFF",
                      border: "1px solid #F1F1F1 ",
                      borderRadius: 20,
                      width: "100%",
                      height: 30,
                      padding: 20,
                      paddingLeft: 12,
                      margin: 10,
                      fontSize: 13,
                    }}
                  />
                </div>

                <div style={{ textAlign: "left" }}>
                  <p
                    style={{
                      fontWeight: 500,
                      fontSize: 15,
                      color: "#242424",
                    }}
                  >
                    Province
                  </p>
                  <input
                    type="text"
                    value={province}
                    onChange={(e) => setProvince(e.target.value)}
                    placeholder="Province"
                    style={{
                      background: "#FFFFFF",
                      border: "1px solid #F1F1F1 ",
                      borderRadius: 20,
                      borderColor: "#F1F1F1",
                      width: "100%",
                      height: 30,
                      padding: 20,
                      paddingLeft: 12,
                      margin: 10,
                      fontSize: 13,
                    }}
                  />
                </div>

                <div style={{ textAlign: "left" }}>
                  <p
                    style={{
                      fontWeight: 500,
                      fontSize: 15,
                      color: "#242424",
                    }}
                  >
                    Country
                  </p>
                  <input
                    type="text"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    placeholder="Country"
                    style={{
                      background: "#FFFFFF",
                      border: "1px solid #F1F1F1 ",
                      borderRadius: 20,
                      borderColor: "#F1F1F1",
                      width: "100%",
                      height: 30,
                      padding: 20,
                      paddingLeft: 12,
                      margin: 10,
                      fontSize: 13,
                    }}
                  />
                </div>

                <div style={{ textAlign: "left", marginBottom: 10 }}>
                  <p
                    style={{
                      fontWeight: 500,
                      fontSize: 15,
                      color: "#242424",
                    }}
                  >
                    Postal Code
                  </p>
                  <input
                    type="text"
                    value={postalcode}
                    onChange={(e) => setPostalCode(e.target.value)}
                    placeholder="Mobile phone"
                    style={{
                      background: "#FFFFFF",
                      border: "1px solid #F1F1F1 ",
                      borderRadius: 20,
                      borderColor: "#F1F1F1",
                      width: "100%",
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
                    width: "100%",
                    borderRadius: 20,
                    background: " #001E33",
                    height: 40,
                    color: "#FFFFFF",
                    fontSize: 18,
                    borderColor: "transparent",
                  }}
                  onClick={handleOpen}
                >
                  Sign up
                </button>
              </div>

              <Modal
                keepMounted
                open={open}
                onClose={handleClose}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -70%)",
                    width: 600,
                    bgcolor: "background.paper",
                    boxShadow: 24,
                    p: 4,
                    borderRadius: 5,
                    border: "1px solid #E5E5E5",
                    textAlign: "center",
                  }}
                >
                  <img src={logo} alt="Logo" style={{ width: 100 }} />
                  <Typography
                    id="keep-mounted-modal-description"
                    sx={{ mt: 2, fontWeight: 700 }}
                  >
                    Terms and Conditions
                  </Typography>
                  <Typography
                    id="keep-mounted-modal-description"
                    sx={{
                      mt: 2,
                      textAlign: "left",
                      overflowY: "auto",
                      height: 200,
                    }}
                  >
                    If you click on "Allow all cookies", you consent to the
                    storage and accessing of information stored to such cookies
                    on your device, to the processing of your respective
                    personal data, and to the transfer of this data to countries
                    that do not ensure the same level of data protection as the
                    EU, in particular the USA. You can find more information on
                    the subject of your consents in our Privacy Policy and under
                    "Show details". We use cookies to store your preferences
                    when using our website, to statistically analyze your usage
                    behavior, and to display personalized advertising on
                    third-party websites or social media. This data may be used
                    by us and our partners to enrich usage profiles. You can
                    revoke your consent at any time, but only with effect for
                    the future. To do so, please click on the link to our
                    Privacy Policy, which you will find in the footer of our
                    website, and use the "Change your consent" function there.
                  </Typography>
                  <div
                    style={{
                      textAlign: "left",
                      borderTop: "1px solid #C4C4C4",
                    }}
                  >
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={checked}
                          onChange={handleChange2}
                          inputProps={{ "aria-label": "controlled" }}
                        />
                      }
                      label="accept the terms and conditions"
                    />
                  </div>
                  <div>
                    {checked === false ? (
                      <button
                        style={{
                          width: "30%",
                          borderRadius: 20,
                          background: "#E0E0E0",
                          height: 40,
                          color: "#FFFFFF",
                          fontSize: 18,
                          borderColor: "transparent",
                          position: "relative",
                          left: "35%",
                        }}
                        disabled
                      >
                        Submit
                      </button>
                    ) : (
                      <button
                        style={{
                          width: "30%",
                          borderRadius: 20,
                          background: "#001E33",
                          height: 40,
                          color: "#FFFFFF",
                          fontSize: 18,
                          borderColor: "transparent",
                          position: "relative",
                          left: "35%",
                        }}
                        onClick={send_Mail}
                      >
                        Submit
                      </button>
                    )}
                  </div>
                </Box>
              </Modal>

              <Modal
                keepMounted
                open={open2}
                onClose={handleClose2}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -70%)",
                    width: 400,
                    bgcolor: "background.paper",
                    boxShadow: 24,
                    p: 4,
                    borderRadius: 5,
                    border: "1px solid #E5E5E5",
                    textAlign: "center",
                  }}
                >
                  <AiFillCheckCircle
                    style={{ width: 100, height: 80, color: "#46BC52" }}
                  />
                  <Typography
                    id="keep-mounted-modal-description"
                    sx={{ mt: 2, fontWeight: 700 }}
                  >
                    Your translator application has been sent. Wait for
                    confirmation by email
                  </Typography>
                </Box>
              </Modal>
            </div>
          ) : screen === "6" ? (
            <div>
              <div
                style={{
                  position: "fixed",
                  top: 20,
                  left: width * 0.59,
                  textAlign: "-webkit-center",
                  width: 500,
                  background: " #FFFFFF",
                  boxShadow: " 0px 4px 25px rgba(0, 0, 0, 0.15)",
                  borderRadius: 20,
                  padding: 30,
                }}
              >
                <button
                  style={{
                    fontWeight: 400,
                    fontSize: 18,
                    textDecorationLine: "none",
                    color: "#D9D9D9",
                    textAlign: "left",
                    marginBottom: 20,
                    float: "left",
                    background: "transparent",
                    border: "transparent",
                  }}
                  onClick={() => setScreen("4")}
                >
                  <BsArrowLeftShort />
                  <p
                    style={{
                      color: "#D9D9D9",
                      fontSize: 18,
                      textDecorationLine: "none",
                      float: "right",
                    }}
                  >
                    Back
                  </p>
                </button>

                <h2 className="textSignup">Sign up</h2>
                <div>
                  <FormControl style={{ display: "inherit" }}>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
                    >
                      <FormControlLabel
                        checked
                        onChange={handleChange}
                        name="radio-buttons"
                        value=""
                        control={<Radio />}
                        label="Company"
                        style={{ marginRight: 50 }}
                      />
                      <FormControlLabel
                        onChange={handleChange}
                        name="radio-buttons"
                        value="Freelance Translators"
                        control={<Radio />}
                        label="Freelance Translators"
                      />
                    </RadioGroup>
                  </FormControl>
                </div>

                <div style={{ textAlign: "left", marginTop: 10 }}>
                  <p
                    style={{
                      fontWeight: 500,
                      fontSize: 15,
                      color: "#242424",
                    }}
                  >
                    Company name
                  </p>
                  <input
                    type="text"
                    value={companyname}
                    onChange={(e) => setCompanyname(e.target.value)}
                    placeholder="Company name"
                    style={{
                      background: "#FFFFFF",
                      border: "1px solid #F1F1F1 ",
                      borderRadius: 20,
                      width: "100%",
                      height: 30,
                      padding: 20,
                      paddingLeft: 12,
                      margin: 10,
                      fontSize: 13,
                    }}
                  />
                </div>

                <div style={{ textAlign: "left" }}>
                  <p
                    style={{
                      fontWeight: 500,
                      fontSize: 15,
                      color: "#242424",
                    }}
                  >
                    Juristic Person Number
                  </p>
                  <input
                    type="text"
                    value={juristicPersonNumber}
                    onChange={(e) => setJuristicPersonNumber(e.target.value)}
                    placeholder="Juristic Person Number"
                    style={{
                      background: "#FFFFFF",
                      border: "1px solid #F1F1F1",
                      borderRadius: 20,
                      width: "100%",
                      height: 30,
                      padding: 20,
                      paddingLeft: 12,
                      margin: 10,
                      fontSize: 13,
                    }}
                  />
                </div>

                <div style={{ textAlign: "left", marginBottom: 10 }}>
                  <p
                    style={{
                      fontWeight: 500,
                      fontSize: 15,
                      color: "#242424",
                    }}
                  >
                    Website
                  </p>
                  <input
                    type="text"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                    placeholder="https://example.com"
                    style={{
                      background: "#FFFFFF",
                      border: "1px solid #F1F1F1 ",
                      borderRadius: 20,
                      borderColor: "#F1F1F1",
                      width: "100%",
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
                    width: "100%",
                    borderRadius: 20,
                    background: " #001E33",
                    height: 40,
                    color: "#FFFFFF",
                    fontSize: 18,
                    borderColor: "transparent",
                  }}
                  onClick={() => setScreen("8")}
                >
                  Next
                </button>
              </div>
            </div>
          ) : screen === "Freelance Translators" ? (
            <div>
              <div
                style={{
                  position: "fixed",
                  top: 20,
                  left: width * 0.59,
                  textAlign: "-webkit-center",
                  width: 500,
                  background: " #FFFFFF",
                  boxShadow: " 0px 4px 25px rgba(0, 0, 0, 0.15)",
                  borderRadius: 20,
                  padding: 30,
                }}
              >
                <button
                  style={{
                    fontWeight: 400,
                    fontSize: 18,
                    textDecorationLine: "none",
                    color: "#D9D9D9",
                    textAlign: "left",
                    marginBottom: 20,
                    float: "left",
                    background: "transparent",
                    border: "transparent",
                  }}
                  onClick={() => setScreen("4")}
                >
                  <BsArrowLeftShort />
                  <p
                    style={{
                      color: "#D9D9D9",
                      fontSize: 18,
                      textDecorationLine: "none",
                      float: "right",
                    }}
                  >
                    Back
                  </p>
                </button>

                <h2 className="textSignup" style={{ marginTop: 30 }}>
                  Sign up
                </h2>
                <div>
                  <FormControl style={{ display: "inherit" }}>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
                    >
                      <FormControlLabel
                        onChange={handleChange}
                        name="radio-buttons"
                        value="6"
                        control={<Radio />}
                        label="Company"
                        style={{ marginRight: 50 }}
                      />
                      <FormControlLabel
                        checked
                        onChange={handleChange}
                        name="radio-buttons"
                        value="Freelance Translators"
                        control={<Radio />}
                        label="Freelance Translators"
                      />
                    </RadioGroup>
                  </FormControl>
                </div>
                <div style={{ textAlign: "left" }}>
                  <p
                    style={{
                      fontWeight: 500,
                      fontSize: 20,
                      color: " #242424",
                    }}
                  >
                    Upload a picture of your ID card.
                  </p>
                  <p
                    style={{
                      fontWeight: 500,
                      fontSize: 14,
                      color: " #242424",
                    }}
                  >
                    (such as JPG, PDF, PNG and the file size does not exceed
                    25Mb.)
                  </p>
                  <div style={{ textAlign: "center" }}>
                    {file2 === "" ? (
                      <div
                        style={{
                          background: "#FFFFFF",
                          borderRadius: 20,
                          width: "100%",
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
                            onChange={(e) => setFile2(e.target.value)}
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
                            <p
                              style={{
                                fontSize: 10,
                                position: "absolute",
                                top: 60,
                                width: 100,
                              }}
                            >
                              Upload File
                            </p>
                          </IconButton>
                        </label>
                      </div>
                    ) : (
                      <div
                        style={{
                          background: "#FFFFFF",
                          borderRadius: 20,
                          width: "100%",
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
                            onChange={(e) => setFile2(e.target.value)}
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
                            <p
                              style={{
                                fontSize: 10,
                                position: "absolute",
                                top: 60,
                                width: 100,
                              }}
                            >
                              {file2}
                            </p>
                          </IconButton>
                        </label>
                      </div>
                    )}
                  </div>
                  <p
                    style={{
                      color: "#666666",
                      textDecorationLine: "underline",
                      fontSize: 14,
                    }}
                  >
                    An example of uploading a picture of your ID card.
                  </p>
                </div>
                <hr style={{ width: "97%", height: 2 }} />
                <button
                  style={{
                    width: "100%",
                    borderRadius: 20,
                    background: " #001E33",
                    height: 40,
                    color: "#FFFFFF",
                    fontSize: 18,
                    borderColor: "transparent",
                  }}
                  onClick={() => setScreen("9")}
                >
                  Next
                </button>
              </div>
            </div>
          ) : screen === "8" ? (
            <div>
              <div
                style={{
                  position: "fixed",
                  top: 20,
                  left: width * 0.59,
                  textAlign: "-webkit-center",
                  width: 500,
                  background: " #FFFFFF",
                  boxShadow: " 0px 4px 25px rgba(0, 0, 0, 0.15)",
                  borderRadius: 20,
                  padding: 30,
                }}
              >
                <button
                  style={{
                    fontWeight: 400,
                    fontSize: 18,
                    textDecorationLine: "none",
                    color: "#D9D9D9",
                    textAlign: "left",
                    marginBottom: 20,
                    float: "left",
                    background: "transparent",
                    border: "transparent",
                  }}
                  onClick={() => setScreen("6")}
                >
                  <BsArrowLeftShort />
                  <p
                    style={{
                      color: "#D9D9D9",
                      fontSize: 18,
                      textDecorationLine: "none",
                      float: "right",
                    }}
                  >
                    Back
                  </p>
                </button>

                <h2 className="textSignup" style={{ marginTop: 30 }}>
                  Sign up
                </h2>
                <div>
                  <FormControl style={{ display: "inherit" }}>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
                    >
                      <FormControlLabel
                        checked
                        onChange={handleChange}
                        name="radio-buttons"
                        value=""
                        control={<Radio />}
                        label="Company"
                        style={{ marginRight: 50 }}
                      />
                      <FormControlLabel
                        onChange={handleChange}
                        name="radio-buttons"
                        value="Freelance Translators"
                        control={<Radio />}
                        label="Freelance Translators"
                      />
                    </RadioGroup>
                  </FormControl>
                </div>

                <div style={{ textAlign: "left", marginTop: 10 }}>
                  <p
                    style={{
                      fontWeight: 500,
                      fontSize: 15,
                      color: "#242424",
                    }}
                  >
                    Address
                  </p>
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Address"
                    style={{
                      background: "#FFFFFF",
                      border: "1px solid #F1F1F1 ",
                      borderRadius: 20,
                      width: "100%",
                      height: 30,
                      padding: 20,
                      paddingLeft: 12,
                      margin: 10,
                      fontSize: 13,
                    }}
                  />
                </div>

                <div style={{ textAlign: "left" }}>
                  <p
                    style={{
                      fontWeight: 500,
                      fontSize: 15,
                      color: "#242424",
                    }}
                  >
                    District
                  </p>
                  <input
                    type="text"
                    value={district}
                    onChange={(e) => setDistrict(e.target.value)}
                    placeholder="District"
                    style={{
                      background: "#FFFFFF",
                      border: "1px solid #F1F1F1 ",
                      borderRadius: 20,
                      width: "100%",
                      height: 30,
                      padding: 20,
                      paddingLeft: 12,
                      margin: 10,
                      fontSize: 13,
                    }}
                  />
                </div>

                <div style={{ textAlign: "left" }}>
                  <p
                    style={{
                      fontWeight: 500,
                      fontSize: 15,
                      color: "#242424",
                    }}
                  >
                    Province
                  </p>
                  <input
                    type="text"
                    value={province}
                    onChange={(e) => setProvince(e.target.value)}
                    placeholder="Province"
                    style={{
                      background: "#FFFFFF",
                      border: "1px solid #F1F1F1 ",
                      borderRadius: 20,
                      borderColor: "#F1F1F1",
                      width: "100%",
                      height: 30,
                      padding: 20,
                      paddingLeft: 12,
                      margin: 10,
                      fontSize: 13,
                    }}
                  />
                </div>

                <div style={{ textAlign: "left" }}>
                  <p
                    style={{
                      fontWeight: 500,
                      fontSize: 15,
                      color: "#242424",
                    }}
                  >
                    Country
                  </p>
                  <input
                    type="text"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    placeholder="Country"
                    style={{
                      background: "#FFFFFF",
                      border: "1px solid #F1F1F1 ",
                      borderRadius: 20,
                      borderColor: "#F1F1F1",
                      width: "100%",
                      height: 30,
                      padding: 20,
                      paddingLeft: 12,
                      margin: 10,
                      fontSize: 13,
                    }}
                  />
                </div>

                <div style={{ textAlign: "left", marginBottom: 10 }}>
                  <p
                    style={{
                      fontWeight: 500,
                      fontSize: 15,
                      color: "#242424",
                    }}
                  >
                    Postal Code
                  </p>
                  <input
                    type="text"
                    value={postalcode}
                    onChange={(e) => setPostalCode(e.target.value)}
                    placeholder="Mobile phone"
                    style={{
                      background: "#FFFFFF",
                      border: "1px solid #F1F1F1 ",
                      borderRadius: 20,
                      borderColor: "#F1F1F1",
                      width: "100%",
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
                    width: "100%",
                    borderRadius: 20,
                    background: " #001E33",
                    height: 40,
                    color: "#FFFFFF",
                    fontSize: 18,
                    borderColor: "transparent",
                  }}
                  onClick={() => setScreen("10")}
                >
                  Next
                </button>
              </div>
            </div>
          ) : screen === "9" ? (
            <div>
              <div
                style={{
                  position: "fixed",
                  top: 20,
                  left: width * 0.59,
                  textAlign: "-webkit-center",
                  width: 500,
                  background: " #FFFFFF",
                  boxShadow: " 0px 4px 25px rgba(0, 0, 0, 0.15)",
                  borderRadius: 20,
                  padding: 30,
                }}
              >
                <button
                  style={{
                    fontWeight: 400,
                    fontSize: 18,
                    textDecorationLine: "none",
                    color: "#D9D9D9",
                    textAlign: "left",
                    marginBottom: 20,
                    float: "left",
                    background: "transparent",
                    border: "transparent",
                  }}
                  onClick={() => setScreen("Freelance Translators")}
                >
                  <BsArrowLeftShort />
                  <p
                    style={{
                      color: "#D9D9D9",
                      fontSize: 18,
                      textDecorationLine: "none",
                      float: "right",
                    }}
                  >
                    Back
                  </p>
                </button>

                <h2 className="textSignup" style={{ marginTop: 30 }}>
                  Sign up
                </h2>
                <div>
                  <FormControl style={{ display: "inherit" }}>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
                    >
                      <FormControlLabel
                        onChange={handleChange}
                        name="radio-buttons"
                        value="6"
                        control={<Radio />}
                        label="Company"
                        style={{ marginRight: 50 }}
                      />
                      <FormControlLabel
                        checked
                        onChange={handleChange}
                        name="radio-buttons"
                        value="Freelance Translators"
                        control={<Radio />}
                        label="Freelance Translators"
                      />
                    </RadioGroup>
                  </FormControl>
                </div>
                <div style={{ textAlign: "left" }}>
                  <p
                    style={{
                      fontWeight: 700,
                      fontSize: 16,
                      color: " #242424",
                    }}
                  >
                    Education/Certificate/Proof of Language Competency.
                  </p>
                  <p
                    style={{
                      fontWeight: 500,
                      fontSize: 14,
                      color: " #242424",
                    }}
                  >
                    (such as JPG, PDF, PNG and the file size does not exceed
                    25Mb.)
                  </p>
                  <div style={{ textAlign: "center" }}>
                    {file2 === "" ? (
                      <div
                        style={{
                          background: "#FFFFFF",
                          borderRadius: 20,
                          width: "100%",
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
                            onChange={(e) => setFile2(e.target.value)}
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
                            <p
                              style={{
                                fontSize: 10,
                                position: "absolute",
                                top: 60,
                                width: 100,
                              }}
                            >
                              Upload File
                            </p>
                          </IconButton>
                        </label>
                      </div>
                    ) : (
                      <div
                        style={{
                          background: "#FFFFFF",
                          borderRadius: 20,
                          width: "100%",
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
                            onChange={(e) => setFile2(e.target.value)}
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
                            <p
                              style={{
                                fontSize: 10,
                                position: "absolute",
                                top: 60,
                                width: 100,
                              }}
                            >
                              {file2}
                            </p>
                          </IconButton>
                        </label>
                      </div>
                    )}
                  </div>
                </div>
                <hr style={{ width: "97%", height: 2 }} />
                <button
                  style={{
                    width: "100%",
                    borderRadius: 20,
                    background: " #001E33",
                    height: 40,
                    color: "#FFFFFF",
                    fontSize: 18,
                    borderColor: "transparent",
                  }}
                  onClick={() => setScreen("11")}
                >
                  Next
                </button>
              </div>
            </div>
          ) : screen === "10" ? (
            <div>
              <div
                style={{
                  position: "fixed",
                  top: 20,
                  left: width * 0.59,
                  textAlign: "-webkit-center",
                  width: 500,
                  background: " #FFFFFF",
                  boxShadow: " 0px 4px 25px rgba(0, 0, 0, 0.15)",
                  borderRadius: 20,
                  padding: 30,
                }}
              >
                <button
                  style={{
                    fontWeight: 400,
                    fontSize: 18,
                    textDecorationLine: "none",
                    color: "#D9D9D9",
                    textAlign: "left",
                    marginBottom: 20,
                    float: "left",
                    background: "transparent",
                    border: "transparent",
                  }}
                  onClick={() => setScreen("8")}
                >
                  <BsArrowLeftShort />
                  <p
                    style={{
                      color: "#D9D9D9",
                      fontSize: 18,
                      textDecorationLine: "none",
                      float: "right",
                    }}
                  >
                    Back
                  </p>
                </button>

                <h2 className="textSignup" style={{ marginTop: 30 }}>
                  Sign up
                </h2>
                <div>
                  <FormControl style={{ display: "inherit" }}>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
                    >
                      <FormControlLabel
                        checked
                        onChange={handleChange}
                        name="radio-buttons"
                        value=""
                        control={<Radio />}
                        label="Company"
                        style={{ marginRight: 50 }}
                      />
                      <FormControlLabel
                        onChange={handleChange}
                        name="radio-buttons"
                        value="Freelance Translators"
                        control={<Radio />}
                        label="Freelance Translators"
                      />
                    </RadioGroup>
                  </FormControl>
                </div>

                <div style={{ textAlign: "left", marginTop: 10 }}>
                  <p
                    style={{
                      fontWeight: 500,
                      fontSize: 15,
                      color: "#242424",
                    }}
                  >
                    Bank name
                  </p>
                  <input
                    type="text"
                    value={bankname}
                    onChange={(e) => setBankname(e.target.value)}
                    placeholder="Bank name"
                    style={{
                      background: "#FFFFFF",
                      border: "1px solid #F1F1F1 ",
                      borderRadius: 20,
                      width: "100%",
                      height: 30,
                      padding: 20,
                      paddingLeft: 12,
                      margin: 10,
                      fontSize: 13,
                    }}
                  />
                </div>

                <div style={{ textAlign: "left" }}>
                  <p
                    style={{
                      fontWeight: 500,
                      fontSize: 15,
                      color: "#242424",
                    }}
                  >
                    Branch name
                  </p>
                  <input
                    type="text"
                    value={branchname}
                    onChange={(e) => setBranchname(e.target.value)}
                    placeholder="Branch name"
                    style={{
                      background: "#FFFFFF",
                      border: "1px solid #F1F1F1 ",
                      borderRadius: 20,
                      width: "100%",
                      height: 30,
                      padding: 20,
                      paddingLeft: 12,
                      margin: 10,
                      fontSize: 13,
                    }}
                  />
                </div>

                <div style={{ textAlign: "left" }}>
                  <p
                    style={{
                      fontWeight: 500,
                      fontSize: 15,
                      color: "#242424",
                    }}
                  >
                    Account name
                  </p>
                  <input
                    type="text"
                    value={accountname}
                    onChange={(e) => setAccountname(e.target.value)}
                    placeholder="Account name"
                    style={{
                      background: "#FFFFFF",
                      border: "1px solid #F1F1F1 ",
                      borderRadius: 20,
                      borderColor: "#F1F1F1",
                      width: "100%",
                      height: 30,
                      padding: 20,
                      paddingLeft: 12,
                      margin: 10,
                      fontSize: 13,
                    }}
                  />
                </div>

                <div style={{ textAlign: "left", marginBottom: 10 }}>
                  <p
                    style={{
                      fontWeight: 500,
                      fontSize: 15,
                      color: "#242424",
                    }}
                  >
                    Account number
                  </p>
                  <input
                    type="text"
                    value={accountnumber}
                    onChange={(e) => setAccountnumber(e.target.value)}
                    placeholder="Account number"
                    style={{
                      background: "#FFFFFF",
                      border: "1px solid #F1F1F1 ",
                      borderRadius: 20,
                      borderColor: "#F1F1F1",
                      width: "100%",
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
                    width: "100%",
                    borderRadius: 20,
                    background: " #001E33",
                    height: 40,
                    color: "#FFFFFF",
                    fontSize: 18,
                    borderColor: "transparent",
                  }}
                  onClick={() => setScreen("12")}
                >
                  Next
                </button>
              </div>
            </div>
          ) : screen === "11" ? (
            <div>
              <div
                style={{
                  position: "fixed",
                  top: 20,
                  left: width * 0.59,
                  textAlign: "-webkit-center",
                  width: 500,
                  background: " #FFFFFF",
                  boxShadow: " 0px 4px 25px rgba(0, 0, 0, 0.15)",
                  borderRadius: 20,
                  padding: 30,
                }}
              >
                <button
                  style={{
                    fontWeight: 400,
                    fontSize: 18,
                    textDecorationLine: "none",
                    color: "#D9D9D9",
                    textAlign: "left",
                    marginBottom: 20,
                    float: "left",
                    background: "transparent",
                    border: "transparent",
                  }}
                  onClick={() => setScreen("9")}
                >
                  <BsArrowLeftShort />
                  <p
                    style={{
                      color: "#D9D9D9",
                      fontSize: 18,
                      textDecorationLine: "none",
                      float: "right",
                    }}
                  >
                    Back
                  </p>
                </button>

                <h2 className="textSignup" style={{ marginTop: 30 }}>
                  Sign up
                </h2>
                <div>
                  <FormControl style={{ display: "inherit" }}>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
                    >
                      <FormControlLabel
                        onChange={handleChange}
                        name="radio-buttons"
                        value="6"
                        control={<Radio />}
                        label="Company"
                        style={{ marginRight: 50 }}
                      />
                      <FormControlLabel
                        checked
                        onChange={handleChange}
                        name="radio-buttons"
                        value="Freelance Translators"
                        control={<Radio />}
                        label="Freelance Translators"
                      />
                    </RadioGroup>
                  </FormControl>
                </div>
                <div style={{ textAlign: "left" }}>
                  <p
                    style={{
                      fontWeight: 700,
                      fontSize: 18,
                      color: " #242424",
                    }}
                  >
                    Portfolio/CV.
                  </p>
                  <p
                    style={{
                      fontWeight: 500,
                      fontSize: 14,
                      color: " #242424",
                    }}
                  >
                    (such as JPG, PDF, PNG and the file size does not exceed
                    25Mb.)
                  </p>
                  <div style={{ textAlign: "center" }}>
                    {file2 === "" ? (
                      <div
                        style={{
                          background: "#FFFFFF",
                          borderRadius: 20,
                          width: "100%",
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
                            onChange={(e) => setFile2(e.target.value)}
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
                            <p
                              style={{
                                fontSize: 10,
                                position: "absolute",
                                top: 60,
                                width: 100,
                              }}
                            >
                              Upload File
                            </p>
                          </IconButton>
                        </label>
                      </div>
                    ) : (
                      <div
                        style={{
                          background: "#FFFFFF",
                          borderRadius: 20,
                          width: "100%",
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
                            onChange={(e) => setFile2(e.target.value)}
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
                            <p
                              style={{
                                fontSize: 10,
                                position: "absolute",
                                top: 60,
                                width: 100,
                              }}
                            >
                              {file2}
                            </p>
                          </IconButton>
                        </label>
                      </div>
                    )}
                  </div>
                </div>
                <hr style={{ width: "97%", height: 2 }} />
                <button
                  style={{
                    width: "100%",
                    borderRadius: 20,
                    background: " #001E33",
                    height: 40,
                    color: "#FFFFFF",
                    fontSize: 18,
                    borderColor: "transparent",
                  }}
                  onClick={() => setScreen("13")}
                >
                  Next
                </button>
              </div>
            </div>
          ) : screen === "12" ? (
            <div>
              <div
                style={{
                  position: "fixed",
                  top: 20,
                  left: width * 0.59,
                  textAlign: "-webkit-center",
                  width: 500,
                  background: " #FFFFFF",
                  boxShadow: " 0px 4px 25px rgba(0, 0, 0, 0.15)",
                  borderRadius: 20,
                  padding: 30,
                }}
              >
                <button
                  style={{
                    fontWeight: 400,
                    fontSize: 18,
                    textDecorationLine: "none",
                    color: "#D9D9D9",
                    textAlign: "left",
                    marginBottom: 20,
                    float: "left",
                    background: "transparent",
                    border: "transparent",
                  }}
                  onClick={() => setScreen("10")}
                >
                  <BsArrowLeftShort />
                  <p
                    style={{
                      color: "#D9D9D9",
                      fontSize: 18,
                      textDecorationLine: "none",
                      float: "right",
                    }}
                  >
                    Back
                  </p>
                </button>

                <h2 className="textSignup" style={{ marginTop: 30 }}>
                  Sign up
                </h2>
                <div>
                  <FormControl style={{ display: "inherit" }}>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
                    >
                      <FormControlLabel
                        checked
                        onChange={handleChange}
                        name="radio-buttons"
                        value=""
                        control={<Radio />}
                        label="Company"
                        style={{ marginRight: 50 }}
                      />
                      <FormControlLabel
                        onChange={handleChange}
                        name="radio-buttons"
                        value="Freelance Translators"
                        control={<Radio />}
                        label="Freelance Translators"
                      />
                    </RadioGroup>
                  </FormControl>
                </div>
                <div style={{ textAlign: "left" }}>
                  <p
                    style={{
                      fontWeight: 500,
                      fontSize: 20,
                      color: " #242424",
                    }}
                  >
                    Upload a picture to use as a watermark.
                  </p>
                  <p
                    style={{
                      fontWeight: 500,
                      fontSize: 14,
                      color: " #242424",
                    }}
                  >
                    (such as JPG, PDF, PNG and the file size does not exceed
                    25Mb.)
                  </p>
                  <div style={{ textAlign: "center" }}>
                    {file2 === "" ? (
                      <div
                        style={{
                          background: "#FFFFFF",
                          borderRadius: 20,
                          width: "100%",
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
                            onChange={(e) => setFile2(e.target.value)}
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
                            <p
                              style={{
                                fontSize: 10,
                                position: "absolute",
                                top: 60,
                                width: 100,
                              }}
                            >
                              Upload File
                            </p>
                          </IconButton>
                        </label>
                      </div>
                    ) : (
                      <div
                        style={{
                          background: "#FFFFFF",
                          borderRadius: 20,
                          width: "100%",
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
                            onChange={(e) => setFile2(e.target.value)}
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
                            <p
                              style={{
                                fontSize: 10,
                                position: "absolute",
                                top: 60,
                                width: 100,
                              }}
                            >
                              {file2}
                            </p>
                          </IconButton>
                        </label>
                      </div>
                    )}
                  </div>
                  <p
                    style={{
                      color: "#666666",
                      textDecorationLine: "underline",
                      fontSize: 14,
                    }}
                  >
                    An example of uploading a picture of your ID card.
                  </p>
                </div>
                <hr style={{ width: "97%", height: 2 }} />
                <button
                  style={{
                    width: "100%",
                    borderRadius: 20,
                    background: " #001E33",
                    height: 40,
                    color: "#FFFFFF",
                    fontSize: 18,
                    borderColor: "transparent",
                  }}
                  onClick={() => setScreen("14")}
                >
                  Next
                </button>
              </div>
            </div>
          ) : screen === "13" ? (
            <div>
              <div
                style={{
                  position: "fixed",
                  top: 20,
                  left: width * 0.59,
                  textAlign: "-webkit-center",
                  width: 500,
                  background: " #FFFFFF",
                  boxShadow: " 0px 4px 25px rgba(0, 0, 0, 0.15)",
                  borderRadius: 20,
                  padding: 30,
                }}
              >
                <button
                  style={{
                    fontWeight: 400,
                    fontSize: 18,
                    textDecorationLine: "none",
                    color: "#D9D9D9",
                    textAlign: "left",
                    marginBottom: 20,
                    float: "left",
                    background: "transparent",
                    border: "transparent",
                  }}
                  onClick={() => setScreen("11")}
                >
                  <BsArrowLeftShort />
                  <p
                    style={{
                      color: "#D9D9D9",
                      fontSize: 18,
                      textDecorationLine: "none",
                      float: "right",
                    }}
                  >
                    Back
                  </p>
                </button>

                <h2 className="textSignup" style={{ marginTop: 30 }}>
                  Sign up
                </h2>
                <div>
                  <FormControl style={{ display: "inherit" }}>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
                    >
                      <FormControlLabel
                        onChange={handleChange}
                        name="radio-buttons"
                        value=""
                        control={<Radio />}
                        label="Company"
                        style={{ marginRight: 50 }}
                      />
                      <FormControlLabel
                        checked
                        onChange={handleChange}
                        name="radio-buttons"
                        value="Freelance Translators"
                        control={<Radio />}
                        label="Freelance Translators"
                      />
                    </RadioGroup>
                  </FormControl>
                </div>

                <div style={{ textAlign: "left", marginTop: 10 }}>
                  <p
                    style={{
                      fontWeight: 500,
                      fontSize: 15,
                      color: "#242424",
                    }}
                  >
                    Bank name
                  </p>
                  <input
                    type="text"
                    value={bankname}
                    onChange={(e) => setBankname(e.target.value)}
                    placeholder="Bank name"
                    style={{
                      background: "#FFFFFF",
                      border: "1px solid #F1F1F1 ",
                      borderRadius: 20,
                      width: "100%",
                      height: 30,
                      padding: 20,
                      paddingLeft: 12,
                      margin: 10,
                      fontSize: 13,
                    }}
                  />
                </div>

                <div style={{ textAlign: "left" }}>
                  <p
                    style={{
                      fontWeight: 500,
                      fontSize: 15,
                      color: "#242424",
                    }}
                  >
                    Branch name
                  </p>
                  <input
                    type="text"
                    value={branchname}
                    onChange={(e) => setBranchname(e.target.value)}
                    placeholder="Branch name"
                    style={{
                      background: "#FFFFFF",
                      border: "1px solid #F1F1F1 ",
                      borderRadius: 20,
                      width: "100%",
                      height: 30,
                      padding: 20,
                      paddingLeft: 12,
                      margin: 10,
                      fontSize: 13,
                    }}
                  />
                </div>

                <div style={{ textAlign: "left" }}>
                  <p
                    style={{
                      fontWeight: 500,
                      fontSize: 15,
                      color: "#242424",
                    }}
                  >
                    Account name
                  </p>
                  <input
                    type="text"
                    value={accountname}
                    onChange={(e) => setAccountname(e.target.value)}
                    placeholder="Account name"
                    style={{
                      background: "#FFFFFF",
                      border: "1px solid #F1F1F1 ",
                      borderRadius: 20,
                      borderColor: "#F1F1F1",
                      width: "100%",
                      height: 30,
                      padding: 20,
                      paddingLeft: 12,
                      margin: 10,
                      fontSize: 13,
                    }}
                  />
                </div>

                <div style={{ textAlign: "left", marginBottom: 10 }}>
                  <p
                    style={{
                      fontWeight: 500,
                      fontSize: 15,
                      color: "#242424",
                    }}
                  >
                    Account number
                  </p>
                  <input
                    type="text"
                    value={accountnumber}
                    onChange={(e) => setAccountnumber(e.target.value)}
                    placeholder="Account number"
                    style={{
                      background: "#FFFFFF",
                      border: "1px solid #F1F1F1 ",
                      borderRadius: 20,
                      borderColor: "#F1F1F1",
                      width: "100%",
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
                    width: "100%",
                    borderRadius: 20,
                    background: " #001E33",
                    height: 40,
                    color: "#FFFFFF",
                    fontSize: 18,
                    borderColor: "transparent",
                  }}
                  onClick={() => setScreen("15")}
                >
                  Next
                </button>
              </div>
            </div>
          ) : screen === "14" ? (
            <div>
              <div
                style={{
                  position: "fixed",
                  top: 20,
                  left: width * 0.59,
                  textAlign: "-webkit-center",
                  width: 500,
                  background: " #FFFFFF",
                  boxShadow: " 0px 4px 25px rgba(0, 0, 0, 0.15)",
                  borderRadius: 20,
                  padding: 30,
                }}
              >
                <button
                  style={{
                    fontWeight: 400,
                    fontSize: 18,
                    textDecorationLine: "none",
                    color: "#D9D9D9",
                    textAlign: "left",
                    marginBottom: 20,
                    float: "left",
                    background: "transparent",
                    border: "transparent",
                  }}
                  onClick={() => setScreen("12")}
                >
                  <BsArrowLeftShort />
                  <p
                    style={{
                      color: "#D9D9D9",
                      fontSize: 18,
                      textDecorationLine: "none",
                      float: "right",
                    }}
                  >
                    Back
                  </p>
                </button>

                <h2 className="textSignup" style={{ marginTop: 30 }}>
                  Sign up
                </h2>
                <div>
                  <FormControl style={{ display: "inherit" }}>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
                    >
                      <FormControlLabel
                        checked
                        onChange={handleChange}
                        name="radio-buttons"
                        value=""
                        control={<Radio />}
                        label="Company"
                        style={{ marginRight: 50 }}
                      />
                      <FormControlLabel
                        onChange={handleChange}
                        name="radio-buttons"
                        value="Freelance Translators"
                        control={<Radio />}
                        label="Freelance Translators"
                      />
                    </RadioGroup>
                  </FormControl>
                </div>
                <div style={{ textAlign: "left" }}>
                  <p
                    style={{
                      fontWeight: 700,
                      fontSize: 17,
                      color: " #242424",
                    }}
                  >
                    Company Registration Certificate.
                  </p>
                  <p
                    style={{
                      fontWeight: 500,
                      fontSize: 14,
                      color: " #242424",
                    }}
                  >
                    (such as JPG, PDF, PNG and the file size does not exceed
                    25Mb.)
                  </p>
                  <div style={{ textAlign: "center" }}>
                    {file3 === "" ? (
                      <div
                        style={{
                          background: "#FFFFFF",
                          borderRadius: 20,
                          width: "100%",
                          height: 150,
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
                            onChange={(e) => setFile3(e.target.value)}
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
                              }}
                            />
                            <p
                              style={{
                                fontSize: 10,
                                position: "absolute",
                                top: 35,
                                width: 100,
                              }}
                            >
                              Upload File
                            </p>
                          </IconButton>
                        </label>
                      </div>
                    ) : (
                      <div
                        style={{
                          background: "#FFFFFF",
                          borderRadius: 20,
                          width: "100%",
                          height: 150,
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
                            onChange={(e) => setFile2(e.target.value)}
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
                              }}
                            />
                            <p
                              style={{
                                fontSize: 10,
                                position: "absolute",
                                top: 35,
                                width: 100,
                              }}
                            >
                              {file3}
                            </p>
                          </IconButton>
                        </label>
                      </div>
                    )}
                  </div>
                  <p
                    style={{
                      color: "#666666",
                      textDecorationLine: "underline",
                      fontSize: 12,
                    }}
                  >
                    An example of uploading a picture of your company
                    registration certificate.
                  </p>
                </div>
                <hr style={{ width: "97%", height: 2 }} />
                <div style={{}}>
                  <div style={{ marginBottom: 10 }}>
                    <p
                      style={{
                        fontWeight: "bold",
                        fontSize: 14,
                        color: "#333333",
                      }}
                    >
                      Languages in which the company can accept translation
                      work.
                    </p>
                  </div>

                  <Autocomplete
                    multiple
                    id="country-select-demo"
                    sx={{ width: "100%" }}
                    options={data}
                    autoHighlight
                    getOptionLabel={(option) => option.label}
                    onChange={(event, value) => setLanguages(value?.label)}
                    popupIcon={
                      <MdArrowDropDown
                        style={{ color: "#333333", width: 30, height: 33 }}
                      />
                    }
                    renderOption={(props, option) => (
                      <Box
                        component="li"
                        sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                        {...props}
                      >
                        <img
                          loading="lazy"
                          width="20"
                          src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                          srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                          alt=""
                        />
                        {option.label}
                      </Box>
                    )}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Select"
                        inputProps={{
                          ...params.inputProps,
                          autoComplete: "new-password",
                        }}
                      />
                    )}
                  />
                </div>
                <button
                  style={{
                    width: "100%",
                    borderRadius: 20,
                    background: " #001E33",
                    height: 40,
                    color: "#FFFFFF",
                    fontSize: 18,
                    borderColor: "transparent",
                    marginTop: 30,
                  }}
                  onClick={() => setOpen3(true)}
                >
                  Sign up
                </button>
              </div>
              <Modal
                keepMounted
                open={open3}
                onClose={handleClose3}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -70%)",
                    width: 600,
                    bgcolor: "background.paper",
                    boxShadow: 24,
                    p: 4,
                    borderRadius: 5,
                    border: "1px solid #E5E5E5",
                    textAlign: "center",
                  }}
                >
                  <img src={logo} alt="Logo" style={{ width: 100 }} />
                  <Typography
                    id="keep-mounted-modal-description"
                    sx={{ mt: 2, fontWeight: 700 }}
                  >
                    Terms and Conditions
                  </Typography>
                  <Typography
                    id="keep-mounted-modal-description"
                    sx={{
                      mt: 2,
                      textAlign: "left",
                      overflowY: "auto",
                      height: 125,
                    }}
                  >
                    The company agrees to provide truthful information. and can
                    receive translation work and forward it to translators who
                    are competent in the languages stated by the company above.
                    and will be responsible for all translation works translated
                    from the company
                  </Typography>
                  <div
                    style={{
                      textAlign: "left",
                      borderTop: "1px solid #C4C4C4",
                    }}
                  >
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={checked2}
                          onChange={handleChange2}
                          inputProps={{ "aria-label": "controlled" }}
                        />
                      }
                      label="accept the terms and conditions"
                    />
                  </div>
                  <div>
                    {checked2 === false ? (
                      <button
                        style={{
                          width: "30%",
                          borderRadius: 20,
                          background: "#E0E0E0",
                          height: 40,
                          color: "#FFFFFF",
                          fontSize: 18,
                          borderColor: "transparent",
                          position: "relative",
                          left: "35%",
                        }}
                        disabled
                        onClick={handleOpen}
                      >
                        Submit
                      </button>
                    ) : (
                      <button
                        style={{
                          width: "30%",
                          borderRadius: 20,
                          background: "#001E33",
                          height: 40,
                          color: "#FFFFFF",
                          fontSize: 18,
                          borderColor: "transparent",
                          position: "relative",
                          left: "35%",
                        }}
                        onClick={handleClose4}
                      >
                        Submit
                      </button>
                    )}
                  </div>
                </Box>
              </Modal>

              <Modal
                keepMounted
                open={open4}
                onClose={handleClose5}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -70%)",
                    width: 400,
                    bgcolor: "background.paper",
                    boxShadow: 24,
                    p: 4,
                    borderRadius: 5,
                    border: "1px solid #E5E5E5",
                    textAlign: "center",
                  }}
                >
                  <AiFillCheckCircle
                    style={{ width: 100, height: 80, color: "#46BC52" }}
                  />
                  <Typography
                    id="keep-mounted-modal-description"
                    sx={{ mt: 2, fontWeight: 700 }}
                  >
                    Your translator application has been sent. Wait for
                    confirmation by email
                  </Typography>
                </Box>
              </Modal>
            </div>
          ) : screen === "15" ? (
            <div>
              <div
                style={{
                  position: "fixed",
                  top: 20,
                  left: width * 0.59,
                  textAlign: "-webkit-center",
                  width: 500,
                  background: " #FFFFFF",
                  boxShadow: " 0px 4px 25px rgba(0, 0, 0, 0.15)",
                  borderRadius: 20,
                  padding: 30,
                }}
              >
                <button
                  style={{
                    fontWeight: 400,
                    fontSize: 18,
                    textDecorationLine: "none",
                    color: "#D9D9D9",
                    textAlign: "left",
                    marginBottom: 20,
                    float: "left",
                    background: "transparent",
                    border: "transparent",
                  }}
                  onClick={() => setScreen("13")}
                >
                  <BsArrowLeftShort />
                  <p
                    style={{
                      color: "#D9D9D9",
                      fontSize: 18,
                      textDecorationLine: "none",
                      float: "right",
                    }}
                  >
                    Back
                  </p>
                </button>

                <h2 className="textSignup" style={{ marginTop: 30 }}>
                  Sign up
                </h2>

                <div>
                  <div
                    style={{
                      textAlign: "left",
                      float: "left",
                      borderBottom: "2px solid #034D82",
                      marginBottom: 10,
                    }}
                  >
                    <div
                      style={{
                        width: 30,
                        height: 30,
                        color: "#034D82",
                        borderRadius: 100,
                        textAlign: "center",
                        border: "1px solid #034D82",
                        padding: 2,
                        float: "left",
                        fontSize: 15,
                        fontWeight: 700,
                        marginLeft: 20,
                      }}
                    >
                      <p>1</p>
                    </div>
                    <div
                      style={{
                        color: "#034D82",
                        float: "left",
                        margin: 5,
                        fontWeight: 700,
                      }}
                    >
                      <p>Skill</p>
                    </div>
                  </div>

                  <div
                    style={{
                      textAlign: "left",
                      float: "left",
                      borderBottom: "2px solid #D9D9D9",
                      marginBottom: 10,
                      width: "75%",
                    }}
                  >
                    <div
                      style={{
                        width: 30,
                        height: 30,
                        color: "#D9D9D9",
                        borderRadius: 100,
                        textAlign: "center",
                        border: "1px solid #D9D9D9",
                        padding: 2,
                        float: "left",
                        fontSize: 15,
                        fontWeight: 700,
                        marginLeft: 20,
                      }}
                    >
                      <p>2</p>
                    </div>
                    <div
                      style={{
                        color: "#D9D9D9",
                        float: "left",
                        margin: 5,
                        fontWeight: 700,
                      }}
                    >
                      <p>Language Competency Test</p>
                    </div>
                  </div>
                </div>

                <div style={{ marginBottom: 10, textAlign: "left" }}>
                  <p
                    style={{
                      fontWeight: "bold",
                      fontSize: 18,
                      color: "#333333",
                    }}
                  >
                    What languages can you translate?
                  </p>
                </div>

                <Autocomplete
                  multiple
                  id="country-select-demo"
                  sx={{ width: "100%" }}
                  options={data}
                  autoHighlight
                  getOptionLabel={(option) => option.label}
                  onChange={(event, value) => setLanguages()}
                  popupIcon={
                    <MdArrowDropDown
                      style={{ color: "#333333", width: 30, height: 33 }}
                    />
                  }
                  renderOption={(props, option) => (
                    <Box
                      component="li"
                      sx={{ mr: 2, flexShrink: 0 }}
                      {...props}
                    >
                      {option.label}
                    </Box>
                  )}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Select"
                      inputProps={{
                        ...params.inputProps,
                        autoComplete: "",
                      }}
                    />
                  )}
                />

                <div style={{ marginBottom: 10, textAlign: "left" }}>
                  <p
                    style={{
                      fontWeight: "bold",
                      fontSize: 18,
                      color: "#333333",
                    }}
                  >
                    What kind of documents can you translate?
                  </p>
                </div>

                <Autocomplete
                  multiple
                  id="country-select-demo"
                  sx={{ width: "100%" }}
                  options={data5}
                  autoHighlight
                  getOptionLabel={(option) => option.label}
                  onChange={(event, value) => setLanguages()}
                  popupIcon={
                    <MdArrowDropDown
                      style={{ color: "#333333", width: 30, height: 33 }}
                    />
                  }
                  renderOption={(props, option) => (
                    <Box
                      component="li"
                      sx={{ mr: 2, flexShrink: 0 }}
                      {...props}
                    >
                      {option.label}
                    </Box>
                  )}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Select"
                      inputProps={{
                        ...params.inputProps,
                        autoComplete: "",
                      }}
                    />
                  )}
                />

                <button
                  style={{
                    width: "100%",
                    borderRadius: 20,
                    background: " #001E33",
                    height: 40,
                    color: "#FFFFFF",
                    fontSize: 18,
                    borderColor: "transparent",
                    marginTop: 20,
                  }}
                  onClick={() => setScreen("16")}
                >
                  Next
                </button>
              </div>
            </div>
          ) : screen === "16" ? (
            <div>
              <div
                style={{
                  position: "fixed",
                  top: 20,
                  left: width * 0.59,
                  textAlign: "-webkit-center",
                  width: 500,
                  background: " #FFFFFF",
                  boxShadow: " 0px 4px 25px rgba(0, 0, 0, 0.15)",
                  borderRadius: 20,
                  padding: 30,
                }}
              >
                <button
                  style={{
                    fontWeight: 400,
                    fontSize: 18,
                    textDecorationLine: "none",
                    color: "#D9D9D9",
                    textAlign: "left",
                    marginBottom: 20,
                    float: "left",
                    background: "transparent",
                    border: "transparent",
                  }}
                  onClick={() => setScreen("15")}
                >
                  <BsArrowLeftShort />
                  <p
                    style={{
                      color: "#D9D9D9",
                      fontSize: 18,
                      textDecorationLine: "none",
                      float: "right",
                    }}
                  >
                    Back
                  </p>
                </button>

                <h2 className="textSignup" style={{ marginTop: 30 }}>
                  Sign up
                </h2>

                <div>
                  <div
                    style={{
                      textAlign: "left",
                      float: "left",
                      borderBottom: "2px solid #D9D9D9",
                      marginBottom: 10,
                    }}
                  >
                    <div
                      style={{
                        width: 30,
                        height: 30,
                        color: "#D9D9D9",
                        borderRadius: 100,
                        textAlign: "center",
                        border: "1px solid #D9D9D9",
                        padding: 2,
                        float: "left",
                        fontSize: 15,
                        fontWeight: 700,
                        marginLeft: 20,
                      }}
                    >
                      <p>1</p>
                    </div>
                    <div
                      style={{
                        color: "#D9D9D9",
                        float: "left",
                        margin: 5,
                        fontWeight: 700,
                      }}
                    >
                      <p>Skill</p>
                    </div>
                  </div>

                  <div
                    style={{
                      textAlign: "left",
                      float: "left",
                      borderBottom: "2px solid #034D82",
                      marginBottom: 10,
                      width: "75%",
                    }}
                  >
                    <div
                      style={{
                        width: 30,
                        height: 30,
                        color: "#034D82",
                        borderRadius: 100,
                        textAlign: "center",
                        border: "1px solid #034D82",
                        padding: 2,
                        float: "left",
                        fontSize: 15,
                        fontWeight: 700,
                        marginLeft: 20,
                      }}
                    >
                      <p>2</p>
                    </div>
                    <div
                      style={{
                        color: "#034D82",
                        float: "left",
                        margin: 5,
                        fontWeight: 700,
                      }}
                    >
                      <p>Language Competency Test</p>
                    </div>
                  </div>
                </div>

                <div style={{ marginBottom: 10, textAlign: "left" }}>
                  <p
                    style={{
                      fontWeight: "bold",
                      fontSize: 18,
                      color: "#333333",
                    }}
                  >
                    Language to answer
                  </p>
                </div>

                <Autocomplete
                  multiple
                  id="country-select-demo"
                  sx={{ width: "100%" }}
                  options={data}
                  autoHighlight
                  getOptionLabel={(option) => option.label}
                  // defaultValue={""}
                  // onChange={(event,value) => console.log("hi :",value)}
                  popupIcon={
                    <MdArrowDropDown
                      style={{ color: "#333333", width: 30, height: 33 }}
                    />
                  }
                  renderOption={(props, option) => (
                    <Box
                      component="li"
                      sx={{ mr: 2, flexShrink: 0 }}
                      {...props}
                    >
                      {option.label}
                    </Box>
                  )}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Select"
                      inputProps={{
                        ...params.inputProps,
                        autoComplete: "",
                      }}
                    />
                  )}
                />

                <div style={{ marginBottom: 10, textAlign: "left" }}>
                  <p
                    style={{
                      fontWeight: "bold",
                      fontSize: 18,
                      color: "#333333",
                    }}
                  >
                    Question
                  </p>
                </div>

                <textarea
                  // value={}
                  // onChange={}
                  maxLength={150}
                  style={{
                    width: "100%",
                    background: "#FFFFFF",
                    border: "1px solid #E5E5E5",
                    boxSizing: "border-box",
                    borderRadius: 5,
                    padding: 20,
                  }}
                />
                <button
                  style={{
                    width: "100%",
                    borderRadius: 20,
                    background: " #001E33",
                    height: 40,
                    color: "#FFFFFF",
                    fontSize: 18,
                    borderColor: "transparent",
                    marginTop: 30,
                  }}
                  onClick={() => setOpen3(true)}
                >
                  Sign up
                </button>

                <Modal
                  keepMounted
                  open={open3}
                  onClose={handleClose3}
                  aria-labelledby="keep-mounted-modal-title"
                  aria-describedby="keep-mounted-modal-description"
                >
                  <Box
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -70%)",
                      width: 600,
                      bgcolor: "background.paper",
                      boxShadow: 24,
                      p: 4,
                      borderRadius: 5,
                      border: "1px solid #E5E5E5",
                      textAlign: "center",
                    }}
                  >
                    <img src={logo} alt="Logo" style={{ width: 100 }} />
                    <Typography
                      id="keep-mounted-modal-description"
                      sx={{ mt: 2, fontWeight: 700 }}
                    >
                      Terms and Conditions
                    </Typography>
                    <Typography
                      id="keep-mounted-modal-description"
                      sx={{
                        mt: 2,
                        textAlign: "left",
                        overflowY: "auto",
                        height: 125,
                      }}
                    >
                      The company agrees to provide truthful information. and
                      can receive translation work and forward it to translators
                      who are competent in the languages stated by the company
                      above. and will be responsible for all translation works
                      translated from the company
                    </Typography>
                    <div
                      style={{
                        textAlign: "left",
                        borderTop: "1px solid #C4C4C4",
                      }}
                    >
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={checked2}
                            onChange={handleChange2}
                            inputProps={{ "aria-label": "controlled" }}
                          />
                        }
                        label="accept the terms and conditions"
                      />
                    </div>
                    <div>
                      {checked2 === false ? (
                        <button
                          style={{
                            width: "30%",
                            borderRadius: 20,
                            background: "#E0E0E0",
                            height: 40,
                            color: "#FFFFFF",
                            fontSize: 18,
                            borderColor: "transparent",
                            position: "relative",
                            left: "35%",
                          }}
                          disabled
                          onClick={handleOpen}
                        >
                          Submit
                        </button>
                      ) : (
                        <button
                          style={{
                            width: "30%",
                            borderRadius: 20,
                            background: "#001E33",
                            height: 40,
                            color: "#FFFFFF",
                            fontSize: 18,
                            borderColor: "transparent",
                            position: "relative",
                            left: "35%",
                          }}
                          onClick={handleClose4}
                        >
                          Submit
                        </button>
                      )}
                    </div>
                  </Box>
                </Modal>

                <Modal
                  keepMounted
                  open={open4}
                  onClose={handleClose5}
                  aria-labelledby="keep-mounted-modal-title"
                  aria-describedby="keep-mounted-modal-description"
                >
                  <Box
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -70%)",
                      width: 400,
                      bgcolor: "background.paper",
                      boxShadow: 24,
                      p: 4,
                      borderRadius: 5,
                      border: "1px solid #E5E5E5",
                      textAlign: "center",
                    }}
                  >
                    <AiFillCheckCircle
                      style={{ width: 100, height: 80, color: "#46BC52" }}
                    />
                    <Typography
                      id="keep-mounted-modal-description"
                      sx={{ mt: 2, fontWeight: 700 }}
                    >
                      Your translator application has been sent. Wait for
                      confirmation by email
                    </Typography>
                  </Box>
                </Modal>
              </div>
            </div>
          ) : null}

          <div style={{ top: "95%", position: "absolute", marginLeft: "25%" }}>
            <div style={{ float: "right" }}>
              <p>Privacy policy</p>
            </div>
            <div style={{ float: "right", marginRight: 50 }}>
              <p>Copyrights Give Network 2021.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Signup;
