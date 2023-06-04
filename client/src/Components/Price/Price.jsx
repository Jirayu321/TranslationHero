import React from "react";
import Navbars from "../Navbar/navbarHome";
import Footer from "../Footer/Footer";

import { useNavigate, useLocation } from "react-router-dom";

import Mask from "../../Images/Mask.png";
import styles from "./Price.module.css";

const Price = () => {
  const location = useLocation();
  const navigate = useNavigate();

  let Doc = location?.state?.languages;
  let Aoc = location?.state?.accept;

  const [type, setType] = React.useState(1);
  const [typeDoc, setTypeDoc] = React.useState(1);

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
      default:
        setTypeDoc(1);
    }
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
        <div className={styles.fram1}>
          <div className={styles.boxBlue_overviwe}>
            <p className={styles.h_text1}>
              การประเมินราคาและขั้นตอน การสั่งแปล
            </p>
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
                  <p>ขั้นตอนการดำเนินการแปล</p>
                </button>
              ) : (
                <button
                  className={styles.btn_fram1_2}
                  onClick={() => handle(1)}
                >
                  <div className={styles.Imgbtn_btn_fram2_1} />
                  <div className={styles.Inbtn_fram1_2} />
                  <p>ขั้นตอนการดำเนินการแปล</p>
                </button>
              )}

              {type === 2 ? (
                <button
                  className={styles.btn_fram1_1}
                  onClick={() => handle(2)}
                >
                  <div className={styles.Imgbtn_btn_fram2_2} />
                  <div className={styles.Inbtn_fram1_1} />
                  <p>ขั้นตอนการประเมินราคา</p>
                </button>
              ) : (
                <button
                  className={styles.btn_fram1_2}
                  onClick={() => handle(2)}
                >
                  <div className={styles.Imgbtn_btn_fram1_2} />
                  <div className={styles.Inbtn_fram1_2} />
                  <p>ขั้นตอนการประเมินราคา</p>
                </button>
              )}
            </div>
          </div>
        </div>

        <div className={styles.fram2}>
          {type === 1 ? (
            <p className={styles.textHeading2_overviwe}></p>
          ) : (
            <>
              <p className={styles.textHeading2_overviwe}>
                ขั้นตอนการประเมินราคา
              </p>
              <p className={styles.textHeading2_overviwe3_5}>
                การประเมินราคาการแปล ขึ้นอยู่กับชิ้นงานหรือประเภทงานแปลนั้นๆ
                อีกทั้งยังมีเซอร์วิสต่างจากนักแปล
                ซึ่งราคาและขั้นตอนจะแตกต่างกันไปแล้วแต่นักแปลที่ท่านเลือก
              </p>
            </>
          )}
        </div>

        {type === 1 ? (
          <div className={styles.fram3}>
            <div className={styles.detailefram3}>
              <div className={styles.Boxbtn_fram3}>
                <div className={styles.btn_fram3_2}>
                  <img src={Mask} alt="Mask" />
                </div>
                <div className={styles.bodertell} />
              </div>

              <div className={styles.Indetailefram3}>
                <>
                  <div className={styles.Indetailefram3_1}>
                    <p className={styles.textIndetailefram3_2}>
                      1.เลือกประเภทเอกสารที่ต้องการแปล
                    </p>
                  </div>
                  <div className={styles.boderbox} />
                  <div>
                    <p className={styles.textIndetailefram3_1}>
                      ประเภทเอกสารราชการ เช่น ใบเกิด ใบสมรส ทะเบียนบ้าน เป็นต้น
                      ประเภททั่วไป เช่น วิทยานิพนธ์ บทหนัง ซับไตเติ้ลต่างๆ
                    </p>
                  </div>
                </>
              </div>
            </div>

            <div className={styles.detailefram3}>
              <div className={styles.Boxbtn_fram3}>
                <div className={styles.btn_fram3_2}>
                  <img src={Mask} alt="Mask" />
                </div>
                <div className={styles.bodertell} />
              </div>

              <div className={styles.Indetailefram3}>
                <>
                  <div className={styles.Indetailefram3_1}>
                    <p className={styles.textIndetailefram3_2}>
                      2.จับคู่นักแปล
                    </p>
                  </div>
                  <div className={styles.boderbox} />
                  <div>
                    <p className={styles.textIndetailefram3_1}>
                      ระบบจะจับคู่นักแปลที่เหมาะสมกับงานให้ผู้ใช้ได้เลือก
                      โดยนักแปล จะมีเรทดาวและความสามารถ
                      ในการแปลแสดงให้อยู่ที่หน้าโปรไฟล์
                    </p>
                  </div>
                </>
              </div>
            </div>

            <div className={styles.detailefram3}>
              <div className={styles.Boxbtn_fram3}>
                <div className={styles.btn_fram3_2}>
                  <img src={Mask} alt="Mask" />
                </div>
                <div className={styles.bodertell} />
              </div>

              <div className={styles.Indetailefram3}>
                <>
                  <div className={styles.Indetailefram3_1}>
                    <p className={styles.textIndetailefram3_2}>
                      3.ดำเนินการแปล
                    </p>
                  </div>
                  <div className={styles.boderbox} />
                  <div>
                    <p className={styles.textIndetailefram3_1}>
                      เมื่อผู้ใช้ทำการชำระเงินเสร็จแล้ว
                      นักแปลจะเริ่มดำเนินการแปล โดยจะมีระยะเวลาในการส่งงานตาม
                      ที่ผู้ใช้กับนักแปลได้ตกลงกัน
                    </p>
                  </div>
                </>
              </div>
            </div>

            <div className={styles.detailefram3}>
              <div className={styles.Boxbtn_fram3}>
                <div className={styles.btn_fram3_2}>
                  <img src={Mask} alt="Mask" />
                </div>
              </div>

              <div className={styles.Indetailefram3}>
                <>
                  <div className={styles.Indetailefram3_1}>
                    <p className={styles.textIndetailefram3_2}>
                      4.ส่งงานแปลให้ลูกค้า
                    </p>
                  </div>
                  <div className={styles.boderbox} />
                  <div>
                    <p className={styles.textIndetailefram3_1}>
                      เมื่อถึงระยะเวลาส่งงานนักแปลจะส่งมอบงานแปลให้กับผู้ใช้ได้
                      ตรวจสอบข้อมูลและผู้ใช้สามารถ ดาวน์โหลดงานแปลออกไปได้
                    </p>
                  </div>
                </>
              </div>
            </div>
          </div>
        ) : (
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
                    รับรองหนังสืออนุญาตจากผู้ปกครอง (Letter of authorization for
                    travel)
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
    </>
  );
};
export default Price;
