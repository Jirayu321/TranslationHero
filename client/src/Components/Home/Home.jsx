import React, { useEffect } from "react";
import Navbars from "../Navbar/navbarHome";
import Footer from "../Footer/Footer.jsx";
// import { useSelector } from "react-redux";

import Thumbs from "../../Images/thumbs-up.png";
import Home1 from "../../Images/Home1.png";
import Home2 from "../../Images/Home2.png";
import Accepted from "../../Images/Accepted.png";
import box4_overviwe1 from "../../Images/box4_overviwe1.png";
import box4_overviwe2 from "../../Images/box4_overviwe2.png";
import box4_overviwe3 from "../../Images/box4_overviwe3.png";

import { useNavigate, useLocation } from "react-router-dom";

import { OverviewEN, OverviewTH, OverviewDE } from "../Data/DataLanguage2";

import { Modal, Typography, Box } from "@mui/material";

import styles from "./Home.module.css";

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();

  let Doc = location?.state?.languages;
  let Aoc = location?.state?.accept;

  const [open, setOpen] = React.useState(false);
  const [usertype, setUsertype] = React.useState("Customer");
  const { innerWidth: width } = window;

  const handleClose = (x, y) => {
    if (x === 1) {
      if (y === "English") {
        navigate("/", { state: { languages: `${y}`, accept: true } });
        setOpen(false);
      } else if (y === "Thai") {
        navigate("/", { state: { languages: `${y}`, accept: true } });
        setOpen(false);
      } else if (y === "German") {
        navigate("/", { state: { languages: `${y}`, accept: true } });
        setOpen(false);
      } else {
        navigate("/", { state: { languages: `${y}`, accept: true } });
        setOpen(false);
      }
    } else {
      navigate("/", { state: { languages: `English`, accept: true } });
      setOpen(false);
    }
  };

  const check_cookei = () => {
    // console.log("Aoc:", Aoc);
    if (Aoc === true) {
      setOpen(false);
    } else if (Aoc === false) {
      setOpen(true);
    } else {
      setOpen(true);
    }
  };

  useEffect(() => {
    check_cookei();
  });

  // const goSignup = (x) => {
  //   navigate("/Signup", { state: { languages: `${x}` } });
  // };

  const goCustomer = (x) => {
    navigate("/Home/Order/Customer", {
      state: { languages: `${x}`, accept: true },
    });
  };

  return (
    <>
      <header className={styles.App_header}>
        {Doc === undefined ? (
          <Navbars navigate={navigate} languages="English" accept={false} />
        ) : Doc === "Thai" ? (
          <Navbars navigate={navigate} languages="Thai" accept={true} />
        ) : Doc === "German" ? (
          <Navbars navigate={navigate} languages="German" accept={true} />
        ) : (
          <Navbars navigate={navigate} languages="English" accept={true} />
        )}
      </header>

      {width > 768 ? (
        <>
          {/* Modal cookei*/}
          {Doc === "English" ? (
            <Modal
              hideBackdrop
              open={open}
              onClose={handleClose}
              aria-labelledby="keep-mounted-modal-title"
              aria-describedby="keep-mounted-modal-description"
            >
              <Box className={styles.BoxModal}>
                <Typography
                  id="keep-mounted-modal-description"
                  sx={{ mt: 2, fontWeight: 700 }}
                >
                  {OverviewEN.at(23).label}
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
                  {OverviewEN.at(24).label}
                </Typography>

                <div
                  style={{
                    textAlign: "left",
                    borderTop: "1px solid #C4C4C4",
                  }}
                ></div>

                <div
                  style={{ marginTop: 10, textAlign: "left", float: "left" }}
                >
                  <button
                    style={{
                      height: 40,
                      background: " #034D82",
                      borderRadius: 5,
                      color: "#FFFFFF",
                      fontWeight: 700,
                      border: "none",
                      filter: "drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.1))",
                    }}
                    onClick={() => handleClose(1, Doc)}
                  >
                    {OverviewEN.at(25).label}
                  </button>
                </div>
                <div style={{ marginTop: 10, textAlign: "right" }}>
                  <button
                    style={{
                      height: 40,
                      borderRadius: 5,
                      color: "#034D82",
                      fontWeight: 700,
                      filter: "drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.1))",
                      background: "#FFFFFF",
                      border: "1px solid #034D82",
                    }}
                    onClick={() => handleClose(2)}
                  >
                    {OverviewEN.at(26).label}
                  </button>
                </div>
              </Box>
            </Modal>
          ) : Doc === "Thai" ? (
            <Modal
              hideBackdrop
              open={open}
              onClose={handleClose}
              aria-labelledby="keep-mounted-modal-title"
              aria-describedby="keep-mounted-modal-description"
            >
              <Box className={styles.BoxModal}>
                <Typography
                  id="keep-mounted-modal-description"
                  sx={{ mt: 2, fontWeight: 700 }}
                >
                  {OverviewTH.at(23).label}
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
                  {OverviewTH.at(24).label}
                </Typography>
                <div
                  style={{
                    textAlign: "left",
                    borderTop: "1px solid #C4C4C4",
                  }}
                ></div>

                <div
                  style={{ marginTop: 10, textAlign: "left", float: "left" }}
                >
                  <button
                    style={{
                      height: 40,
                      background: " #034D82",
                      borderRadius: 5,
                      color: "#FFFFFF",
                      fontWeight: 700,
                      border: "none",
                      filter: "drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.1))",
                    }}
                    onClick={() => handleClose(1, Doc)}
                  >
                    {OverviewTH.at(25).label}
                  </button>
                </div>
                <div style={{ marginTop: 10, textAlign: "right" }}>
                  <button
                    style={{
                      height: 40,
                      borderRadius: 5,
                      color: "#034D82",
                      fontWeight: 700,
                      filter: "drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.1))",
                      background: "#FFFFFF",
                      border: "1px solid #034D82",
                    }}
                    onClick={() => handleClose(2)}
                  >
                    {OverviewTH.at(26).label}
                  </button>
                </div>
              </Box>
            </Modal>
          ) : Doc === "German" ? (
            <Modal
              hideBackdrop
              open={open}
              onClose={handleClose}
              aria-labelledby="keep-mounted-modal-title"
              aria-describedby="keep-mounted-modal-description"
            >
              <Box className={styles.BoxModal}>
                <Typography
                  id="keep-mounted-modal-description"
                  sx={{ mt: 2, fontWeight: 700 }}
                >
                  {OverviewDE.at(23).label}
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
                  {OverviewDE.at(24).label}
                </Typography>
                <div
                  style={{
                    textAlign: "left",
                    borderTop: "1px solid #C4C4C4",
                  }}
                ></div>

                <div
                  style={{ marginTop: 10, textAlign: "left", float: "left" }}
                >
                  <button
                    style={{
                      height: 40,
                      background: " #034D82",
                      borderRadius: 5,
                      color: "#FFFFFF",
                      fontWeight: 700,
                      border: "none",
                      filter: "drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.1))",
                    }}
                    onClick={() => handleClose(1, Doc)}
                  >
                    {OverviewDE.at(25).label}
                  </button>
                </div>
                <div style={{ marginTop: 10, textAlign: "right" }}>
                  <button
                    style={{
                      height: 40,
                      borderRadius: 5,
                      color: "#034D82",
                      fontWeight: 700,
                      filter: "drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.1))",
                      background: "#FFFFFF",
                      border: "1px solid #034D82",
                    }}
                    onClick={() => handleClose(2)}
                  >
                    {OverviewDE.at(26).label}
                  </button>
                </div>
              </Box>
            </Modal>
          ) : (
            <Modal
              hideBackdrop
              open={open}
              onClose={handleClose}
              aria-labelledby="keep-mounted-modal-title"
              aria-describedby="keep-mounted-modal-description"
            >
              <Box className={styles.BoxModal}>
                <Typography
                  id="keep-mounted-modal-description"
                  sx={{ mt: 2, fontWeight: 700 }}
                >
                  {OverviewEN.at(23).label}
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
                  {OverviewEN.at(24).label}
                </Typography>

                <div
                  style={{
                    textAlign: "left",
                    borderTop: "1px solid #C4C4C4",
                  }}
                ></div>

                <div
                  style={{ marginTop: 10, textAlign: "left", float: "left" }}
                >
                  <button
                    style={{
                      height: 40,
                      background: " #034D82",
                      borderRadius: 5,
                      color: "#FFFFFF",
                      fontWeight: 700,
                      border: "none",
                      filter: "drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.1))",
                    }}
                    onClick={() => handleClose(1, Doc)}
                  >
                    {OverviewEN.at(25).label}
                  </button>
                </div>
                <div style={{ marginTop: 10, textAlign: "right" }}>
                  <button
                    style={{
                      height: 40,
                      borderRadius: 5,
                      color: "#034D82",
                      fontWeight: 700,
                      filter: "drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.1))",
                      background: "#FFFFFF",
                      border: "1px solid #034D82",
                    }}
                    onClick={() => handleClose(2)}
                  >
                    {OverviewEN.at(26).label}
                  </button>
                </div>
              </Box>
            </Modal>
          )}

          {Doc === "English" ? (
            <>
              <div className={styles.fram1}>
                <div className={styles.boxBlue_overviwe}>
                  <p className={styles.h_text1}> {OverviewEN.at(7).label}</p>
                  <p className={styles.h_text2}>{OverviewEN.at(8).label}</p>
                  <div className={styles.set_fram1_button}>
                    <button
                      className={styles.fram1_button1}
                      onClick={() => goCustomer()}
                    >
                      {OverviewEN.at(9).label}
                    </button>
                    <button
                      className={styles.fram1_button2}
                      onClick={() =>
                        navigate("/Signup", {
                          state: { languages: `${Doc}`, accept: true },
                        })
                      }
                    >
                      {OverviewEN.at(10).label}
                    </button>
                  </div>
                </div>
                <div className={styles.Infram1}>
                  <div className={styles.BoxInfram1}>
                    <div className={styles.detileBoxInfram1}>
                      <div>
                        <p className={styles.intInfram1}>95%</p>
                      </div>

                      <div className={styles.BoxThumbs}>
                        <img
                          src={Thumbs}
                          alt="Thumbs"
                          className={styles.Thumbs}
                        />
                      </div>
                    </div>
                    <p className={styles.textBoxInfram1}>
                      {OverviewEN.at(11).label}
                    </p>
                  </div>
                  <div className={styles.BoxInfram1}>
                    <div className={styles.detileBoxInfram1}>
                      <div>
                        <p className={styles.intInfram1}>90%</p>
                      </div>

                      <div className={styles.BoxThumbs}>
                        <img
                          src={Thumbs}
                          alt="Thumbs"
                          className={styles.Thumbs}
                        />
                      </div>
                    </div>
                    <p className={styles.textBoxInfram1}>
                      {OverviewEN.at(12).label}
                    </p>
                  </div>
                  <div className={styles.BoxInfram1}>
                    <div className={styles.detileBoxInfram1}>
                      <div>
                        <p className={styles.intInfram1}>100%</p>
                      </div>

                      <div className={styles.BoxThumbs}>
                        <img
                          src={Thumbs}
                          alt="Thumbs"
                          className={styles.Thumbs}
                        />
                      </div>
                    </div>
                    <p className={styles.textBoxInfram1}>
                      {OverviewEN.at(13).label}
                    </p>
                  </div>
                </div>
              </div>

              <div className={styles.box2_overviwe}>
                <p className={styles.textHeading2_overviwe}>
                  {OverviewEN.at(14).label}
                </p>
                {usertype === "Customer" ? (
                  <div className={styles.Content}>
                    <button
                      onClick={() => setUsertype("Customer")}
                      className={styles.Content_button1}
                    >
                      {OverviewEN.at(15).label}
                    </button>
                    <button
                      onClick={() => setUsertype("Translator")}
                      className={styles.Content_button2}
                    >
                      {OverviewEN.at(16).label} Translator
                    </button>
                  </div>
                ) : (
                  <div className={styles.Content}>
                    <button
                      onClick={() => setUsertype("Customer")}
                      className={styles.Content_button4}
                    >
                      {OverviewEN.at(15).label}
                    </button>
                    <button
                      onClick={() => setUsertype("Translator")}
                      className={styles.Content_button3}
                    >
                      {OverviewEN.at(16).label}
                    </button>
                  </div>
                )}

                {usertype === "Customer" ? (
                  <div className={styles.Content2}>
                    <div className={styles.Content2Text}>
                      <p>{OverviewEN.at(17).label}</p>
                      <button
                        className={styles.Content2button}
                        onClick={() => goCustomer()}
                      >
                        {OverviewEN.at(9).label}
                      </button>
                    </div>
                    <div>
                      <img src={Home1} alt="Home1" className={styles.Home1} />
                    </div>
                  </div>
                ) : (
                  <div className={styles.Content2}>
                    <div className={styles.Content2Text}>
                      <p>{OverviewEN.at(18).label}</p>
                      <button
                        className={styles.Content2button}
                        onClick={() =>
                          navigate("/Login", {
                            state: { languages: `${Doc}`, accept: true },
                          })
                        }
                      >
                        {OverviewEN.at(19).label}
                      </button>
                    </div>
                    <div>
                      <img src={Home2} alt="Home2" className={styles.Home1} />
                    </div>
                  </div>
                )}

                <div className={styles.BoxContent3text1}>
                  <div className={styles.Content3text1}>
                    <div className={styles.divfontContent3text1}>
                      <p>{OverviewEN.at(20).label} </p>
                      <p>{OverviewEN.at(21).label}</p>
                    </div>
                    <div className={styles.divfontContent3text1_1}>
                      <p>{OverviewEN.at(22).label}</p>
                    </div>
                  </div>
                  <div className={styles.div_Accepted}>
                    <img
                      src={Accepted}
                      alt="Accepted"
                      className={styles.Accepted}
                    />
                  </div>
                </div>
                <div className={styles.Content3_1}></div>

                <div className={styles.box4_overviwe}>
                  <div className={styles.Inbox4_overviwe}>
                    <div className={styles.deteilbox4_overviwe}>
                      <p className={styles.h_text3}>{OverviewEN.at(7).label}</p>
                      <p className={styles.textDescription3_overviwe}>
                        {OverviewEN.at(8).label}
                      </p>
                      <div className={styles.Boxbuttonbox4_overviwe}>
                        <button
                          className={styles.buttonbox4_overviwe}
                          onClick={() => goCustomer()}
                        >
                          <p>{OverviewEN.at(9).label}</p>
                        </button>
                      </div>
                    </div>

                    <div className={styles.Inbox4_overviwe2}>
                      <div className={styles.box4_overviwe0}>
                        <div className={styles.imgbox4_overviwe0}>
                          <img
                            src={box4_overviwe1}
                            alt="box4_overviwe1"
                            className={styles.box4_overviwe1}
                          />
                          <img
                            src={box4_overviwe2}
                            alt="box4_overviwe2"
                            className={styles.box4_overviwe2}
                          />
                          <img
                            src={box4_overviwe3}
                            alt="box4_overviwe3"
                            className={styles.box4_overviwe3}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div style={{ width: "100vw", position: "absolute" }}>
                    <Footer v="English" a={Aoc} />
                  </div>
                </div>
              </div>
            </>
          ) : Doc === "Thai" ? (
            <>
              <div className={styles.fram1}>
                <div className={styles.boxBlue_overviwe}>
                  <p className={styles.h_text1}> {OverviewEN.at(7).label}</p>
                  <p className={styles.h_text2}>{OverviewTH.at(8).label}</p>
                  <div className={styles.set_fram1_button}>
                    <button
                      className={styles.fram1_button1}
                      onClick={() => goCustomer()}
                    >
                      {OverviewTH.at(9).label}
                    </button>
                    <button
                      className={styles.fram1_button2}
                      onClick={() =>
                        navigate("/Signup", {
                          state: { languages: `${Doc}`, accept: true },
                        })
                      }
                    >
                      {OverviewTH.at(10).label}
                    </button>
                  </div>
                </div>
                <div className={styles.Infram1}>
                  <div className={styles.BoxInfram1}>
                    <div className={styles.detileBoxInfram1}>
                      <div>
                        <p className={styles.intInfram1}>95%</p>
                      </div>

                      <div className={styles.BoxThumbs}>
                        <img
                          src={Thumbs}
                          alt="Thumbs"
                          className={styles.Thumbs}
                        />
                      </div>
                    </div>
                    <p className={styles.textBoxInfram1}>
                      {OverviewTH.at(11).label}
                    </p>
                  </div>
                  <div className={styles.BoxInfram1}>
                    <div className={styles.detileBoxInfram1}>
                      <div>
                        <p className={styles.intInfram1}>90%</p>
                      </div>

                      <div className={styles.BoxThumbs}>
                        <img
                          src={Thumbs}
                          alt="Thumbs"
                          className={styles.Thumbs}
                        />
                      </div>
                    </div>
                    <p className={styles.textBoxInfram1}>
                      {OverviewTH.at(12).label}
                    </p>
                  </div>
                  <div className={styles.BoxInfram1}>
                    <div className={styles.detileBoxInfram1}>
                      <div>
                        <p className={styles.intInfram1}>100%</p>
                      </div>

                      <div className={styles.BoxThumbs}>
                        <img
                          src={Thumbs}
                          alt="Thumbs"
                          className={styles.Thumbs}
                        />
                      </div>
                    </div>
                    <p className={styles.textBoxInfram1}>
                      {OverviewTH.at(13).label}
                    </p>
                  </div>
                </div>
              </div>

              <div className={styles.box2_overviwe}>
                <p className={styles.textHeading2_overviwe}>
                  {OverviewTH.at(14).label}
                </p>
                {usertype === "Customer" ? (
                  <div className={styles.Content}>
                    <button
                      onClick={() => setUsertype("Customer")}
                      className={styles.Content_button1}
                    >
                      {OverviewTH.at(15).label}
                    </button>
                    <button
                      onClick={() => setUsertype("Translator")}
                      className={styles.Content_button2}
                    >
                      {OverviewTH.at(16).label} 
                    </button>
                  </div>
                ) : (
                  <div className={styles.Content}>
                    <button
                      onClick={() => setUsertype("Customer")}
                      className={styles.Content_button4}
                    >
                      {OverviewTH.at(15).label}
                    </button>
                    <button
                      onClick={() => setUsertype("Translator")}
                      className={styles.Content_button3}
                    >
                      {OverviewTH.at(16).label}
                    </button>
                  </div>
                )}

                {usertype === "Customer" ? (
                  <div className={styles.Content2}>
                    <div className={styles.Content2Text}>
                      <p>{OverviewTH.at(17).label}</p>
                      <button
                        className={styles.Content2button}
                        onClick={() => goCustomer()}
                      >
                        {OverviewTH.at(9).label}
                      </button>
                    </div>
                    <div>
                      <img src={Home1} alt="Home1" className={styles.Home1} />
                    </div>
                  </div>
                ) : (
                  <div className={styles.Content2}>
                    <div className={styles.Content2Text}>
                      <p>{OverviewTH.at(18).label}</p>
                      <button
                        className={styles.Content2button}
                        onClick={() =>
                          navigate("/Login", {
                            state: { languages: `${Doc}`, accept: true },
                          })
                        }
                      >
                        {OverviewTH.at(19).label}
                      </button>
                    </div>
                    <div>
                      <img src={Home2} alt="Home2" className={styles.Home1} />
                    </div>
                  </div>
                )}

                <div className={styles.BoxContent3text1}>
                  <div className={styles.Content3text1}>
                    <div className={styles.divfontContent3text1}>
                      <p>{OverviewTH.at(20).label} </p>
                      <p>{OverviewTH.at(21).label}</p>
                    </div>
                    <div className={styles.divfontContent3text1_1}>
                      <p>{OverviewTH.at(22).label}</p>
                    </div>
                  </div>
                  <div className={styles.div_Accepted}>
                    <img
                      src={Accepted}
                      alt="Accepted"
                      className={styles.Accepted}
                    />
                  </div>
                </div>
                <div className={styles.Content3_1}></div>

                <div className={styles.box4_overviwe}>
                  <div className={styles.Inbox4_overviwe}>
                    <div className={styles.deteilbox4_overviwe}>
                      <p className={styles.h_text3}>{OverviewTH.at(7).label}</p>
                      <p className={styles.textDescription3_overviwe}>
                        {OverviewTH.at(8).label}
                      </p>
                      <div className={styles.Boxbuttonbox4_overviwe}>
                        <button
                          className={styles.buttonbox4_overviwe}
                          onClick={() => goCustomer()}
                        >
                          <p>{OverviewTH.at(9).label}</p>
                        </button>
                      </div>
                    </div>

                    <div className={styles.Inbox4_overviwe2}>
                      <div className={styles.box4_overviwe0}>
                        <div className={styles.imgbox4_overviwe0}>
                          <img
                            src={box4_overviwe1}
                            alt="box4_overviwe1"
                            className={styles.box4_overviwe1}
                          />
                          <img
                            src={box4_overviwe2}
                            alt="box4_overviwe2"
                            className={styles.box4_overviwe2}
                          />
                          <img
                            src={box4_overviwe3}
                            alt="box4_overviwe3"
                            className={styles.box4_overviwe3}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div style={{ width: "100vw", position: "absolute" }}>
                    <Footer v="Thai" a={Aoc} />
                  </div>
                </div>
              </div>
            </>
          ) : Doc === "German" ? (
            <>
              <div className={styles.fram1}>
                <div className={styles.boxBlue_overviwe}>
                  <p className={styles.h_text1}> {OverviewEN.at(7).label}</p>
                  <p className={styles.h_text2}>{OverviewDE.at(8).label}</p>
                  <div className={styles.set_fram1_button}>
                    <button
                      className={styles.fram1_button1}
                      onClick={() => goCustomer()}
                    >
                      {OverviewDE.at(9).label}
                    </button>
                    <button
                      className={styles.fram1_button2}
                      onClick={() =>
                        navigate("/Signup", {
                          state: { languages: `${Doc}`, accept: true },
                        })
                      }
                    >
                      {OverviewDE.at(10).label}
                    </button>
                  </div>
                </div>
                <div className={styles.Infram1}>
                  <div className={styles.BoxInfram1}>
                    <div className={styles.detileBoxInfram1}>
                      <div>
                        <p className={styles.intInfram1}>95%</p>
                      </div>

                      <div className={styles.BoxThumbs}>
                        <img
                          src={Thumbs}
                          alt="Thumbs"
                          className={styles.Thumbs}
                        />
                      </div>
                    </div>
                    <p className={styles.textBoxInfram1}>
                      {OverviewDE.at(11).label}
                    </p>
                  </div>
                  <div className={styles.BoxInfram1}>
                    <div className={styles.detileBoxInfram1}>
                      <div>
                        <p className={styles.intInfram1}>90%</p>
                      </div>

                      <div className={styles.BoxThumbs}>
                        <img
                          src={Thumbs}
                          alt="Thumbs"
                          className={styles.Thumbs}
                        />
                      </div>
                    </div>
                    <p className={styles.textBoxInfram1}>
                      {OverviewDE.at(12).label}
                    </p>
                  </div>
                  <div className={styles.BoxInfram1}>
                    <div className={styles.detileBoxInfram1}>
                      <div>
                        <p className={styles.intInfram1}>100%</p>
                      </div>

                      <div className={styles.BoxThumbs}>
                        <img
                          src={Thumbs}
                          alt="Thumbs"
                          className={styles.Thumbs}
                        />
                      </div>
                    </div>
                    <p className={styles.textBoxInfram1}>
                      {OverviewDE.at(13).label}
                    </p>
                  </div>
                </div>
              </div>

              <div className={styles.box2_overviwe}>
                <p className={styles.textHeading2_overviwe}>
                  {OverviewDE.at(14).label}
                </p>
                {usertype === "Customer" ? (
                  <div className={styles.Content}>
                    <button
                      onClick={() => setUsertype("Customer")}
                      className={styles.Content_button1}
                    >
                      {OverviewDE.at(15).label}
                    </button>
                    <button
                      onClick={() => setUsertype("Translator")}
                      className={styles.Content_button2}
                    >
                      {OverviewDE.at(16).label} Translator
                    </button>
                  </div>
                ) : (
                  <div className={styles.Content}>
                    <button
                      onClick={() => setUsertype("Customer")}
                      className={styles.Content_button4}
                    >
                      {OverviewDE.at(15).label}
                    </button>
                    <button
                      onClick={() => setUsertype("Translator")}
                      className={styles.Content_button3}
                    >
                      {OverviewDE.at(16).label}
                    </button>
                  </div>
                )}

                {usertype === "Customer" ? (
                  <div className={styles.Content2}>
                    <div className={styles.Content2Text}>
                      <p>{OverviewDE.at(17).label}</p>
                      <button
                        className={styles.Content2button}
                        onClick={() => goCustomer()}
                      >
                        {OverviewDE.at(9).label}
                      </button>
                    </div>
                    <div>
                      <img src={Home1} alt="Home1" className={styles.Home1} />
                    </div>
                  </div>
                ) : (
                  <div className={styles.Content2}>
                    <div className={styles.Content2Text}>
                      <p>{OverviewDE.at(18).label}</p>
                      <button
                        className={styles.Content2button}
                        onClick={() =>
                          navigate("/Login", {
                            state: { languages: `${Doc}`, accept: true },
                          })
                        }
                      >
                        {OverviewDE.at(19).label}
                      </button>
                    </div>
                    <div>
                      <img src={Home2} alt="Home2" className={styles.Home1} />
                    </div>
                  </div>
                )}

                <div className={styles.BoxContent3text1}>
                  <div className={styles.Content3text1}>
                    <div className={styles.divfontContent3text1}>
                      <p>{OverviewDE.at(20).label} </p>
                      <p>{OverviewDE.at(21).label}</p>
                    </div>
                    <div className={styles.divfontContent3text1_1}>
                      <p>{OverviewDE.at(22).label}</p>
                    </div>
                  </div>
                  <div className={styles.div_Accepted}>
                    <img
                      src={Accepted}
                      alt="Accepted"
                      className={styles.Accepted}
                    />
                  </div>
                </div>
                <div className={styles.Content3_1}></div>

                <div className={styles.box4_overviwe}>
                  <div className={styles.Inbox4_overviwe}>
                    <div className={styles.deteilbox4_overviwe}>
                      <p className={styles.h_text3}>{OverviewDE.at(7).label}</p>
                      <p className={styles.textDescription3_overviwe}>
                        {OverviewDE.at(8).label}
                      </p>
                      <div className={styles.Boxbuttonbox4_overviwe}>
                        <button
                          className={styles.buttonbox4_overviwe}
                          onClick={() => goCustomer()}
                        >
                          <p>{OverviewDE.at(9).label}</p>
                        </button>
                      </div>
                    </div>

                    <div className={styles.Inbox4_overviwe2}>
                      <div className={styles.box4_overviwe0}>
                        <div className={styles.imgbox4_overviwe0}>
                          <img
                            src={box4_overviwe1}
                            alt="box4_overviwe1"
                            className={styles.box4_overviwe1}
                          />
                          <img
                            src={box4_overviwe2}
                            alt="box4_overviwe2"
                            className={styles.box4_overviwe2}
                          />
                          <img
                            src={box4_overviwe3}
                            alt="box4_overviwe3"
                            className={styles.box4_overviwe3}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div style={{ width: "100vw", position: "absolute" }}>
                    <Footer v="German" a={Aoc} />
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className={styles.fram1}>
                <div className={styles.boxBlue_overviwe}>
                  <p className={styles.h_text1}> {OverviewEN.at(7).label}</p>
                  <p className={styles.h_text2}>{OverviewEN.at(8).label}</p>
                  <div className={styles.set_fram1_button}>
                    <button
                      className={styles.fram1_button1}
                      onClick={() => goCustomer()}
                    >
                      {OverviewEN.at(9).label}
                    </button>
                    <button
                      className={styles.fram1_button2}
                      onClick={() =>
                        navigate("/Signup", {
                          state: { languages: `${Doc}`, accept: true },
                        })
                      }
                    >
                      {OverviewEN.at(10).label}
                    </button>
                  </div>
                </div>
                <div className={styles.Infram1}>
                  <div className={styles.BoxInfram1}>
                    <div className={styles.detileBoxInfram1}>
                      <div>
                        <p className={styles.intInfram1}>95%</p>
                      </div>

                      <div className={styles.BoxThumbs}>
                        <img
                          src={Thumbs}
                          alt="Thumbs"
                          className={styles.Thumbs}
                        />
                      </div>
                    </div>
                    <p className={styles.textBoxInfram1}>
                      {OverviewEN.at(11).label}
                    </p>
                  </div>
                  <div className={styles.BoxInfram1}>
                    <div className={styles.detileBoxInfram1}>
                      <div>
                        <p className={styles.intInfram1}>90%</p>
                      </div>

                      <div className={styles.BoxThumbs}>
                        <img
                          src={Thumbs}
                          alt="Thumbs"
                          className={styles.Thumbs}
                        />
                      </div>
                    </div>
                    <p className={styles.textBoxInfram1}>
                      {OverviewEN.at(12).label}
                    </p>
                  </div>
                  <div className={styles.BoxInfram1}>
                    <div className={styles.detileBoxInfram1}>
                      <div>
                        <p className={styles.intInfram1}>100%</p>
                      </div>

                      <div className={styles.BoxThumbs}>
                        <img
                          src={Thumbs}
                          alt="Thumbs"
                          className={styles.Thumbs}
                        />
                      </div>
                    </div>
                    <p className={styles.textBoxInfram1}>
                      {OverviewEN.at(13).label}
                    </p>
                  </div>
                </div>
              </div>

              <div className={styles.box2_overviwe}>
                <p className={styles.textHeading2_overviwe}>
                  {OverviewEN.at(14).label}
                </p>
                {usertype === "Customer" ? (
                  <div className={styles.Content}>
                    <button
                      onClick={() => setUsertype("Customer")}
                      className={styles.Content_button1}
                    >
                      {OverviewEN.at(15).label}
                    </button>
                    <button
                      onClick={() => setUsertype("Translator")}
                      className={styles.Content_button2}
                    >
                      {OverviewEN.at(16).label} Translator
                    </button>
                  </div>
                ) : (
                  <div className={styles.Content}>
                    <button
                      onClick={() => setUsertype("Customer")}
                      className={styles.Content_button4}
                    >
                      {OverviewEN.at(15).label}
                    </button>
                    <button
                      onClick={() => setUsertype("Translator")}
                      className={styles.Content_button3}
                    >
                      {OverviewEN.at(16).label}
                    </button>
                  </div>
                )}

                {usertype === "Customer" ? (
                  <div className={styles.Content2}>
                    <div className={styles.Content2Text}>
                      <p>{OverviewEN.at(17).label}</p>
                      <button
                        className={styles.Content2button}
                        onClick={() => goCustomer()}
                      >
                        {OverviewEN.at(9).label}
                      </button>
                    </div>
                    <div>
                      <img src={Home1} alt="Home1" className={styles.Home1} />
                    </div>
                  </div>
                ) : (
                  <div className={styles.Content2}>
                    <div className={styles.Content2Text}>
                      <p>{OverviewEN.at(18).label}</p>
                      <button
                        className={styles.Content2button}
                        onClick={() =>
                          navigate("/Login", {
                            state: { languages: `${Doc}`, accept: true },
                          })
                        }
                      >
                        {OverviewEN.at(19).label}
                      </button>
                    </div>
                    <div>
                      <img src={Home2} alt="Home2" className={styles.Home1} />
                    </div>
                  </div>
                )}

                <div className={styles.BoxContent3text1}>
                  <div className={styles.Content3text1}>
                    <div className={styles.divfontContent3text1}>
                      <p>{OverviewEN.at(20).label} </p>
                      <p>{OverviewEN.at(21).label}</p>
                    </div>
                    <div className={styles.divfontContent3text1_1}>
                      <p>{OverviewEN.at(22).label}</p>
                    </div>
                  </div>
                  <div className={styles.div_Accepted}>
                    <img
                      src={Accepted}
                      alt="Accepted"
                      className={styles.Accepted}
                    />
                  </div>
                </div>
                <div className={styles.Content3_1}></div>

                <div className={styles.box4_overviwe}>
                  <div className={styles.Inbox4_overviwe}>
                    <div className={styles.deteilbox4_overviwe}>
                      <p className={styles.h_text3}>{OverviewEN.at(7).label}</p>
                      <p className={styles.textDescription3_overviwe}>
                        {OverviewEN.at(8).label}
                      </p>
                      <div className={styles.Boxbuttonbox4_overviwe}>
                        <button
                          className={styles.buttonbox4_overviwe}
                          onClick={() => goCustomer()}
                        >
                          <p>{OverviewEN.at(9).label}</p>
                        </button>
                      </div>
                    </div>

                    <div className={styles.Inbox4_overviwe2}>
                      <div className={styles.box4_overviwe0}>
                        <div className={styles.imgbox4_overviwe0}>
                          <img
                            src={box4_overviwe1}
                            alt="box4_overviwe1"
                            className={styles.box4_overviwe1}
                          />
                          <img
                            src={box4_overviwe2}
                            alt="box4_overviwe2"
                            className={styles.box4_overviwe2}
                          />
                          <img
                            src={box4_overviwe3}
                            alt="box4_overviwe3"
                            className={styles.box4_overviwe3}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div style={{ width: "100vw", position: "absolute" }}>
                    <Footer v="English" a={Aoc} />
                  </div>
                </div>
              </div>
            </>
          )}
        </>
      ) : (
        <>
          {/* Modal cookei*/}
          {Doc === "English" ? (
            <Modal
              hideBackdrop
              open={open}
              onClose={handleClose}
              aria-labelledby="keep-mounted-modal-title"
              aria-describedby="keep-mounted-modal-description"
            >
              <Box
                sx={{
                  position: "absolute",
                  top: "60%",
                  left: "50%",
                  transform: "translate(-50%, -70%)",
                  width: "80vw",
                  bgcolor: "background.paper",
                  boxShadow: 24,
                  p: 4,
                  borderRadius: 5,
                  border: "1px solid #E5E5E5",
                  textAlign: "center",
                }}
              >
                <Typography
                  id="keep-mounted-modal-description"
                  sx={{ mt: 2, fontWeight: 700 }}
                >
                  {OverviewEN.at(23).label}
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
                  {OverviewEN.at(24).label}
                </Typography>
                <div
                  style={{
                    textAlign: "left",
                    borderTop: "1px solid #C4C4C4",
                  }}
                ></div>

                <div
                  style={{ marginTop: 10, textAlign: "left", float: "left" }}
                >
                  <button
                    style={{
                      height: 40,
                      background: " #034D82",
                      borderRadius: 5,
                      color: "#FFFFFF",
                      fontWeight: 700,
                      border: "none",
                      filter: "drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.1))",
                    }}
                    onClick={() => handleClose(1, Doc)}
                  >
                    {OverviewEN.at(25).label}
                  </button>
                </div>
                <div style={{ marginTop: 10, textAlign: "right" }}>
                  <button
                    style={{
                      height: 40,
                      borderRadius: 5,
                      color: "#034D82",
                      fontWeight: 700,
                      filter: "drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.1))",
                      background: "#FFFFFF",
                      border: "1px solid #034D82",
                    }}
                    onClick={() => handleClose(2)}
                  >
                    {OverviewEN.at(26).label}
                  </button>
                </div>
              </Box>
            </Modal>
          ) : Doc === "Thai" ? (
            <Modal
              hideBackdrop
              open={open}
              onClose={handleClose}
              aria-labelledby="keep-mounted-modal-title"
              aria-describedby="keep-mounted-modal-description"
            >
              <Box
                sx={{
                  position: "absolute",
                  top: "60%",
                  left: "50%",
                  transform: "translate(-50%, -70%)",
                  width: "80vw",
                  bgcolor: "background.paper",
                  boxShadow: 24,
                  p: 4,
                  borderRadius: 5,
                  border: "1px solid #E5E5E5",
                  textAlign: "center",
                }}
              >
                <Typography
                  id="keep-mounted-modal-description"
                  sx={{ mt: 2, fontWeight: 700 }}
                >
                  {OverviewTH.at(23).label}
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
                  {OverviewTH.at(24).label}
                </Typography>
                <div
                  style={{
                    textAlign: "left",
                    borderTop: "1px solid #C4C4C4",
                  }}
                ></div>

                <div
                  style={{ marginTop: 10, textAlign: "left", float: "left" }}
                >
                  <button
                    style={{
                      height: 40,
                      background: " #034D82",
                      borderRadius: 5,
                      color: "#FFFFFF",
                      fontWeight: 700,
                      border: "none",
                      filter: "drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.1))",
                    }}
                    onClick={() => handleClose(1, Doc)}
                  >
                    {OverviewTH.at(25).label}
                  </button>
                </div>
                <div style={{ marginTop: 10, textAlign: "right" }}>
                  <button
                    style={{
                      height: 40,
                      borderRadius: 5,
                      color: "#034D82",
                      fontWeight: 700,
                      filter: "drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.1))",
                      background: "#FFFFFF",
                      border: "1px solid #034D82",
                    }}
                    onClick={() => handleClose(2)}
                  >
                    {OverviewTH.at(26).label}
                  </button>
                </div>
              </Box>
            </Modal>
          ) : Doc === "German" ? (
            <Modal
              hideBackdrop
              open={open}
              onClose={handleClose}
              aria-labelledby="keep-mounted-modal-title"
              aria-describedby="keep-mounted-modal-description"
            >
              <Box
                sx={{
                  position: "absolute",
                  top: "60%",
                  left: "50%",
                  transform: "translate(-50%, -70%)",
                  width: "80vw",
                  bgcolor: "background.paper",
                  boxShadow: 24,
                  p: 4,
                  borderRadius: 5,
                  border: "1px solid #E5E5E5",
                  textAlign: "center",
                }}
              >
                <Typography
                  id="keep-mounted-modal-description"
                  sx={{ mt: 2, fontWeight: 700 }}
                >
                  {OverviewDE.at(23).label}
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
                  {OverviewDE.at(24).label}
                </Typography>
                <div
                  style={{
                    textAlign: "left",
                    borderTop: "1px solid #C4C4C4",
                  }}
                ></div>

                <div
                  style={{ marginTop: 10, textAlign: "left", float: "left" }}
                >
                  <button
                    style={{
                      height: 40,
                      background: " #034D82",
                      borderRadius: 5,
                      color: "#FFFFFF",
                      fontWeight: 700,
                      border: "none",
                      filter: "drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.1))",
                    }}
                    onClick={() => handleClose(1, Doc)}
                  >
                    {OverviewDE.at(25).label}
                  </button>
                </div>
                <div style={{ marginTop: 10, textAlign: "right" }}>
                  <button
                    style={{
                      height: 40,
                      borderRadius: 5,
                      color: "#034D82",
                      fontWeight: 700,
                      filter: "drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.1))",
                      background: "#FFFFFF",
                      border: "1px solid #034D82",
                    }}
                    onClick={() => handleClose(2)}
                  >
                    {OverviewDE.at(26).label}
                  </button>
                </div>
              </Box>
            </Modal>
          ) : (
            <Modal
              hideBackdrop
              open={open}
              onClose={handleClose}
              aria-labelledby="keep-mounted-modal-title"
              aria-describedby="keep-mounted-modal-description"
            >
              <Box
                sx={{
                  position: "absolute",
                  top: "60%",
                  left: "50%",
                  transform: "translate(-50%, -70%)",
                  width: "80vw",
                  bgcolor: "background.paper",
                  boxShadow: 24,
                  p: 4,
                  borderRadius: 5,
                  border: "1px solid #E5E5E5",
                  textAlign: "center",
                }}
              >
                <Typography
                  id="keep-mounted-modal-description"
                  sx={{ mt: 2, fontWeight: 700 }}
                >
                  {OverviewEN.at(23).label}
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
                  {OverviewEN.at(24).label}
                </Typography>
                <div
                  style={{
                    textAlign: "left",
                    borderTop: "1px solid #C4C4C4",
                  }}
                ></div>

                <div
                  style={{ marginTop: 10, textAlign: "left", float: "left" }}
                >
                  <button
                    style={{
                      height: 40,
                      background: " #034D82",
                      borderRadius: 5,
                      color: "#FFFFFF",
                      fontWeight: 700,
                      border: "none",
                      filter: "drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.1))",
                    }}
                    onClick={() => handleClose(1, Doc)}
                  >
                    {OverviewEN.at(25).label}
                  </button>
                </div>
                <div style={{ marginTop: 10, textAlign: "right" }}>
                  <button
                    style={{
                      height: 40,
                      borderRadius: 5,
                      color: "#034D82",
                      fontWeight: 700,
                      filter: "drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.1))",
                      background: "#FFFFFF",
                      border: "1px solid #034D82",
                    }}
                    onClick={() => handleClose(2)}
                  >
                    {OverviewEN.at(26).label}
                  </button>
                </div>
              </Box>
            </Modal>
          )}
          {Doc === "English" ? (
            <>
              <div className={styles.fram1}>
                <div className={styles.boxBlue_overviwe}>
                  <p className={styles.h_text1}>{OverviewEN.at(7).label}</p>
                  <p className={styles.h_text2}>{OverviewEN.at(8).label}</p>
                  <div className={styles.set_fram1_button}>
                    <button
                      className={styles.fram1_button1}
                      onClick={() => goCustomer()}
                    >
                      {OverviewEN.at(9).label}
                    </button>
                    <button
                      className={styles.fram1_button2}
                      onClick={() =>
                        navigate("/Signup", {
                          state: { languages: `${Doc}`, accept: true },
                        })
                      }
                    >
                      {OverviewEN.at(10).label}
                    </button>
                  </div>
                  <div className={styles.Infram1}>
                    <div className={styles.BoxInfram1}>
                      <div className={styles.detileBoxInfram1}>
                        <div>
                          <p className={styles.intInfram1}>95%</p>
                        </div>

                        <div className={styles.BoxThumbs}>
                          <img
                            src={Thumbs}
                            alt="Thumbs"
                            className={styles.Thumbs}
                          />
                        </div>
                      </div>
                      <p className={styles.textBoxInfram1}>
                        {OverviewEN.at(11).label}
                      </p>
                    </div>
                    <div className={styles.BoxInfram1}>
                      <div className={styles.detileBoxInfram1}>
                        <div>
                          <p className={styles.intInfram1}>90%</p>
                        </div>

                        <div className={styles.BoxThumbs}>
                          <img
                            src={Thumbs}
                            alt="Thumbs"
                            className={styles.Thumbs}
                          />
                        </div>
                      </div>
                      <p className={styles.textBoxInfram1}>
                        {OverviewEN.at(12).label}
                      </p>
                    </div>
                    <div className={styles.BoxInfram1}>
                      <div className={styles.detileBoxInfram1}>
                        <div>
                          <p className={styles.intInfram1}>100%</p>
                        </div>

                        <div className={styles.BoxThumbs}>
                          <img
                            src={Thumbs}
                            alt="Thumbs"
                            className={styles.Thumbs}
                          />
                        </div>
                      </div>
                      <p className={styles.textBoxInfram1}>
                        {OverviewEN.at(13).label}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.box2_overviwe}>
                <p className={styles.textHeading2_overviwe}>
                  {OverviewEN.at(14).label}
                </p>
                {usertype === "Customer" ? (
                  <div className={styles.Content}>
                    <button
                      onClick={() => setUsertype("Customer")}
                      className={styles.Content_button1}
                    >
                      {OverviewEN.at(15).label}
                    </button>
                    <button
                      onClick={() => setUsertype("Translator")}
                      className={styles.Content_button2}
                    >
                      {OverviewEN.at(16).label}
                    </button>
                  </div>
                ) : (
                  <div className={styles.Content}>
                    <button
                      onClick={() => setUsertype("Customer")}
                      className={styles.Content_button4}
                    >
                      {OverviewEN.at(15).label}
                    </button>
                    <button
                      onClick={() => setUsertype("Translator")}
                      className={styles.Content_button3}
                    >
                      {OverviewEN.at(15).label}
                    </button>
                  </div>
                )}

                {usertype === "Customer" ? (
                  <div className={styles.Content2}>
                    <div className={styles.Content2Text}>
                      <p>{OverviewEN.at(17).label}</p>
                      <button
                        className={styles.Content2button}
                        onClick={() => goCustomer()}
                      >
                        {OverviewEN.at(9).label}
                      </button>
                    </div>
                    <div>
                      <img src={Home1} alt="Home1" className={styles.Home1} />
                    </div>
                  </div>
                ) : (
                  <div className={styles.Content2}>
                    <div className={styles.Content2Text}>
                      <p>{OverviewEN.at(18).label}</p>
                      <button
                        className={styles.Content2button}
                        onClick={() =>
                          navigate("/Login", {
                            state: { languages: `${Doc}`, accept: true },
                          })
                        }
                      >
                        {OverviewEN.at(19).label}
                      </button>
                    </div>
                    <div>
                      <img src={Home2} alt="Home2" className={styles.Home1} />
                    </div>
                  </div>
                )}

                <div className={styles.BoxContent3text1}>
                  <div className={styles.Content3text1}>
                    <div className={styles.divfontContent3text1}>
                      <p>{OverviewEN.at(20).label} </p>
                      <p>{OverviewEN.at(21).label}</p>
                    </div>
                    <div className={styles.divfontContent3text1_1}>
                      <p>{OverviewEN.at(22).label}</p>
                    </div>
                  </div>
                  <div className={styles.div_Accepted}>
                    <img
                      src={Accepted}
                      alt="Accepted"
                      className={styles.Accepted}
                    />
                  </div>
                </div>
                <div className={styles.Content3_1}></div>

                <div className={styles.box4_overviwe}>
                  <div className={styles.Inbox4_overviwe}>
                    <div className={styles.deteilbox4_overviwe}>
                      <p className={styles.h_text3}>{OverviewEN.at(7).label}</p>
                      <p className={styles.textDescription3_overviwe}>
                        {OverviewEN.at(8).label}
                      </p>
                      <div className={styles.Boxbuttonbox4_overviwe}>
                        <button
                          className={styles.buttonbox4_overviwe}
                          onClick={() => goCustomer()}
                        >
                          <p>{OverviewEN.at(9).label}</p>
                        </button>
                      </div>
                    </div>

                    <div className={styles.Inbox4_overviwe2}>
                      <div className={styles.box4_overviwe0}>
                        <div className={styles.imgbox4_overviwe0}>
                          <img
                            src={box4_overviwe1}
                            alt="box4_overviwe1"
                            className={styles.box4_overviwe1}
                          />
                          <img
                            src={box4_overviwe2}
                            alt="box4_overviwe2"
                            className={styles.box4_overviwe2}
                          />
                          <img
                            src={box4_overviwe3}
                            alt="box4_overviwe3"
                            className={styles.box4_overviwe3}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div style={{ width: "100vw", position: "absolute" }}>
                    <Footer v="English" a={Aoc} />
                  </div>
                </div>
              </div>
            </>
          ) : Doc === "Thai" ? (
            <>
              <div className={styles.fram1}>
                <div className={styles.boxBlue_overviwe}>
                  <p className={styles.h_text1}>{OverviewEN.at(7).label}</p>
                  <p className={styles.h_text2}>{OverviewTH.at(8).label}</p>
                  <div className={styles.set_fram1_button}>
                    <button
                      className={styles.fram1_button1}
                      onClick={() => goCustomer()}
                    >
                      {OverviewTH.at(9).label}
                    </button>
                    <button
                      className={styles.fram1_button2}
                      onClick={() =>
                        navigate("/Signup", {
                          state: { languages: `${Doc}`, accept: true },
                        })
                      }
                    >
                      {OverviewTH.at(10).label}
                    </button>
                  </div>
                  <div className={styles.Infram1}>
                    <div className={styles.BoxInfram1}>
                      <div className={styles.detileBoxInfram1}>
                        <div>
                          <p className={styles.intInfram1}>95%</p>
                        </div>

                        <div className={styles.BoxThumbs}>
                          <img
                            src={Thumbs}
                            alt="Thumbs"
                            className={styles.Thumbs}
                          />
                        </div>
                      </div>
                      <p className={styles.textBoxInfram1}>
                        {OverviewTH.at(11).label}
                      </p>
                    </div>
                    <div className={styles.BoxInfram1}>
                      <div className={styles.detileBoxInfram1}>
                        <div>
                          <p className={styles.intInfram1}>90%</p>
                        </div>

                        <div className={styles.BoxThumbs}>
                          <img
                            src={Thumbs}
                            alt="Thumbs"
                            className={styles.Thumbs}
                          />
                        </div>
                      </div>
                      <p className={styles.textBoxInfram1}>
                        {OverviewTH.at(12).label}
                      </p>
                    </div>
                    <div className={styles.BoxInfram1}>
                      <div className={styles.detileBoxInfram1}>
                        <div>
                          <p className={styles.intInfram1}>100%</p>
                        </div>

                        <div className={styles.BoxThumbs}>
                          <img
                            src={Thumbs}
                            alt="Thumbs"
                            className={styles.Thumbs}
                          />
                        </div>
                      </div>
                      <p className={styles.textBoxInfram1}>
                        {OverviewTH.at(13).label}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.box2_overviwe}>
                <p className={styles.textHeading2_overviwe}>
                  {OverviewTH.at(14).label}
                </p>
                {usertype === "Customer" ? (
                  <div className={styles.Content}>
                    <button
                      onClick={() => setUsertype("Customer")}
                      className={styles.Content_button1}
                    >
                      {OverviewTH.at(15).label}
                    </button>
                    <button
                      onClick={() => setUsertype("Translator")}
                      className={styles.Content_button2}
                    >
                      {OverviewTH.at(16).label}
                    </button>
                  </div>
                ) : (
                  <div className={styles.Content}>
                    <button
                      onClick={() => setUsertype("Customer")}
                      className={styles.Content_button4}
                    >
                      {OverviewTH.at(15).label}
                    </button>
                    <button
                      onClick={() => setUsertype("Translator")}
                      className={styles.Content_button3}
                    >
                      {OverviewTH.at(15).label}
                    </button>
                  </div>
                )}

                {usertype === "Customer" ? (
                  <div className={styles.Content2}>
                    <div className={styles.Content2Text}>
                      <p>{OverviewTH.at(17).label}</p>
                      <button
                        className={styles.Content2button}
                        onClick={() => goCustomer()}
                      >
                        {OverviewTH.at(9).label}
                      </button>
                    </div>
                    <div>
                      <img src={Home1} alt="Home1" className={styles.Home1} />
                    </div>
                  </div>
                ) : (
                  <div className={styles.Content2}>
                    <div className={styles.Content2Text}>
                      <p>{OverviewTH.at(18).label}</p>
                      <button
                        className={styles.Content2button}
                        onClick={() =>
                          navigate("/Login", {
                            state: { languages: `${Doc}`, accept: true },
                          })
                        }
                      >
                        {OverviewTH.at(19).label}
                      </button>
                    </div>
                    <div>
                      <img src={Home2} alt="Home2" className={styles.Home1} />
                    </div>
                  </div>
                )}

                <div className={styles.BoxContent3text1}>
                  <div className={styles.Content3text1}>
                    <div className={styles.divfontContent3text1}>
                      <p>{OverviewTH.at(20).label} </p>
                      <p>{OverviewTH.at(21).label}</p>
                    </div>
                    <div className={styles.divfontContent3text1_1}>
                      <p>{OverviewTH.at(22).label}</p>
                    </div>
                  </div>
                  <div className={styles.div_Accepted}>
                    <img
                      src={Accepted}
                      alt="Accepted"
                      className={styles.Accepted}
                    />
                  </div>
                </div>
                <div className={styles.Content3_1}></div>

                <div className={styles.box4_overviwe}>
                  <div className={styles.Inbox4_overviwe}>
                    <div className={styles.deteilbox4_overviwe}>
                      <p className={styles.h_text3}>{OverviewTH.at(7).label}</p>
                      <p className={styles.textDescription3_overviwe}>
                        {OverviewTH.at(8).label}
                      </p>
                      <div className={styles.Boxbuttonbox4_overviwe}>
                        <button
                          className={styles.buttonbox4_overviwe}
                          onClick={() => goCustomer()}
                        >
                          <p>{OverviewTH.at(9).label}</p>
                        </button>
                      </div>
                    </div>

                    <div className={styles.Inbox4_overviwe2}>
                      <div className={styles.box4_overviwe0}>
                        <div className={styles.imgbox4_overviwe0}>
                          <img
                            src={box4_overviwe1}
                            alt="box4_overviwe1"
                            className={styles.box4_overviwe1}
                          />
                          <img
                            src={box4_overviwe2}
                            alt="box4_overviwe2"
                            className={styles.box4_overviwe2}
                          />
                          <img
                            src={box4_overviwe3}
                            alt="box4_overviwe3"
                            className={styles.box4_overviwe3}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div style={{ width: "100vw", position: "absolute" }}>
                    <Footer v="Thai" a={Aoc} />
                  </div>
                </div>
              </div>
            </>
          ) : Doc === "German" ? (
            <>
              <div className={styles.fram1}>
                <div className={styles.boxBlue_overviwe}>
                  <p className={styles.h_text1}>{OverviewEN.at(7).label}</p>
                  <p className={styles.h_text2}>{OverviewDE.at(8).label}</p>
                  <div className={styles.set_fram1_button}>
                    <button
                      className={styles.fram1_button1}
                      onClick={() => goCustomer()}
                    >
                      {OverviewDE.at(9).label}
                    </button>
                    <button
                      className={styles.fram1_button2}
                      onClick={() =>
                        navigate("/Signup", {
                          state: { languages: `${Doc}`, accept: true },
                        })
                      }
                    >
                      {OverviewDE.at(10).label}
                    </button>
                  </div>
                  <div className={styles.Infram1}>
                    <div className={styles.BoxInfram1}>
                      <div className={styles.detileBoxInfram1}>
                        <div>
                          <p className={styles.intInfram1}>95%</p>
                        </div>

                        <div className={styles.BoxThumbs}>
                          <img
                            src={Thumbs}
                            alt="Thumbs"
                            className={styles.Thumbs}
                          />
                        </div>
                      </div>
                      <p className={styles.textBoxInfram1}>
                        {OverviewDE.at(11).label}
                      </p>
                    </div>
                    <div className={styles.BoxInfram1}>
                      <div className={styles.detileBoxInfram1}>
                        <div>
                          <p className={styles.intInfram1}>90%</p>
                        </div>

                        <div className={styles.BoxThumbs}>
                          <img
                            src={Thumbs}
                            alt="Thumbs"
                            className={styles.Thumbs}
                          />
                        </div>
                      </div>
                      <p className={styles.textBoxInfram1}>
                        {OverviewDE.at(12).label}
                      </p>
                    </div>
                    <div className={styles.BoxInfram1}>
                      <div className={styles.detileBoxInfram1}>
                        <div>
                          <p className={styles.intInfram1}>100%</p>
                        </div>

                        <div className={styles.BoxThumbs}>
                          <img
                            src={Thumbs}
                            alt="Thumbs"
                            className={styles.Thumbs}
                          />
                        </div>
                      </div>
                      <p className={styles.textBoxInfram1}>
                        {OverviewDE.at(13).label}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.box2_overviwe}>
                <p className={styles.textHeading2_overviwe}>
                  {OverviewDE.at(14).label}
                </p>
                {usertype === "Customer" ? (
                  <div className={styles.Content}>
                    <button
                      onClick={() => setUsertype("Customer")}
                      className={styles.Content_button1}
                    >
                      {OverviewDE.at(15).label}
                    </button>
                    <button
                      onClick={() => setUsertype("Translator")}
                      className={styles.Content_button2}
                    >
                      {OverviewDE.at(16).label}
                    </button>
                  </div>
                ) : (
                  <div className={styles.Content}>
                    <button
                      onClick={() => setUsertype("Customer")}
                      className={styles.Content_button4}
                    >
                      {OverviewDE.at(15).label}
                    </button>
                    <button
                      onClick={() => setUsertype("Translator")}
                      className={styles.Content_button3}
                    >
                      {OverviewDE.at(15).label}
                    </button>
                  </div>
                )}

                {usertype === "Customer" ? (
                  <div className={styles.Content2}>
                    <div className={styles.Content2Text}>
                      <p>{OverviewDE.at(17).label}</p>
                      <button
                        className={styles.Content2button}
                        onClick={() => goCustomer()}
                      >
                        {OverviewDE.at(9).label}
                      </button>
                    </div>
                    <div>
                      <img src={Home1} alt="Home1" className={styles.Home1} />
                    </div>
                  </div>
                ) : (
                  <div className={styles.Content2}>
                    <div className={styles.Content2Text}>
                      <p>{OverviewDE.at(18).label}</p>
                      <button
                        className={styles.Content2button}
                        onClick={() =>
                          navigate("/Login", {
                            state: { languages: `${Doc}`, accept: true },
                          })
                        }
                      >
                        {OverviewDE.at(19).label}
                      </button>
                    </div>
                    <div>
                      <img src={Home2} alt="Home2" className={styles.Home1} />
                    </div>
                  </div>
                )}

                <div className={styles.BoxContent3text1}>
                  <div className={styles.Content3text1}>
                    <div className={styles.divfontContent3text1}>
                      <p>{OverviewDE.at(20).label} </p>
                      <p>{OverviewDE.at(21).label}</p>
                    </div>
                    <div className={styles.divfontContent3text1_1}>
                      <p>{OverviewDE.at(22).label}</p>
                    </div>
                  </div>
                  <div className={styles.div_Accepted}>
                    <img
                      src={Accepted}
                      alt="Accepted"
                      className={styles.Accepted}
                    />
                  </div>
                </div>
                <div className={styles.Content3_1}></div>

                <div className={styles.box4_overviwe}>
                  <div className={styles.Inbox4_overviwe}>
                    <div className={styles.deteilbox4_overviwe}>
                      <p className={styles.h_text3}>{OverviewDE.at(7).label}</p>
                      <p className={styles.textDescription3_overviwe}>
                        {OverviewDE.at(8).label}
                      </p>
                      <div className={styles.Boxbuttonbox4_overviwe}>
                        <button
                          className={styles.buttonbox4_overviwe}
                          onClick={() => goCustomer()}
                        >
                          <p>{OverviewDE.at(9).label}</p>
                        </button>
                      </div>
                    </div>

                    <div className={styles.Inbox4_overviwe2}>
                      <div className={styles.box4_overviwe0}>
                        <div className={styles.imgbox4_overviwe0}>
                          <img
                            src={box4_overviwe1}
                            alt="box4_overviwe1"
                            className={styles.box4_overviwe1}
                          />
                          <img
                            src={box4_overviwe2}
                            alt="box4_overviwe2"
                            className={styles.box4_overviwe2}
                          />
                          <img
                            src={box4_overviwe3}
                            alt="box4_overviwe3"
                            className={styles.box4_overviwe3}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div style={{ width: "100vw", position: "absolute" }}>
                    <Footer v="German" a={Aoc} />
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className={styles.fram1}>
                <div className={styles.boxBlue_overviwe}>
                  <p className={styles.h_text1}>{OverviewEN.at(7).label}</p>
                  <p className={styles.h_text2}>{OverviewEN.at(8).label}</p>
                  <div className={styles.set_fram1_button}>
                    <button
                      className={styles.fram1_button1}
                      onClick={() => goCustomer()}
                    >
                      {OverviewEN.at(9).label}
                    </button>
                    <button
                      className={styles.fram1_button2}
                      onClick={() =>
                        navigate("/Signup", {
                          state: { languages: `${Doc}`, accept: true },
                        })
                      }
                    >
                      {OverviewEN.at(10).label}
                    </button>
                  </div>
                  <div className={styles.Infram1}>
                    <div className={styles.BoxInfram1}>
                      <div className={styles.detileBoxInfram1}>
                        <div>
                          <p className={styles.intInfram1}>95%</p>
                        </div>

                        <div className={styles.BoxThumbs}>
                          <img
                            src={Thumbs}
                            alt="Thumbs"
                            className={styles.Thumbs}
                          />
                        </div>
                      </div>
                      <p className={styles.textBoxInfram1}>
                        {OverviewEN.at(11).label}
                      </p>
                    </div>
                    <div className={styles.BoxInfram1}>
                      <div className={styles.detileBoxInfram1}>
                        <div>
                          <p className={styles.intInfram1}>90%</p>
                        </div>

                        <div className={styles.BoxThumbs}>
                          <img
                            src={Thumbs}
                            alt="Thumbs"
                            className={styles.Thumbs}
                          />
                        </div>
                      </div>
                      <p className={styles.textBoxInfram1}>
                        {OverviewEN.at(12).label}
                      </p>
                    </div>
                    <div className={styles.BoxInfram1}>
                      <div className={styles.detileBoxInfram1}>
                        <div>
                          <p className={styles.intInfram1}>100%</p>
                        </div>

                        <div className={styles.BoxThumbs}>
                          <img
                            src={Thumbs}
                            alt="Thumbs"
                            className={styles.Thumbs}
                          />
                        </div>
                      </div>
                      <p className={styles.textBoxInfram1}>
                        {OverviewEN.at(13).label}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.box2_overviwe}>
                <p className={styles.textHeading2_overviwe}>
                  {OverviewEN.at(14).label}
                </p>
                {usertype === "Customer" ? (
                  <div className={styles.Content}>
                    <button
                      onClick={() => setUsertype("Customer")}
                      className={styles.Content_button1}
                    >
                      {OverviewEN.at(15).label}
                    </button>
                    <button
                      onClick={() => setUsertype("Translator")}
                      className={styles.Content_button2}
                    >
                      {OverviewEN.at(16).label}
                    </button>
                  </div>
                ) : (
                  <div className={styles.Content}>
                    <button
                      onClick={() => setUsertype("Customer")}
                      className={styles.Content_button4}
                    >
                      {OverviewEN.at(15).label}
                    </button>
                    <button
                      onClick={() => setUsertype("Translator")}
                      className={styles.Content_button3}
                    >
                      {OverviewEN.at(15).label}
                    </button>
                  </div>
                )}

                {usertype === "Customer" ? (
                  <div className={styles.Content2}>
                    <div className={styles.Content2Text}>
                      <p>{OverviewEN.at(17).label}</p>
                      <button
                        className={styles.Content2button}
                        onClick={() => goCustomer()}
                      >
                        {OverviewEN.at(9).label}
                      </button>
                    </div>
                    <div>
                      <img src={Home1} alt="Home1" className={styles.Home1} />
                    </div>
                  </div>
                ) : (
                  <div className={styles.Content2}>
                    <div className={styles.Content2Text}>
                      <p>{OverviewEN.at(18).label}</p>
                      <button
                        className={styles.Content2button}
                        onClick={() =>
                          navigate("/Login", {
                            state: { languages: `${Doc}`, accept: true },
                          })
                        }
                      >
                        {OverviewEN.at(19).label}
                      </button>
                    </div>
                    <div>
                      <img src={Home2} alt="Home2" className={styles.Home1} />
                    </div>
                  </div>
                )}

                <div className={styles.BoxContent3text1}>
                  <div className={styles.Content3text1}>
                    <div className={styles.divfontContent3text1}>
                      <p>{OverviewEN.at(20).label} </p>
                      <p>{OverviewEN.at(21).label}</p>
                    </div>
                    <div className={styles.divfontContent3text1_1}>
                      <p>{OverviewEN.at(22).label}</p>
                    </div>
                  </div>
                  <div className={styles.div_Accepted}>
                    <img
                      src={Accepted}
                      alt="Accepted"
                      className={styles.Accepted}
                    />
                  </div>
                </div>
                <div className={styles.Content3_1}></div>

                <div className={styles.box4_overviwe}>
                  <div className={styles.Inbox4_overviwe}>
                    <div className={styles.deteilbox4_overviwe}>
                      <p className={styles.h_text3}>{OverviewEN.at(7).label}</p>
                      <p className={styles.textDescription3_overviwe}>
                        {OverviewEN.at(8).label}
                      </p>
                      <div className={styles.Boxbuttonbox4_overviwe}>
                        <button
                          className={styles.buttonbox4_overviwe}
                          onClick={() => goCustomer()}
                        >
                          <p>{OverviewEN.at(9).label}</p>
                        </button>
                      </div>
                    </div>

                    <div className={styles.Inbox4_overviwe2}>
                      <div className={styles.box4_overviwe0}>
                        <div className={styles.imgbox4_overviwe0}>
                          <img
                            src={box4_overviwe1}
                            alt="box4_overviwe1"
                            className={styles.box4_overviwe1}
                          />
                          <img
                            src={box4_overviwe2}
                            alt="box4_overviwe2"
                            className={styles.box4_overviwe2}
                          />
                          <img
                            src={box4_overviwe3}
                            alt="box4_overviwe3"
                            className={styles.box4_overviwe3}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div style={{ width: "100vw", position: "absolute" }}>
                    <Footer v="English" a={Aoc} />
                  </div>
                </div>
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};
export default Home;
