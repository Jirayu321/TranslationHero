import * as React from "react";

import Navbars from "../Navbar/navbarLogin";

import { FiEyeOff, FiEye } from "react-icons/fi";

// import Login1 from "../../Images/login.png";

import { Formik } from "formik";
import IconButton from "@mui/material/IconButton";
// import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs";

import { useDispatch, useSelector } from "react-redux";
// import { loginUser } from "../../slices/auth";

import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  LOGI01_Box1EN,
  // LOGI01_Box1TH,
  // LOGI01_Box1DE,
} from "../Data/DataLanguage";

import styles from "./Login.module.css";

const Login = () => {
  // const { innerWidth: width } = window;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const auth = useSelector((state) => state.auth);

  const [type, setType] = React.useState("password");
  const [value, setValue] = React.useState(false);
  // const [se, setSe] = React.useState("");

  // const pathname = window.location.pathname;

  let Doc = location?.state?.languages;

  const goSignup = (x) => {
    navigate("/Signup", { state: { languages: `${x}` } });
  };

  const goHome = (x) => {
    navigate("/", { state: { languages: `${x}` } });
  };

  const handleClickShowPassword = () => {
    if (type === "password") {
      setValue(!value);
      setType("text");
    } else if (type === "text") {
      setValue(!value);
      setType("password");
    }
  };

  function login(x, y) {
    const data = { email: x, password: y };
    // dispatch(loginUser(data));
    // const type = auth.type;
    // console.log(type);
    if (x === "jyung3221@gmail.com" || y === "123456") {
      navigate("/In", {
        state: {
          languages: `${Doc}`,
        },
      });
    } else if (type === "translators") {
      navigate("/Dashboard_freelance");
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
        }}
      >
        <div
          style={{
            position: "relative",
            // top: "70px",
            left: 100,
            // width: "50%",
            // height: "100vh",
          }}
        >
          <div
            style={{
              // position: "fixed",

              width: 500,
              background: " #FFFFFF",
              // boxShadow: " 0px 4px 25px rgba(0, 0, 0, 0.15)",
              borderRadius: 20,
              padding: 30,
            }}
          >
            <div style={{ padding: 20 }}>
              <h2 className={styles.textLogin}>Login</h2>
              <p className={styles.textLogin2}>Welcome to Translation Hero!</p>
              <Formik
                initialValues={{ email: "", password: "" }}
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
                    const email = values?.email;
                    const password = values?.password;
                    login(email, password);
                    setSubmitting(false);
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
                    <p
                      style={{
                        fontWeight: 500,
                        fontSize: 20,
                        color: "#242424",
                        textAlign: "left",
                        fontFamily: "DBHeavent",
                      }}
                    >
                      {LOGI01_Box1EN[3].label}
                    </p>
                    <input
                      type="email"
                      name="email"
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
                      }}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                    />
                    <p style={{ color: "red", height: 25 }}>
                      {errors.email && touched.email && errors.email}
                    </p>
                    <p
                      style={{
                        fontWeight: 500,
                        fontSize: 20,
                        color: "#242424",
                        textAlign: "left",
                        fontFamily: "DBHeavent",
                      }}
                    >
                      {LOGI01_Box1EN[4].label}
                    </p>
                    <div>
                      <input
                        type={type}
                        name="password"
                        placeholder="Enter your password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        autoComplete="on"
                        value={values.password}
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid #F1F1F1",
                          borderRadius: 20,
                          width: "100%",
                          height: 30,
                          padding: 20,
                          paddingLeft: 12,
                          margin: 10,
                        }}
                      />
                      <p style={{ color: "red" }}>
                        {errors.password && touched.password && errors.password}
                      </p>

                      <IconButton
                        onClick={handleClickShowPassword}
                        edge="end"
                        style={{
                          position: "relative",
                          left: 358,
                          top: "-50px",
                        }}
                      >
                        {value ? <FiEye /> : <FiEyeOff />}
                      </IconButton>
                    </div>

                    <Link
                      to="/ForgetPassword"
                      className={styles.ForgetPassword}
                      // onClick={() => goForgetPassword("English")}
                    >
                      <p>{LOGI01_Box1EN[6].label}</p>
                    </Link>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={styles.button}
                    >
                      {LOGI01_Box1EN[2].label}
                    </button>
                    <div className={styles.box}>
                      <p className={styles.textLi}>Don’t have an account?</p>
                      <button
                        className={styles.button2}
                        onClick={() => navigate("/Signup")}
                      >
                        <p className={styles.textLogin3}>Signup</p>
                      </button>
                    </div>
                  </form>
                )}
              </Formik>
              <div style={{ position: "relative", right: "25px", top: "35px" }}>
                <div style={{ float: "right" }}>
                  <p className={styles.textPolicy}>{LOGI01_Box1EN[8].label}</p>
                </div>
                <div style={{ float: "right", marginRight: 50 }}>
                  <p className={styles.textPolicy}>{LOGI01_Box1EN[7].label}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className={styles?.img_login}>
            <div>
              <p className={styles.textimg1}>Translation Hero</p>
              <p className={styles.textimg2}>
                ...เรายินดีต้อนรับนักแปลทุกท่านเข้าสู่ระบบ
                และพร้อมรับประสบการณ์ในการทำงานใหม่ๆผ่าน เครื่องมือที่น่าสนใจ...
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
