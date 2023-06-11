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
// import { AiFillCheckCircle } from "react-icons/ai";
// import { MdCameraAlt, MdArrowDropDown } from "react-icons/md";
// import Login1 from "../../Images/Sign_up.png";

import {
  REGI01_box1EN,
  REGI01_box1DE,
  REGI01_box1TH,
  // REGI01_box2EN,
  // REGI01_box2DE,
  // REGI01_box2TH,
  // REGI01_box3EN,
  // REGI01_box3DE,
  // REGI01_box3TH,
  // REGI01_box4EN,
  // REGI01_box4DE,
  // REGI01_box4TH,
  // REGI01_box5EN,
  // REGI01_box5DE,
  // REGI01_box5TH,

  // RegisterTranslator
  // REGI02_Box1v02EN,
  // REGI02_Box1v02DE,
  // REGI02_Box1v02TH,
  // REGI02_Box2v02EN,
  // REGI02_Box2v02DE,
  // REGI02_Box2v02TH,
  // REGI02_Box4v01EN,
  // REGI02_Box4v01DE,
  // REGI02_Box4v01TH,
  // REGI02_Box3v02EN,
  // REGI02_Box3v02DE,
  // REGI02_Box3v02TH,
  // REGI02_Box5v02EN,
  // REGI02_Box5v02DE,
  // REGI02_Box5v02TH,
  // REGI02_box5EN,
  // REGI02_box5DE,
  // REGI02_box5TH,

  // Freelance
  // REGI02_Box1v01EN,
  // REGI02_Box1v01DE,
  // REGI02_Box1v01TH,
  // REGI02_Box2v01EN,
  // REGI02_Box2v01DE,
  // REGI02_Box2v01TH,
  // REGI02_Box3v01EN,
  // REGI02_Box3v01DE,
  // REGI02_Box3v01TH,
  // REGI02_Box5v01EN,
  // REGI02_Box5v01DE,
  // REGI02_Box5v01TH,
  // REGI02_Box6EN,
  // REGI02_Box6DE,
  // REGI02_Box6TH,
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
// import example12 from "../../Images/watermark.png";
// import example14 from "../../Images/CompanyCertificate.jpeg";
// import examplefreelance from "../../Images/IDcard.jpeg";
// import example11 from "../../Images/CV.jpeg";
// import example9 from "../../Images/Education.jpeg";

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
    documents: "",
    answer: "",
    question: "",
    type: "",
  });

  // console.log("", translators?.languages);
  // const [email, setEmail] = React.useState("");
  // const [password, setPassword] = React.useState("");

  const [screen, setScreen] = React.useState("");

  const [type, setType] = React.useState("password");
  const [type2, setType2] = React.useState("password");
  const [values, setValues] = React.useState(false);
  const [values2, setValues2] = React.useState(false);
  // const [open, setOpen] = React.useState(false);
  // const [open2, setOpen2] = React.useState(false);

  // const [open3, setOpen3] = React.useState(false);
  // const [open4, setOpen4] = React.useState(false);
  // const [checked, setChecked] = React.useState(false);
  // const [checked2, setChecked2] = React.useState(false);

  function setProFile(x) {
    setImageURLs(x);
    setTranslators({ ...translators, imgProfile: imageURLs });
  }

  React.useEffect(() => {
    if (images.length < 1) return;
    const newImageUrls = [];
    images.forEach((image) => newImageUrls.push(URL.createObjectURL(image)));
    setProFile(newImageUrls);
  }, [images]);

  function onImageChange(e, i) {
    switch (i) {
      case 1:
        setImages([...e.target.files]);
        break;
      case 2:
        setImages([...e.target.files]);
        break;
      default:
        setImages("");
    }
    setImages([...e.target.files]);
  }

  function ChangeType(i) {
    switch (i) {
      case 1:
        setType_User("Freelance Translators");
        break;
      case 2:
        setType_User("Company");
        break;
      default:
        setType_User("");
    }
  }
  //ตรงนี้ customer
  // const handleOpen = (e) => {
  //   e.preventDefault();
  //   setUser({ ...user, type: "customer" });
  //   setOpen(true);
  // };
  // const handleClose = () => {
  //   if (checked !== false) {
  //     console.log("ไง");
  //     setOpen(false);
  //     console.log("user2:", user);
  //     dispatch(registerUser(user));
  //     console.log("auth:", auth);
  //     setOpen2(true);
  //     setChecked(false);
  //   }
  //   setTimeout(() => {
  //     navigate(
  //       "/Login"
  //       // , {
  //       //   // state: {
  //       //   //   languages: `${Doc}`,
  //       //   //   email: `${email}`,
  //       //   //   password: `${password}`,
  //       //   //   type: `${screen}`,
  //       //   // },
  //       // }
  //     );
  //   }, 900);
  // };

  // const send_Mail = (e) => {
  //   e.preventDefault();
  //   var templateParams = {
  //     user_email: `${email}`,
  //   };
  //   emailjs
  //     .send(
  //       "service_u5757dr",
  //       "template_dueh1d9",
  //       templateParams,
  //       "Npnv-PIsN0-rxduac"
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  //   // e.target.reset();
  //   handleClose();
  // };

  // const [openModal12, setOpenModal12] = React.useState(false);

  // const handleClose2 = () => setOpen2(false);

  // const handleClose3 = () => {
  //   setTranslators({ ...translators, type: "translators" });
  //   setOpen3(false);
  // };

  // const handleClose4 = () => {
  //   setTranslators({ ...translators, type: "translators" });
  //   setOpen3(false);
  //   setChecked2(false);
  //   setOpen4(true);
  // };

  // const handleClose5 = () => {
  //   setOpen4(false);
  //   console.log("translators:", translators);
  //   dispatch(registerUser(translators));
  //   navigate(
  //     "/Login"
  //     // , {
  //     //   state: {
  //     //     languages: `${Doc}`,
  //     //     email: `${email}`,
  //     //     password: `${password}`,
  //     //     type: `${screen}`,
  //     //   },
  //     // }
  //   );
  // };

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

  // const handleChange = (event) => {
  //   console.log(event.target.value);
  //   setScreen(event.target.value);
  // };

  // const handleChange2 = (event) => {
  //   setChecked(event.target.checked);
  //   setChecked2(event.target.checked);
  // };

  // const goHome = (x) => {
  //   navigate("/", { state: { languages: `${x}` } });
  // };

  // const goLogin = (x) => {
  //   navigate("/Login", { state: { languages: `${x}` } });
  // };

  // const example = (x) => {
  //   if (x === 12) {
  //     setOpenModal12(true);
  //   }
  // };

  // const handleClose12 = () => {
  //   setOpenModal12(false);
  // };

  console.log("screen", screen);
  function setScreenNumber(i) {
    switch (i) {
      case "type": {
        setTranslators({ ...translators, tpye: type_User });
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
          marginBottom: "30px",
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
                      value={translators?.name}
                      onChange={(e) =>
                        setTranslators({ ...translators, name: e.target.value })
                      }
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
                      type="text"
                      name="user_email"
                      value={translators?.email}
                      onChange={(e) =>
                        setTranslators({
                          ...translators,
                          email: e.target.value,
                        })
                      }
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
                    <form>
                      <input
                        type={type}
                        value={translators?.password}
                        name="password"
                        autoComplete="password"
                        onChange={(e) =>
                          setTranslators({
                            ...translators,
                            password: e.target.value,
                          })
                        }
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
                          fontSize: 13,
                        }}
                      />
                    </form>

                    <IconButton
                      onClick={() => handleClickShowPassword(1)}
                      edge="end"
                      style={{ position: "absolute", right: 40, top: 344 }}
                    >
                      {values ? <FiEye /> : <FiEyeOff />}
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
                    <form>
                      <input
                        type={type2}
                        value={translators?.confirmPassword}
                        name="confirmPassword"
                        autoComplete="confirmPassword"
                        onChange={(e) =>
                          setTranslators({
                            ...translators,
                            confirmPassword: e.target.value,
                          })
                        }
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
                          fontSize: 13,
                        }}
                      />
                    </form>

                    <IconButton
                      onClick={() => handleClickShowPassword(2)}
                      edge="end"
                      style={{ position: "absolute", right: 40, top: 435 }}
                    >
                      {values2 ? <FiEye /> : <FiEyeOff />}
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
                      value={translators?.mobilePhone}
                      onChange={(e) =>
                        setTranslators({
                          ...translators,
                          mobilePhone: e.target.value,
                        })
                      }
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
                        fontSize: 13,
                      }}
                    />
                  </div>

                  <button
                    className={styles.button}
                    onClick={() => setScreen("type")}
                  >
                    Create account
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
          ) : screen === "type" ? (
            <>
              <div>
                <div
                  style={{
                    position: "fixed",
                    top: 60,
                    left: 100,
                    width: 500,
                    background: " #FFFFFF",
                    borderRadius: 20,
                    padding: 30,
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
                          onClick={() => ChangeType(1)}
                        >
                          <div className={styles.crown} />
                          <p>Freelance Translators</p>
                        </button>
                      ) : (
                        <button
                          className={styles.button3}
                          onClick={() => ChangeType(1)}
                        >
                          <div className={styles.crown} />
                          <p>Freelance Translators</p>
                        </button>
                      )}
                      {type_User === "Company" ? (
                        <button
                          className={styles.button4}
                          onClick={() => ChangeType(2)}
                        >
                          <div className={styles.briefcase} />
                          <p>Company</p>
                        </button>
                      ) : (
                        <button
                          className={styles.button3}
                          onClick={() => ChangeType(2)}
                        >
                          <div className={styles.briefcase} />
                          <p>Company</p>
                        </button>
                      )}
                    </>
                  </div>

                  <button
                    className={styles.button}
                    onClick={() => setScreenNumber("type")}
                  >
                    Next
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
                    position: "fixed",
                    top: 60,
                    left: 100,
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
                    position: "fixed",
                    top: 60,
                    left: 100,
                    width: 500,
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
                    onClick={() => setScreenNumber(2)}
                  >
                    Next
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
                    position: "fixed",
                    top: 60,
                    left: 100,
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
                    onClick={() => setScreenNumber(3)}
                  >
                    Next
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
                    position: "fixed",
                    top: 60,
                    left: 100,
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
                    onClick={() => setScreenNumber(3)}
                  >
                    Next
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
                    position: "fixed",
                    top: 60,
                    left: 100,
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
                  <div style={{ textAlign: "left", marginTop: 10 }}></div>

                  <button
                    className={styles.button}
                    onClick={() => setScreenNumber(3)}
                  >
                    Next
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
                    position: "fixed",
                    top: 60,
                    left: 100,
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
                    position: "fixed",
                    top: 60,
                    left: 100,
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
