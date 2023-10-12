import * as React from "react";

import Navbars from "../Navbar/navbarHome";
import Footer from "../Footer/Footer.jsx";
import { useNavigate, useLocation } from "react-router-dom";
import { AboutusEN, AboutusDE, AboutusTH } from "../Data/DataLanguage2";

import styles from "./About_us.module.css";

const About_us = () => {
  const { innerWidth: width } = window;
  const location = useLocation();
  const navigate = useNavigate();
  let Doc = location?.state?.languages;
  const goSignup = () => {
    navigate("/Signup", { state: { languages: `${Doc}`, accept: true } });
  };

  console.log("AboutusEN:", AboutusEN);

  return (
    <>
      {width > 768 ? (
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
          {Doc === undefined ? (
            <div className={styles.fram1C}>
              <div style={{ height: "1vw" }}>
                <div className={styles.Boxfram1C}>
                  <div>
                    <p className={styles.H_text01}>{AboutusEN.at(0).label}</p>
                  </div>
                  <div className={styles.textCustomerH}>
                    <p>{AboutusEN.at(1).label}</p>
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
                      {AboutusEN.at(2).label}
                    </button>
                  </div>
                </div>
              </div>

              <div className={styles.frame2}>
                <div className={styles.detailefram_general}>
                  {width >= 1024 ? (
                    <div className={styles.Boxfram3_3}>
                      <div>
                        <p className={styles.HBoxdetaile3_1}>
                          {AboutusEN.at(3).label}{" "}
                        </p>
                        {/* <p className={styles.HBoxdetaile3_1}>translator</p> */}
                        <p className={styles.HBoxdetaile_general}>
                          {AboutusEN.at(4).label}
                        </p>
                      </div>
                      <div className={styles.Imggeneral5} />
                    </div>
                  ) : (
                    <div className={styles.Boxfram3_3}>
                      <div className={styles.Imggeneral5} />
                      <div>
                        <p className={styles.HBoxdetaile3_1}>
                          {AboutusEN.at(3).label}
                        </p>
                        <p className={styles.HBoxdetaile_general}>
                          {AboutusEN.at(4).label}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              {width >= 1024 ? (
                <div className={styles.frame3}>
                  <div className={styles.Boxfram3_3_2}>
                    <div>
                      <p className={styles.HBoxdetaile3_1}>
                        {AboutusEN.at(9).label}
                      </p>
                      {/* <p className={styles.HBoxdetaile3_1}>translator</p> */}
                      <p className={styles.HBoxdetaile_general}>
                        {AboutusEN.at(10).label}
                      </p>
                    </div>
                    <div className={styles.Imggeneral1} />
                  </div>

                  <div className={styles.Boxfram3_3_3}>
                    <div className={styles.Imggeneral2} />
                    <div style={{ marginLeft: 100 }}>
                      <p className={styles.HBoxdetaile3_1}>
                        {AboutusEN.at(11).label}
                      </p>
                      {/* <p className={styles.HBoxdetaile3_1}>gain more</p> */}
                      <p className={styles.HBoxdetaile_general}>
                        {AboutusEN.at(12).label}
                      </p>
                    </div>
                  </div>

                  <div className={styles.Boxfram3_3_4}>
                    <div>
                      <p className={styles.HBoxdetaile3_1}>
                        {AboutusEN.at(13).label}{" "}
                      </p>
                      {/* <p className={styles.HBoxdetaile3_1}>Assistant</p> */}
                      <p className={styles.HBoxdetaile_general}>
                        {AboutusEN.at(14).label}
                      </p>
                    </div>
                    <div className={styles.Imggeneral3} />
                  </div>
                  <div style={{ width: "100vw" }}>
                    <Footer v="English" />
                  </div>
                </div>
              ) : (
                <div className={styles.frame3}>
                  <div className={styles.Boxfram3_3_2}>
                    <div className={styles.INBoxfram3_3_2}>
                      <p className={styles.HBoxdetaile3_1}>
                        {AboutusEN.at(9).label}
                      </p>
                      <p className={styles.HBoxdetaile_general}>
                        {AboutusEN.at(10).label}
                      </p>
                    </div>
                    <div className={styles.Imggeneral1} />

                    <div className={styles.Boxfram3_3_3}>
                      <div className={styles.INBoxfram3_3_2}>
                        <p className={styles.HBoxdetaile3_1}>
                          {AboutusEN.at(11).label}
                        </p>
                        <p className={styles.HBoxdetaile_general}>
                          {AboutusEN.at(12).label}
                        </p>
                      </div>
                      <div className={styles.Imggeneral2} />
                    </div>
                  </div>

                  <div className={styles.detailefram_general2}>
                    <div className={styles.Boxfram3_3}>
                      <div className={styles.Imggeneral3} />
                      <div>
                        <p className={styles.HBoxdetaile3_1}>
                          {AboutusEN.at(13).label}
                        </p>
                        <p className={styles.HBoxdetaile_general}>
                          {AboutusEN.at(14).label}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div style={{ width: "100vw" }}>
                    <Footer v="English" />
                  </div>
                </div>
              )}
            </div>
          ) : Doc === "Thai" ? (
            <div className={styles.fram1C}>
              <div style={{ height: "1vw" }}>
                <div className={styles.Boxfram1C}>
                  <div>
                    <p className={styles.H_text01}>{AboutusTH.at(0).label}</p>
                  </div>
                  <div className={styles.textCustomerH}>
                    <p>{AboutusTH.at(1).label}</p>
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
                      {AboutusTH.at(2).label}
                    </button>
                  </div>
                </div>
              </div>

              <div className={styles.frame2}>
                <div className={styles.detailefram_general}>
                  {width >= 1024 ? (
                    <div className={styles.Boxfram3_3}>
                      <div>
                        <p className={styles.HBoxdetaile3_1}>
                          {AboutusTH.at(3).label}{" "}
                        </p>
                        {/* <p className={styles.HBoxdetaile3_1}>translator</p> */}
                        <p className={styles.HBoxdetaile_general}>
                          {AboutusTH.at(4).label}
                        </p>
                      </div>
                      <div className={styles.Imggeneral5} />
                    </div>
                  ) : (
                    <div className={styles.Boxfram3_3}>
                      <div className={styles.Imggeneral5} />
                      <div>
                        <p className={styles.HBoxdetaile3_1}>
                          {AboutusTH.at(3).label}
                        </p>
                        <p className={styles.HBoxdetaile_general}>
                          {AboutusTH.at(4).label}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              {width >= 1024 ? (
                <div className={styles.frame3}>
                  <div className={styles.Boxfram3_3_2}>
                    <div>
                      <p className={styles.HBoxdetaile3_1}>
                        {AboutusTH.at(9).label}
                      </p>
                      {/* <p className={styles.HBoxdetaile3_1}>translator</p> */}
                      <p className={styles.HBoxdetaile_general}>
                        {AboutusTH.at(10).label}
                      </p>
                    </div>
                    <div className={styles.Imggeneral1} />
                  </div>

                  <div className={styles.Boxfram3_3_3}>
                    <div className={styles.Imggeneral2} />
                    <div style={{ marginLeft: 100 }}>
                      <p className={styles.HBoxdetaile3_1}>
                        {AboutusTH.at(11).label}
                      </p>
                      {/* <p className={styles.HBoxdetaile3_1}>gain more</p> */}
                      <p className={styles.HBoxdetaile_general}>
                        {AboutusTH.at(12).label}
                      </p>
                    </div>
                  </div>

                  <div className={styles.Boxfram3_3_4}>
                    <div>
                      <p className={styles.HBoxdetaile3_1}>
                        {AboutusTH.at(13).label}{" "}
                      </p>
                      {/* <p className={styles.HBoxdetaile3_1}>Assistant</p> */}
                      <p className={styles.HBoxdetaile_general}>
                        {AboutusTH.at(14).label}
                      </p>
                    </div>
                    <div className={styles.Imggeneral3} />
                  </div>
                  <div style={{ width: "100vw" }}>
                    <Footer v="Thai" />
                  </div>
                </div>
              ) : (
                <div className={styles.frame3}>
                  <div className={styles.Boxfram3_3_2}>
                    <div className={styles.INBoxfram3_3_2}>
                      <p className={styles.HBoxdetaile3_1}>
                        {AboutusTH.at(9).label}
                      </p>
                      <p className={styles.HBoxdetaile_general}>
                        {AboutusTH.at(10).label}
                      </p>
                    </div>
                    <div className={styles.Imggeneral1} />

                    <div className={styles.Boxfram3_3_3}>
                      <div className={styles.INBoxfram3_3_2}>
                        <p className={styles.HBoxdetaile3_1}>
                          {AboutusTH.at(11).label}
                        </p>
                        <p className={styles.HBoxdetaile_general}>
                          {AboutusTH.at(12).label}
                        </p>
                      </div>
                      <div className={styles.Imggeneral2} />
                    </div>
                  </div>

                  <div className={styles.detailefram_general2}>
                    <div className={styles.Boxfram3_3}>
                      <div className={styles.Imggeneral3} />
                      <div>
                        <p className={styles.HBoxdetaile3_1}>
                          {AboutusTH.at(13).label}
                        </p>
                        <p className={styles.HBoxdetaile_general}>
                          {AboutusTH.at(14).label}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div style={{ width: "100vw" }}>
                    <Footer v="Thai" />
                  </div>
                </div>
              )}
            </div>
          ) : Doc === "German" ? (
            <div className={styles.fram1C}>
              <div style={{ height: "1vw" }}>
                <div className={styles.Boxfram1C}>
                  <div>
                    <p className={styles.H_text01}>{AboutusDE.at(0).label}</p>
                  </div>
                  <div className={styles.textCustomerH}>
                    <p>{AboutusDE.at(1).label}</p>
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
                      {AboutusDE.at(2).label}
                    </button>
                  </div>
                </div>
              </div>

              <div className={styles.frame2}>
                <div className={styles.detailefram_general}>
                  {width >= 1024 ? (
                    <div className={styles.Boxfram3_3}>
                      <div>
                        <p className={styles.HBoxdetaile3_1}>
                          {AboutusDE.at(3).label}{" "}
                        </p>
                        {/* <p className={styles.HBoxdetaile3_1}>translator</p> */}
                        <p className={styles.HBoxdetaile_general}>
                          {AboutusDE.at(4).label}
                        </p>
                      </div>
                      <div className={styles.Imggeneral5} />
                    </div>
                  ) : (
                    <div className={styles.Boxfram3_3}>
                      <div className={styles.Imggeneral5} />
                      <div>
                        <p className={styles.HBoxdetaile3_1}>
                          {AboutusDE.at(3).label}
                        </p>
                        <p className={styles.HBoxdetaile_general}>
                          {AboutusDE.at(4).label}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              {width >= 1024 ? (
                <div className={styles.frame3}>
                  <div className={styles.Boxfram3_3_2}>
                    <div>
                      <p className={styles.HBoxdetaile3_1}>
                        {AboutusDE.at(9).label}
                      </p>
                      {/* <p className={styles.HBoxdetaile3_1}>translator</p> */}
                      <p className={styles.HBoxdetaile_general}>
                        {AboutusDE.at(10).label}
                      </p>
                    </div>
                    <div className={styles.Imggeneral1} />
                  </div>

                  <div className={styles.Boxfram3_3_3}>
                    <div className={styles.Imggeneral2} />
                    <div style={{ marginLeft: 100 }}>
                      <p className={styles.HBoxdetaile3_1}>
                        {AboutusDE.at(11).label}
                      </p>
                      {/* <p className={styles.HBoxdetaile3_1}>gain more</p> */}
                      <p className={styles.HBoxdetaile_general}>
                        {AboutusDE.at(12).label}
                      </p>
                    </div>
                  </div>

                  <div className={styles.Boxfram3_3_4}>
                    <div>
                      <p className={styles.HBoxdetaile3_1}>
                        {AboutusDE.at(13).label}{" "}
                      </p>
                      {/* <p className={styles.HBoxdetaile3_1}>Assistant</p> */}
                      <p className={styles.HBoxdetaile_general}>
                        {AboutusDE.at(14).label}
                      </p>
                    </div>
                    <div className={styles.Imggeneral3} />
                  </div>
                  <div style={{ width: "100vw" }}>
                    <Footer v="German" />
                  </div>
                </div>
              ) : (
                <div className={styles.frame3}>
                  <div className={styles.Boxfram3_3_2}>
                    <div className={styles.INBoxfram3_3_2}>
                      <p className={styles.HBoxdetaile3_1}>
                        {AboutusDE.at(9).label}
                      </p>
                      <p className={styles.HBoxdetaile_general}>
                        {AboutusDE.at(10).label}
                      </p>
                    </div>
                    <div className={styles.Imggeneral1} />

                    <div className={styles.Boxfram3_3_3}>
                      <div className={styles.INBoxfram3_3_2}>
                        <p className={styles.HBoxdetaile3_1}>
                          {AboutusDE.at(11).label}
                        </p>
                        <p className={styles.HBoxdetaile_general}>
                          {AboutusDE.at(12).label}
                        </p>
                      </div>
                      <div className={styles.Imggeneral2} />
                    </div>
                  </div>

                  <div className={styles.detailefram_general2}>
                    <div className={styles.Boxfram3_3}>
                      <div className={styles.Imggeneral3} />
                      <div>
                        <p className={styles.HBoxdetaile3_1}>
                          {AboutusDE.at(13).label}
                        </p>
                        <p className={styles.HBoxdetaile_general}>
                          {AboutusDE.at(14).label}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div style={{ width: "100vw" }}>
                    <Footer v="German" />
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className={styles.fram1C}>
              <div style={{ height: "1vw" }}>
                <div className={styles.Boxfram1C}>
                  <div>
                    <p className={styles.H_text01}>{AboutusEN.at(0).label}</p>
                  </div>
                  <div className={styles.textCustomerH}>
                    <p>{AboutusEN.at(1).label}</p>
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
                      {AboutusEN.at(2).label}
                    </button>
                  </div>
                </div>
              </div>

              <div className={styles.frame2}>
                <div className={styles.detailefram_general}>
                  {width >= 1024 ? (
                    <div className={styles.Boxfram3_3}>
                      <div>
                        <p className={styles.HBoxdetaile3_1}>
                          {AboutusEN.at(3).label}{" "}
                        </p>
                        {/* <p className={styles.HBoxdetaile3_1}>translator</p> */}
                        <p className={styles.HBoxdetaile_general}>
                          {AboutusEN.at(4).label}
                        </p>
                      </div>
                      <div className={styles.Imggeneral5} />
                    </div>
                  ) : (
                    <div className={styles.Boxfram3_3}>
                      <div className={styles.Imggeneral5} />
                      <div>
                        <p className={styles.HBoxdetaile3_1}>
                          {AboutusEN.at(3).label}
                        </p>
                        <p className={styles.HBoxdetaile_general}>
                          {AboutusEN.at(4).label}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              {width >= 1024 ? (
                <div className={styles.frame3}>
                  <div className={styles.Boxfram3_3_2}>
                    <div>
                      <p className={styles.HBoxdetaile3_1}>
                        {AboutusEN.at(9).label}
                      </p>
                      {/* <p className={styles.HBoxdetaile3_1}>translator</p> */}
                      <p className={styles.HBoxdetaile_general}>
                        {AboutusEN.at(10).label}
                      </p>
                    </div>
                    <div className={styles.Imggeneral1} />
                  </div>

                  <div className={styles.Boxfram3_3_3}>
                    <div className={styles.Imggeneral2} />
                    <div style={{ marginLeft: 100 }}>
                      <p className={styles.HBoxdetaile3_1}>
                        {AboutusEN.at(11).label}
                      </p>
                      {/* <p className={styles.HBoxdetaile3_1}>gain more</p> */}
                      <p className={styles.HBoxdetaile_general}>
                        {AboutusEN.at(12).label}
                      </p>
                    </div>
                  </div>

                  <div className={styles.Boxfram3_3_4}>
                    <div>
                      <p className={styles.HBoxdetaile3_1}>
                        {AboutusEN.at(13).label}{" "}
                      </p>
                      {/* <p className={styles.HBoxdetaile3_1}>Assistant</p> */}
                      <p className={styles.HBoxdetaile_general}>
                        {AboutusEN.at(14).label}
                      </p>
                    </div>
                    <div className={styles.Imggeneral3} />
                  </div>
                  <div style={{ width: "100vw" }}>
                    <Footer v="English" />
                  </div>
                </div>
              ) : (
                <div className={styles.frame3}>
                  <div className={styles.Boxfram3_3_2}>
                    <div className={styles.INBoxfram3_3_2}>
                      <p className={styles.HBoxdetaile3_1}>
                        {AboutusEN.at(9).label}
                      </p>
                      <p className={styles.HBoxdetaile_general}>
                        {AboutusEN.at(10).label}
                      </p>
                    </div>
                    <div className={styles.Imggeneral1} />

                    <div className={styles.Boxfram3_3_3}>
                      <div className={styles.INBoxfram3_3_2}>
                        <p className={styles.HBoxdetaile3_1}>
                          {AboutusEN.at(11).label}
                        </p>
                        <p className={styles.HBoxdetaile_general}>
                          {AboutusEN.at(12).label}
                        </p>
                      </div>
                      <div className={styles.Imggeneral2} />
                    </div>
                  </div>

                  <div className={styles.detailefram_general2}>
                    <div className={styles.Boxfram3_3}>
                      <div className={styles.Imggeneral3} />
                      <div>
                        <p className={styles.HBoxdetaile3_1}>
                          {AboutusEN.at(13).label}
                        </p>
                        <p className={styles.HBoxdetaile_general}>
                          {AboutusEN.at(14).label}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div style={{ width: "100vw" }}>
                    <Footer v="English" />
                  </div>
                </div>
              )}
            </div>
          )}
        </>
      ) : (
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
          {Doc === undefined ? (
            <div className={styles.fram1C}>
              <div>
                <div
                  style={{
                    textAlign: "center",
                    justifyItems: "center",
                    display: "inline-grid",
                    position: "relative",
                    top: 190,
                  }}
                >
                  <div>
                    <p className={styles.H_text01}>{AboutusEN.at(0).label}</p>
                  </div>
                  <div className={styles.textCustomerH}>
                    <p className={styles.textH01}>{AboutusEN.at(1).label}</p>
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
                      {AboutusEN.at(2).label}
                    </button>
                  </div>
                </div>
              </div>

              <div className={styles.frame2}>
                <div className={styles.detailefram_general}>
                  <div className={styles.Boxfram3_3}>
                    <div className={styles.Imggeneral5} />
                    <div>
                      <p className={styles.HBoxdetaile3_1}>
                        {AboutusEN.at(3).label}
                      </p>
                      <p className={styles.HBoxdetaile_general}>
                        {AboutusEN.at(4).label}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.frame3}>
                <div className={styles.Boxfram3_3_2}>
                  <div className={styles.INBoxfram3_3_2}>
                    <p className={styles.HBoxdetaile3_1}>
                      {AboutusEN.at(9).label}
                    </p>
                    <p className={styles.HBoxdetaile_general}>
                      {AboutusEN.at(10).label}
                    </p>
                  </div>
                  <div className={styles.Imggeneral1} />

                  <div className={styles.Boxfram3_3_3}>
                    <div className={styles.INBoxfram3_3_2}>
                      <p className={styles.HBoxdetaile3_1}>
                        {AboutusEN.at(11).label}
                      </p>
                      <p className={styles.HBoxdetaile_general}>
                        {AboutusEN.at(12).label}
                      </p>
                    </div>
                    <div className={styles.Imggeneral2} />
                  </div>
                </div>

                <div className={styles.detailefram_general2}>
                  <div className={styles.Boxfram3_3}>
                    <div className={styles.Imggeneral3} />
                    <div>
                      <p className={styles.HBoxdetaile3_1}>
                        {AboutusEN.at(13).label}
                      </p>
                      <p className={styles.HBoxdetaile_general}>
                        {AboutusEN.at(14).label}
                      </p>
                    </div>
                  </div>
                </div>

                <div style={{ width: "100vw" }}>
                  <Footer v="English" />
                </div>
              </div>
            </div>
          ) : Doc === "Thai" ? (
            <div className={styles.fram1C}>
            <div>
              <div
                style={{
                  textAlign: "center",
                  justifyItems: "center",
                  display: "inline-grid",
                  position: "relative",
                  top: 190,
                }}
              >
                <div>
                  <p className={styles.H_text01}>{AboutusTH.at(0).label}</p>
                </div>
                <div className={styles.textCustomerH}>
                  <p className={styles.textH01}>{AboutusTH.at(1).label}</p>
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
                    {AboutusTH.at(2).label}
                  </button>
                </div>
              </div>
            </div>

            <div className={styles.frame2}>
              <div className={styles.detailefram_general}>
                <div className={styles.Boxfram3_3}>
                  <div className={styles.Imggeneral5} />
                  <div>
                    <p className={styles.HBoxdetaile3_1}>
                      {AboutusTH.at(3).label}
                    </p>
                    <p className={styles.HBoxdetaile_general}>
                      {AboutusTH.at(4).label}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.frame3}>
              <div className={styles.Boxfram3_3_2}>
                <div className={styles.INBoxfram3_3_2}>
                  <p className={styles.HBoxdetaile3_1}>
                    {AboutusTH.at(9).label}
                  </p>
                  <p className={styles.HBoxdetaile_general}>
                    {AboutusTH.at(10).label}
                  </p>
                </div>
                <div className={styles.Imggeneral1} />

                <div className={styles.Boxfram3_3_3}>
                  <div className={styles.INBoxfram3_3_2}>
                    <p className={styles.HBoxdetaile3_1}>
                      {AboutusTH.at(11).label}
                    </p>
                    <p className={styles.HBoxdetaile_general}>
                      {AboutusTH.at(12).label}
                    </p>
                  </div>
                  <div className={styles.Imggeneral2} />
                </div>
              </div>

              <div className={styles.detailefram_general2}>
                <div className={styles.Boxfram3_3}>
                  <div className={styles.Imggeneral3} />
                  <div>
                    <p className={styles.HBoxdetaile3_1}>
                      {AboutusTH.at(13).label}
                    </p>
                    <p className={styles.HBoxdetaile_general}>
                      {AboutusTH.at(14).label}
                    </p>
                  </div>
                </div>
              </div>

              <div style={{ width: "100vw" }}>
                <Footer v="Thai" />
              </div>
            </div>
          </div>
          ) : Doc === "German" ? (
            <div className={styles.fram1C}>
            <div>
              <div
                style={{
                  textAlign: "center",
                  justifyItems: "center",
                  display: "inline-grid",
                  position: "relative",
                  top: 190,
                }}
              >
                <div>
                  <p className={styles.H_text01}>{AboutusDE.at(0).label}</p>
                </div>
                <div className={styles.textCustomerH}>
                  <p className={styles.textH01}>{AboutusDE.at(1).label}</p>
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
                    {AboutusDE.at(2).label}
                  </button>
                </div>
              </div>
            </div>

            <div className={styles.frame2}>
              <div className={styles.detailefram_general}>
                <div className={styles.Boxfram3_3}>
                  <div className={styles.Imggeneral5} />
                  <div>
                    <p className={styles.HBoxdetaile3_1}>
                      {AboutusDE.at(3).label}
                    </p>
                    <p className={styles.HBoxdetaile_general}>
                      {AboutusDE.at(4).label}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.frame3}>
              <div className={styles.Boxfram3_3_2}>
                <div className={styles.INBoxfram3_3_2}>
                  <p className={styles.HBoxdetaile3_1}>
                    {AboutusDE.at(9).label}
                  </p>
                  <p className={styles.HBoxdetaile_general}>
                    {AboutusDE.at(10).label}
                  </p>
                </div>
                <div className={styles.Imggeneral1} />

                <div className={styles.Boxfram3_3_3}>
                  <div className={styles.INBoxfram3_3_2}>
                    <p className={styles.HBoxdetaile3_1}>
                      {AboutusDE.at(11).label}
                    </p>
                    <p className={styles.HBoxdetaile_general}>
                      {AboutusDE.at(12).label}
                    </p>
                  </div>
                  <div className={styles.Imggeneral2} />
                </div>
              </div>

              <div className={styles.detailefram_general2}>
                <div className={styles.Boxfram3_3}>
                  <div className={styles.Imggeneral3} />
                  <div>
                    <p className={styles.HBoxdetaile3_1}>
                      {AboutusDE.at(13).label}
                    </p>
                    <p className={styles.HBoxdetaile_general}>
                      {AboutusDE.at(14).label}
                    </p>
                  </div>
                </div>
              </div>

              <div style={{ width: "100vw" }}>
                <Footer v="German" />
              </div>
            </div>
          </div>
          ) : (
            <div className={styles.fram1C}>
            <div>
              <div
                style={{
                  textAlign: "center",
                  justifyItems: "center",
                  display: "inline-grid",
                  position: "relative",
                  top: 190,
                }}
              >
                <div>
                  <p className={styles.H_text01}>{AboutusEN.at(0).label}</p>
                </div>
                <div className={styles.textCustomerH}>
                  <p className={styles.textH01}>{AboutusEN.at(1).label}</p>
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
                    {AboutusEN.at(2).label}
                  </button>
                </div>
              </div>
            </div>

            <div className={styles.frame2}>
              <div className={styles.detailefram_general}>
                <div className={styles.Boxfram3_3}>
                  <div className={styles.Imggeneral5} />
                  <div>
                    <p className={styles.HBoxdetaile3_1}>
                      {AboutusEN.at(3).label}
                    </p>
                    <p className={styles.HBoxdetaile_general}>
                      {AboutusEN.at(4).label}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.frame3}>
              <div className={styles.Boxfram3_3_2}>
                <div className={styles.INBoxfram3_3_2}>
                  <p className={styles.HBoxdetaile3_1}>
                    {AboutusEN.at(9).label}
                  </p>
                  <p className={styles.HBoxdetaile_general}>
                    {AboutusEN.at(10).label}
                  </p>
                </div>
                <div className={styles.Imggeneral1} />

                <div className={styles.Boxfram3_3_3}>
                  <div className={styles.INBoxfram3_3_2}>
                    <p className={styles.HBoxdetaile3_1}>
                      {AboutusEN.at(11).label}
                    </p>
                    <p className={styles.HBoxdetaile_general}>
                      {AboutusEN.at(12).label}
                    </p>
                  </div>
                  <div className={styles.Imggeneral2} />
                </div>
              </div>

              <div className={styles.detailefram_general2}>
                <div className={styles.Boxfram3_3}>
                  <div className={styles.Imggeneral3} />
                  <div>
                    <p className={styles.HBoxdetaile3_1}>
                      {AboutusEN.at(13).label}
                    </p>
                    <p className={styles.HBoxdetaile_general}>
                      {AboutusEN.at(14).label}
                    </p>
                  </div>
                </div>
              </div>

              <div style={{ width: "100vw" }}>
                <Footer v="English" />
              </div>
            </div>
          </div>
          )}
        </>
      )}
    </>
  );
};
export default About_us;
