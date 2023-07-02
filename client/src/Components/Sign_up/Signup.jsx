import * as React from "react";
// import emailjs from "@emailjs/browser";
import Navbars from "../Navbar/navbarLogin";
import { Formik } from "formik";

//test
// import {
//   useDispatch,
//   // useSelector
// } from "react-redux";

// import { registerUser } from "../../slices/auth";

// import { data, data5 } from "../Data/data";
// import logo from "../../logo.svg";
// import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs";
import {
  FiEyeOff,
  FiEye,
  // FiImage
} from "react-icons/fi";

import {
  REGI01_box1EN,
  REGI01_box1DE,
  REGI01_box1TH,
} from "../Data/DataLanguage";

import {
  IconButton,
  // Radio,
  // RadioGroup,
  // FormControlLabel,
  // FormControl,
  Input,
  // Modal,
  // Typography,
  // Box,
  // Checkbox,
  // Autocomplete,
  // TextField,
} from "@mui/material";

import { useNavigate, useLocation } from "react-router-dom";
import downloadcloud01 from "../../Images/downloadcloud01.jpg";
import styles from "./Signup.module.css";

const Signup = () => {
  // const { innerWidth: width } = window;
  const navigate = useNavigate();
  const location = useLocation();
  let Doc = location?.state?.languages;

  //test
  // const dispatch = useDispatch();
  // const auth = useSelector((state) => state.auth);

  const [images, setImages] = React.useState([]);
  const [images2, setImages2] = React.useState([]);
  const [images3, setImages3] = React.useState([]);
  const [images4, setImages4] = React.useState([]);
  const [images5, setImages5] = React.useState([]);
  const [imageURLs, setImageURLs] = React.useState([]);
  const [type_User, setType_User] = React.useState("");

  const [translators, setTranslators] = React.useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    mobilePhone: "",
    imgProfile: "",
    companyName: "",
    juristicPersonNumber: "",
    website: "",
    address: "",
    district: "",
    province: "",
    country: "",
    postalCode: "",
    bankname: "",
    branchname: "",
    accountname: "",
    accountnumber: "",
    watermark: "",
    certificate: "",
    languages: [],
    idcard: "",
    education: "",
    portfolio: "",
    bookbank: "",
    documents: "",
    answer: "",
    question: "",
    type: "",
  });

  const [screen, setScreen] = React.useState("5");
  const [type, setType] = React.useState("password");
  const [type2, setType2] = React.useState("password");
  const [valuestype, setValuestype] = React.useState(false);
  const [valuestype2, setValuestype2] = React.useState(false);

  function setProFile(x, y) {
    if (y === 1) {
      setImageURLs(x);
      setTranslators({ ...translators, imgProfile: imageURLs });
    } else if (y === 2) {
      images2.forEach((image) => x.push(URL.createObjectURL(image)));
      setImageURLs(x);
      setTranslators({ ...translators, idcard: imageURLs });
    } else if (y === 3) {
      images3.forEach((image) => x.push(URL.createObjectURL(image)));
      setImageURLs(x);
      setTranslators({ ...translators, education: imageURLs });
    } else if (y === 4) {
      images4.forEach((image) => x.push(URL.createObjectURL(image)));
      setImageURLs(x);
      setTranslators({ ...translators, portfolio: imageURLs });
    } else if (y === 5) {
      images5.forEach((image) => x.push(URL.createObjectURL(image)));
      setImageURLs(x);
      setTranslators({ ...translators, bookbank: imageURLs });
    }
  }

  React.useEffect(() => {
    if (images.length > 0) {
      console.log("images:", images);
      const newImageUrls = [];
      images.forEach((image) => newImageUrls.push(URL.createObjectURL(image)));
      setProFile(newImageUrls, 1);
    }
    if (images2.length > 0) {
      console.log("images2:", images2);
      const newImageUrls = [];
      setProFile(newImageUrls, 2);
    }
    if (images3.length > 0) {
      console.log("images3:", images3);
      const newImageUrls = [];
      setProFile(newImageUrls, 3);
    }
    if (images4.length > 0) {
      console.log("images4:", images4);
      const newImageUrls = [];
      setProFile(newImageUrls, 4);
    }
    if (images5.length > 0) {
      console.log("images5:", images5);
      const newImageUrls = [];
      setProFile(newImageUrls, 5);
    }
  }, [images, images2, images3, images4, images5]);

  function onImageChange(e, i) {
    const files = [...e.target.files];
    switch (i) {
      case 1:
        console.log("case 1");
        setImageURLs([]);
        setImages(files);
        break;
      case 2:
        console.log("case 2");
        setImages2(files);
        break;
      case 3:
        console.log("case 3");
        setImages3(files);
        break;
      case 4:
        console.log("case 4");
        setImages4(files);
        break;
      case 5:
        console.log("case 5");
        setImages5(files);
        break;
      default:
        console.log("Invalid case");
        setImages([]);
        setImages2([]);
        setImages3([]);
        setImages4([]);
        setImages5([]);
    }
  }

  const handleClickShowPassword = (i) => {
    // console.log("i:", i, type, valuestype,valuestype2);
    if (i === 1) {
      if (type === "password") {
        setValuestype(!valuestype);
        setType("text");
      } else if (type === "text") {
        setValuestype(!valuestype);
        setType("password");
      }
    } else if (i === 2) {
      if (type2 === "password") {
        setValuestype2(!valuestype2);
        setType2("text");
      } else if (type2 === "text") {
        setValuestype2(!valuestype2);
        setType2("password");
      }
    }
  };

  function setScreenNumber(i) {
    switch (i) {
      case "type": {
        setTranslators({ ...translators, type: type_User });
        setScreen("1");
        break;
      }
      case 1:
        setScreen("2");
        break;
      case 2:
        setImages([]);
        setImageURLs([]);
        setScreen("3");
        break;
      case 3:
        setScreen("4");
        break;
      case 4:
        setScreen("5");
        break;
      case 5:
        setScreen("6");
        break;
      case 6:
        setScreen("7");
        break;
      case 7:
        navigate("/Login");
        break;
      default:
        setScreen("");
    }
  }

  console.log("screen", screen, translators?.type);
  return (
    <>
      <header className={styles?.header}>
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

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "auto auto",
          justifyContent: "space-between",
          // marginBottom: "30px",
        }}
      >
        <div
          style={{
            position: "relative",
            left: 100,
          }}
        >
          {screen === "" ? (
            <>
              <div>
                <div
                  style={{
                    width: 500,
                    background: " #FFFFFF",
                    borderRadius: 20,
                    padding: 30,
                  }}
                >
                  <h2 className={styles.textH}>{REGI01_box1EN[2].label}</h2>
                  <p className={styles.textLogin2}>Create new account.</p>

                  <Formik
                    initialValues={{
                      name: "",
                      email: "",
                      password: "",
                      confirmPassword: "",
                      mobilePhone: "",
                    }}
                    validate={(values) => {
                      const errors = {};
                      if (!values.email) {
                        errors.email = "Required";
                      } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                          values.email
                        )
                      ) {
                        errors.email = "Invalid email address";
                      }
                      return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                      if (values) {
                        console.log("values:", values);
                        setTranslators({
                          ...translators,
                          name: values.name,
                          email: values.email,
                          password: values.password,
                          confirmPassword: values.confirmPassword,
                          mobilePhone: values.mobilePhone,
                        });
                        setSubmitting(false);
                        setScreen("type");
                      } else {
                        console.log("err:", "มันไม่ได้");
                        setSubmitting(false);
                      }
                    }}
                  >
                    {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isSubmitting,
                    }) => (
                      <form onSubmit={handleSubmit}>
                        <div style={{ textAlign: "left", marginTop: 10 }}>
                          <p
                            style={{
                              fontWeight: 500,
                              fontSize: 20,
                              color: "#242424",
                              textAlign: "left",
                              fontFamily: "DBHeavent",
                            }}
                          >
                            {REGI01_box1EN[5].label}
                          </p>
                          <input
                            type="text"
                            name="name"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name}
                            placeholder={REGI01_box1EN[5].label}
                            style={{
                              background: "#FFFFFF",
                              border: "1px solid #F1F1F1 ",
                              borderRadius: 20,
                              width: "100%",
                              height: 30,
                              padding: 20,
                              paddingLeft: 12,
                              margin: 10,
                              marginLeft: 0,
                              fontSize: 13,
                            }}
                          />
                        </div>

                        <div style={{ textAlign: "left" }}>
                          <p
                            style={{
                              fontWeight: 500,
                              fontSize: 20,
                              color: "#242424",
                              textAlign: "left",
                              fontFamily: "DBHeavent",
                            }}
                          >
                            {REGI01_box1EN[6].label}
                          </p>
                          <input
                            type="email"
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                            placeholder={REGI01_box1EN[7].label}
                            style={{
                              background: "#FFFFFF",
                              border: "1px solid #F1F1F1",
                              borderRadius: 20,
                              width: "100%",
                              height: 30,
                              padding: 20,
                              paddingLeft: 12,
                              margin: 10,
                              marginLeft: 0,
                              fontSize: 13,
                            }}
                          />
                        </div>

                        <div style={{ textAlign: "left" }}>
                          <p
                            style={{
                              fontWeight: 500,
                              fontSize: 20,
                              color: "#242424",
                              textAlign: "left",
                              fontFamily: "DBHeavent",
                            }}
                          >
                            {REGI01_box1EN[8].label}
                          </p>

                          <input
                            type={type}
                            name="password"
                            autoComplete="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                            placeholder={REGI01_box1EN[9].label}
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
                              marginLeft: 0,
                              fontSize: 13,
                            }}
                          />

                          <IconButton
                            onClick={() => handleClickShowPassword(1)}
                            edge="end"
                            style={{
                              position: "absolute",
                              right: 50,
                              top: 344,
                            }}
                          >
                            {valuestype ? <FiEye /> : <FiEyeOff />}
                          </IconButton>
                        </div>

                        <div style={{ textAlign: "left" }}>
                          <p
                            style={{
                              fontWeight: 500,
                              fontSize: 20,
                              color: "#242424",
                              textAlign: "left",
                              fontFamily: "DBHeavent",
                            }}
                          >
                            {REGI01_box1EN[10].label}
                          </p>

                          <input
                            type={type2}
                            name="confirmPassword"
                            autoComplete="confirmPassword"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.confirmPassword}
                            placeholder={REGI01_box1EN[9].label}
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
                              marginLeft: 0,
                              fontSize: 13,
                            }}
                          />

                          <IconButton
                            onClick={() => handleClickShowPassword(2)}
                            edge="end"
                            style={{
                              position: "absolute",
                              right: 50,
                              top: 435,
                            }}
                          >
                            {valuestype2 ? <FiEye /> : <FiEyeOff />}
                          </IconButton>
                        </div>

                        <div style={{ textAlign: "left", marginBottom: 10 }}>
                          <p
                            style={{
                              fontWeight: 500,
                              fontSize: 20,
                              color: "#242424",
                              textAlign: "left",
                              fontFamily: "DBHeavent",
                            }}
                          >
                            {REGI01_box1EN[11].label}
                          </p>

                          <input
                            type="text"
                            name="mobilePhone"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.mobilePhone}
                            placeholder={REGI01_box1EN[11].label}
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
                              marginLeft: 0,
                              fontSize: 13,
                            }}
                          />
                        </div>

                        <button
                          className={styles.button}
                          type="submit"
                          disabled={isSubmitting}
                          // onClick={() => setScreen("type")}
                        >
                          Create account
                        </button>
                      </form>
                    )}
                  </Formik>

                  <div className={styles.box1}>
                    <p className={styles.textLogin}>Already a member?</p>

                    <button
                      className={styles.button2}
                      onClick={() => navigate("/Login")}
                    >
                      <p className={styles.textLogin3}>Login</p>
                    </button>
                  </div>
                </div>
              </div>
            </>
          ) : screen === "type" ? (
            <>
              <div>
                <div
                  style={{
                    width: 500,
                    background: " #FFFFFF",
                    borderRadius: 20,
                    padding: 30,
                    height: "690px",
                  }}
                >
                  <h2 className={styles.textH}>Choose your account type.</h2>
                  <p className={styles.textLogin2}>
                    Choose the type of account you want to apply for.
                  </p>

                  <div style={{ textAlign: "left", marginTop: 10 }}>
                    <>
                      {type_User === "Freelance Translators" ? (
                        <button
                          className={styles.button4}
                          onClick={() => setType_User("Freelance Translators")}
                        >
                          <div className={styles.crown2} />
                          <p>Freelance Translators</p>
                        </button>
                      ) : (
                        <button
                          className={styles.button3}
                          onClick={() => setType_User("Freelance Translators")}
                        >
                          <div className={styles.crown} />
                          <p>Freelance Translators</p>
                        </button>
                      )}
                      {type_User === "Company" ? (
                        <button
                          className={styles.button4}
                          onClick={() => setType_User("Company")}
                        >
                          <div className={styles.briefcase2} />
                          <p>Company</p>
                        </button>
                      ) : (
                        <button
                          className={styles.button3}
                          onClick={() => setType_User("Company")}
                        >
                          <div className={styles.briefcase} />
                          <p>Company</p>
                        </button>
                      )}
                    </>
                  </div>
                  {type_User !== "" ? (
                    <button
                      className={styles.button}
                      onClick={() => setScreenNumber("type")}
                    >
                      Next
                    </button>
                  ) : (
                    <button
                      className={styles.button}
                      // onClick={() => setScreenNumber("type")}
                    >
                      Next
                    </button>
                  )}

                  <button
                    className={styles.button}
                    onClick={() => setScreen("")}
                  >
                    Back
                  </button>

                  <div className={styles.box1}>
                    <p className={styles.textLogin}>Already a member?</p>
                    <button
                      className={styles.button2}
                      onClick={() => navigate("/Login")}
                    >
                      <p className={styles.textLogin3}>Login</p>
                    </button>
                  </div>
                </div>
              </div>
            </>
          ) : screen === "1" ? (
            <>
              <div>
                <div
                  style={{
                    // position: "fixed",
                    // top: 60,
                    // left: 100,
                    width: 500,
                    background: " #FFFFFF",
                    borderRadius: 20,
                    padding: 30,
                  }}
                >
                  <h2 className={styles.textH}>
                    1.Upload your profile picture.
                  </h2>

                  <div style={{ textAlign: "left", marginTop: 10 }}>
                    <div style={{ textAlign: "center" }}>
                      {images.length < 1 ? (
                        <div
                          style={{
                            background: "#FFFFFF",
                            borderRadius: 20,
                            width: "100%",
                            height: 300,
                            padding: 60,
                            position: "relative",
                            borderStyle: "solid",
                            borderColor: "#D0D5DD",
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
                              onChange={(e) => onImageChange(e, 1)}
                            />
                            <IconButton
                              color="primary"
                              aria-label="upload picture"
                              component="span"
                            >
                              <div className={styles.cloud_upload} />
                              <p
                                style={{
                                  position: "absolute",
                                  top: 60,
                                  width: 100,
                                  fontWeight: 500,
                                  fontSize: 25,
                                  color: "#D0D5DD",
                                  fontFamily: "DBHeavent",
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
                            borderStyle: "",
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
                              onChange={(e) =>
                                setTranslators({
                                  ...translators,
                                  portfolio: e.target.value,
                                })
                              }
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
                    </div>
                  </div>

                  <button
                    className={styles.button}
                    onClick={() => setScreenNumber(1)}
                  >
                    Next
                  </button>
                  <button
                    className={styles.button}
                    onClick={() => setScreen("type")}
                  >
                    Back
                  </button>
                  <div className={styles.box1}>
                    <p className={styles.textLogin}>Already a member?</p>
                    <button
                      className={styles.button2}
                      onClick={() => navigate("/Login")}
                    >
                      <p className={styles.textLogin3}>Login</p>
                    </button>
                  </div>
                </div>
              </div>
            </>
          ) : screen === "2" ? (
            <>
              <div>
                <div
                  style={{
                    width: 550,
                    background: " #FFFFFF",
                    borderRadius: 20,
                    padding: 30,
                  }}
                >
                  <h2 className={styles.textH}>
                    2.Upload a picture of your ID card.
                  </h2>
                  <p className={styles.textLogin2}>
                    (such as JPG, PDF, PNG and the file size does not exceed
                    25Mb.)
                  </p>
                  <div style={{ textAlign: "left", marginTop: 10 }}>
                    <div style={{ textAlign: "center" }}>
                      {images2.length < 1 ? (
                        <div
                          style={{
                            background: "#FFFFFF",
                            borderRadius: 20,
                            width: "100%",
                            height: 300,
                            padding: 60,
                            position: "relative",
                            borderStyle: "solid",
                            borderColor: "#D0D5DD",
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
                              onChange={(e) => onImageChange(e, 2)}
                            />
                            <IconButton
                              color="primary"
                              aria-label="upload picture"
                              component="span"
                            >
                              <div className={styles.cloud_upload} />
                              <p
                                style={{
                                  position: "absolute",
                                  top: 60,
                                  width: 100,
                                  fontWeight: 500,
                                  fontSize: 25,
                                  color: "#D0D5DD",
                                  fontFamily: "DBHeavent",
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
                            borderStyle: "",
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
                              onChange={(e) =>
                                setTranslators({
                                  ...translators,
                                  idcard: e.target.value,
                                })
                              }
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
                    </div>
                  </div>
                  {translators.idcard !== "" ? (
                    <button
                      className={styles.button}
                      onClick={() => setScreenNumber(2)}
                    >
                      Next
                    </button>
                  ) : (
                    <button
                      className={styles.button}
                      // onClick={() => setScreenNumber(2)}
                    >
                      Next
                    </button>
                  )}

                  <button
                    className={styles.button}
                    onClick={() => setScreen("1")}
                  >
                    Back
                  </button>
                  <div className={styles.box1}>
                    <p className={styles.textLogin}>Already a member?</p>
                    <button
                      className={styles.button2}
                      onClick={() => navigate("/Login")}
                    >
                      <p className={styles.textLogin3}>Login</p>
                    </button>
                  </div>
                </div>
              </div>
            </>
          ) : screen === "3" ? (
            <>
              <div>
                <div
                  style={{
                    width: 500,
                    background: " #FFFFFF",
                    borderRadius: 20,
                    padding: 30,
                  }}
                >
                  <h2 className={styles.textH}>
                    3.Education/Certificate/Proof of Language Competency.
                  </h2>
                  <p className={styles.textLogin2}>
                    (such as JPG, PDF, PNG and the file size does not exceed
                    25Mb.)
                  </p>
                  <div style={{ textAlign: "left", marginTop: 10 }}>
                    <div style={{ textAlign: "center" }}>
                      {images3.length < 1 ? (
                        <div
                          style={{
                            background: "#FFFFFF",
                            borderRadius: 20,
                            width: "100%",
                            height: 300,
                            padding: 60,
                            position: "relative",
                            borderStyle: "solid",
                            borderColor: "#D0D5DD",
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
                              onChange={(e) => onImageChange(e, 3)}
                            />
                            <IconButton
                              color="primary"
                              aria-label="upload picture"
                              component="span"
                            >
                              <div className={styles.cloud_upload} />
                              <p
                                style={{
                                  position: "absolute",
                                  top: 60,
                                  width: 100,
                                  fontWeight: 500,
                                  fontSize: 25,
                                  color: "#D0D5DD",
                                  fontFamily: "DBHeavent",
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
                            borderStyle: "",
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
                              onChange={(e) =>
                                setTranslators({
                                  ...translators,
                                  education: e.target.value,
                                })
                              }
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
                    </div>
                  </div>

                  {translators.education !== "" ? (
                    <button
                      className={styles.button}
                      onClick={() => setScreenNumber(3)}
                    >
                      Next
                    </button>
                  ) : (
                    <button
                      className={styles.button}
                      // onClick={() => setScreenNumber(2)}
                    >
                      Next
                    </button>
                  )}
                  <button
                    className={styles.button}
                    onClick={() => setScreen("2")}
                  >
                    Back
                  </button>
                  <div className={styles.box1}>
                    <p className={styles.textLogin}>Already a member?</p>
                    <button
                      className={styles.button2}
                      onClick={() => navigate("/Login")}
                    >
                      <p className={styles.textLogin3}>Login</p>
                    </button>
                  </div>
                </div>
              </div>
            </>
          ) : screen === "4" ? (
            <>
              <div>
                <div
                  style={{
                    width: 500,
                    background: " #FFFFFF",
                    borderRadius: 20,
                    padding: 30,
                  }}
                >
                  <h2 className={styles.textH}>4.Portfolio/CV.</h2>
                  <p className={styles.textLogin2}>
                    (such as JPG, PDF, PNG and the file size does not exceed
                    25Mb.)
                  </p>
                  <div style={{ textAlign: "left", marginTop: 10 }}>
                    <div style={{ textAlign: "center" }}>
                      {images4.length < 1 ? (
                        <div
                          style={{
                            background: "#FFFFFF",
                            borderRadius: 20,
                            width: "100%",
                            height: 300,
                            padding: 60,
                            position: "relative",
                            borderStyle: "solid",
                            borderColor: "#D0D5DD",
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
                              onChange={(e) => onImageChange(e, 4)}
                            />
                            <IconButton
                              color="primary"
                              aria-label="upload picture"
                              component="span"
                            >
                              <div className={styles.cloud_upload} />
                              <p
                                style={{
                                  position: "absolute",
                                  top: 60,
                                  width: 100,
                                  fontWeight: 500,
                                  fontSize: 25,
                                  color: "#D0D5DD",
                                  fontFamily: "DBHeavent",
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
                            borderStyle: "",
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
                              onChange={(e) =>
                                setTranslators({
                                  ...translators,
                                  portfolio: e.target.value,
                                })
                              }
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
                    </div>
                  </div>
                  {translators.portfolio !== "" ? (
                    <button
                      className={styles.button}
                      onClick={() => setScreenNumber(3)}
                    >
                      Next
                    </button>
                  ) : (
                    <button
                      className={styles.button}
                      // onClick={() => setScreenNumber(2)}
                    >
                      Next
                    </button>
                  )}

                  <button
                    className={styles.button}
                    onClick={() => setScreen("3")}
                  >
                    Back
                  </button>
                  <div className={styles.box1}>
                    <p className={styles.textLogin}>Already a member?</p>
                    <button
                      className={styles.button2}
                      onClick={() => navigate("/Login")}
                    >
                      <p className={styles.textLogin3}>Login</p>
                    </button>
                  </div>
                </div>
              </div>
            </>
          ) : screen === "5" ? (
            <>
              <div>
                <div
                  style={{
                    width: 500,
                    background: " #FFFFFF",
                    borderRadius: 20,
                    padding: 30,
                  }}
                >
                  <h2 className={styles.textH}>5.Banking and Finance</h2>
                  <p className={styles.textLogin2}>
                    Please complete your financial information.
                  </p>
                  <div style={{ textAlign: "left", marginTop: 10 }}>
                    <Formik
                      initialValues={{
                        name: "",
                        email: "",
                        password: "",
                        confirmPassword: "",
                        mobilePhone: "",
                      }}
                      validate={(values) => {
                        const errors = {};
                        if (!values.email) {
                          errors.email = "Required";
                        } else if (
                          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                            values.email
                          )
                        ) {
                          errors.email = "Invalid email address";
                        }
                        return errors;
                      }}
                      onSubmit={(values, { setSubmitting }) => {
                        if (values) {
                          console.log("values:", values);
                          setTranslators({
                            ...translators,
                            name: values.name,
                            email: values.email,
                            password: values.password,
                            confirmPassword: values.confirmPassword,
                            mobilePhone: values.mobilePhone,
                          });
                          setSubmitting(false);
                          setScreen("type");
                        } else {
                          console.log("err:", "มันไม่ได้");
                          setSubmitting(false);
                        }
                      }}
                    >
                      {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                      }) => (
                        <form onSubmit={handleSubmit}>
                          <div style={{ textAlign: "left", marginTop: 10 }}>
                            <p
                              style={{
                                fontWeight: 500,
                                fontSize: 20,
                                color: "#242424",
                                textAlign: "left",
                                fontFamily: "DBHeavent",
                              }}
                            >
                              Bank name
                            </p>
                            <input
                              type="text"
                              name="name"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.name}
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
                                marginLeft: 0,
                                fontSize: 13,
                              }}
                            />
                          </div>

                          <div style={{ textAlign: "left" }}>
                            <p
                              style={{
                                fontWeight: 500,
                                fontSize: 20,
                                color: "#242424",
                                textAlign: "left",
                                fontFamily: "DBHeavent",
                              }}
                            >
                              Branch name
                            </p>
                            <input
                              type="email"
                              name="email"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.email}
                              placeholder="Branch name"
                              style={{
                                background: "#FFFFFF",
                                border: "1px solid #F1F1F1",
                                borderRadius: 20,
                                width: "100%",
                                height: 30,
                                padding: 20,
                                paddingLeft: 12,
                                margin: 10,
                                marginLeft: 0,
                                fontSize: 13,
                              }}
                            />
                          </div>

                          <div style={{ textAlign: "left" }}>
                            <p
                              style={{
                                fontWeight: 500,
                                fontSize: 20,
                                color: "#242424",
                                textAlign: "left",
                                fontFamily: "DBHeavent",
                              }}
                            >
                              Account name
                            </p>

                            <input
                              type="text"
                              name="password"
                              autoComplete="password"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.password}
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
                                marginLeft: 0,
                                fontSize: 13,
                              }}
                            />
                          </div>

                          <div style={{ textAlign: "left" }}>
                            <p
                              style={{
                                fontWeight: 500,
                                fontSize: 20,
                                color: "#242424",
                                textAlign: "left",
                                fontFamily: "DBHeavent",
                              }}
                            >
                              Account number
                            </p>

                            <input
                              type="text"
                              name="confirmPassword"
                              autoComplete="confirmPassword"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.confirmPassword}
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
                                marginLeft: 0,
                                fontSize: 13,
                              }}
                            />
                          </div>

                          <div style={{ textAlign: "left" }}>
                            <p
                              style={{
                                fontWeight: 500,
                                fontSize: 20,
                                color: "#242424",
                                textAlign: "left",
                                fontFamily: "DBHeavent",
                              }}
                            >
                              Book Bank
                            </p>
                            <p
                              style={{
                                fontWeight: 500,
                                fontSize: 18,
                                color: "#242424",
                                textAlign: "left",
                                fontFamily: "DBHeaventLi",
                              }}
                            >
                              Download your bank book page. File size must not
                              exceed 25Mb.
                            </p>
                            <div
                              style={{
                                background: "#FFFFFF",
                                borderRadius: 20,
                                width: "100%",
                                padding: 60,
                                position: "relative",
                                borderStyle: "solid",
                                borderColor: "#D0D5DD",
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
                                  onChange={(e) => onImageChange(e, 5)}
                                />
                                <IconButton
                                  color="primary"
                                  aria-label="upload picture"
                                  component="span"
                                >
                                  <img
                                    src={downloadcloud01}
                                    alt="downloadcloud01"
                                  />
                                  <p
                                    style={{
                                      position: "absolute",
                                      top: 60,
                                      width: 100,
                                      fontWeight: 500,
                                      fontSize: 25,
                                      color: "#D0D5DD",
                                      fontFamily: "DBHeavent",
                                    }}
                                  >
                                    Upload File
                                  </p>
                                </IconButton>
                              </label>
                            </div>
                            {/* 
                              
                              <p>Upload file</p> */}
                          </div>

                          <button
                            className={styles.button}
                            type="submit"
                            disabled={isSubmitting}
                            // onClick={() => setScreen("type")}
                          >
                            Next
                          </button>
                        </form>
                      )}
                    </Formik>
                  </div>

                  {/* <button
                    className={styles.button}
                    onClick={() => setScreenNumber(5)}
                  >
                    Next
                  </button> */}

                  <button
                    className={styles.button}
                    onClick={() => setScreen("4")}
                  >
                    Back
                  </button>
                  <div className={styles.box1}>
                    <p className={styles.textLogin}>Already a member?</p>
                    <button
                      className={styles.button2}
                      onClick={() => navigate("/Login")}
                    >
                      <p className={styles.textLogin3}>Login</p>
                    </button>
                  </div>
                </div>
              </div>
            </>
          ) : screen === "6" ? (
            <>
              <div>
                <div
                  style={{
                    // position: "fixed",
                    // top: 60,
                    // left: 100,
                    width: 500,
                    background: " #FFFFFF",
                    borderRadius: 20,
                    padding: 30,
                  }}
                >
                  <h2 className={styles.textH}>6.Skill and your service.</h2>
                  <p className={styles.textLogin2}>
                    Please complete your information.
                  </p>
                  <div style={{ textAlign: "left", marginTop: 10 }}></div>

                  <button
                    className={styles.button}
                    onClick={() => setScreenNumber(6)}
                  >
                    Next
                  </button>
                  <button
                    className={styles.button}
                    onClick={() => setScreen("5")}
                  >
                    Back
                  </button>
                  <div className={styles.box1}>
                    <p className={styles.textLogin}>Already a member?</p>
                    <button
                      className={styles.button2}
                      onClick={() => navigate("/Login")}
                    >
                      <p className={styles.textLogin3}>Login</p>
                    </button>
                  </div>
                </div>
              </div>
            </>
          ) : screen === "7" ? (
            <>
              <div>
                <div
                  style={{
                    // position: "fixed",
                    // top: 60,
                    // left: 100,
                    width: 500,
                    background: " #FFFFFF",
                    borderRadius: 20,
                    padding: 30,
                  }}
                >
                  <h2 className={styles.textH}>7.Test Skill.</h2>
                  <p className={styles.textLogin2}>
                    Please complete your information.
                  </p>
                  <div style={{ textAlign: "left", marginTop: 10 }}></div>

                  <button
                    className={styles.button}
                    onClick={() => setScreenNumber(7)}
                  >
                    Next
                  </button>
                  <button
                    className={styles.button}
                    onClick={() => setScreen("6")}
                  >
                    Back
                  </button>
                  <div className={styles.box1}>
                    <p className={styles.textLogin}>Already a member?</p>
                    <button
                      className={styles.button2}
                      onClick={() => navigate("/Login")}
                    >
                      <p className={styles.textLogin3}>Login</p>
                    </button>
                  </div>
                </div>
              </div>
            </>
          ) : null}
          <>
            {Doc === "English" ? (
              <div style={{ position: "relative", right: "20%" }}>
                <div style={{ float: "right" }}>
                  <p className={styles.textPolicy}>{REGI01_box1EN[14].label}</p>
                </div>
                <div style={{ float: "right", marginRight: 50 }}>
                  <p className={styles.textPolicy}>{REGI01_box1EN[13].label}</p>
                </div>
              </div>
            ) : Doc === "Thai" ? (
              <div style={{ position: "relative", right: "20%" }}>
                <div style={{ float: "right" }}>
                  <p className={styles.textPolicy}>{REGI01_box1TH[14].label}</p>
                </div>
                <div style={{ float: "right", marginRight: 50 }}>
                  <p className={styles.textPolicy}>{REGI01_box1TH[13].label}</p>
                </div>
              </div>
            ) : Doc === "German" ? (
              <div style={{ position: "relative", right: "20%" }}>
                <div style={{ float: "right" }}>
                  <p className={styles.textPolicy}>{REGI01_box1DE[14].label}</p>
                </div>
                <div style={{ float: "right", marginRight: 50 }}>
                  <p className={styles.textPolicy}>{REGI01_box1DE[13].label}</p>
                </div>
              </div>
            ) : (
              <div style={{ position: "relative", right: "20%" }}>
                <div style={{ float: "right" }}>
                  <p className={styles.textPolicy}>{REGI01_box1EN[14].label}</p>
                </div>
                <div style={{ float: "right", marginRight: 50 }}>
                  <p className={styles.textPolicy}>{REGI01_box1EN[13].label}</p>
                </div>
              </div>
            )}
          </>
        </div>

        <div>
          {translators?.type === "Freelance Translators" ? (
            <div className={styles?.img_Signup2}>
              <div>
                <p className={styles.textimg1}>Translation Hero</p>
                <p className={styles.textimg2}>
                  ...เรายินดีต้อนรับนักแปลทุกท่านเข้าสู่ระบบ
                  และพร้อมรับประสบการณ์ในการทำงานใหม่ๆผ่าน
                  เครื่องมือที่น่าสนใจ...
                </p>
              </div>
            </div>
          ) : translators?.type === "Company" ? (
            <div className={styles?.img_Signup3}>
              <div>
                <p className={styles.textimg1}>Translation Hero</p>
                <p className={styles.textimg2}>
                  ...เรายินดีต้อนรับนักแปลทุกท่านเข้าสู่ระบบ
                  และพร้อมรับประสบการณ์ในการทำงานใหม่ๆผ่าน
                  เครื่องมือที่น่าสนใจ...
                </p>
              </div>
            </div>
          ) : (
            <div className={styles?.img_Signup1}>
              <div>
                <p className={styles.textimg1}>Translation Hero</p>
                <p className={styles.textimg2}>
                  ...เรายินดีต้อนรับนักแปลทุกท่านเข้าสู่ระบบ
                  และพร้อมรับประสบการณ์ในการทำงานใหม่ๆผ่าน
                  เครื่องมือที่น่าสนใจ...
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default Signup;
