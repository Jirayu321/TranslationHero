import React from "react";
import Navbars from "../Navbar/navbarHome";
import Footer from "../Footer/Footer.jsx";

import { useNavigate, useLocation } from "react-router-dom";

import styles from "./Services.module.css";

const Services_general = () => {
  const location = useLocation();
  const navigate = useNavigate();

  let Doc = location?.state?.languages;
  let Aoc = location?.state?.accept;
  const { innerWidth: width } = window;

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

      {width > 768 ? (
        <>
          <div className={styles.fram1_general}>
            <div className={styles.boxBlue_overviwe}>
              <p className={styles.h_text1}>Translation Hero Services</p>
              <p className={styles.h_text2}>
                New options to help you translate the language you want.
              </p>
            </div>
          </div>

          <div className={styles.fram2}>
            <p className={styles.textHeading2_overviwe}>บริการงานแปลทั่วไป</p>
          </div>

          <div className={styles.fram3_7}>
            <div className={styles.detailefram_general}>
              <div className={styles.Boxfram3_3}>
                <div>
                  <p className={styles.HBoxdetaile3_1}>General Document</p>
                  <p className={styles.HBoxdetaile3_1}>Translation Service</p>
                  <p className={styles.HBoxdetaile_general}>
                    รับแปลเอกสารทั่วไป เช่น นิตยสาร วาสร บทความต่างๆ วิทยานิพนธ์
                    เล่มจบ บทความจากสื่อ หนังสือพิมพ์ เป็นต้น
                  </p>
                </div>
                <div className={styles.Imggeneral1} />
              </div>
            </div>

            <div className={styles.detailefram_general}>
              <div className={styles.Boxfram3_3}>
                <div className={styles.Imggeneral2} />
                <div>
                  <p className={styles.HBoxdetaile3_1}>Content Generation</p>
                  <p className={styles.HBoxdetaile_general}>
                    รับแปล / สร้างคอนเทนท์ ที่เกี่ยวกับสื่อหรือความหมายต่างๆ
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.detailefram_general}>
              <div className={styles.Boxfram3_3}>
                <div>
                  <p className={styles.HBoxdetaile3_1}>Youtube Subtitle</p>
                  <p className={styles.HBoxdetaile3_1}>Translation Service</p>
                  <p className={styles.HBoxdetaile_general}>
                    รับแปลซับไตเติ้ลยูทูป แปลข้อความ / บทพูดในคลิปยูทูป
                  </p>
                </div>
                <div className={styles.Imggeneral3} />
              </div>
            </div>

            <div className={styles.detailefram_general}>
              <div className={styles.Boxfram3_3}>
                <div className={styles.Imggeneral4} />
                <div>
                  <p className={styles.HBoxdetaile3_1}>Website Localization</p>
                  <p className={styles.HBoxdetaile3_1}>Service</p>
                  <p className={styles.HBoxdetaile_general}>
                    รับแปลเว็บไซต์ต่างๆ ให้เป็นภาษาที่ต้องการ
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.detailefram_general}>
              <div className={styles.Boxfram3_3}>
                <div>
                  <p className={styles.HBoxdetaile3_1}>Google Ads Campaign</p>
                  <p className={styles.HBoxdetaile3_1}>Localization Service</p>
                  <p className={styles.HBoxdetaile_general}>
                    รับแปล Google Ads หรือแคมเปญต่างๆให้เป็นภาษาที่ต้องการ
                  </p>
                </div>
                <div className={styles.Imggeneral5} />
              </div>
            </div>
          </div>

          <div style={{ width: "100vw" }}>
            <Footer v="English" a={Aoc} />
          </div>
        </>
      ) : (
        <>
          <div className={styles.fram1_general}>
            <div className={styles.boxBlue_overviwe}>
              <p className={styles.h_text1}>Translation Hero</p>
              <p className={styles.h_text1}>Services</p>
              <p className={styles.h_text2}>
                New options to help you translate the language you want.
              </p>
            </div>
          </div>

          <div className={styles.fram2}>
            <p className={styles.textHeading2_overviwe}>บริการงานแปลทั่วไป</p>
          </div>

          <div className={styles.fram3_7}>
            <div className={styles.detailefram_general}>
              <div className={styles.Boxfram3_3}>
                <div>
                  <p className={styles.HBoxdetaile3_1}>General Document</p>
                  <p className={styles.HBoxdetaile3_1}>Translation Service</p>
                  <p className={styles.HBoxdetaile_general}>
                    รับแปลเอกสารทั่วไป เช่น นิตยสาร วาสร บทความต่างๆ วิทยานิพนธ์
                    เล่มจบ บทความจากสื่อ หนังสือพิมพ์ เป็นต้น
                  </p>
                </div>
                <div className={styles.Imggeneral1} />
              </div>
            </div>

            <div className={styles.detailefram_general}>
              <div className={styles.Boxfram3_3}>
                <div>
                  <p className={styles.HBoxdetaile3_1}>Content Generation</p>
                  <p className={styles.HBoxdetaile_general}>
                    รับแปล / สร้างคอนเทนท์ ที่เกี่ยวกับสื่อหรือความหมายต่างๆ
                  </p>
                </div>
                <div className={styles.Imggeneral2} />
              </div>
            </div>

            <div className={styles.detailefram_general}>
              <div className={styles.Boxfram3_3}>
                <div>
                  <p className={styles.HBoxdetaile3_1}>Youtube Subtitle</p>
                  <p className={styles.HBoxdetaile3_1}>Translation Service</p>
                  <p className={styles.HBoxdetaile_general}>
                    รับแปลซับไตเติ้ลยูทูป แปลข้อความ / บทพูดในคลิปยูทูป
                  </p>
                </div>
                <div className={styles.Imggeneral3} />
              </div>
            </div>

            <div className={styles.detailefram_general}>
              <div className={styles.Boxfram3_3}>
                <div>
                  <p className={styles.HBoxdetaile3_1}>Website Localization</p>
                  <p className={styles.HBoxdetaile3_1}>Service</p>
                  <p className={styles.HBoxdetaile_general}>
                    รับแปลเว็บไซต์ต่างๆ ให้เป็นภาษาที่ต้องการ
                  </p>
                </div>
                <div className={styles.Imggeneral4} />
              </div>
            </div>

            <div className={styles.detailefram_general}>
              <div className={styles.Boxfram3_3}>
                <div>
                  <p className={styles.HBoxdetaile3_1}>Google Ads Campaign</p>
                  <p className={styles.HBoxdetaile3_1}>Localization Service</p>
                  <p className={styles.HBoxdetaile_general}>
                    รับแปล Google Ads หรือแคมเปญต่างๆให้เป็นภาษาที่ต้องการ
                  </p>
                </div>
                <div className={styles.Imggeneral5} />
              </div>
            </div>
          </div>

          <div style={{ width: "100vw" }}>
            <Footer v="English" a={Aoc} />
          </div>
        </>
      )}
    </>
  );
};
export default Services_general;
