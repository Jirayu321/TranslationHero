import * as React from "react";

import Navbars from "../Navbar/navbarHome";
import Footer from "../Footer/Footer";
import { useNavigate, useLocation } from "react-router-dom";

// import { data, data2, data3, data4, data5 } from "../Data/data";
// import { FaUserCircle } from "react-icons/fa";
// import {
//   //   IconButton,
//   //   Input,
//   //   TextField,
//   //   Autocomplete,
// //   Box,
//   //   FormControlLabel,
//   //   Checkbox,
//   //   Stack,
//   //   Rating,
// //   Modal,
// //   Typography,
// } from "@mui/material";

// import { MdArrowDropDown } from "react-icons/md";

// import Fileimg from "../../Images/file.png";

// import {
//   // CustomerEN,
//   //  CustomerDE,
//   //  CustomerTH
// } from "../Data/DataLanguage";

import styles from "./About_us.module.css";

const About_us = () => {
  //   const { innerWidth: width, innerHeight: height } = window;
  const location = useLocation();
  const navigate = useNavigate();
  let Doc = location?.state?.languages;

  //   const [type, settype] = React.useState(null);
  //   const [trantype, setTranstype] = React.useState("");

  //   const handleChange = (event) => {
  //     setTextarea(event.target.value);
  //   };

  //   React.useEffect(() => {
  //     window.scrollTo(0, 0);
  //   }, []);

  const goSignup = () => {
    navigate("/Signup");
  };

  return (
    <>
      <header className={styles.App_header}>
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

      <>
        <div className={styles.fram1C}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div
              style={{
                textAlign: "center",
                justifyItems: "center",
                display: "inline-grid",
                position: "relative",
                top: 125,
              }}
            >
              <div>
                <p className={styles.H_text01}>About us</p>
              </div>
              <div className={styles.textCustomerH}>
                <p>
                  Translation hero comes with a functions and capabilities to
                  support the work and needs of all users.
                </p>
              </div>
              <div
                style={{
                  position: "relative",
                  top: 40,
                }}
              >
                <button
                  className={styles.fram1_button2}
                  onClick={() => goSignup()}
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frame2}>
          <div className={styles.detailefram_general}>
            <div className={styles.Boxfram3_3}>
              <div>
                <p className={styles.HBoxdetaile3_1}>machine based </p>
                <p className={styles.HBoxdetaile3_1}>translator</p>
                <p className={styles.HBoxdetaile_general}>
                  AI support translator, a helper that makes the work of
                  translators even easier. Correct grammar and reduce the time,
                  the work process is faster.
                </p>
              </div>
              <div className={styles.Imggeneral5} />
            </div>
          </div>
        </div>
        <div className={styles.frame3}>
          <div className={styles.Boxfram3_3_2}>
            <div>
              <p className={styles.HBoxdetaile3_1}>1 stop service for</p>
              <p className={styles.HBoxdetaile3_1}>translator</p>
              <p className={styles.HBoxdetaile_general}>
                AI support translator, a helper that makes the work of
                translators even easier. Correct grammar and reduce the time,
                the work process is faster.
              </p>
            </div>
            <div className={styles.Imggeneral1} />
          </div>

          <div className={styles.Boxfram3_3_3}>
            <div className={styles.Imggeneral2} />
            <div style={{ marginLeft: 100 }}>
              <p className={styles.HBoxdetaile3_1}>Recommend more,</p>
              <p className={styles.HBoxdetaile3_1}>gain more</p>
              <p className={styles.HBoxdetaile_general}>
                The more you recommend, the more The more customers recommend
                our services, the more The more you get more privileges.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.Boxfram3_3_4}>
          <div>
            <p className={styles.HBoxdetaile3_1}>Personal Tool </p>
            <p className={styles.HBoxdetaile3_1}>Assistant</p>
            <p className={styles.HBoxdetaile_general}>
              Translation tool for translators We have tools that make the work
              of translators easier and more efficient.
            </p>
          </div>
          <div className={styles.Imggeneral3} />
        </div>
        <div style={{ width: "100vw" }}>
          <Footer v="English" />
        </div>
      </>
    </>
  );
};
export default About_us;
