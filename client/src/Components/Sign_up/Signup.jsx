import * as React from "react";
// import emailjs from "@emailjs/browser";
import Navbars from "../Navbar/navbarLogin";
import { Formik } from "formik";
import { data, data2 } from "../Data/data";

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
import { MdArrowDropDown } from "react-icons/md";
import File from "../../Images/file.svg";
import Checkcircle from "../../Images/checkcircle.svg";
import Check from "../../Images/Check.svg";
import Logo from "../../logo.svg";

import {
  REGI01_box1EN,
  REGI01_box1DE,
  REGI01_box1TH,
} from "../Data/DataLanguage";

import {
  IconButton,
  // Radio,
  // RadioGroup,
  FormControlLabel,
  FormGroup,
  Input,
  Modal,
  // Typography,
  Box,
  Checkbox,
  Autocomplete,
  TextField,
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
  const [images6, setImages6] = React.useState([]);
  const [images7, setImages7] = React.useState([]);
  const [images8, setImages8] = React.useState([]);
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
  const [openModel, setopenModel] = React.useState({
    openModel1: false,
    openModel2: false,
  });

  const [screen, setScreen] = React.useState("");
  const [type, setType] = React.useState("password");
  const [type2, setType2] = React.useState("password");
  const [checked, setChecked] = React.useState(false);
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
    } else if (y === 6) {
      images6.forEach((image) => x.push(URL.createObjectURL(image)));
      setImageURLs(x);
      setTranslators({ ...translators, watermark: imageURLs });
    } else if (y === 7) {
      images7.forEach((image) => x.push(URL.createObjectURL(image)));
      setImageURLs(x);
      setTranslators({ ...translators, certificate: imageURLs });
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
    if (images6.length > 0) {
      console.log("images5:", images6);
      const newImageUrls = [];
      setProFile(newImageUrls, 6);
    }
    if (images7.length > 0) {
      console.log("images5:", images7);
      const newImageUrls = [];
      setProFile(newImageUrls, 7);
    }
    if (images8.length > 0) {
      console.log("images5:", images8);
      const newImageUrls = [];
      setProFile(newImageUrls, 8);
    }
  }, [images, images2, images3, images4, images5, images6, images7, images8]);

  function onImageChange(e, i) {
    const files = [...e.target.files];
    console.log(i);
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
      case 6:
        console.log("case 6");
        setImages6(files);
        break;
      case 7:
        console.log("case 7");
        setImages7(files);
        break;
      case 8:
        console.log("case 8");
        setImages8(files);
        break;
      default:
        console.log("Invalid case");
        setImages([]);
        setImages2([]);
        setImages3([]);
        setImages4([]);
        setImages5([]);
        setImages6([]);
        setImages7([]);
        setImages8([]);
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
        setopenModel({
          ...openModel,
          openModel1: true,
        });
        // navigate("/Login");
        break;
      case "back":
        setTranslators({ ...translators, type: "" });
        setType_User("");
        setScreen("type");
        break;
      default:
        setScreen("");
    }
  }

  function OpneMode(x) {
    if (x === 2) {
      setopenModel({
        ...openModel,
        openModel1: false,
        openModel2: true,
      });
      setTimeout(function () {
        setopenModel({
          ...openModel,
          openModel1: false,
          openModel2: false,
        });
        navigate("/Login");
      }, 3000);
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

      <Modal
        hideBackdrop
        open={openModel?.openModel1}
        onClose={() =>
          setopenModel({
            ...openModel,
            openModel1: false,
          })
        }
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box className={styles.ModalBoxPayment}>
          <div
            id="keep-mounted-modal-description"
            sx={{
              mt: 2,
              textAlign: "center",
            }}
          >
            <img src={Logo} alt="logo" className={styles.Logo} />
            <p className={styles.H_text01}>Terms and Conditions</p>
            <p className={styles.H_text02}>
              The company agrees to provide truthful information. and can
              receive translation work and forward it to translators who are
              competent in the languages stated by the company above. and will
              be responsible for all translation works translated from the
              company
            </p>
          </div>
          <div className={styles.borderReceipt}></div>
          <div id="keep-mounted-modal-description">
            <div>
              <div className={styles.boxpayment}>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={checked}
                        onChange={(e) => setChecked(true)}
                      />
                    }
                    label="accept the terms and conditions"
                  />
                </FormGroup>
              </div>
            </div>
            <div className={styles.BoxbuttonModalBoxPayment}>
              {checked === true ? (
                <button
                  className={styles.buttonModel1}
                  onClick={() => OpneMode(2)}
                >
                  Submit
                </button>
              ) : (
                <button
                  className={styles.buttonModel2}
                  // onClick={() => OpneMode(2)}
                >
                  Submit
                </button>
              )}
            </div>
          </div>
        </Box>
      </Modal>

      <Modal
        hideBackdrop
        open={openModel?.openModel2}
        onClose={() =>
          setopenModel({
            ...openModel,
            openModel2: false,
          })
        }
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box className={styles.ModalBoxPayment2}>
          <div
            id="keep-mounted-modal-description"
            sx={{
              mt: 2,
              textAlign: "center",
            }}
          >
            <img src={Check} alt="logo" className={styles.Logo2} />
            <p className={styles.H_text03}>
              Your translator application has been sent. Wait for confirmation
              by email
            </p>
          </div>
        </Box>
      </Modal>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "auto auto",
          justifyContent: "space-between",
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
                    height: "600px",
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
                <div className={styles.BoxInputImg1}>
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
                            position: "relative",
                            borderStyle: "",
                            borderColor: "#0865A8",
                            borderWidth: 2,
                            margin: 20,
                            marginLeft: 0,
                          }}
                        >
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
                            className={styles.BoximgProfile}
                          >
                            {imageURLs.map((imageSrc, idx) => (
                              <img
                                key={idx}
                                src={imageSrc}
                                alt="imageURLs"
                                className={styles.imgProflie}
                              />
                            ))}
                          </IconButton>
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
                    onClick={() => setScreenNumber("back")}
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
                {translators?.type === "Freelance Translators" ? (
                  <div className={styles.BoxInputImg2}>
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
                          <div className={styles.BoxIdcard}>
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
                          <div className={styles.BoxIdcard}>
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
                        )}
                      </div>
                    </div>
                    {translators.idcard !== "" ? (
                      <>
                        <div className={styles.BoxSuccessFile}>
                          <img src={File} alt="file" />
                          <div>
                            <p>{images2[0]?.name}</p>
                          </div>
                          <img src={Checkcircle} alt="checkcircle" />
                        </div>
                        <button
                          className={styles.button}
                          onClick={() => setScreenNumber(2)}
                        >
                          Next
                        </button>
                      </>
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
                ) : (
                  <div className={styles.BoxInputImg2}>
                    <h2 className={styles.textH}>2.Your company information</h2>
                    <p className={styles.textLogin2}>
                      Please complete your information.
                    </p>
                    <Formik
                      initialValues={{
                        companyName: "",
                        juristicPersonNumber: "",
                        website: "",
                      }}
                      onSubmit={(values, { setSubmitting, resetForm }) => {
                        if (
                          values.companyName !== "" &&
                          values.juristicPersonNumber !== "" &&
                          values.website !== ""
                        ) {
                          console.log("values:", values);
                          setTranslators({
                            ...translators,
                            companyName: values.companyName,
                            juristicPersonNumber: values.juristicPersonNumber,
                            website: values.website,
                          });
                          setSubmitting(false);
                          resetForm({ values: "" });
                          setScreenNumber(2);
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
                              Company name
                            </p>
                            <input
                              type="text"
                              name="companyName"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.companyName}
                              placeholder="Enter your account name"
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
                              Juristic Person Number
                            </p>
                            <input
                              type="text"
                              name="juristicPersonNumber"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.juristicPersonNumber}
                              placeholder="Enter your Juristic Person Number"
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

                          <div style={{ textAlign: "left", marginBottom: 20 }}>
                            <p
                              style={{
                                fontWeight: 500,
                                fontSize: 20,
                                color: "#242424",
                                textAlign: "left",
                                fontFamily: "DBHeavent",
                              }}
                            >
                              Website
                            </p>
                            <input
                              type="text"
                              name="website"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.website}
                              placeholder="www.Example.com"
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
                          <button
                            className={styles.button}
                            type="submit"
                            disabled={isSubmitting}
                            // onClick={() => setScreenNumber(2)}
                          >
                            Next
                          </button>

                          <button
                            className={styles.button}
                            onClick={() => setScreen("1")}
                          >
                            Back
                          </button>
                          <div className={styles.box1}>
                            <p className={styles.textLogin}>
                              Already a member?
                            </p>
                            <button
                              className={styles.button2}
                              onClick={() => navigate("/Login")}
                            >
                              <p className={styles.textLogin3}>Login</p>
                            </button>
                          </div>
                        </form>
                      )}
                    </Formik>
                  </div>
                )}
              </div>
            </>
          ) : screen === "3" ? (
            <>
              <div>
                {translators?.type === "Freelance Translators" ? (
                  <div className={styles.BoxInputImg2}>
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
                          <div className={styles.BoxIdcard}>
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
                          <div className={styles.BoxIdcard}>
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
                        )}
                      </div>
                    </div>

                    {translators.education !== "" ? (
                      <>
                        <div className={styles.BoxSuccessFile}>
                          <img src={File} alt="file" />
                          <div>
                            <p>{images3[0]?.name}</p>
                          </div>
                          <img src={Checkcircle} alt="checkcircle" />
                        </div>
                        <button
                          className={styles.button}
                          onClick={() => setScreenNumber(3)}
                        >
                          Next
                        </button>
                      </>
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
                ) : (
                  <div className={styles.BoxInputImg3}>
                    <h2 className={styles.textH}>3.Your company address</h2>
                    <p className={styles.textLogin2}>
                      Please complete your information.
                    </p>
                    <Formik
                      initialValues={{
                        Address: "",
                        country: "",
                        province: "",
                        district: "",
                        postalCode: "",
                      }}
                      onSubmit={(values, { setSubmitting }) => {
                        if (
                          values?.address !== "" &&
                          values?.country !== "" &&
                          values?.province !== "" &&
                          values?.district !== "" &&
                          values?.postalCode !== ""
                        ) {
                          console.log("values:", values);
                          setTranslators({
                            ...translators,
                            address: values?.address,
                            country: values?.country,
                            province: values?.province,
                            district: values?.district,
                            postalCode: values?.postalCode,
                          });
                          setSubmitting(false);
                          setScreenNumber(3);
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
                              Address
                            </p>
                            <input
                              type="text"
                              name="Address"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.address}
                              placeholder="Enter your company address"
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
                              Country
                            </p>
                            <input
                              type="text"
                              name="country"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.country}
                              placeholder="Enter your Country"
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
                              Province
                            </p>
                            <input
                              type="text"
                              name="province"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.province}
                              placeholder="Enter your  Province"
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
                              District
                            </p>
                            <input
                              type="text"
                              name="district"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.district}
                              placeholder="Enter your  District"
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

                          <div style={{ textAlign: "left", marginBottom: 20 }}>
                            <p
                              style={{
                                fontWeight: 500,
                                fontSize: 20,
                                color: "#242424",
                                textAlign: "left",
                                fontFamily: "DBHeavent",
                              }}
                            >
                              Postal Code
                            </p>
                            <input
                              type="text"
                              name="postalCode"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.postalCode}
                              placeholder="Enter your  Postal Code"
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

                          <button
                            className={styles.button}
                            type="submit"
                            disabled={isSubmitting}
                            // onClick={() => setScreenNumber(2)}
                          >
                            Next
                          </button>

                          <button
                            className={styles.button}
                            onClick={() => setScreen("2")}
                          >
                            Back
                          </button>
                          <div className={styles.box1}>
                            <p className={styles.textLogin}>
                              Already a member?
                            </p>
                            <button
                              className={styles.button2}
                              onClick={() => navigate("/Login")}
                            >
                              <p className={styles.textLogin3}>Login</p>
                            </button>
                          </div>
                        </form>
                      )}
                    </Formik>
                  </div>
                )}
              </div>
            </>
          ) : screen === "4" ? (
            <>
              <div>
                {translators?.type === "Freelance Translators" ? (
                  <div className={styles.BoxInputImg2}>
                    <h2 className={styles.textH}>4.Portfolio/CV.</h2>
                    <p className={styles.textLogin2}>
                      (such as JPG, PDF, PNG and the file size does not exceed
                      25Mb.)
                    </p>
                    <div style={{ textAlign: "left", marginTop: 10 }}>
                      <div style={{ textAlign: "center" }}>
                        {images4.length < 1 ? (
                          <div className={styles.BoxIdcard}>
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
                          <div className={styles.BoxIdcard}>
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
                        )}
                      </div>
                    </div>
                    {translators.portfolio !== "" ? (
                      <>
                        <div className={styles.BoxSuccessFile}>
                          <img src={File} alt="file" />
                          <div>
                            <p>{images4[0]?.name}</p>
                          </div>
                          <img src={Checkcircle} alt="checkcircle" />
                        </div>
                        <button
                          className={styles.button}
                          onClick={() => setScreenNumber(4)}
                        >
                          Next
                        </button>
                      </>
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
                ) : (
                  <div className={styles.BoxInputImg2}>
                    <h2 className={styles.textH}>
                      4.Upload a picture to use as a watermark.
                    </h2>
                    <p className={styles.textLogin2}>
                      (such as JPG, PDF, PNG and the file size does not exceed
                      25Mb.)
                    </p>
                    <div style={{ textAlign: "left", marginTop: 10 }}>
                      <div style={{ textAlign: "center" }}>
                        {images6.length < 1 ? (
                          <div className={styles.BoxIdcard}>
                            <label htmlFor="icon-button-file">
                              <Input
                                accept="image/*"
                                id="icon-button-file"
                                type="file"
                                style={{ display: "none" }}
                                onChange={(e) => onImageChange(e, 6)}
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
                          <div className={styles.BoxIdcard}>
                            <label htmlFor="icon-button-file">
                              <Input
                                accept="image/*"
                                id="icon-button-file"
                                type="file"
                                style={{ display: "none" }}
                                onChange={(e) =>
                                  setTranslators({
                                    ...translators,
                                    watermark: e.target.value,
                                  })
                                }
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
                        )}
                      </div>
                    </div>
                    {translators.watermark !== "" ? (
                      <>
                        <div className={styles.BoxSuccessFile}>
                          <img src={File} alt="file" />
                          <div>
                            <p>{images6[0]?.name}</p>
                          </div>
                          <img src={Checkcircle} alt="checkcircle" />
                        </div>
                        <button
                          className={styles.button}
                          onClick={() => setScreenNumber(4)}
                        >
                          Next
                        </button>
                      </>
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
                )}
              </div>
            </>
          ) : screen === "5" ? (
            <>
              <div>
                {translators?.type === "Freelance Translators" ? (
                  <div className={styles.BoxInputImg3}>
                    <h2 className={styles.textH}>5.Banking and Finance</h2>
                    <p className={styles.textLogin2}>
                      Please complete your financial information.
                    </p>
                    <div style={{ textAlign: "left", marginTop: 10 }}>
                      <Formik
                        initialValues={{
                          bankname: "",
                          Branchname: "",
                          accountname: "",
                          accountnumber: "",
                        }}
                        onSubmit={(values, { setSubmitting }) => {
                          if (values) {
                            console.log("values:", values);
                            setTranslators({
                              ...translators,
                              bankname: values.bankname,
                              Branchname: values.Branchname,
                              accountname: values.accountname,
                              accountnumber: values.accountnumber,
                            });
                            setSubmitting(false);
                            setScreenNumber(5);
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
                                name="bankname"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.bankname}
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
                                type="text"
                                name="branchname"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.branchname}
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
                                name="accountname"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.accountname}
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
                                name="accountnumber"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.accountnumber}
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
                              <div className={styles.BoxuploadBookbank}>
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
                                    className={styles.setInbuttonBookbank}
                                  >
                                    <img
                                      src={downloadcloud01}
                                      alt="downloadcloud01"
                                    />
                                    <p>Upload File</p>
                                  </IconButton>
                                </label>
                              </div>
                            </div>

                            {translators.bookbank !== "" ? (
                              <>
                                <div className={styles.BoxSuccessFile}>
                                  <img src={File} alt="file" />
                                  <div>
                                    <p>{images5[0]?.name}</p>
                                  </div>
                                  <img src={Checkcircle} alt="checkcircle" />
                                </div>
                                <button
                                  className={styles.button}
                                  type="submit"
                                  disabled={isSubmitting}
                                  // onClick={() => setScreen("type")}
                                >
                                  Next
                                </button>
                              </>
                            ) : (
                              <button className={styles.button}>Next</button>
                            )}

                            <button
                              className={styles.button}
                              onClick={() => setScreen("4")}
                            >
                              Back
                            </button>
                          </form>
                        )}
                      </Formik>
                    </div>

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
                ) : (
                  <div className={styles.BoxInputImg2}>
                    <h2 className={styles.textH}>
                      5.Company Registration Certificate.
                    </h2>
                    <p className={styles.textLogin2}>
                      (such as JPG, PDF, PNG and the file size does not exceed
                      25Mb.)
                    </p>
                    <div style={{ textAlign: "left", marginTop: 10 }}>
                      <div style={{ textAlign: "center" }}>
                        {images7.length < 1 ? (
                          <div className={styles.BoxIdcard}>
                            <label htmlFor="icon-button-file">
                              <Input
                                accept="image/*"
                                id="icon-button-file"
                                type="file"
                                style={{ display: "none" }}
                                onChange={(e) => onImageChange(e, 7)}
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
                          <div className={styles.BoxIdcard}>
                            <label htmlFor="icon-button-file">
                              <Input
                                accept="image/*"
                                id="icon-button-file"
                                type="file"
                                style={{ display: "none" }}
                                onChange={(e) =>
                                  setTranslators({
                                    ...translators,
                                    certificate: e.target.value,
                                  })
                                }
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
                        )}
                      </div>
                    </div>
                    {translators.certificate !== "" ? (
                      <>
                        <div className={styles.BoxSuccessFile}>
                          <img src={File} alt="file" />
                          <div>
                            <p>{images7[0]?.name}</p>
                          </div>
                          <img src={Checkcircle} alt="checkcircle" />
                        </div>
                        <button
                          className={styles.button}
                          onClick={() => setScreenNumber(5)}
                        >
                          Next
                        </button>
                      </>
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
                )}
              </div>
            </>
          ) : screen === "6" ? (
            <>
              <div>
                {translators?.type === "Freelance Translators" ? (
                  <div className={styles.BoxInputImg2}>
                    <h2 className={styles.textH}>6.Skill and your service.</h2>
                    <p className={styles.textLogin2}>
                      Please complete your information.
                    </p>

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
                        What languages can you translate?
                      </p>

                      <Autocomplete
                        multiple
                        id="multiple-limit-tags"
                        options={data}
                        getOptionLabel={(option) => option.label}
                        // value={translators?.languages}
                        onChange={(event, value) =>
                          setTranslators({
                            ...translators,
                            languages: value?.label ? value.label : "",
                          })
                        }
                        popupIcon={
                          <MdArrowDropDown
                            style={{ color: "#333333", width: 30, height: 33 }}
                          />
                        }
                        renderInput={(params) => (
                          <TextField {...params} label="languages" />
                        )}
                      />
                    </div>

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
                        What kind of documents can you translate?
                      </p>

                      <Autocomplete
                        multiple
                        id="multiple-limit-tags"
                        options={data2}
                        getOptionLabel={(option) => option.label}
                        // value={translators?.documents}
                        onChange={(event, value) =>
                          setTranslators({
                            ...translators,
                            documents: value?.label ? value.label : "",
                          })
                        }
                        popupIcon={
                          <MdArrowDropDown
                            style={{ color: "#333333", width: 30, height: 33 }}
                          />
                        }
                        renderInput={(params) => (
                          <TextField {...params} label="documents" />
                        )}
                      />
                    </div>

                    <div
                      style={{
                        textAlign: "left",
                        marginTop: 10,
                        marginBottom: 10,
                      }}
                    >
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 20,
                          color: "#242424",
                          textAlign: "left",
                          fontFamily: "DBHeavent",
                        }}
                      >
                        Your service
                      </p>
                      <p
                        style={{
                          fontSize: 20,
                          color: "#242424",
                          textAlign: "left",
                          fontFamily: "DBHeaventLi",
                        }}
                      >
                        your services like Get stamped documents from the
                        embassy, there is a service to deliver documents.
                      </p>

                      <input
                        type="text"
                        // onChange={(e) =>
                        //   // setTranslators([
                        //   //   { ...translators, documents: e.target.value },
                        //   // ])
                        //   console.log(e)
                        // }
                        // value={translators.documents}
                        placeholder="Enter your service"
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid rgb(196 196 196",
                          borderRadius: 0,
                          width: "100%",
                          height: 55,
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
                ) : (
                  <div className={styles.BoxInputImg3}>
                    <h2 className={styles.textH}>6.Banking and Finance</h2>
                    <p className={styles.textLogin2}>
                      Please complete your financial information.
                    </p>
                    <div style={{ textAlign: "left", marginTop: 10 }}>
                      <Formik
                        initialValues={{
                          bankname: "",
                          branchname: "",
                          accountname: "",
                          accountnumber: "",
                        }}
                        onSubmit={(values, { setSubmitting }) => {
                          if (
                            values.bankname !== "" &&
                            values.branchname !== "" &&
                            values.accountname !== "" &&
                            values.accountnumber !== ""
                          ) {
                            console.log("values:", values);
                            setTranslators({
                              ...translators,
                              bankname: values.bankname,
                              Branchname: values.branchname,
                              accountname: values.accountname,
                              accountnumber: values.accountnumber,
                            });
                            setSubmitting(false);
                            setScreenNumber(6);
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
                                name="bankname"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.bankname}
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
                                type="text"
                                name="branchname"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.branchname}
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
                                name="accountname"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.accountname}
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
                                name="accountnumber"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.accountnumber}
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
                              <div className={styles.BoxuploadBookbank}>
                                <label htmlFor="icon-button-file">
                                  <Input
                                    accept="image/*"
                                    id="icon-button-file"
                                    type="file"
                                    style={{ display: "none" }}
                                    onChange={(e) => onImageChange(e, 8)}
                                  />
                                  <IconButton
                                    color="primary"
                                    aria-label="upload picture"
                                    component="span"
                                    className={styles.setInbuttonBookbank}
                                  >
                                    <img
                                      src={downloadcloud01}
                                      alt="downloadcloud01"
                                    />
                                    <p>Upload File</p>
                                  </IconButton>
                                </label>
                              </div>
                            </div>

                            {images8.length > 0 ? (
                              <>
                                <div className={styles.BoxSuccessFile}>
                                  <img src={File} alt="file" />
                                  <div>
                                    <p>{images8[0]?.name}</p>
                                  </div>
                                  <img src={Checkcircle} alt="checkcircle" />
                                </div>
                                <button
                                  className={styles.button}
                                  type="submit"
                                  disabled={isSubmitting}
                                  // onClick={() => setScreen("type")}
                                >
                                  Next
                                </button>
                              </>
                            ) : (
                              <button className={styles.button}>Next</button>
                            )}

                            <button
                              className={styles.button}
                              onClick={() => setScreen("5")}
                            >
                              Back
                            </button>
                          </form>
                        )}
                      </Formik>
                    </div>

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
                )}
              </div>
            </>
          ) : screen === "7" ? (
            <>
              <div>
                {translators?.type !== "Freelance Translators" ? (
                  <div className={styles.BoxInputImg2}>
                    <h2 className={styles.textH}>7.Skill and your service.</h2>
                    <p className={styles.textLogin2}>
                      Please complete your information.
                    </p>

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
                        What languages can you translate?
                      </p>

                      <Autocomplete
                        multiple
                        id="multiple-limit-tags"
                        options={data}
                        getOptionLabel={(option) => option.label}
                        // value={translators?.languages}
                        onChange={(event, value) =>
                          setTranslators({
                            ...translators,
                            languages: value?.label ? value.label : "",
                          })
                        }
                        popupIcon={
                          <MdArrowDropDown
                            style={{ color: "#333333", width: 30, height: 33 }}
                          />
                        }
                        renderInput={(params) => (
                          <TextField {...params} label="languages" />
                        )}
                        // sx={{ width: "500px" }}
                      />
                    </div>

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
                        What kind of documents can you translate?
                      </p>

                      <Autocomplete
                        multiple
                        id="multiple-limit-tags"
                        options={data2}
                        getOptionLabel={(option) => option.label}
                        // value={translators?.documents}
                        onChange={(event, value) =>
                          setTranslators({
                            ...translators,
                            documents: value?.label ? value.label : "",
                          })
                        }
                        popupIcon={
                          <MdArrowDropDown
                            style={{ color: "#333333", width: 30, height: 33 }}
                          />
                        }
                        renderInput={(params) => (
                          <TextField {...params} label="documents" />
                        )}
                        // sx={{ width: "500px" }}
                      />
                    </div>

                    <div
                      style={{
                        textAlign: "left",
                        marginTop: 10,
                        marginBottom: 10,
                      }}
                    >
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 20,
                          color: "#242424",
                          textAlign: "left",
                          fontFamily: "DBHeavent",
                        }}
                      >
                        Your service
                      </p>
                      <p
                        style={{
                          fontSize: 20,
                          color: "#242424",
                          textAlign: "left",
                          fontFamily: "DBHeaventLi",
                        }}
                      >
                        your services like Get stamped documents from the
                        embassy, there is a service to deliver documents.
                      </p>

                      <input
                        type="text"
                        onChange={(e) =>
                          setTranslators([
                            { ...translators, documents: e.target.value },
                          ])
                        }
                        value={translators.documents}
                        placeholder="Enter your service"
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid rgb(196 196 196",
                          borderRadius: 0,
                          width: "100%",
                          height: 55,
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
                ) : (
                  <div className={styles.BoxInputImg2}>
                    <h2 className={styles.textH}>7.Test Skill.</h2>
                    <p className={styles.textLogin2}>
                      Please complete your information.
                    </p>
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
                        Language to answer
                      </p>

                      <Autocomplete
                        multiple
                        id="multiple-limit-tags"
                        options={data}
                        getOptionLabel={(option) => option.label}
                        value={translators?.answer}
                        onChange={(event, value) =>
                          setTranslators({
                            ...translators,
                            answer: value?.label ? value.label : "",
                          })
                        }
                        popupIcon={
                          <MdArrowDropDown
                            style={{ color: "#333333", width: 30, height: 33 }}
                          />
                        }
                        renderInput={(params) => (
                          <TextField {...params} label="languages" />
                        )}
                        // sx={{ width: "500px" }}
                      />
                    </div>

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
                        Question
                      </p>
                      <p
                        style={{
                          fontSize: 20,
                          color: "#242424",
                          textAlign: "left",
                          fontFamily: "DBHeaventLi",
                        }}
                      >
                        What do you think are the requirements or boundaries for
                        learning a language? And what is each language's unique
                        difficulty? Explain.
                      </p>

                      <textarea
                        type="text"
                        maxLength={300}
                        onChange={(e) =>
                          setTranslators([
                            { ...translators, answer: e.target.value },
                          ])
                        }
                        value={translators.answer}
                        placeholder="Enter your answer"
                        className={styles.Additional_explanation}
                      />
                    </div>
                    <button
                      className={styles.button}
                      onClick={() => setScreenNumber(7)}
                    >
                      Submit
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
                )}
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
