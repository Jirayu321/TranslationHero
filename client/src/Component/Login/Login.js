import * as React from "react";

import Navbars from "../Navbar/navbarLogin";

import { FiEyeOff, FiEye } from "react-icons/fi";

import Login1 from "../../Images/login.png";

import { Formik } from "formik";
import IconButton from "@mui/material/IconButton";
import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs";
import { Link,useNavigate } from "react-router-dom";

const Login = () => {
  const { innerWidth: width } = window;
  const navigate = useNavigate();
  // const [email, setEmail] = React.useState("");
  // const [password, setPassword] = React.useState("");
  const [type, setType] = React.useState("password");
  const [value, setValue] = React.useState(false);

  const handleClickShowPassword = () => {
    if (type === "password") {
      setValue(!value);
      setType("text");
    } else if (type === "text") {
      setValue(!value);
      setType("password");
    }
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
            alt="Login"
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
          <div
            style={{
              position: "fixed",
              top: 130,
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
                to="/Signup"
                style={{
                  color: "#D9D9D9",
                  fontSize: 18,
                  textDecorationLine: "none",
                }}
              >
                Sign up
              </Link>
              <BsArrowRightShort />
            </div>

            <div style={{ padding: 20 }}>
              <h2 className="textLogin">Login</h2>
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
                  setTimeout(() => {
                    navigate("/In")
                    setSubmitting(false);
                  }, 400);
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
                      }}
                    >
                      E-mail
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
                    <p
                      style={{
                        fontWeight: 500,
                        fontSize: 20,
                        color: "#242424",
                        textAlign: "left",
                      }}
                    >
                      Password
                    </p>
                    <div>
                      <input
                        type={type}
                        name="password"
                        placeholder="Enter your password"
                        onChange={handleChange}
                        onBlur={handleBlur}
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
                      <IconButton
                        onClick={handleClickShowPassword}
                        edge="end"
                        style={{ position: "absolute", right: 61, top: 273 }}
                      >
                        {value ? <FiEye /> : <FiEyeOff />}
                      </IconButton>
                    </div>
                    {errors.email && touched.email && errors.email}
                    {errors.password && touched.password && errors.password}
                    <div style={{ textAlign: "right" }}>
                <Link
                  to="/ForgetPassword"
                  style={{
                    fontSize: 18,
                    textDecorationLine: "underline",
                    color: "#262DBB",
                  }}
                >
                  forget password
                </Link>
              </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      style={{
                        width: "100%",
                        borderRadius: 20,
                        background: "#001E33",
                        height: 40,
                        color: "#FFFFFF",
                        fontSize: 18,
                        borderColor: "transparent",
                        marginBottom: 20,
                        marginTop: 30,
                      }}
                    >
                      Login
                    </button>
                  </form>
                )}
              </Formik>
              {/* <div style={{ textAlign: "left" }}>
               
                <input
                  type="text"
                  value={email}
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
                  }}
                />
              </div>

              <div style={{ textAlign: "left" }}>
                <p
                  style={{
                    fontWeight: 500,
                    fontSize: 20,
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
                    border: "1px solid #F1F1F1",
                    borderRadius: 20,
                    width: "100%",
                    height: 30,
                    padding: 20,
                    paddingLeft: 12,
                    margin: 10,
                  }}
                />
                <IconButton
                  onClick={handleClickShowPassword}
                  edge="end"
                  style={{ position: "absolute", right: 61, top: 273 }}
                >
                  {values ? <FiEye /> : <FiEyeOff />}
                </IconButton>
              </div>
              
              <div style={{ textAlign: "right" }}>
                <Link
                  to="/ForgetPassword"
                  style={{
                    fontSize: 18,
                    textDecorationLine: "underline",
                    color: "#262DBB",
                  }}
                >
                  forget password
                </Link>
              </div>

              <button
                style={{
                  width: "100%",
                  borderRadius: 20,
                  background: "#001E33",
                  height: 40,
                  color: "#FFFFFF",
                  fontSize: 18,
                  borderColor: "transparent",
                  marginBottom: 20,
                  marginTop: 30,
                }}
              >
                <Link
                  to="/In"
                  style={{
                    color: "#FFFFFF",
                    fontSize: 18,
                    textDecorationLine: "none",
                    fontWeight: 500,
                  }}
                >
                  Login
                </Link>
              </button> */}
            </div>
          </div>

          <div style={{ top: "90%", position: "absolute", marginLeft: "25%" }}>
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
export default Login;
