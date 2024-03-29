import React from "react";
import Navbars from "../Navbar/navbarHome";
import Footer from "../Footer/Footer.jsx";

import { useNavigate, useLocation } from "react-router-dom";
import { ServicesEN, ServicesDE, ServicesTH } from "../Data/DataLanguage2";

import styles from "./FAQs.module.css";

const FAQs = () => {
  const location = useLocation();
  const navigate = useNavigate();

  let Doc = location?.state?.languages;
  let Aoc = location?.state?.accept;

  const [type, setType] = React.useState(1);
  const [typeDoc, setTypeDoc] = React.useState(1);
  const { innerWidth: width } = window;

  const handle = (x) => {
    console.log("x:", x);
    switch (x) {
      case 1:
        setType(1);
        break;
      case 2:
        setType(2);
        break;
      case 3:
        setType(3);
        break;
      case 4:
        setType(4);
        break;
      case 5:
        setType(5);
        break;
      case 6:
        setType(6);
        break;
      default:
        setType(1);
    }
  };

  const handletypeDoc = (x) => {
    console.log("x:", x);
    switch (x) {
      case 1:
        setTypeDoc(1);
        break;
      case 2:
        setTypeDoc(2);
        break;
      case 3:
        setTypeDoc(3);
        break;
      case 4:
        setTypeDoc(4);
        break;
      case 5:
        setTypeDoc(5);
        break;
      default:
        setTypeDoc(1);
    }
  };

  //   console.log("Services:", ServicesTH, ServicesEN);
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
          {Doc === undefined ? (
            <>
              <div className={styles.fram1}>
                <div className={styles.boxBlue_overviwe}>
                  <p className={styles.h_text1}>{ServicesEN.at(0)?.label}</p>
                  <p className={styles.h_text2}>
                    Have questions? We’re here to help.
                  </p>
                </div>
              </div>

              <div className={styles.fram2}></div>

              {type === 1 ? (
                <div className={styles.fram3}>
                  <div className={styles.detailefram3}>
                    <div className={styles.Boxbtn_fram3}>
                      {typeDoc === 1 ? (
                        <button
                          className={styles.btn_fram3_2}
                          onClick={() => handletypeDoc(1)}
                        >
                          Cancel Order
                        </button>
                      ) : (
                        <button
                          className={styles.btn_fram3_1}
                          onClick={() => handletypeDoc(1)}
                        >
                          Cancel Order
                        </button>
                      )}
                      {typeDoc === 2 ? (
                        <button
                          className={styles.btn_fram3_2}
                          onClick={() => handletypeDoc(2)}
                        >
                          Edit Order
                        </button>
                      ) : (
                        <button
                          className={styles.btn_fram3_1}
                          onClick={() => handletypeDoc(2)}
                        >
                          Edit Order
                        </button>
                      )}
                      {typeDoc === 3 ? (
                        <button
                          className={styles.btn_fram3_2}
                          onClick={() => handletypeDoc(3)}
                        >
                          Edit Bill
                        </button>
                      ) : (
                        <button
                          className={styles.btn_fram3_1}
                          onClick={() => handletypeDoc(3)}
                        >
                          Edit Bill
                        </button>
                      )}
                      {typeDoc === 4 ? (
                        <button
                          className={styles.btn_fram3_2}
                          onClick={() => handletypeDoc(4)}
                        >
                          Question Money
                        </button>
                      ) : (
                        <button
                          className={styles.btn_fram3_1}
                          onClick={() => handletypeDoc(4)}
                        >
                          Question Money
                        </button>
                      )}
                      {typeDoc === 5 ? (
                        <button
                          className={styles.btn_fram3_2}
                          onClick={() => handletypeDoc(5)}
                        >
                          Translation order process
                        </button>
                      ) : (
                        <button
                          className={styles.btn_fram3_1}
                          onClick={() => handletypeDoc(5)}
                        >
                          Translation order process
                        </button>
                      )}
                    </div>

                    <div className={styles.Indetailefram3}>
                      {typeDoc === 1 ? (
                        <>
                          <div className={styles.Indetailefram3_1}>
                            <ul>
                              <li>
                                <p>{ServicesEN.at(12)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(13)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(14)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(15)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(16)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(17)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(18)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(19)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(20)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(21)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(22)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(23)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(24)?.label}</p>
                              </li>
                            </ul>
                          </div>
                          <div>
                            <ul>
                              <li>
                                <p>{ServicesEN.at(25)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(26)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(27)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(28)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(29)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(30)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(31)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(32)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(33)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(34)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(35)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(36)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(47)?.label}</p>
                              </li>
                            </ul>
                          </div>
                        </>
                      ) : typeDoc === 2 ? (
                        <>
                          <div className={styles.Indetailefram3_1}>
                            <ul>
                              <li>
                                <p>{ServicesEN.at(48)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(49)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(50)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(51)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(52)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(53)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(54)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(55)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(56)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(57)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(58)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(59)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(60)?.label}</p>
                              </li>
                            </ul>
                          </div>
                          <div>
                            <ul>
                              <li>
                                <p>{ServicesEN.at(61)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(62)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(63)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(64)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(65)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(66)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(67)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(68)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(69)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(70)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(71)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(72)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(47)?.label}</p>
                              </li>
                            </ul>
                          </div>
                        </>
                      ) : typeDoc === 3 ? (
                        <>
                          <div className={styles.Indetailefram3_1}>
                            <ul>
                              <li>
                                <p>{ServicesEN.at(75)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(76)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(77)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(78)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(79)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(80)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(81)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(82)?.label}</p>
                              </li>
                            </ul>
                          </div>
                          <div>
                            <ul>
                              <li>
                                <p>{ServicesEN.at(83)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(84)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(85)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(86)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(87)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(88)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(89)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(90)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(47)?.label}</p>
                              </li>
                            </ul>
                          </div>
                        </>
                      ) : (
                        <>
                          <div>
                            <ul>
                              <li>
                                <p>{ServicesEN.at(91)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(92)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(93)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(94)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(95)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(96)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(97)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(98)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(99)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(47)?.label}</p>
                              </li>
                            </ul>
                          </div>
                          <div className={styles.Indetailefram3_2} />
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ) : type === 2 ? (
                <div className={styles.fram3_2}>
                  <div className={styles.detailefram3_2}>
                    <div className={styles.Boxfram3_2}>
                      <div className={styles.Boxdetailefram3_2_1}>
                        <p className={styles.HBoxdetaile3_1}>
                          {ServicesEN.at(102)?.label}
                        </p>
                        <p className={styles.HBoxdetaile3_2}>
                          {ServicesEN.at(103)?.label}
                        </p>
                      </div>

                      <div className={styles.Boxdetailefram3_2_2}>
                        <p className={styles.HBoxdetaile3_1}>
                          {ServicesEN.at(104)?.label}
                        </p>
                        <p className={styles.HBoxdetaile3_2}>
                          {ServicesEN.at(105)?.label}
                        </p>
                      </div>

                      <div className={styles.Boxdetailefram3_2_3}>
                        <p className={styles.HBoxdetaile3_1}>
                          {ServicesEN.at(106)?.label}
                        </p>
                        <p className={styles.HBoxdetaile3_2}>
                          {ServicesEN.at(107)?.label}
                        </p>
                      </div>

                      <div className={styles.Boxdetailefram3_2_2}>
                        <p className={styles.HBoxdetaile3_1}>
                          {ServicesEN.at(108)?.label}
                        </p>
                        <p className={styles.HBoxdetaile3_2}>
                          {ServicesEN.at(109)?.label}
                        </p>
                      </div>
                      <div className={styles.Boxdetailefram3_2_1}>
                        <p className={styles.HBoxdetaile3_1}>
                          {ServicesEN.at(110)?.label}
                        </p>
                        <p className={styles.HBoxdetaile3_2}>
                          {ServicesEN.at(111)?.label}
                        </p>
                      </div>

                      <div className={styles.Boxdetailefram3_2_2}>
                        <p className={styles.HBoxdetaile3_1}>
                          {ServicesEN.at(112)?.label}
                        </p>
                        <p className={styles.HBoxdetaile3_2}>
                          {ServicesEN.at(113)?.label}
                        </p>
                      </div>

                      <div className={styles.Boxdetailefram3_2_1}>
                        <p className={styles.HBoxdetaile3_1}>
                          {ServicesEN.at(114)?.label}
                        </p>
                        <p className={styles.HBoxdetaile3_2}>
                          {ServicesEN.at(115)?.label}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : type === 4 ? (
                <div className={styles.fram3_4}>
                  <div className={styles.detailefram3_4}>
                    <div className={styles.Boxfram3_4}>
                      <p className={styles.HBoxfram3_4_1}>
                        {ServicesEN.at(127)?.label}
                      </p>
                      <p className={styles.HBoxfram3_4_2}>
                        {ServicesEN.at(128)?.label}
                      </p>
                      <div className={styles.ImgBox3_4_1} />

                      <p className={styles.HBoxfram3_4_1}>
                        {ServicesEN.at(129)?.label}
                      </p>
                      <p className={styles.HBoxfram3_4_2}>
                        {ServicesEN.at(130)?.label}
                      </p>
                      <div className={styles.ImgBox3_4_2} />
                    </div>
                  </div>
                </div>
              ) : type === 5 ? (
                <div className={styles.fram3_5}>
                  <div className={styles.detailefram3_5}>
                    <div className={styles.con_detailefram3_5}>
                      <div className={styles.Boxfram3_5}>
                        <div className={styles.ImgBox3_5_1} />
                        {ServicesEN.at(133)?.label}
                        <p></p>
                      </div>

                      <div className={styles.Boxfram3_5}>
                        <div className={styles.ImgBox3_5_2} />
                        <p>{ServicesEN.at(134)?.label}</p>
                      </div>
                      <div className={styles.Boxfram3_5}>
                        <div className={styles.ImgBox3_5_3} />
                        <p> {ServicesEN.at(135)?.label}</p>
                      </div>

                      <div className={styles.Boxfram3_5}>
                        <div className={styles.ImgBox3_5_4} />
                        <p> {ServicesEN.at(136)?.label}</p>
                      </div>
                      <div className={styles.Boxfram3_5}>
                        <div className={styles.ImgBox3_5_5} />
                        <p> {ServicesEN.at(137)?.label}</p>
                      </div>
                      <div className={styles.Boxfram3_5}>
                        <div className={styles.ImgBox3_5_6} />
                        <p>{ServicesEN.at(138)?.label}</p>
                      </div>

                      <div className={styles.Boxfram3_5}>
                        <div className={styles.ImgBox3_5_7} />
                        <p> {ServicesEN.at(139)?.label}</p>
                      </div>
                      <div className={styles.Boxfram3_5}>
                        <div className={styles.ImgBox3_5_8} />
                        <p> {ServicesEN.at(140)?.label}</p>
                      </div>
                      <div className={styles.Boxfram3_5}>
                        <div className={styles.ImgBox3_5_9} />
                        <p>{ServicesEN.at(141)?.label}</p>
                      </div>

                      <div className={styles.Boxfram3_5}>
                        <div className={styles.ImgBox3_5_10} />
                        <p>{ServicesEN.at(142)?.label}</p>
                      </div>
                      <div className={styles.Boxfram3_5}>
                        <div className={styles.ImgBox3_5_11} />
                        <p>{ServicesEN.at(143)?.label}</p>
                      </div>
                      <div className={styles.Boxfram3_5}>
                        <div className={styles.ImgBox3_5_12} />
                        <p>{ServicesEN.at(144)?.label}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : type === 3 ? (
                <>
                  <div className={styles.fram3_3}>
                    <div className={styles.detailefram3_3}>
                      <div className={styles.Boxfram3_3}>
                        <div>
                          <p className={styles.HBoxdetaile3_1}>
                            {" "}
                            {ServicesEN.at(118)?.label}
                          </p>
                          <p className={styles.HBoxdetaile3_3}>
                            {ServicesEN.at(119)?.label}
                          </p>
                        </div>
                        <div className={styles.Imgdetailefram3_3_1} />
                      </div>
                    </div>

                    <div className={styles.detailefram3_3}>
                      <div className={styles.Boxfram3_3}>
                        <div>
                          <p className={styles.HBoxdetaile3_1}>
                            {ServicesEN.at(120)?.label}
                          </p>
                          {/* <p className={styles.HBoxdetaile3_1}>
                        (CERTIFIED TRUE COPY)
                      </p> */}
                          <p className={styles.HBoxdetaile3_3}>
                            {ServicesEN.at(121)?.label}
                          </p>
                        </div>
                        <div className={styles.Imgdetailefram3_3_2} />
                      </div>
                    </div>
                  </div>
                  <p className={styles.textHeading2_overviwe4_2}>
                    {ServicesEN.at(122)?.label}
                  </p>
                  <div className={styles.con_detailefram3_5_2}>
                    <div className={styles.borderBoxfram3_5_2}>
                      <div className={styles.Boxfram3_5_2}>
                        <div className={styles.icon1Boxfram3_3_1} />
                        <p> {ServicesEN.at(123)?.label}</p>
                      </div>
                    </div>

                    <div className={styles.borderBoxfram3_5_2}>
                      <div className={styles.Boxfram3_5_2}>
                        <div className={styles.icon1Boxfram3_3_3} />
                        <p>{ServicesEN.at(124)?.label}</p>
                      </div>
                    </div>

                    <div className={styles.borderBoxfram3_5_2}>
                      <div className={styles.Boxfram3_5_2}>
                        <div className={styles.icon1Boxfram3_3_2} />
                        <p>{ServicesEN.at(125)?.label}</p>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                //type 6
                <div className={styles.fram3_6}>
                  <div className={styles.detailefram3_6}>
                    <div className={styles.Indetailefram3_6}>
                      <p className={styles.H_Indetailefram3_6}>
                        {ServicesEN.at(147)?.label}
                      </p>
                      <div className={styles.setBoxIndetailefram3_6}>
                        <div className={styles.BoxIndetailefram3_6}>
                          <p> {ServicesEN.at(148)?.label}</p>
                        </div>
                        <div className={styles.BoxIndetailefram3_6}>
                          <p> {ServicesEN.at(149)?.label}</p>
                        </div>
                        <div className={styles.BoxIndetailefram3_6}>
                          <p>{ServicesEN.at(150)?.label}</p>
                        </div>
                      </div>
                      <p className={styles.fonttype1}>
                        {ServicesEN.at(151)?.label}
                      </p>
                      <div>
                        <p className={styles.fonttype2}>
                          {ServicesEN.at(152)?.label}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div style={{ width: "100vw" }}>
                <Footer v="English" a={Aoc} />
              </div>
            </>
          ) : Doc === "Thai" ? (
            <>
              <div className={styles.fram1}>
                <div className={styles.boxBlue_overviwe}>
                  <p className={styles.h_text1}>{ServicesTH.at(0)?.label}</p>
                  <p className={styles.h_text2}>{ServicesTH.at(1)?.label}</p>
                  <div className={styles.set_fram1_button}>
                    {type === 1 ? (
                      <button
                        className={styles.btn_fram1_1}
                        onClick={() => handle(1)}
                      >
                        <div className={styles.Imgbtn_btn_fram1_1} />
                        <div className={styles.Inbtn_fram1_1} />
                        <p>{ServicesTH.at(2)?.label}</p>
                      </button>
                    ) : (
                      <button
                        className={styles.btn_fram1_2}
                        onClick={() => handle(1)}
                      >
                        <div className={styles.Imgbtn_btn_fram2_1} />
                        <div className={styles.Inbtn_fram1_2} />
                        <p>{ServicesTH.at(2)?.label}</p>
                      </button>
                    )}

                    {type === 2 ? (
                      <button
                        className={styles.btn_fram1_1}
                        onClick={() => handle(2)}
                      >
                        <div className={styles.Imgbtn_btn_fram2_2} />
                        <div className={styles.Inbtn_fram1_1} />
                        <p>{ServicesTH.at(3)?.label}</p>
                      </button>
                    ) : (
                      <button
                        className={styles.btn_fram1_2}
                        onClick={() => handle(2)}
                      >
                        <div className={styles.Imgbtn_btn_fram1_2} />
                        <div className={styles.Inbtn_fram1_2} />
                        <p>{ServicesTH.at(3)?.label}</p>
                      </button>
                    )}

                    {type === 3 ? (
                      <button
                        className={styles.btn_fram1_1}
                        onClick={() => handle(3)}
                      >
                        <div className={styles.Imgbtn_btn_fram2_3} />
                        <div className={styles.Inbtn_fram1_1} />
                        <p>{ServicesTH.at(4)?.label}</p>
                      </button>
                    ) : (
                      <button
                        className={styles.btn_fram1_2}
                        onClick={() => handle(3)}
                      >
                        <div className={styles.Imgbtn_btn_fram1_3} />
                        <div className={styles.Inbtn_fram1_2} />
                        <p>{ServicesTH.at(4)?.label}</p>
                      </button>
                    )}

                    {type === 4 ? (
                      <button
                        className={styles.btn_fram1_1}
                        onClick={() => handle(4)}
                      >
                        <div className={styles.Imgbtn_btn_fram2_4} />
                        <div className={styles.Inbtn_fram1_1} />
                        <p>{ServicesTH.at(5)?.label}</p>
                      </button>
                    ) : (
                      <button
                        className={styles.btn_fram1_2}
                        onClick={() => handle(4)}
                      >
                        <div className={styles.Imgbtn_btn_fram1_4} />
                        <div className={styles.Inbtn_fram1_2} />
                        <p>{ServicesTH.at(5)?.label}</p>
                      </button>
                    )}

                    {type === 5 ? (
                      <button
                        className={styles.btn_fram1_1}
                        onClick={() => handle(5)}
                      >
                        <div className={styles.Imgbtn_btn_fram2_5} />
                        <div className={styles.Inbtn_fram1_1} />
                        <p>{ServicesTH.at(6)?.label}</p>
                      </button>
                    ) : (
                      <button
                        className={styles.btn_fram1_2}
                        onClick={() => handle(5)}
                      >
                        <div className={styles.Imgbtn_btn_fram1_5} />
                        <div className={styles.Inbtn_fram1_2} />
                        <p>{ServicesTH.at(6)?.label}</p>
                      </button>
                    )}
                    {type === 6 ? (
                      <button
                        className={styles.btn_fram1_1}
                        onClick={() => handle(6)}
                      >
                        <div className={styles.Imgbtn_btn_fram2_6} />
                        <div className={styles.Inbtn_fram1_1} />
                        <p>{ServicesTH.at(7)?.label}</p>
                      </button>
                    ) : (
                      <button
                        className={styles.btn_fram1_2}
                        onClick={() => handle(6)}
                      >
                        <div className={styles.Imgbtn_btn_fram1_6} />
                        <div className={styles.Inbtn_fram1_2} />
                        <p>{ServicesTH.at(7)?.label}</p>
                      </button>
                    )}
                  </div>
                </div>
              </div>

              <div className={styles.fram2}>
                {type === 1 ? (
                  <p className={styles.textHeading2_overviwe}>
                    {ServicesTH.at(2)?.label}
                  </p>
                ) : type === 2 ? (
                  <>
                    <p className={styles.textHeading2_overviwe}>
                      {ServicesTH.at(100)?.label}
                    </p>
                    <p className={styles.textHeading2_overviwe2}>
                      {ServicesTH.at(101)?.label}
                    </p>
                  </>
                ) : type === 3 ? (
                  <div className={styles.textHeading2_overviwe}>
                    <p className={styles.textHeading2_overviwe4}>
                      {ServicesTH.at(116)?.label}
                    </p>
                    {/* <p className={styles.textHeading2_overviwe4}>
                  กระทรวงการต่างประเทศ
                </p> */}
                    <p className={styles.textHeading2_overviwe3}>
                      {ServicesTH.at(117)?.label}
                    </p>
                  </div>
                ) : type === 4 ? (
                  <p className={styles.textHeading2_overviwe4}>
                    {ServicesTH.at(126)?.label}
                  </p>
                ) : type === 5 ? (
                  <>
                    <p className={styles.textHeading2_overviwe}>
                      {ServicesTH.at(131)?.label}
                    </p>
                    <p className={styles.textHeading2_overviwe3_5}>
                      {ServicesTH.at(132)?.label}
                    </p>
                  </>
                ) : (
                  <>
                    <div className={styles.textHeading2_overviwe}>
                      <p>{ServicesTH.at(145)?.label}</p>
                      {/* <p>(Police Clearance Certificate)</p> */}
                    </div>

                    <p className={styles.textHeading2_overviwe3}>
                      {ServicesTH.at(146)?.label}
                    </p>
                  </>
                )}
              </div>

              {type === 1 ? (
                <div className={styles.fram3}>
                  <div className={styles.detailefram3}>
                    <div className={styles.Boxbtn_fram3}>
                      {typeDoc === 1 ? (
                        <button
                          className={styles.btn_fram3_2}
                          onClick={() => handletypeDoc(1)}
                        >
                          {ServicesTH.at(8)?.label}
                        </button>
                      ) : (
                        <button
                          className={styles.btn_fram3_1}
                          onClick={() => handletypeDoc(1)}
                        >
                          {ServicesTH.at(8)?.label}
                        </button>
                      )}
                      {typeDoc === 2 ? (
                        <button
                          className={styles.btn_fram3_2}
                          onClick={() => handletypeDoc(2)}
                        >
                          {ServicesTH.at(9)?.label}
                        </button>
                      ) : (
                        <button
                          className={styles.btn_fram3_1}
                          onClick={() => handletypeDoc(2)}
                        >
                          {ServicesTH.at(9)?.label}
                        </button>
                      )}
                      {typeDoc === 3 ? (
                        <button
                          className={styles.btn_fram3_2}
                          onClick={() => handletypeDoc(3)}
                        >
                          {ServicesTH.at(10)?.label}
                        </button>
                      ) : (
                        <button
                          className={styles.btn_fram3_1}
                          onClick={() => handletypeDoc(3)}
                        >
                          {ServicesTH.at(10)?.label}
                        </button>
                      )}
                      {typeDoc === 4 ? (
                        <button
                          className={styles.btn_fram3_2}
                          onClick={() => handletypeDoc(4)}
                        >
                          {ServicesTH.at(11)?.label}
                        </button>
                      ) : (
                        <button
                          className={styles.btn_fram3_1}
                          onClick={() => handletypeDoc(4)}
                        >
                          {ServicesTH.at(11)?.label}
                        </button>
                      )}
                    </div>

                    <div className={styles.Indetailefram3}>
                      {typeDoc === 1 ? (
                        <>
                          <div className={styles.Indetailefram3_1}>
                            <ul>
                              <li>
                                <p>{ServicesTH.at(12)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesTH.at(13)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesTH.at(14)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesTH.at(15)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesTH.at(16)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesTH.at(17)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesTH.at(18)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesTH.at(19)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesTH.at(20)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesTH.at(21)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesTH.at(22)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesTH.at(23)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesTH.at(24)?.label}</p>
                              </li>
                            </ul>
                          </div>
                          <div>
                            <ul>
                              <li>
                                <p>{ServicesTH.at(25)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesTH.at(26)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesTH.at(27)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesTH.at(28)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesTH.at(29)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesTH.at(30)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesTH.at(31)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesTH.at(32)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesTH.at(33)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesTH.at(34)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesTH.at(35)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesTH.at(36)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesTH.at(47)?.label}</p>
                              </li>
                            </ul>
                          </div>
                        </>
                      ) : typeDoc === 2 ? (
                        <>
                          <div className={styles.Indetailefram3_1}>
                            <ul>
                              <li>
                                <p>{ServicesTH.at(48)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesTH.at(49)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesTH.at(50)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesTH.at(51)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesTH.at(52)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesTH.at(53)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesTH.at(54)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesTH.at(55)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesTH.at(56)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesTH.at(57)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesTH.at(58)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesTH.at(59)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesTH.at(60)?.label}</p>
                              </li>
                            </ul>
                          </div>
                          <div>
                            <ul>
                              <li>
                                <p>{ServicesTH.at(61)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesTH.at(62)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesTH.at(63)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesTH.at(64)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesTH.at(65)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesTH.at(66)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesTH.at(67)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesTH.at(68)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesTH.at(69)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesTH.at(70)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesTH.at(71)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesTH.at(72)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesTH.at(47)?.label}</p>
                              </li>
                            </ul>
                          </div>
                        </>
                      ) : typeDoc === 3 ? (
                        <>
                          <div className={styles.Indetailefram3_1}>
                            <ul>
                              <li>
                                <p>{ServicesTH.at(75)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesTH.at(76)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesTH.at(77)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesTH.at(78)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesTH.at(79)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesTH.at(80)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesTH.at(81)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesTH.at(82)?.label}</p>
                              </li>
                            </ul>
                          </div>
                          <div>
                            <ul>
                              <li>
                                <p>{ServicesTH.at(83)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesTH.at(84)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesTH.at(85)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesTH.at(86)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesTH.at(87)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesTH.at(88)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesTH.at(89)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesTH.at(90)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesTH.at(47)?.label}</p>
                              </li>
                            </ul>
                          </div>
                        </>
                      ) : (
                        <>
                          <div>
                            <ul>
                              <li>
                                <p>{ServicesTH.at(91)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesTH.at(92)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesTH.at(93)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesTH.at(94)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesTH.at(95)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesTH.at(96)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesTH.at(97)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesTH.at(98)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesTH.at(99)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesTH.at(47)?.label}</p>
                              </li>
                            </ul>
                          </div>
                          <div className={styles.Indetailefram3_2} />
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ) : type === 2 ? (
                <div className={styles.fram3_2}>
                  <div className={styles.detailefram3_2}>
                    <div className={styles.Boxfram3_2}>
                      <div className={styles.Boxdetailefram3_2_1}>
                        <p className={styles.HBoxdetaile3_1}>
                          {ServicesTH.at(102)?.label}
                        </p>
                        <p className={styles.HBoxdetaile3_2}>
                          {ServicesTH.at(103)?.label}
                        </p>
                      </div>

                      <div className={styles.Boxdetailefram3_2_2}>
                        <p className={styles.HBoxdetaile3_1}>
                          {ServicesTH.at(104)?.label}
                        </p>
                        <p className={styles.HBoxdetaile3_2}>
                          {ServicesTH.at(105)?.label}
                        </p>
                      </div>

                      <div className={styles.Boxdetailefram3_2_3}>
                        <p className={styles.HBoxdetaile3_1}>
                          {ServicesTH.at(106)?.label}
                        </p>
                        <p className={styles.HBoxdetaile3_2}>
                          {ServicesTH.at(107)?.label}
                        </p>
                      </div>

                      <div className={styles.Boxdetailefram3_2_2}>
                        <p className={styles.HBoxdetaile3_1}>
                          {ServicesTH.at(108)?.label}
                        </p>
                        <p className={styles.HBoxdetaile3_2}>
                          {ServicesTH.at(109)?.label}
                        </p>
                      </div>
                      <div className={styles.Boxdetailefram3_2_1}>
                        <p className={styles.HBoxdetaile3_1}>
                          {ServicesTH.at(110)?.label}
                        </p>
                        <p className={styles.HBoxdetaile3_2}>
                          {ServicesTH.at(111)?.label}
                        </p>
                      </div>

                      <div className={styles.Boxdetailefram3_2_2}>
                        <p className={styles.HBoxdetaile3_1}>
                          {ServicesTH.at(112)?.label}
                        </p>
                        <p className={styles.HBoxdetaile3_2}>
                          {ServicesTH.at(113)?.label}
                        </p>
                      </div>

                      <div className={styles.Boxdetailefram3_2_1}>
                        <p className={styles.HBoxdetaile3_1}>
                          {ServicesTH.at(114)?.label}
                        </p>
                        <p className={styles.HBoxdetaile3_2}>
                          {ServicesTH.at(115)?.label}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : type === 4 ? (
                <div className={styles.fram3_4}>
                  <div className={styles.detailefram3_4}>
                    <div className={styles.Boxfram3_4}>
                      <p className={styles.HBoxfram3_4_1}>
                        {ServicesTH.at(127)?.label}
                      </p>
                      <p className={styles.HBoxfram3_4_2}>
                        {ServicesTH.at(128)?.label}
                      </p>
                      <div className={styles.ImgBox3_4_1} />

                      <p className={styles.HBoxfram3_4_1}>
                        {ServicesTH.at(129)?.label}
                      </p>
                      <p className={styles.HBoxfram3_4_2}>
                        {ServicesTH.at(130)?.label}
                      </p>
                      <div className={styles.ImgBox3_4_2} />
                    </div>
                  </div>
                </div>
              ) : type === 5 ? (
                <div className={styles.fram3_5}>
                  <div className={styles.detailefram3_5}>
                    <div className={styles.con_detailefram3_5}>
                      <div className={styles.Boxfram3_5}>
                        <div className={styles.ImgBox3_5_1} />
                        {ServicesTH.at(133)?.label}
                        <p></p>
                      </div>

                      <div className={styles.Boxfram3_5}>
                        <div className={styles.ImgBox3_5_2} />
                        <p>{ServicesTH.at(134)?.label}</p>
                      </div>
                      <div className={styles.Boxfram3_5}>
                        <div className={styles.ImgBox3_5_3} />
                        <p> {ServicesTH.at(135)?.label}</p>
                      </div>

                      <div className={styles.Boxfram3_5}>
                        <div className={styles.ImgBox3_5_4} />
                        <p> {ServicesTH.at(136)?.label}</p>
                      </div>
                      <div className={styles.Boxfram3_5}>
                        <div className={styles.ImgBox3_5_5} />
                        <p> {ServicesTH.at(137)?.label}</p>
                      </div>
                      <div className={styles.Boxfram3_5}>
                        <div className={styles.ImgBox3_5_6} />
                        <p>{ServicesTH.at(138)?.label}</p>
                      </div>

                      <div className={styles.Boxfram3_5}>
                        <div className={styles.ImgBox3_5_7} />
                        <p> {ServicesTH.at(139)?.label}</p>
                      </div>
                      <div className={styles.Boxfram3_5}>
                        <div className={styles.ImgBox3_5_8} />
                        <p> {ServicesTH.at(140)?.label}</p>
                      </div>
                      <div className={styles.Boxfram3_5}>
                        <div className={styles.ImgBox3_5_9} />
                        <p>{ServicesTH.at(141)?.label}</p>
                      </div>

                      <div className={styles.Boxfram3_5}>
                        <div className={styles.ImgBox3_5_10} />
                        <p>{ServicesTH.at(142)?.label}</p>
                      </div>
                      <div className={styles.Boxfram3_5}>
                        <div className={styles.ImgBox3_5_11} />
                        <p>{ServicesTH.at(143)?.label}</p>
                      </div>
                      <div className={styles.Boxfram3_5}>
                        <div className={styles.ImgBox3_5_12} />
                        <p>{ServicesTH.at(144)?.label}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : type === 3 ? (
                <>
                  <div className={styles.fram3_3}>
                    <div className={styles.detailefram3_3}>
                      <div className={styles.Boxfram3_3}>
                        <div>
                          <p className={styles.HBoxdetaile3_1}>
                            {" "}
                            {ServicesTH.at(118)?.label}
                          </p>
                          <p className={styles.HBoxdetaile3_3}>
                            {ServicesTH.at(119)?.label}
                          </p>
                        </div>
                        <div className={styles.Imgdetailefram3_3_1} />
                      </div>
                    </div>

                    <div className={styles.detailefram3_3}>
                      <div className={styles.Boxfram3_3}>
                        <div>
                          <p className={styles.HBoxdetaile3_1}>
                            {ServicesTH.at(120)?.label}
                          </p>
                          {/* <p className={styles.HBoxdetaile3_1}>
                        (CERTIFIED TRUE COPY)
                      </p> */}
                          <p className={styles.HBoxdetaile3_3}>
                            {ServicesTH.at(121)?.label}
                          </p>
                        </div>
                        <div className={styles.Imgdetailefram3_3_2} />
                      </div>
                    </div>
                  </div>
                  <p className={styles.textHeading2_overviwe4_2}>
                    {ServicesTH.at(122)?.label}
                  </p>
                  <div className={styles.con_detailefram3_5_2}>
                    <div className={styles.borderBoxfram3_5_2}>
                      <div className={styles.Boxfram3_5_2}>
                        <div className={styles.icon1Boxfram3_3_1} />
                        <p> {ServicesTH.at(123)?.label}</p>
                      </div>
                    </div>

                    <div className={styles.borderBoxfram3_5_2}>
                      <div className={styles.Boxfram3_5_2}>
                        <div className={styles.icon1Boxfram3_3_3} />
                        <p>{ServicesTH.at(124)?.label}</p>
                      </div>
                    </div>

                    <div className={styles.borderBoxfram3_5_2}>
                      <div className={styles.Boxfram3_5_2}>
                        <div className={styles.icon1Boxfram3_3_2} />
                        <p>{ServicesTH.at(125)?.label}</p>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                //type 6
                <div className={styles.fram3_6}>
                  <div className={styles.detailefram3_6}>
                    <div className={styles.Indetailefram3_6}>
                      <p className={styles.H_Indetailefram3_6}>
                        {ServicesTH.at(147)?.label}
                      </p>
                      <div className={styles.setBoxIndetailefram3_6}>
                        <div className={styles.BoxIndetailefram3_6}>
                          <p> {ServicesTH.at(148)?.label}</p>
                        </div>
                        <div className={styles.BoxIndetailefram3_6}>
                          <p> {ServicesTH.at(149)?.label}</p>
                        </div>
                        <div className={styles.BoxIndetailefram3_6}>
                          <p>{ServicesTH.at(150)?.label}</p>
                        </div>
                      </div>
                      <p className={styles.fonttype1}>
                        {ServicesTH.at(151)?.label}
                      </p>
                      <div>
                        <p className={styles.fonttype2}>
                          {ServicesTH.at(152)?.label}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div style={{ width: "100vw" }}>
                <Footer v="Thai" a={Aoc} />
              </div>
            </>
          ) : Doc === "German" ? (
            <>
              <div className={styles.fram1}>
                <div className={styles.boxBlue_overviwe}>
                  <p className={styles.h_text1}>{ServicesDE.at(0)?.label}</p>
                  <p className={styles.h_text2}>{ServicesDE.at(1)?.label}</p>
                  <div className={styles.set_fram1_button}>
                    {type === 1 ? (
                      <button
                        className={styles.btn_fram1_1}
                        onClick={() => handle(1)}
                      >
                        <div className={styles.Imgbtn_btn_fram1_1} />
                        <div className={styles.Inbtn_fram1_1} />
                        <p>{ServicesDE.at(2)?.label}</p>
                      </button>
                    ) : (
                      <button
                        className={styles.btn_fram1_2}
                        onClick={() => handle(1)}
                      >
                        <div className={styles.Imgbtn_btn_fram2_1} />
                        <div className={styles.Inbtn_fram1_2} />
                        <p>{ServicesDE.at(2)?.label}</p>
                      </button>
                    )}

                    {type === 2 ? (
                      <button
                        className={styles.btn_fram1_1}
                        onClick={() => handle(2)}
                      >
                        <div className={styles.Imgbtn_btn_fram2_2} />
                        <div className={styles.Inbtn_fram1_1} />
                        <p>{ServicesDE.at(3)?.label}</p>
                      </button>
                    ) : (
                      <button
                        className={styles.btn_fram1_2}
                        onClick={() => handle(2)}
                      >
                        <div className={styles.Imgbtn_btn_fram1_2} />
                        <div className={styles.Inbtn_fram1_2} />
                        <p>{ServicesDE.at(3)?.label}</p>
                      </button>
                    )}

                    {type === 3 ? (
                      <button
                        className={styles.btn_fram1_1}
                        onClick={() => handle(3)}
                      >
                        <div className={styles.Imgbtn_btn_fram2_3} />
                        <div className={styles.Inbtn_fram1_1} />
                        <p>{ServicesDE.at(4)?.label}</p>
                      </button>
                    ) : (
                      <button
                        className={styles.btn_fram1_2}
                        onClick={() => handle(3)}
                      >
                        <div className={styles.Imgbtn_btn_fram1_3} />
                        <div className={styles.Inbtn_fram1_2} />
                        <p>{ServicesDE.at(4)?.label}</p>
                      </button>
                    )}

                    {type === 4 ? (
                      <button
                        className={styles.btn_fram1_1}
                        onClick={() => handle(4)}
                      >
                        <div className={styles.Imgbtn_btn_fram2_4} />
                        <div className={styles.Inbtn_fram1_1} />
                        <p>{ServicesDE.at(5)?.label}</p>
                      </button>
                    ) : (
                      <button
                        className={styles.btn_fram1_2}
                        onClick={() => handle(4)}
                      >
                        <div className={styles.Imgbtn_btn_fram1_4} />
                        <div className={styles.Inbtn_fram1_2} />
                        <p>{ServicesDE.at(5)?.label}</p>
                      </button>
                    )}

                    {type === 5 ? (
                      <button
                        className={styles.btn_fram1_1}
                        onClick={() => handle(5)}
                      >
                        <div className={styles.Imgbtn_btn_fram2_5} />
                        <div className={styles.Inbtn_fram1_1} />
                        <p>{ServicesDE.at(6)?.label}</p>
                      </button>
                    ) : (
                      <button
                        className={styles.btn_fram1_2}
                        onClick={() => handle(5)}
                      >
                        <div className={styles.Imgbtn_btn_fram1_5} />
                        <div className={styles.Inbtn_fram1_2} />
                        <p>{ServicesDE.at(6)?.label}</p>
                      </button>
                    )}
                    {type === 6 ? (
                      <button
                        className={styles.btn_fram1_1}
                        onClick={() => handle(6)}
                      >
                        <div className={styles.Imgbtn_btn_fram2_6} />
                        <div className={styles.Inbtn_fram1_1} />
                        <p>{ServicesDE.at(7)?.label}</p>
                      </button>
                    ) : (
                      <button
                        className={styles.btn_fram1_2}
                        onClick={() => handle(6)}
                      >
                        <div className={styles.Imgbtn_btn_fram1_6} />
                        <div className={styles.Inbtn_fram1_2} />
                        <p>{ServicesDE.at(7)?.label}</p>
                      </button>
                    )}
                  </div>
                </div>
              </div>

              <div className={styles.fram2}>
                {type === 1 ? (
                  <p className={styles.textHeading2_overviwe}>
                    {ServicesDE.at(2)?.label}
                  </p>
                ) : type === 2 ? (
                  <>
                    <p className={styles.textHeading2_overviwe}>
                      {ServicesDE.at(100)?.label}
                    </p>
                    <p className={styles.textHeading2_overviwe2}>
                      {ServicesDE.at(101)?.label}
                    </p>
                  </>
                ) : type === 3 ? (
                  <div className={styles.textHeading2_overviwe}>
                    <p className={styles.textHeading2_overviwe4}>
                      {ServicesDE.at(116)?.label}
                    </p>
                    {/* <p className={styles.textHeading2_overviwe4}>
                  กระทรวงการต่างประเทศ
                </p> */}
                    <p className={styles.textHeading2_overviwe3}>
                      {ServicesDE.at(117)?.label}
                    </p>
                  </div>
                ) : type === 4 ? (
                  <p className={styles.textHeading2_overviwe4}>
                    {ServicesDE.at(126)?.label}
                  </p>
                ) : type === 5 ? (
                  <>
                    <p className={styles.textHeading2_overviwe}>
                      {ServicesDE.at(131)?.label}
                    </p>
                    <p className={styles.textHeading2_overviwe3_5}>
                      {ServicesDE.at(132)?.label}
                    </p>
                  </>
                ) : (
                  <>
                    <div className={styles.textHeading2_overviwe}>
                      <p>{ServicesDE.at(145)?.label}</p>
                      {/* <p>(Police Clearance Certificate)</p> */}
                    </div>

                    <p className={styles.textHeading2_overviwe3}>
                      {ServicesDE.at(146)?.label}
                    </p>
                  </>
                )}
              </div>

              {type === 1 ? (
                <div className={styles.fram3}>
                  <div className={styles.detailefram3}>
                    <div className={styles.Boxbtn_fram3}>
                      {typeDoc === 1 ? (
                        <button
                          className={styles.btn_fram3_2}
                          onClick={() => handletypeDoc(1)}
                        >
                          {ServicesDE.at(8)?.label}
                        </button>
                      ) : (
                        <button
                          className={styles.btn_fram3_1}
                          onClick={() => handletypeDoc(1)}
                        >
                          {ServicesDE.at(8)?.label}
                        </button>
                      )}
                      {typeDoc === 2 ? (
                        <button
                          className={styles.btn_fram3_2}
                          onClick={() => handletypeDoc(2)}
                        >
                          {ServicesDE.at(9)?.label}
                        </button>
                      ) : (
                        <button
                          className={styles.btn_fram3_1}
                          onClick={() => handletypeDoc(2)}
                        >
                          {ServicesDE.at(9)?.label}
                        </button>
                      )}
                      {typeDoc === 3 ? (
                        <button
                          className={styles.btn_fram3_2}
                          onClick={() => handletypeDoc(3)}
                        >
                          {ServicesDE.at(10)?.label}
                        </button>
                      ) : (
                        <button
                          className={styles.btn_fram3_1}
                          onClick={() => handletypeDoc(3)}
                        >
                          {ServicesDE.at(10)?.label}
                        </button>
                      )}
                      {typeDoc === 4 ? (
                        <button
                          className={styles.btn_fram3_2}
                          onClick={() => handletypeDoc(4)}
                        >
                          {ServicesDE.at(11)?.label}
                        </button>
                      ) : (
                        <button
                          className={styles.btn_fram3_1}
                          onClick={() => handletypeDoc(4)}
                        >
                          {ServicesDE.at(11)?.label}
                        </button>
                      )}
                    </div>

                    <div className={styles.Indetailefram3}>
                      {typeDoc === 1 ? (
                        <>
                          <div className={styles.Indetailefram3_1}>
                            <ul>
                              <li>
                                <p>{ServicesDE.at(12)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesDE.at(13)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesDE.at(14)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesDE.at(15)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesDE.at(16)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesDE.at(17)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesDE.at(18)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesDE.at(19)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesDE.at(20)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesDE.at(21)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesDE.at(22)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesDE.at(23)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesDE.at(24)?.label}</p>
                              </li>
                            </ul>
                          </div>
                          <div>
                            <ul>
                              <li>
                                <p>{ServicesDE.at(25)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesDE.at(26)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesDE.at(27)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesDE.at(28)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesDE.at(29)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesDE.at(30)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesDE.at(31)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesDE.at(32)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesDE.at(33)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesDE.at(34)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesDE.at(35)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesDE.at(36)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesDE.at(47)?.label}</p>
                              </li>
                            </ul>
                          </div>
                        </>
                      ) : typeDoc === 2 ? (
                        <>
                          <div className={styles.Indetailefram3_1}>
                            <ul>
                              <li>
                                <p>{ServicesDE.at(48)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesDE.at(49)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesDE.at(50)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesDE.at(51)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesDE.at(52)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesDE.at(53)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesDE.at(54)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesDE.at(55)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesDE.at(56)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesDE.at(57)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesDE.at(58)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesDE.at(59)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesDE.at(60)?.label}</p>
                              </li>
                            </ul>
                          </div>
                          <div>
                            <ul>
                              <li>
                                <p>{ServicesDE.at(61)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesDE.at(62)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesDE.at(63)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesDE.at(64)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesDE.at(65)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesDE.at(66)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesDE.at(67)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesDE.at(68)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesDE.at(69)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesDE.at(70)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesDE.at(71)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesDE.at(72)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesDE.at(47)?.label}</p>
                              </li>
                            </ul>
                          </div>
                        </>
                      ) : typeDoc === 3 ? (
                        <>
                          <div className={styles.Indetailefram3_1}>
                            <ul>
                              <li>
                                <p>{ServicesDE.at(75)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesDE.at(76)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesDE.at(77)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesDE.at(78)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesDE.at(79)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesDE.at(80)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesDE.at(81)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesDE.at(82)?.label}</p>
                              </li>
                            </ul>
                          </div>
                          <div>
                            <ul>
                              <li>
                                <p>{ServicesDE.at(83)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesDE.at(84)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesDE.at(85)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesDE.at(86)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesDE.at(87)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesDE.at(88)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesDE.at(89)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesDE.at(90)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesDE.at(47)?.label}</p>
                              </li>
                            </ul>
                          </div>
                        </>
                      ) : (
                        <>
                          <div>
                            <ul>
                              <li>
                                <p>{ServicesDE.at(91)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesDE.at(92)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesDE.at(93)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesDE.at(94)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesDE.at(95)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesDE.at(96)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesDE.at(97)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesDE.at(98)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesDE.at(99)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesDE.at(47)?.label}</p>
                              </li>
                            </ul>
                          </div>
                          <div className={styles.Indetailefram3_2} />
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ) : type === 2 ? (
                <div className={styles.fram3_2}>
                  <div className={styles.detailefram3_2}>
                    <div className={styles.Boxfram3_2}>
                      <div className={styles.Boxdetailefram3_2_1}>
                        <p className={styles.HBoxdetaile3_1}>
                          {ServicesDE.at(102)?.label}
                        </p>
                        <p className={styles.HBoxdetaile3_2}>
                          {ServicesDE.at(103)?.label}
                        </p>
                      </div>

                      <div className={styles.Boxdetailefram3_2_2}>
                        <p className={styles.HBoxdetaile3_1}>
                          {ServicesDE.at(104)?.label}
                        </p>
                        <p className={styles.HBoxdetaile3_2}>
                          {ServicesDE.at(105)?.label}
                        </p>
                      </div>

                      <div className={styles.Boxdetailefram3_2_3}>
                        <p className={styles.HBoxdetaile3_1}>
                          {ServicesDE.at(106)?.label}
                        </p>
                        <p className={styles.HBoxdetaile3_2}>
                          {ServicesDE.at(107)?.label}
                        </p>
                      </div>

                      <div className={styles.Boxdetailefram3_2_2}>
                        <p className={styles.HBoxdetaile3_1}>
                          {ServicesDE.at(108)?.label}
                        </p>
                        <p className={styles.HBoxdetaile3_2}>
                          {ServicesDE.at(109)?.label}
                        </p>
                      </div>
                      <div className={styles.Boxdetailefram3_2_1}>
                        <p className={styles.HBoxdetaile3_1}>
                          {ServicesDE.at(110)?.label}
                        </p>
                        <p className={styles.HBoxdetaile3_2}>
                          {ServicesDE.at(111)?.label}
                        </p>
                      </div>

                      <div className={styles.Boxdetailefram3_2_2}>
                        <p className={styles.HBoxdetaile3_1}>
                          {ServicesDE.at(112)?.label}
                        </p>
                        <p className={styles.HBoxdetaile3_2}>
                          {ServicesDE.at(113)?.label}
                        </p>
                      </div>

                      <div className={styles.Boxdetailefram3_2_1}>
                        <p className={styles.HBoxdetaile3_1}>
                          {ServicesDE.at(114)?.label}
                        </p>
                        <p className={styles.HBoxdetaile3_2}>
                          {ServicesDE.at(115)?.label}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : type === 4 ? (
                <div className={styles.fram3_4}>
                  <div className={styles.detailefram3_4}>
                    <div className={styles.Boxfram3_4}>
                      <p className={styles.HBoxfram3_4_1}>
                        {ServicesDE.at(127)?.label}
                      </p>
                      <p className={styles.HBoxfram3_4_2}>
                        {ServicesDE.at(128)?.label}
                      </p>
                      <div className={styles.ImgBox3_4_1} />

                      <p className={styles.HBoxfram3_4_1}>
                        {ServicesDE.at(129)?.label}
                      </p>
                      <p className={styles.HBoxfram3_4_2}>
                        {ServicesDE.at(130)?.label}
                      </p>
                      <div className={styles.ImgBox3_4_2} />
                    </div>
                  </div>
                </div>
              ) : type === 5 ? (
                <div className={styles.fram3_5}>
                  <div className={styles.detailefram3_5}>
                    <div className={styles.con_detailefram3_5}>
                      <div className={styles.Boxfram3_5}>
                        <div className={styles.ImgBox3_5_1} />
                        {ServicesDE.at(133)?.label}
                        <p></p>
                      </div>

                      <div className={styles.Boxfram3_5}>
                        <div className={styles.ImgBox3_5_2} />
                        <p>{ServicesDE.at(134)?.label}</p>
                      </div>
                      <div className={styles.Boxfram3_5}>
                        <div className={styles.ImgBox3_5_3} />
                        <p> {ServicesDE.at(135)?.label}</p>
                      </div>

                      <div className={styles.Boxfram3_5}>
                        <div className={styles.ImgBox3_5_4} />
                        <p> {ServicesDE.at(136)?.label}</p>
                      </div>
                      <div className={styles.Boxfram3_5}>
                        <div className={styles.ImgBox3_5_5} />
                        <p> {ServicesDE.at(137)?.label}</p>
                      </div>
                      <div className={styles.Boxfram3_5}>
                        <div className={styles.ImgBox3_5_6} />
                        <p>{ServicesDE.at(138)?.label}</p>
                      </div>

                      <div className={styles.Boxfram3_5}>
                        <div className={styles.ImgBox3_5_7} />
                        <p> {ServicesDE.at(139)?.label}</p>
                      </div>
                      <div className={styles.Boxfram3_5}>
                        <div className={styles.ImgBox3_5_8} />
                        <p> {ServicesDE.at(140)?.label}</p>
                      </div>
                      <div className={styles.Boxfram3_5}>
                        <div className={styles.ImgBox3_5_9} />
                        <p>{ServicesDE.at(141)?.label}</p>
                      </div>

                      <div className={styles.Boxfram3_5}>
                        <div className={styles.ImgBox3_5_10} />
                        <p>{ServicesDE.at(142)?.label}</p>
                      </div>
                      <div className={styles.Boxfram3_5}>
                        <div className={styles.ImgBox3_5_11} />
                        <p>{ServicesDE.at(143)?.label}</p>
                      </div>
                      <div className={styles.Boxfram3_5}>
                        <div className={styles.ImgBox3_5_12} />
                        <p>{ServicesDE.at(144)?.label}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : type === 3 ? (
                <>
                  <div className={styles.fram3_3}>
                    <div className={styles.detailefram3_3}>
                      <div className={styles.Boxfram3_3}>
                        <div>
                          <p className={styles.HBoxdetaile3_1}>
                            {" "}
                            {ServicesDE.at(118)?.label}
                          </p>
                          <p className={styles.HBoxdetaile3_3}>
                            {ServicesDE.at(119)?.label}
                          </p>
                        </div>
                        <div className={styles.Imgdetailefram3_3_1} />
                      </div>
                    </div>

                    <div className={styles.detailefram3_3}>
                      <div className={styles.Boxfram3_3}>
                        <div>
                          <p className={styles.HBoxdetaile3_1}>
                            {ServicesDE.at(120)?.label}
                          </p>
                          {/* <p className={styles.HBoxdetaile3_1}>
                        (CERTIFIED TRUE COPY)
                      </p> */}
                          <p className={styles.HBoxdetaile3_3}>
                            {ServicesDE.at(121)?.label}
                          </p>
                        </div>
                        <div className={styles.Imgdetailefram3_3_2} />
                      </div>
                    </div>
                  </div>
                  <p className={styles.textHeading2_overviwe4_2}>
                    {ServicesDE.at(122)?.label}
                  </p>
                  <div className={styles.con_detailefram3_5_2}>
                    <div className={styles.borderBoxfram3_5_2}>
                      <div className={styles.Boxfram3_5_2}>
                        <div className={styles.icon1Boxfram3_3_1} />
                        <p> {ServicesDE.at(123)?.label}</p>
                      </div>
                    </div>

                    <div className={styles.borderBoxfram3_5_2}>
                      <div className={styles.Boxfram3_5_2}>
                        <div className={styles.icon1Boxfram3_3_3} />
                        <p>{ServicesDE.at(124)?.label}</p>
                      </div>
                    </div>

                    <div className={styles.borderBoxfram3_5_2}>
                      <div className={styles.Boxfram3_5_2}>
                        <div className={styles.icon1Boxfram3_3_2} />
                        <p>{ServicesDE.at(125)?.label}</p>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                //type 6
                <div className={styles.fram3_6}>
                  <div className={styles.detailefram3_6}>
                    <div className={styles.Indetailefram3_6}>
                      <p className={styles.H_Indetailefram3_6}>
                        {ServicesDE.at(147)?.label}
                      </p>
                      <div className={styles.setBoxIndetailefram3_6}>
                        <div className={styles.BoxIndetailefram3_6}>
                          <p> {ServicesDE.at(148)?.label}</p>
                        </div>
                        <div className={styles.BoxIndetailefram3_6}>
                          <p> {ServicesDE.at(149)?.label}</p>
                        </div>
                        <div className={styles.BoxIndetailefram3_6}>
                          <p>{ServicesDE.at(150)?.label}</p>
                        </div>
                      </div>
                      <p className={styles.fonttype1}>
                        {ServicesDE.at(151)?.label}
                      </p>
                      <div>
                        <p className={styles.fonttype2}>
                          {ServicesDE.at(152)?.label}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div style={{ width: "100vw" }}>
                <Footer v="German" a={Aoc} />
              </div>
            </>
          ) : (
            <>
              <div className={styles.fram1}>
                <div className={styles.boxBlue_overviwe}>
                  <p className={styles.h_text1}>{ServicesEN.at(0)?.label}</p>
                  <p className={styles.h_text2}>{ServicesEN.at(1)?.label}</p>
                  <div className={styles.set_fram1_button}>
                    {type === 1 ? (
                      <button
                        className={styles.btn_fram1_1}
                        onClick={() => handle(1)}
                      >
                        <div className={styles.Imgbtn_btn_fram1_1} />
                        <div className={styles.Inbtn_fram1_1} />
                        <p>{ServicesEN.at(2)?.label}</p>
                      </button>
                    ) : (
                      <button
                        className={styles.btn_fram1_2}
                        onClick={() => handle(1)}
                      >
                        <div className={styles.Imgbtn_btn_fram2_1} />
                        <div className={styles.Inbtn_fram1_2} />
                        <p>{ServicesEN.at(2)?.label}</p>
                      </button>
                    )}

                    {type === 2 ? (
                      <button
                        className={styles.btn_fram1_1}
                        onClick={() => handle(2)}
                      >
                        <div className={styles.Imgbtn_btn_fram2_2} />
                        <div className={styles.Inbtn_fram1_1} />
                        <p>{ServicesEN.at(3)?.label}</p>
                      </button>
                    ) : (
                      <button
                        className={styles.btn_fram1_2}
                        onClick={() => handle(2)}
                      >
                        <div className={styles.Imgbtn_btn_fram1_2} />
                        <div className={styles.Inbtn_fram1_2} />
                        <p>{ServicesEN.at(3)?.label}</p>
                      </button>
                    )}

                    {type === 3 ? (
                      <button
                        className={styles.btn_fram1_1}
                        onClick={() => handle(3)}
                      >
                        <div className={styles.Imgbtn_btn_fram2_3} />
                        <div className={styles.Inbtn_fram1_1} />
                        <p>{ServicesEN.at(4)?.label}</p>
                      </button>
                    ) : (
                      <button
                        className={styles.btn_fram1_2}
                        onClick={() => handle(3)}
                      >
                        <div className={styles.Imgbtn_btn_fram1_3} />
                        <div className={styles.Inbtn_fram1_2} />
                        <p>{ServicesEN.at(4)?.label}</p>
                      </button>
                    )}

                    {type === 4 ? (
                      <button
                        className={styles.btn_fram1_1}
                        onClick={() => handle(4)}
                      >
                        <div className={styles.Imgbtn_btn_fram2_4} />
                        <div className={styles.Inbtn_fram1_1} />
                        <p>{ServicesEN.at(5)?.label}</p>
                      </button>
                    ) : (
                      <button
                        className={styles.btn_fram1_2}
                        onClick={() => handle(4)}
                      >
                        <div className={styles.Imgbtn_btn_fram1_4} />
                        <div className={styles.Inbtn_fram1_2} />
                        <p>{ServicesEN.at(5)?.label}</p>
                      </button>
                    )}

                    {type === 5 ? (
                      <button
                        className={styles.btn_fram1_1}
                        onClick={() => handle(5)}
                      >
                        <div className={styles.Imgbtn_btn_fram2_5} />
                        <div className={styles.Inbtn_fram1_1} />
                        <p>{ServicesEN.at(6)?.label}</p>
                      </button>
                    ) : (
                      <button
                        className={styles.btn_fram1_2}
                        onClick={() => handle(5)}
                      >
                        <div className={styles.Imgbtn_btn_fram1_5} />
                        <div className={styles.Inbtn_fram1_2} />
                        <p>{ServicesEN.at(6)?.label}</p>
                      </button>
                    )}
                    {type === 6 ? (
                      <button
                        className={styles.btn_fram1_1}
                        onClick={() => handle(6)}
                      >
                        <div className={styles.Imgbtn_btn_fram2_6} />
                        <div className={styles.Inbtn_fram1_1} />
                        <p>{ServicesEN.at(7)?.label}</p>
                      </button>
                    ) : (
                      <button
                        className={styles.btn_fram1_2}
                        onClick={() => handle(6)}
                      >
                        <div className={styles.Imgbtn_btn_fram1_6} />
                        <div className={styles.Inbtn_fram1_2} />
                        <p>{ServicesEN.at(7)?.label}</p>
                      </button>
                    )}
                  </div>
                </div>
              </div>

              <div className={styles.fram2}>
                {type === 1 ? (
                  <p className={styles.textHeading2_overviwe}>
                    {ServicesEN.at(2)?.label}
                  </p>
                ) : type === 2 ? (
                  <>
                    <p className={styles.textHeading2_overviwe}>
                      {ServicesEN.at(100)?.label}
                    </p>
                    <p className={styles.textHeading2_overviwe2}>
                      {ServicesEN.at(101)?.label}
                    </p>
                  </>
                ) : type === 3 ? (
                  <div className={styles.textHeading2_overviwe}>
                    <p className={styles.textHeading2_overviwe4}>
                      {ServicesEN.at(116)?.label}
                    </p>
                    {/* <p className={styles.textHeading2_overviwe4}>
                        กระทรวงการต่างประเทศ
                      </p> */}
                    <p className={styles.textHeading2_overviwe3}>
                      {ServicesEN.at(117)?.label}
                    </p>
                  </div>
                ) : type === 4 ? (
                  <p className={styles.textHeading2_overviwe4}>
                    {ServicesEN.at(126)?.label}
                  </p>
                ) : type === 5 ? (
                  <>
                    <p className={styles.textHeading2_overviwe}>
                      {ServicesEN.at(131)?.label}
                    </p>
                    <p className={styles.textHeading2_overviwe3_5}>
                      {ServicesEN.at(132)?.label}
                    </p>
                  </>
                ) : (
                  <>
                    <div className={styles.textHeading2_overviwe}>
                      <p>{ServicesEN.at(145)?.label}</p>
                      {/* <p>(Police Clearance Certificate)</p> */}
                    </div>

                    <p className={styles.textHeading2_overviwe3}>
                      {ServicesEN.at(146)?.label}
                    </p>
                  </>
                )}
              </div>

              {type === 1 ? (
                <div className={styles.fram3}>
                  <div className={styles.detailefram3}>
                    <div className={styles.Boxbtn_fram3}>
                      {typeDoc === 1 ? (
                        <button
                          className={styles.btn_fram3_2}
                          onClick={() => handletypeDoc(1)}
                        >
                          {ServicesEN.at(8)?.label}
                        </button>
                      ) : (
                        <button
                          className={styles.btn_fram3_1}
                          onClick={() => handletypeDoc(1)}
                        >
                          {ServicesEN.at(8)?.label}
                        </button>
                      )}
                      {typeDoc === 2 ? (
                        <button
                          className={styles.btn_fram3_2}
                          onClick={() => handletypeDoc(2)}
                        >
                          {ServicesEN.at(9)?.label}
                        </button>
                      ) : (
                        <button
                          className={styles.btn_fram3_1}
                          onClick={() => handletypeDoc(2)}
                        >
                          {ServicesEN.at(9)?.label}
                        </button>
                      )}
                      {typeDoc === 3 ? (
                        <button
                          className={styles.btn_fram3_2}
                          onClick={() => handletypeDoc(3)}
                        >
                          {ServicesEN.at(10)?.label}
                        </button>
                      ) : (
                        <button
                          className={styles.btn_fram3_1}
                          onClick={() => handletypeDoc(3)}
                        >
                          {ServicesEN.at(10)?.label}
                        </button>
                      )}
                      {typeDoc === 4 ? (
                        <button
                          className={styles.btn_fram3_2}
                          onClick={() => handletypeDoc(4)}
                        >
                          {ServicesEN.at(11)?.label}
                        </button>
                      ) : (
                        <button
                          className={styles.btn_fram3_1}
                          onClick={() => handletypeDoc(4)}
                        >
                          {ServicesEN.at(11)?.label}
                        </button>
                      )}
                    </div>

                    <div className={styles.Indetailefram3}>
                      {typeDoc === 1 ? (
                        <>
                          <div className={styles.Indetailefram3_1}>
                            <ul>
                              <li>
                                <p>{ServicesEN.at(12)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(13)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(14)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(15)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(16)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(17)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(18)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(19)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(20)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(21)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(22)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(23)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(24)?.label}</p>
                              </li>
                            </ul>
                          </div>
                          <div>
                            <ul>
                              <li>
                                <p>{ServicesEN.at(25)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(26)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(27)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(28)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(29)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(30)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(31)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(32)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(33)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(34)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(35)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(36)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(47)?.label}</p>
                              </li>
                            </ul>
                          </div>
                        </>
                      ) : typeDoc === 2 ? (
                        <>
                          <div className={styles.Indetailefram3_1}>
                            <ul>
                              <li>
                                <p>{ServicesEN.at(48)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(49)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(50)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(51)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(52)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(53)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(54)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(55)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(56)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(57)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(58)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(59)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(60)?.label}</p>
                              </li>
                            </ul>
                          </div>
                          <div>
                            <ul>
                              <li>
                                <p>{ServicesEN.at(61)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(62)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(63)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(64)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(65)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(66)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(67)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(68)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(69)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(70)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(71)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(72)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(47)?.label}</p>
                              </li>
                            </ul>
                          </div>
                        </>
                      ) : typeDoc === 3 ? (
                        <>
                          <div className={styles.Indetailefram3_1}>
                            <ul>
                              <li>
                                <p>{ServicesEN.at(75)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(76)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(77)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(78)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(79)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(80)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(81)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(82)?.label}</p>
                              </li>
                            </ul>
                          </div>
                          <div>
                            <ul>
                              <li>
                                <p>{ServicesEN.at(83)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(84)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(85)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(86)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(87)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(88)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(89)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(90)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(47)?.label}</p>
                              </li>
                            </ul>
                          </div>
                        </>
                      ) : (
                        <>
                          <div>
                            <ul>
                              <li>
                                <p>{ServicesEN.at(91)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(92)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(93)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(94)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(95)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(96)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(97)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(98)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(99)?.label}</p>
                              </li>
                              <li>
                                <p>{ServicesEN.at(47)?.label}</p>
                              </li>
                            </ul>
                          </div>
                          <div className={styles.Indetailefram3_2} />
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ) : type === 2 ? (
                <div className={styles.fram3_2}>
                  <div className={styles.detailefram3_2}>
                    <div className={styles.Boxfram3_2}>
                      <div className={styles.Boxdetailefram3_2_1}>
                        <p className={styles.HBoxdetaile3_1}>
                          {ServicesEN.at(102)?.label}
                        </p>
                        <p className={styles.HBoxdetaile3_2}>
                          {ServicesEN.at(103)?.label}
                        </p>
                      </div>

                      <div className={styles.Boxdetailefram3_2_2}>
                        <p className={styles.HBoxdetaile3_1}>
                          {ServicesEN.at(104)?.label}
                        </p>
                        <p className={styles.HBoxdetaile3_2}>
                          {ServicesEN.at(105)?.label}
                        </p>
                      </div>

                      <div className={styles.Boxdetailefram3_2_3}>
                        <p className={styles.HBoxdetaile3_1}>
                          {ServicesEN.at(106)?.label}
                        </p>
                        <p className={styles.HBoxdetaile3_2}>
                          {ServicesEN.at(107)?.label}
                        </p>
                      </div>

                      <div className={styles.Boxdetailefram3_2_2}>
                        <p className={styles.HBoxdetaile3_1}>
                          {ServicesEN.at(108)?.label}
                        </p>
                        <p className={styles.HBoxdetaile3_2}>
                          {ServicesEN.at(109)?.label}
                        </p>
                      </div>
                      <div className={styles.Boxdetailefram3_2_1}>
                        <p className={styles.HBoxdetaile3_1}>
                          {ServicesEN.at(110)?.label}
                        </p>
                        <p className={styles.HBoxdetaile3_2}>
                          {ServicesEN.at(111)?.label}
                        </p>
                      </div>

                      <div className={styles.Boxdetailefram3_2_2}>
                        <p className={styles.HBoxdetaile3_1}>
                          {ServicesEN.at(112)?.label}
                        </p>
                        <p className={styles.HBoxdetaile3_2}>
                          {ServicesEN.at(113)?.label}
                        </p>
                      </div>

                      <div className={styles.Boxdetailefram3_2_1}>
                        <p className={styles.HBoxdetaile3_1}>
                          {ServicesEN.at(114)?.label}
                        </p>
                        <p className={styles.HBoxdetaile3_2}>
                          {ServicesEN.at(115)?.label}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : type === 4 ? (
                <div className={styles.fram3_4}>
                  <div className={styles.detailefram3_4}>
                    <div className={styles.Boxfram3_4}>
                      <p className={styles.HBoxfram3_4_1}>
                        {ServicesEN.at(127)?.label}
                      </p>
                      <p className={styles.HBoxfram3_4_2}>
                        {ServicesEN.at(128)?.label}
                      </p>
                      <div className={styles.ImgBox3_4_1} />

                      <p className={styles.HBoxfram3_4_1}>
                        {ServicesEN.at(129)?.label}
                      </p>
                      <p className={styles.HBoxfram3_4_2}>
                        {ServicesEN.at(130)?.label}
                      </p>
                      <div className={styles.ImgBox3_4_2} />
                    </div>
                  </div>
                </div>
              ) : type === 5 ? (
                <div className={styles.fram3_5}>
                  <div className={styles.detailefram3_5}>
                    <div className={styles.con_detailefram3_5}>
                      <div className={styles.Boxfram3_5}>
                        <div className={styles.ImgBox3_5_1} />
                        {ServicesEN.at(133)?.label}
                        <p></p>
                      </div>

                      <div className={styles.Boxfram3_5}>
                        <div className={styles.ImgBox3_5_2} />
                        <p>{ServicesEN.at(134)?.label}</p>
                      </div>
                      <div className={styles.Boxfram3_5}>
                        <div className={styles.ImgBox3_5_3} />
                        <p> {ServicesEN.at(135)?.label}</p>
                      </div>

                      <div className={styles.Boxfram3_5}>
                        <div className={styles.ImgBox3_5_4} />
                        <p> {ServicesEN.at(136)?.label}</p>
                      </div>
                      <div className={styles.Boxfram3_5}>
                        <div className={styles.ImgBox3_5_5} />
                        <p> {ServicesEN.at(137)?.label}</p>
                      </div>
                      <div className={styles.Boxfram3_5}>
                        <div className={styles.ImgBox3_5_6} />
                        <p>{ServicesEN.at(138)?.label}</p>
                      </div>

                      <div className={styles.Boxfram3_5}>
                        <div className={styles.ImgBox3_5_7} />
                        <p> {ServicesEN.at(139)?.label}</p>
                      </div>
                      <div className={styles.Boxfram3_5}>
                        <div className={styles.ImgBox3_5_8} />
                        <p> {ServicesEN.at(140)?.label}</p>
                      </div>
                      <div className={styles.Boxfram3_5}>
                        <div className={styles.ImgBox3_5_9} />
                        <p>{ServicesEN.at(141)?.label}</p>
                      </div>

                      <div className={styles.Boxfram3_5}>
                        <div className={styles.ImgBox3_5_10} />
                        <p>{ServicesEN.at(142)?.label}</p>
                      </div>
                      <div className={styles.Boxfram3_5}>
                        <div className={styles.ImgBox3_5_11} />
                        <p>{ServicesEN.at(143)?.label}</p>
                      </div>
                      <div className={styles.Boxfram3_5}>
                        <div className={styles.ImgBox3_5_12} />
                        <p>{ServicesEN.at(144)?.label}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : type === 3 ? (
                <>
                  <div className={styles.fram3_3}>
                    <div className={styles.detailefram3_3}>
                      <div className={styles.Boxfram3_3}>
                        <div>
                          <p className={styles.HBoxdetaile3_1}>
                            {" "}
                            {ServicesEN.at(118)?.label}
                          </p>
                          <p className={styles.HBoxdetaile3_3}>
                            {ServicesEN.at(119)?.label}
                          </p>
                        </div>
                        <div className={styles.Imgdetailefram3_3_1} />
                      </div>
                    </div>

                    <div className={styles.detailefram3_3}>
                      <div className={styles.Boxfram3_3}>
                        <div>
                          <p className={styles.HBoxdetaile3_1}>
                            {ServicesEN.at(120)?.label}
                          </p>
                          {/* <p className={styles.HBoxdetaile3_1}>
                              (CERTIFIED TRUE COPY)
                            </p> */}
                          <p className={styles.HBoxdetaile3_3}>
                            {ServicesEN.at(121)?.label}
                          </p>
                        </div>
                        <div className={styles.Imgdetailefram3_3_2} />
                      </div>
                    </div>
                  </div>
                  <p className={styles.textHeading2_overviwe4_2}>
                    {ServicesEN.at(122)?.label}
                  </p>
                  <div className={styles.con_detailefram3_5_2}>
                    <div className={styles.borderBoxfram3_5_2}>
                      <div className={styles.Boxfram3_5_2}>
                        <div className={styles.icon1Boxfram3_3_1} />
                        <p> {ServicesEN.at(123)?.label}</p>
                      </div>
                    </div>

                    <div className={styles.borderBoxfram3_5_2}>
                      <div className={styles.Boxfram3_5_2}>
                        <div className={styles.icon1Boxfram3_3_3} />
                        <p>{ServicesEN.at(124)?.label}</p>
                      </div>
                    </div>

                    <div className={styles.borderBoxfram3_5_2}>
                      <div className={styles.Boxfram3_5_2}>
                        <div className={styles.icon1Boxfram3_3_2} />
                        <p>{ServicesEN.at(125)?.label}</p>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                //type 6
                <div className={styles.fram3_6}>
                  <div className={styles.detailefram3_6}>
                    <div className={styles.Indetailefram3_6}>
                      <p className={styles.H_Indetailefram3_6}>
                        {ServicesEN.at(147)?.label}
                      </p>
                      <div className={styles.setBoxIndetailefram3_6}>
                        <div className={styles.BoxIndetailefram3_6}>
                          <p> {ServicesEN.at(148)?.label}</p>
                        </div>
                        <div className={styles.BoxIndetailefram3_6}>
                          <p> {ServicesEN.at(149)?.label}</p>
                        </div>
                        <div className={styles.BoxIndetailefram3_6}>
                          <p>{ServicesEN.at(150)?.label}</p>
                        </div>
                      </div>
                      <p className={styles.fonttype1}>
                        {ServicesEN.at(151)?.label}
                      </p>
                      <div>
                        <p className={styles.fonttype2}>
                          {ServicesEN.at(152)?.label}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div style={{ width: "100vw" }}>
                <Footer v="English" a={Aoc} />
              </div>
            </>
          )}
        </>
      ) : (
        <>
          <div className={styles.fram1}>
            <div className={styles.boxBlue_overviwe}>
              <p className={styles.h_text1}>Translation Hero Services</p>
              <p className={styles.h_text2}>
                New options to help you translate the language you want.
              </p>
              <div className={styles.set_fram1_button}>
                {type === 1 ? (
                  <button
                    className={styles.btn_fram1_1}
                    onClick={() => handle(1)}
                  >
                    <div className={styles.Imgbtn_btn_fram1_1} />
                    <div className={styles.Inbtn_fram1_1} />
                    <p>เอกสารราชการทั่วไป</p>
                  </button>
                ) : (
                  <button
                    className={styles.btn_fram1_2}
                    onClick={() => handle(1)}
                  >
                    <div className={styles.Imgbtn_btn_fram2_1} />
                    <div className={styles.Inbtn_fram1_2} />
                    <p>เอกสารราชการทั่วไป</p>
                  </button>
                )}

                {type === 2 ? (
                  <button
                    className={styles.btn_fram1_1}
                    onClick={() => handle(2)}
                  >
                    <div className={styles.Imgbtn_btn_fram2_2} />
                    <div className={styles.Inbtn_fram1_1} />
                    <p>การรับรองคำแปลถูกต้อง จากศูนย์แปล</p>
                  </button>
                ) : (
                  <button
                    className={styles.btn_fram1_2}
                    onClick={() => handle(2)}
                  >
                    <div className={styles.Imgbtn_btn_fram1_2} />
                    <div className={styles.Inbtn_fram1_2} />
                    <p>การรับรองคำแปลถูกต้อง จากศูนย์แปล</p>
                  </button>
                )}

                {type === 3 ? (
                  <button
                    className={styles.btn_fram1_1}
                    onClick={() => handle(3)}
                  >
                    <div className={styles.Imgbtn_btn_fram2_3} />
                    <div className={styles.Inbtn_fram1_1} />
                    <p>การรับรองเอกสารจาก กรมการกงสุล</p>
                  </button>
                ) : (
                  <button
                    className={styles.btn_fram1_2}
                    onClick={() => handle(3)}
                  >
                    <div className={styles.Imgbtn_btn_fram1_3} />
                    <div className={styles.Inbtn_fram1_2} />
                    <p>การรับรองเอกสารจาก กรมการกงสุล</p>
                  </button>
                )}

                {type === 4 ? (
                  <button
                    className={styles.btn_fram1_1}
                    onClick={() => handle(4)}
                  >
                    <div className={styles.Imgbtn_btn_fram2_4} />
                    <div className={styles.Inbtn_fram1_1} />
                    <p>การรับรองเอกสาร จากสถานทูต</p>
                  </button>
                ) : (
                  <button
                    className={styles.btn_fram1_2}
                    onClick={() => handle(4)}
                  >
                    <div className={styles.Imgbtn_btn_fram1_4} />
                    <div className={styles.Inbtn_fram1_2} />
                    <p>การรับรองเอกสาร จากสถานทูต</p>
                  </button>
                )}

                {type === 5 ? (
                  <button
                    className={styles.btn_fram1_1}
                    onClick={() => handle(5)}
                  >
                    <div className={styles.Imgbtn_btn_fram2_5} />
                    <div className={styles.Inbtn_fram1_1} />
                    <p>บริการรับรองลายมือชื่อ โดยทนายความ</p>
                  </button>
                ) : (
                  <button
                    className={styles.btn_fram1_2}
                    onClick={() => handle(5)}
                  >
                    <div className={styles.Imgbtn_btn_fram1_5} />
                    <div className={styles.Inbtn_fram1_2} />
                    <p>บริการรับรองลายมือชื่อ โดยทนายความ</p>
                  </button>
                )}
                {type === 6 ? (
                  <button
                    className={styles.btn_fram1_1}
                    onClick={() => handle(6)}
                  >
                    <div className={styles.Imgbtn_btn_fram2_6} />
                    <div className={styles.Inbtn_fram1_1} />
                    <p>บริการยื่นขอหนังสือ รับรองความประพฤติ</p>
                  </button>
                ) : (
                  <button
                    className={styles.btn_fram1_2}
                    onClick={() => handle(6)}
                  >
                    <div className={styles.Imgbtn_btn_fram1_6} />
                    <div className={styles.Inbtn_fram1_2} />
                    <p>บริการยื่นขอหนังสือ รับรองความประพฤติ</p>
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className={styles.fram2}>
            {type === 1 ? (
              <p className={styles.textHeading2_overviwe}>เอกสารราชการทั่วไป</p>
            ) : type === 2 ? (
              <>
                <p className={styles.textHeading2_overviwe}>
                  การรับรองคำแปลถูกต้อง จากศูนย์แปล
                </p>
                <p className={styles.textHeading2_overviwe2}>
                  เอกสารฉบับแปลที่จะต้องนำไปใช้อ้างอิงอย่างเป็นทางการจะต้องมีการรับรองคำแปลเสียก่อน
                  ทั้งนี้ ในการรับรองคำแปลนั้น มีหลากหลายวิธี
                  ขึ้นอยู่กับวัตถุประสงค์การนำเอกสารไปใช้งาน
                </p>
              </>
            ) : type === 3 ? (
              <div className={styles.textHeading2_overviwe}>
                <p className={styles.textHeading2_overviwe4}>
                  บริการรับรองเอกสารกรมการกงสุล
                </p>
                <p className={styles.textHeading2_overviwe4}>
                  กระทรวงการต่างประเทศ
                </p>
                <p className={styles.textHeading2_overviwe3}>
                  เอกสารสำคัญที่จะนำไปใช้อ้างอิงในต่างประเทศจะต้องผ่านการับรองจากกระทรวงการต่างประเทศเสมอจึงจะได้รับการ
                  ยอมรับว่าเป็นเอกสารที่ชอบด้วยกฎหมาย
                  ในขณะที่เอกสารที่ทำในต่างประเทศหรือออกให้โดยทางการต่างประเทศ
                  ต้องแปลเป็นภาษาไทยแล้วนำมาให้กระทรวงการต่างประเทศรับรองทางการไทยจึงจะยอมรับ
                  การรับรองเอกสารตามระเบียบกระทรวงฯปี พ.ศ.2539 มี 3 ประเภท คือ
                  การรับรอง คำแปลภาษาไทยและภาษาอังกฤษการับรองสำเนาถูกต้อง
                  และการรับรองลายมือชื่อ
                </p>
              </div>
            ) : type === 4 ? (
              <p className={styles.textHeading2_overviwe4}>
                บริการรับรองเอกสารกับสถานทูตประเทศต่างๆ
              </p>
            ) : type === 5 ? (
              <>
                <p className={styles.textHeading2_overviwe}>
                  บริการรับรองลายมือชื่อ โดยทนายความ
                </p>
                <p className={styles.textHeading2_overviwe3_5}>
                  เอกสารบางชนิดต้องการการรับรองจากทนายความ
                  มีลักษณะคล้ายกับการรับรองโนตารี่ พับลิค (Notary Public)
                  ของต่างประเทศ
                  การรับรองเอกสารในลักษณะนี้จะต้องดำเนินการโดยทนายความที่ได้รับอนุญาตจากสภาทนายความ
                  เรียกว่า ทนายรับรองเอกสาร ทนายความรับรองลายมือชื่อ หรือ
                  Notarial Services Attorney เพื่อให้สามารถนำเอกสารดังกล่าว
                  ไปใช้ในต่างประเทศได้ โดยทั่วไปจะเป็นการรับรองลายมือชื่อบุคคล
                  รับรองลายมือชื่อกรรมการรับรองลายมือชื่อพยาน รับรองบุคคล
                  รับรองเอกสารบริษัท รับรองสำเนา รับรองคำแปลถูกต้อง
                  รับรองเอกสารโนตารี เป็นต้น
                </p>
              </>
            ) : (
              <>
                <div className={styles.textHeading2_overviwe}>
                  <p>บริการขอหนังสือรับรองความประพฤติ</p>
                  <p>(Police Clearance Certificate)</p>
                </div>

                <p className={styles.textHeading2_overviwe3}>
                  ให้บริการรับปรึกษาการยื่นขอหนังสือรับรองประวัติอาชญากรรม
                  หรือหนังสือรับรองความประพฤติ หรือหนังสือรับรองตำรวจ (Police
                  Clearance Certificate) จากสำนักงานตำรวจแห่งชาติ
                  เพื่อประกอบการทำธุรกรรมต่างๆ เช่น การขอวีซ่า (Visa
                  Application) ต่อวีซ่า (Visa Extension) สมัครงาน สมัครเรียน
                  สมรส ขอมีถิ่นที่อยู่ ขอรับบุตรบุญธรรม เป็นต้น
                </p>
              </>
            )}
          </div>
          {type === 1 ? (
            <div className={styles.fram3}>
              <div className={styles.detailefram3}>
                <div className={styles.Boxbtn_fram3}>
                  {typeDoc === 1 ? (
                    <button
                      className={styles.btn_fram3_2}
                      onClick={() => handletypeDoc(1)}
                    >
                      เอกสารส่วนบุคคล เอกสารราชการ
                    </button>
                  ) : (
                    <button
                      className={styles.btn_fram3_1}
                      onClick={() => handletypeDoc(1)}
                    >
                      เอกสารส่วนบุคคล เอกสารราชการ
                    </button>
                  )}
                  {typeDoc === 2 ? (
                    <button
                      className={styles.btn_fram3_2}
                      onClick={() => handletypeDoc(2)}
                    >
                      เอกสารทางบัญชี-ธุรกิจ
                    </button>
                  ) : (
                    <button
                      className={styles.btn_fram3_1}
                      onClick={() => handletypeDoc(2)}
                    >
                      เอกสารทางบัญชี-ธุรกิจ
                    </button>
                  )}
                  {typeDoc === 3 ? (
                    <button
                      className={styles.btn_fram3_2}
                      onClick={() => handletypeDoc(3)}
                    >
                      เอกสารวิชาการทุกสาขาเฉพาะทาง
                    </button>
                  ) : (
                    <button
                      className={styles.btn_fram3_1}
                      onClick={() => handletypeDoc(3)}
                    >
                      เอกสารวิชาการทุกสาขาเฉพาะทาง
                    </button>
                  )}
                  {typeDoc === 4 ? (
                    <button
                      className={styles.btn_fram3_2}
                      onClick={() => handletypeDoc(4)}
                    >
                      เอกสารทางกฎหมาย
                    </button>
                  ) : (
                    <button
                      className={styles.btn_fram3_1}
                      onClick={() => handletypeDoc(4)}
                    >
                      เอกสารทางกฎหมาย
                    </button>
                  )}
                </div>

                <div className={styles.Indetailefram3}>
                  {typeDoc === 1 ? (
                    <>
                      <div className={styles.Indetailefram3_1}>
                        <ul>
                          <li>
                            <p>บัตรประจำตัวประชาชน</p>
                          </li>
                          <li>
                            <p>ทะเบียนบ้าน</p>
                          </li>
                          <li>
                            <p>สูติบัตร</p>
                          </li>
                          <li>
                            <p>หนังสือสำคัญการเปลี่ยนชื่อ-สกุล</p>
                          </li>
                          <li>
                            <p>หนังสือสำคัญการจัดตั้งนามสกุล</p>
                          </li>
                          <li>
                            <p>หนังสือรับรองการใช้คำนำหน้านาม</p>
                          </li>
                          <li>
                            <p>แบบรับรองรายการทะเบียนราษฎร</p>
                          </li>
                          <li>
                            <p>หนังสือรับรองโสด</p>
                          </li>
                          <li>
                            <p>ทะเบียนสมรส</p>
                          </li>
                          <li>
                            <p>ทะเบียนหย่า</p>
                          </li>
                          <li>
                            <p>ใบสำคัญการหย่า</p>
                          </li>
                          <li>
                            <p>ใบประกาศนียบัตร</p>
                          </li>
                          <li>
                            <p>ใบสำคัญการสมรส</p>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <ul>
                          <li>
                            <p>หนังสือรับรองการอุปการะบุตร</p>
                          </li>
                          <li>
                            <p>หนังสือรับรองสถานที่เกิด</p>
                          </li>
                          <li>
                            <p>หนังสือรับรองบุตรบุญธรรม</p>
                          </li>
                          <li>
                            <p>หนังสือรับรองการปกครองบุตร</p>
                          </li>
                          <li>
                            <p>หนังสือรับรองความประพฤติ</p>
                          </li>
                          <li>
                            <p>มรณบัตร</p>
                          </li>
                          <li>
                            <p>โฉนดที่ดิน</p>
                          </li>
                          <li>
                            <p>ใบอนุญาตขับขี่</p>
                          </li>
                          <li>
                            <p>เอกสารทางการศึกษา</p>
                          </li>
                          <li>
                            <p>ใบแจ้งความ</p>
                          </li>
                          <li>
                            <p>หนังสือเดินทาง</p>
                          </li>
                          <li>
                            <p>ใบรับรองแพทย์</p>
                          </li>
                          <li>
                            <p>อื่นๆ</p>
                          </li>
                        </ul>
                      </div>
                    </>
                  ) : typeDoc === 2 ? (
                    <>
                      <div className={styles.Indetailefram3_1}>
                        <ul>
                          <li>
                            <p>เอกสารทางบัญชี</p>
                          </li>
                          <li>
                            <p>ใบสำคัญหักภาษี ณ ที่จ่าย</p>
                          </li>
                          <li>
                            <p>หนังสือรับรองบริษัท</p>
                          </li>
                          <li>
                            <p>หนังสือรับรองนิติบุคคล</p>
                          </li>
                          <li>
                            <p>ใบเสนอราคา</p>
                          </li>
                          <li>
                            <p>คำบรรยาย/แปลSub-titles</p>
                          </li>
                          <li>
                            <p>คู่มือผลิตภัณฑ์</p>
                          </li>
                          <li>
                            <p>โบรชัวร์</p>
                          </li>
                          <li>
                            <p>เว็บไซต์</p>
                          </li>
                          <li>
                            <p>ใบแจ้งค่าบริการ</p>
                          </li>
                          <li>
                            <p>สิทธิบัตร</p>
                          </li>
                          <li>
                            <p>รายงานการประชุม</p>
                          </li>
                          <li>
                            <p>งานด้านการตลาด</p>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <ul>
                          <li>
                            <p>งบดุล</p>
                          </li>
                          <li>
                            <p>ทะเบียนพาณิชย์</p>
                          </li>
                          <li>
                            <p>หนังสือบริคณห์สนธิ</p>
                          </li>
                          <li>
                            <p>ทะเบียนการค้า</p>
                          </li>
                          <li>
                            <p>ใบแจ้งหนี้</p>
                          </li>
                          <li>
                            <p>ใบปลิว</p>
                          </li>
                          <li>
                            <p>เอกสารรับรองสำหรับองค์กรอาหารและยา(อ.ย)</p>
                          </li>
                          <li>
                            <p>ฉลากผลิตภัณฑ์</p>
                          </li>
                          <li>
                            <p>คลิปวิดีโอสาธิตผลิตภัณฑ์</p>
                          </li>
                          <li>
                            <p>ใบเสร็จรับเงิน</p>
                          </li>
                          <li>
                            <p>หนังสือรับรองลิขสิทธิ์</p>
                          </li>
                          <li>
                            <p>สัญญาจ้างงาน</p>
                          </li>
                          <li>
                            <p>อื่นๆ</p>
                          </li>
                        </ul>
                      </div>
                    </>
                  ) : typeDoc === 3 ? (
                    <>
                      <div className={styles.Indetailefram3_1}>
                        <ul>
                          <li>
                            <p>บทคัดย่อ</p>
                          </li>
                          <li>
                            <p>วิทยานิพนธ์</p>
                          </li>
                          <li>
                            <p>งานทางศาสนา</p>
                          </li>
                          <li>
                            <p>งานทางดนตรี</p>
                          </li>
                          <li>
                            <p>หนังสือ บทกวี</p>
                          </li>
                          <li>
                            <p>งานทางวิศวกรรม</p>
                          </li>
                          <li>
                            <p>งานทางกฏหมาย</p>
                          </li>
                          <li>
                            <p>งานทางการศึกษา</p>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <ul>
                          <li>
                            <p>บทความ</p>
                          </li>
                          <li>
                            <p>งานวิจัย</p>
                          </li>
                          <li>
                            <p>งานทางการแพทย์</p>
                          </li>
                          <li>
                            <p>งานทางบันเทิง</p>
                          </li>
                          <li>
                            <p>งานทางวิทยาศาสตร์</p>
                          </li>
                          <li>
                            <p>งานทางเกษตรกรรม</p>
                          </li>
                          <li>
                            <p>งานทางธุรกิจ-การเงิน</p>
                          </li>
                          <li>
                            <p>งานทางศิลปะ-วัฒนธรรม</p>
                          </li>
                          <li>
                            <p>อื่นๆ</p>
                          </li>
                        </ul>
                      </div>
                    </>
                  ) : (
                    <>
                      <div>
                        <ul>
                          <li>
                            <p>สัญญา</p>
                          </li>
                          <li>
                            <p>สัญญาเช่า</p>
                          </li>
                          <li>
                            <p>สัญญาทางธุรกิจ</p>
                          </li>
                          <li>
                            <p>หนังสือค้ำประกัน</p>
                          </li>
                          <li>
                            <p>ใบแจ้งความ และอื่นๆ</p>
                          </li>
                          <li>
                            <p>สัญญาซื้อขาย</p>
                          </li>
                          <li>
                            <p>สัญญาจ้างงาน</p>
                          </li>
                          <li>
                            <p>หนังสือมอบอำนาจ</p>
                          </li>
                          <li>
                            <p>คำสั่งศาล/คำร้อง/คำฟ้อง</p>
                          </li>
                          <li>
                            <p>อื่นๆ</p>
                          </li>
                        </ul>
                      </div>
                      <div className={styles.Indetailefram3_2} />
                    </>
                  )}
                </div>
              </div>
            </div>
          ) : type === 2 ? (
            <div className={styles.fram3_2}>
              <div className={styles.detailefram3_2}>
                <div className={styles.Boxfram3_2}>
                  <div className={styles.Boxdetailefram3_2_1}>
                    <p className={styles.HBoxdetaile3_1}>
                      รับรองคำแปลถูกต้องจากทางศูนย์แปล
                    </p>
                    <p className={styles.HBoxdetaile3_2}>
                      เพื่อเอาไปขอวีซ่าเข้าประเทศต่างๆ
                      หรือเพื่อประกอบหลักฐานการทำธุรกรรมในต่างประเทศ
                      ที่ไม่ต้องการให้รับรองคำแปลอย่างเป็นทางการมากนัก
                    </p>
                  </div>

                  <div className={styles.Boxdetailefram3_2_2}>
                    <p className={styles.HBoxdetaile3_1}>
                      รับรองคำแปลถูกต้องจากนักแปลที่ขึ้นทะเบียน
                    </p>
                    <p className={styles.HBoxdetaile3_2}>
                      โดยมากมักเป็นการรับรองเพื่อนำเอกสารไปใช้ในการยื่นประมูล
                      หรือประกวดราคา (Bid) กับหน่วยงานราชการไทย
                    </p>
                  </div>

                  <div className={styles.Boxdetailefram3_2_3}>
                    <p className={styles.HBoxdetaile3_1}>
                      รับรองคำแปลโดยนักแปลที่มีคุณสมบัติ (Qualified translator)
                    </p>
                    <p className={styles.HBoxdetaile3_2}>
                      เพื่อเอาไปขอวีซ่าเข้าประเทศต่างๆ
                      หรือเพื่อประกอบหลักฐานกากรณีนี้มักเป็นระเบียบของหน่วยงานราชการไทยที่จะต้องให้นักแปล
                      ประเภทนี้รับรองเอกสารโดยมากมักเป็นผู้แปลที่จบทางการด้านภาษามาโดยตรงหรืออาจารย์มหาวิทยาลัย
                      หรือผู้ที่จบการศึกษา มาจากต่างประเทศ
                      เป็นต้นรทำธุรกรรมในต่างประเทศที่ไม่ต้องการให้รับรองคำแปลอย่างเป็นทางการมากนัก
                    </p>
                  </div>

                  <div className={styles.Boxdetailefram3_2_2}>
                    <p className={styles.HBoxdetaile3_1}>
                      รับรองคำแปลโดยนักแปลขึ้นทะเบียนหรือนักแปลสาบานตนกับสถานทูต
                    </p>
                    <p className={styles.HBoxdetaile3_2}>
                      สถานทูตของบางประเทศจะกำหนดให้นักแปลที่ขึ้นทะเบียนกับสถานทูตแล้วเท่านั้นเป็นผู้รับรองคำแปล
                      โดยมากมักเป็นสถานทูตของประเทศแถบยุโรป เช่น สถานทูตฝรั่งเศส
                      สถานทูตเยอรมัน สถานทูตออสเตรีย เป็นต้น
                    </p>
                  </div>
                  <div className={styles.Boxdetailefram3_2_1}>
                    <p className={styles.HBoxdetaile3_1}>
                      รับรองคำแปลโดยทนายความรับรองเอกสาร
                    </p>
                    <p className={styles.HBoxdetaile3_2}>
                      หรือที่เรียกว่า Notarial Services Attorney
                      ซึ่งมีลักษณะคล้ายกับการรับรองโนตารีในต่างประเทศ
                    </p>
                  </div>

                  <div className={styles.Boxdetailefram3_2_2}>
                    <p className={styles.HBoxdetaile3_1}>
                      รับรองคำแปลโดยกรมการกงสุล กระทรวงการต่างประเทศ
                    </p>
                    <p className={styles.HBoxdetaile3_2}>
                      หรือที่เรียกว่า Legalization
                      เป็นการรรับรองคำแปลเอกสารจากหน่วยงานราชการไทย
                      ที่จะต้องนำไปเอกสารไปใช้อ้างอิงในต่างประเทศ
                    </p>
                  </div>

                  <div className={styles.Boxdetailefram3_2_1}>
                    <p className={styles.HBoxdetaile3_1}>
                      รับรองคำแปลโดยทนายความรับรองเอกสาร
                    </p>
                    <p className={styles.HBoxdetaile3_2}>
                      หรือที่เรียกว่า Notarial Services Attorney
                      ซึ่งมีลักษณะคล้ายกับการรับรองโนตารีในต่างประเทศ
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : type === 4 ? (
            <div className={styles.fram3_4}>
              <div className={styles.detailefram3_4}>
                <div className={styles.Boxfram3_4}>
                  <p className={styles.HBoxfram3_4_1}>
                    เอกสารที่ออกให้จากต่างประเทศต้องการนำมาใช้ในประเทศไทย
                  </p>
                  <p className={styles.HBoxfram3_4_2}>
                    เช่น สูติบัตร ใบสำคัญการสมรส สมรสทะเบียนสมรส ใบสำคัญการหย่า
                    ทะเบียนหย่า ฯลฯ หากท่านจะนำมาใช้ในประเทศไทย
                    เอกสารนั้นจะต้องผ่านการรับรองจากจากสถานทูตของประเทศนั้นๆ
                    ในประเทศไทยก่อน หรือ กงสุลไทยในประเทศที่ออกเอกสารนั้น
                    จึงจะสามารถนำมาแปลเป็นภาษาไทยและนำไปรับรองที่กรมการกงสุล
                    กระทรวงการต่างประเทศได้ เอกสารที่ผ่านการรับรองนิติกรณ์
                    (Legalization) จากกรมการกงสุลแล้ว
                    ถือเป็นเอกสารที่ชอบด้วยกฎหมายสามารถนำไป ยื่นขอจดทะเบียน
                    และทำธุรกรรมต่างๆ ที่สำนักงานเขตหรืออำเภอได้
                  </p>
                  <div className={styles.ImgBox3_4_1} />

                  <p className={styles.HBoxfram3_4_1}>
                    เอกสารที่ออกให้จากประเทศไทย ต้องการนำไปใช้ที่ต่างประเทศ
                  </p>
                  <p className={styles.HBoxfram3_4_2}>
                    เอกสารที่ออกโดยราชการ เช่น สูติบัตร ทะเบียนบ้าน
                    หนังสือรับรองโสด ใบสำคัญการสมรส ใบสำคัญการหย่า ฯลฯ
                    นำเอกสารที่ต้องการใช้ ทำการแปล
                    พร้อมมีลายเซ็นกำกับคำแปลถูกต้องจากผู้เชี่ยวชาญ
                    แล้วจึงนำไปรับรองนิติกรณ์ (Legalization)ที่กรมการกงสุล
                    กระทรวงการต่างประเทศในไทย
                    เมื่อได้รับการรับรองจากกระทรวงฯแล้วจึงจะสามารถนำ
                    เอกสารนั้นๆไปใช้ในต่างประเทศได้
                    เว้นแต่ในบางประเทศที่จะต้องนำเอกสารไปรับรองเพิ่มเติมที่สถานทูตของประเทศนั้นๆ
                    ที่ตั้งอยู่ในประเทศไทย (เช่น ประเทศจีน เช็ค ฟินแลนด์ เยอรมนี
                    อิตาลี เป็นต้น) จึงจะสามารถนำเอกสารไปใช้ได้ตามกฎหมาย
                  </p>
                  <div className={styles.ImgBox3_4_2} />
                </div>
              </div>
            </div>
          ) : type === 5 ? (
            <div className={styles.fram3_5}>
              <div className={styles.detailefram3_5}>
                <div className={styles.con_detailefram3_5}>
                  <div className={styles.Boxfram3_5}>
                    <div className={styles.ImgBox3_5_1} />
                    <p>รับรองเอกสารเพื่อใช้ในต่างประเทศ</p>
                  </div>

                  <div className={styles.Boxfram3_5}>
                    <div className={styles.ImgBox3_5_2} />
                    <p>
                      รับรองเอกสาร รับรองใบสมัคร เพื่อเรียนต่อต่างประเทศ
                      (Affidavit of support /Sponsor Notarization)
                    </p>
                  </div>
                  <div className={styles.Boxfram3_5}>
                    <div className={styles.ImgBox3_5_3} />
                    <p>รับรองสำเนาเอกสาร (Certified true copy)</p>
                  </div>

                  <div className={styles.Boxfram3_5}>
                    <div className={styles.ImgBox3_5_4} />
                    <p>รับรองสถานะการเงิน (Statement notarization)</p>
                  </div>
                  <div className={styles.Boxfram3_5}>
                    <div className={styles.ImgBox3_5_5} />
                    <p>รับรองคำแปลเอกสาร (Certified correct translation)</p>
                  </div>
                  <div className={styles.Boxfram3_5}>
                    <div className={styles.ImgBox3_5_6} />
                    <p>
                      รับรองลายมือชื่อ บุคคล กรรมการนิติบุคคล บริษัทจำกัด
                      บริษัทมหาช (Signature notarization and Legalization)
                    </p>
                  </div>

                  <div className={styles.Boxfram3_5}>
                    <div className={styles.ImgBox3_5_7} />
                    <p>รับรองข้อเท็จจริง (Marine protest notary public)</p>
                  </div>
                  <div className={styles.Boxfram3_5}>
                    <div className={styles.ImgBox3_5_8} />
                    <p>รับรองความมีอยู่จริงของเอกสาร (Existence of Document)</p>
                  </div>
                  <div className={styles.Boxfram3_5}>
                    <div className={styles.ImgBox3_5_9} />
                    <p>
                      รับรองการทำสัญญาระหว่างเอกชน (Contract agreement notary
                      public)
                    </p>
                  </div>

                  <div className={styles.Boxfram3_5}>
                    <div className={styles.ImgBox3_5_10} />
                    <p>รับรองคำสาบาน (Applicant declaration)</p>
                  </div>
                  <div className={styles.Boxfram3_5}>
                    <div className={styles.ImgBox3_5_11} />
                    <p>รับรองคำให้การ (Declaration notary public)</p>
                  </div>
                  <div className={styles.Boxfram3_5}>
                    <div className={styles.ImgBox3_5_12} />
                    <p>
                      รับรองหนังสืออนุญาตจากผู้ปกครอง (Letter of authorization
                      for travel)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : type === 3 ? (
            <>
              <div className={styles.fram3_3}>
                <div className={styles.detailefram3_3}>
                  <div className={styles.Boxfram3_3}>
                    <div>
                      <p className={styles.HBoxdetaile3_1}>การรับรองเอกสาร</p>
                      <p className={styles.HBoxdetaile3_3}>
                        การรับรองคำแปล กรมการกงสุลไทย
                        จะรับรองเฉพาะคำแปลของเอกสารภาษาไทยเป็นภาษาอังกฤษ/หรือภาษาอังกฤษเป็น
                        ภาษาไทยเท่านั้น สำหรับภาษาต่างประเทศอื่น ๆ เช่น
                        ภาษาเยอรมัน ฝรั่งเศส สถานเอกอัครราชทูตฯ
                        เจ้าของภาษาจะเป็น ผู้แปลภาษาอังกฤษหรือภาษาไทย
                        และรับรองคำแปลนั้น ทั้งนี้ กระทรวงฯ
                        จะรับรองคำแปลเฉพาะที่แปลจากเอกสารต้นฉบับที่
                        ทางการไทยหรือทางการต่าง ประเทศออกให้
                        หรือรับรองให้เท่านั้นนอกจากนี้การแปลควรจะต้องให้คงรูปแบบให้มากที่สุด
                        ครบถ้วน และถูกต้องในรายละเอียด รวมทั้งขอให้ผู้แปลลงนาม
                        รับรองคำแปลถูกต้อง และพิมพ์ชื่อสกุลอย่างชัดเจน
                        โดยควรให้นักแปลอาชีพที่มีความเชี่ยวชาญด้านภาษาเป็นผู้แปลเพื่อความถูกต้องและ
                        ไม่ถูกปฏิเสธเมื่อนำไปใช้ในต่างประเทศ
                      </p>
                    </div>
                    <div className={styles.Imgdetailefram3_3_1} />
                  </div>
                </div>

                <div className={styles.detailefram3_3}>
                  <div className={styles.Boxfram3_3}>
                    <div>
                      <p className={styles.HBoxdetaile3_1}>
                        การรับรองสำเนาถูกต้อง
                      </p>
                      <p className={styles.HBoxdetaile3_1}>
                        (CERTIFIED TRUE COPY)
                      </p>
                      <p className={styles.HBoxdetaile3_3}>
                        กระทรวงฯ
                        จะรับรองเฉพาะเอกสารที่ทางราชการไทยออกให้เท่านั้น
                        การยื่นเรื่องให้รับรอง
                        ต้องมีเอกสารต้นฉบับพร้อมถ่ายสำเนาอีก 1 ชุด
                        หากต้องมากกว่า 1 ชุด ก็สามารถกระทำได้
                        โดยชำระค่าธรรมเนียมเพิ่ม
                      </p>
                    </div>
                    <div className={styles.Imgdetailefram3_3_2} />
                  </div>
                </div>
              </div>
              <p className={styles.textHeading2_overviwe4_2}>
                รับรองเอกสารราชการ
              </p>
              <div className={styles.con_detailefram3_5_2}>
                <div className={styles.borderBoxfram3_5_2}>
                  <div className={styles.Boxfram3_5_2}>
                    <div className={styles.icon1Boxfram3_3_1} />
                    <p>การรับรองลายมือชื่อบุคคล</p>
                  </div>
                </div>

                <div className={styles.borderBoxfram3_5_2}>
                  <div className={styles.Boxfram3_5_2}>
                    <div className={styles.icon1Boxfram3_3_3} />
                    <p>
                      การรับรองลายมือชื่อเจ้าหน้าที่ ผู้มีอำนาจลงนามเอกสาร
                      ต้องใช้เอกสารต้นฉบับ
                    </p>
                  </div>
                </div>

                <div className={styles.borderBoxfram3_5_2}>
                  <div className={styles.Boxfram3_5_2}>
                    <div className={styles.icon1Boxfram3_3_2} />
                    <p>
                      การรับรองลายมือชื่อบุคคลในฐานะ เจ้าของเอกสารและ หรือในฐานะ
                      ผู้มีอำนาจลงนามแทนนิติบุคคล
                    </p>
                  </div>
                </div>
              </div>
            </>
          ) : (
            //type 6
            <div className={styles.fram3_6}>
              <div className={styles.detailefram3_6}>
                <div className={styles.Indetailefram3_6}>
                  <p className={styles.H_Indetailefram3_6}>
                    ขอบข่ายการให้บริการ
                  </p>
                  <div className={styles.setBoxIndetailefram3_6}>
                    <div className={styles.BoxIndetailefram3_6}>
                      <p>ตรวจสอบประวัติอาชญากรรม</p>
                    </div>
                    <div className={styles.BoxIndetailefram3_6}>
                      <p>ออกหนังสือรับรอง ประวัติจากสำนักงาน ตำรวจแห่งชาติ</p>
                    </div>
                    <div className={styles.BoxIndetailefram3_6}>
                      <p>จัดส่งเอกสารมาทางอีเมล์ หรือทางไลน์</p>
                    </div>
                  </div>
                  <p className={styles.fonttype1}>
                    ขั้นตอนการให้บริการครอบคลุมตั้งแต่การยื่นคำขอหนังสือรับรองประวัติอาชญากรรม
                    และจัดส่งเอกสารคืนท่านทางไปรษณีย์ EMS หรือ DHL
                  </p>
                  <div>
                    <p className={styles.fonttype2}>
                      นอกจากบริการรับปรึกษาการขอใบรับรองความประพฤติ/ใบรับรองประวัติอาชญากรรมแล้ว
                      เรายังให้บริการเดินเรื่องรับรองเอกสารกับกรมการกงสุล
                      กระทรวงการต่างประเทศ ถนนแจ้งวัฒนะ
                      รวมถึงรับรองกับสถานทูตของประเทศที่จะนำเอกสารไปใช้ด้วย
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div style={{ width: "100vw" }}>
            <Footer v="English" a={Aoc} />
          </div>
        </>
      )}
    </>
  );
};
export default FAQs;
