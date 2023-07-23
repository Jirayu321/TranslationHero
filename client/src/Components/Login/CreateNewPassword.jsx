import * as React from "react";

import Navbars from "../Navbar/navbarLogin";

import { useNavigate, useLocation } from "react-router-dom";
import { FiEyeOff, FiEye } from "react-icons/fi";

import IconButton from "@mui/material/IconButton";
import styles from "./Login.module.css";

const CreateNewPassword = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let Doc = location?.state?.languages;
  const [password, setPassword] = React.useState("");
  const [confirm, setConfirm] = React.useState("");
  const [type, setType] = React.useState("password");
  const [type2, setType2] = React.useState("password");
  const [values, setValues] = React.useState(false);
  const [values2, setValues2] = React.useState(false);
  const [saved, setSaved] = React.useState(false);

  let Email = location?.state?.email;
  let Type = location?.state?.type;
  console.log("test01:", Email, Type);

  const handleClickShowPassword = () => {
    if (type === "password") {
      setValues(!values);
      setType("text");
    } else if (type === "text") {
      setValues(!values);
      setType("password");
    }
  };

  const handleClickShowConfirmPassword = () => {
    if (type2 === "password") {
      setValues2(!values2);
      setType2("text");
    } else if (type2 === "text") {
      setValues2(!values2);
      setType2("password");
    }
  };

  const Save = () => {
    if (saved === false) {
      setSaved(!saved);
    } else {
      // console.log(saved);
      navigate("/Login", {
        state: {
          email: `${Email}`,
          password: `${password}`,
          type: `${Type}`,
        },
      });
    }
  };

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
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div
          style={{
            position: "relative",
            width: "50%",
            left: 83,
            // height: "100vh",
          }}
        >
          <div
            style={{
              // position: "fixed",
              // top: 130,
              // left: 100,
              width: 500,
              background: " #FFFFFF",
              // boxShadow: " 0px 4px 25px rgba(0, 0, 0, 0.15)",
              borderRadius: 20,
              padding: 30,
            }}
          >
            {saved === false ? (
              <div style={{ padding: 20 }}>
                <h2 className={styles.textLogin}>Create New Password</h2>
                <p className={styles.textLogin2}>
                  Please create a new password.
                </p>
                
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
                    New password
                  </p>
                  <input
                    type={type}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your new password"
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
                    }}
                  />
                  <IconButton
                    onClick={handleClickShowPassword}
                    edge="end"
                    style={{ position: "absolute", right: 290, top: 220 }}
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
                    Confirm new password
                  </p>
                  <input
                    type={type2}
                    value={confirm}
                    onChange={(e) => setConfirm(e.target.value)}
                    placeholder="Enter your new password"
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
                    }}
                  />
                  <IconButton
                    onClick={handleClickShowConfirmPassword}
                    edge="end"
                    style={{ position: "absolute", right: 290, top: 312 }}
                  >
                    {values2 ? <FiEye /> : <FiEyeOff />}
                  </IconButton>
                </div>

                <button className={styles.button} onClick={Save}>
                  <p>Save</p>
                </button>
              </div>
            ) : (
              <div style={{ padding: 20 }}>
                <h2 className={styles.textLogin}>Successfully</h2>
                <p className={styles.textLogin2}>
                  Changed password successfully, please log in again.
                </p>

                <button className={styles.button} onClick={Save}>
                  <p>Login</p>
                </button>
              </div>
            )}
          </div>

          <div style={{ top: "140px", position: "relative", right: "45%" }}>
            <div style={{ float: "right" }}>
              <p className={styles.textPolicy}>Privacy policy</p>
            </div>
            <div style={{ float: "right", marginRight: 50 }}>
              <p className={styles.textPolicy}>Copyrights Give Network 2021.</p>
            </div>
          </div>
        </div>

        <div>
          <div className={styles?.img_CreateNewPassword}>
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
export default CreateNewPassword;
