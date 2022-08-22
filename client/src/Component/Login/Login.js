import * as React from "react";

import Navbars from "../Navbar/navbarLogin";

import { FiEyeOff, FiEye } from "react-icons/fi";

import Login1 from "../../Images/login.png";

import IconButton from "@mui/material/IconButton";
import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs";
import { Link } from "react-router-dom";

const Login = () => {
  const { innerWidth: width } = window;

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [type, setType] = React.useState("password");
  const [values, setValues] = React.useState(false);

  const handleClickShowPassword = () => {
    if (type === "password") {
      setValues(!values);
      setType("text");
    } else if (type === "text") {
      setValues(!values);
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
                fontFamily: "Roboto",
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
                fontFamily: "Roboto",
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
              <div style={{ textAlign: "left" }}>
                <text
                  style={{
                    fontWeight: 500,
                    fontSize: 20,
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
                <text
                  style={{
                    fontWeight: 500,
                    fontSize: 20,
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
                  style={{ position: "absolute", right: 61, top: 302 }}
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
                  to="/Login"
                  style={{
                    color: "#FFFFFF",
                    fontSize: 18,
                    textDecorationLine: "none",
                    fontWeight: 500,
                  }}
                >
                  Login
                </Link>
              </button>
            </div>
          </div>
          <div style={{ top: "90%", position: "absolute", marginLeft: "25%" }}>
            <div style={{ float: "right" }}>
              <text>Privacy policy</text>
            </div>
            <div style={{ float: "right", marginRight: 50 }}>
              <text>Copyrights Give Network 2021.</text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
