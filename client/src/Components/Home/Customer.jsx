import * as React from "react";

import emailjs from "@emailjs/browser";
import Navbars from "../Navbar/navbarHome";
import Footer from "../Footer/Footer.jsx";
import { useNavigate, useLocation } from "react-router-dom";

import { data, data2, data3, data4, data5 } from "../Data/data";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import {
  IconButton,
  Input,
  TextField,
  Autocomplete,
  Box,
  FormControlLabel,
  Checkbox,
  Stack,
  Modal,
  Typography,
  InputAdornment,
  Badge,
  Alert,
  Collapse,
  AlertTitle,
} from "@mui/material";
import { styled } from "@mui/material/styles";

import EventIcon from "@mui/icons-material/Event";
import CloseIcon from "@mui/icons-material/Close";

import { FaUserCircle } from "react-icons/fa";
import { MdArrowDropDown } from "react-icons/md";
import { RiDeleteBin5Fill } from "react-icons/ri";
import {
  IoMdAddCircleOutline,
  IoIosArrowBack,
  IoIosArrowForward,
} from "react-icons/io";

// import Cards from "./Cards.js";

import Logo from "../../logo.svg";
import Fileimg from "../../Images/file.png";
import languages from "../../Images/languages.png";
import rating from "../../Images/Rating.png";
import skills from "../../Images/skills.png";
import card from "../../Images/card.png";
import MobileBanking from "../../Images/MobileBanking.png";
// import Gpay from "../../Images/Gpay.png";
import Gpay2 from "../../Images/Gpay2.png";
import Promptpay from "../../Images/Promptpay.png";

import {
  CustomerEN,
  //  CustomerDE,
  //  CustomerTH
} from "../Data/DataLanguage";

// card
import Card from "react-credit-cards-2";
import Payment from "payment";
import "react-credit-cards-2/dist/es/styles-compiled.css";

import styles from "./Customer.module.css";

const Customer = () => {
  const { innerWidth: width } = window;
  const location = useLocation();
  const navigate = useNavigate();
  let Doc = location?.state?.languages;

  const [promo, setPromo] = React.useState(""); //Promo code คือเปิดตัวด้านล่าง

  function getCurrentDate() {
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    const year = date.getFullYear();

    if (day < 10) day = `0${day}`;
    if (month < 10) month = `0${month}`;

    return `${month}/${day}/${year}`;
  }

  const [from, setFrom] = React.useState({
    file: "",
    document_Type: null,
    translation_Type: null,
    tranfrom: null,
    tranto: null,
    Deadline: getCurrentDate(),
    Additional_explanation: "",
    type: null,
    Price: generatePrice(),
    orderNumber: "",
  });

  const [from2, setFrom2] = React.useState({
    file: "",
    document_Type: null,
    translation_Type: null,
    tranfrom: null,
    tranto: null,
    Deadline: getCurrentDate(),
    Additional_explanation: "",
    type: null,
    Price: generatePrice(),
    orderNumber: "",
  });

  const [groupData, setGroupData] = React.useState(null); //เก็บข้อมูลทั้งหมดที่เราเพิ่มเข้ามา

  const [deleteData, setDelete] = React.useState(false);
  const [page, setPage] = React.useState(1);

  let count = groupData?.length; //นับจำนวนข้อมูลทั้งหมดที่เราเพิ่มเข้ามา
  let count2 = groupData?.length + 1; //นับจำนวนข้อมูลทั้งหมดที่เราเพิ่มเข้ามา

  const [checked, setChecked] = React.useState({
    checked1: false,
    checked2: false,
    checked3: false,
    checked4: false,
    checked5: false,
  });
  const [open, setOpen] = React.useState(false); // alert
  const [openDatePicker, setOpenDatePicker] = React.useState(false);

  const [openModel, setopenModel] = React.useState({
    openModel1: false,
    openModel2: false,
    openModel3: false,
    openModel4: false,
    openModel5: false,
  });

  const [choose, setChoose] = React.useState(false);
  const [email, setEmail] = React.useState("");

  React.useEffect(() => {
    if (groupData === null) {
      console.log("Data:", groupData);
    } else {
      console.log("say hi");
    }
  }, [groupData]);

  const handleDateChange = (date) => {
    setFrom((prevFrom) => ({
      ...prevFrom,
      Deadline: date,
    }));
  };

  function chagngeDataPage(x, y) {
    console.log("x:", x, "y:", y, "groupData:", groupData);
    if (groupData !== null) {
      let index = x - 1;
      let file = groupData[index]?.file;
      let document_Type = groupData[index]?.document_Type;
      let translation_Type = groupData[index]?.translation_Type;
      let tranfrom = groupData[index]?.tranfrom;
      let tranto = groupData[index]?.tranto;
      let Deadline = groupData[index]?.Deadline;
      let Additional_explanation = groupData[index]?.Additional_explanation;
      if (y === 1) {
        setFrom({
          file: "",
          document_Type: "",
          translation_Type: "",
          tranfrom: "",
          tranto: "",
          Deadline: getCurrentDate(),
          Additional_explanation: "",
          type: "",
          Price: "",
        });
        setPage(x);
      } else {
        setFrom2({
          file: from.file,
          document_Type: from.document_Type,
          translation_Type: from.translation_Type,
          tranfrom: from.tranfrom,
          tranto: from.tranto,
          Deadline: from.Deadline,
          Additional_explanation: from.Additional_explanation,
          type: "",
          Price: "",
          orderNumber: "",
        });
        if (typeof translation_Type !== "undefined") {
          console.log("dddd", typeof translation_Type);
          setFrom({
            file: file,
            document_Type: document_Type,
            translation_Type: translation_Type,
            tranfrom: tranfrom,
            tranto: tranto,
            Deadline: Deadline,
            Additional_explanation: Additional_explanation,
            type: "",
            Price: "",
            orderNumber: "",
          });
        } else {
          if (typeof from2.translation_Type !== "undefined") {
            console.log("8888");
            setFrom({
              file: from2.file,
              document_Type: from2.document_Type,
              translation_Type: from2.translation_Type,
              tranfrom: from2.tranfrom,
              tranto: from2.tranto,
              Deadline: from2.Deadline,
              Additional_explanation: from2.Additional_explanation,
              type: "",
              Price: "",
              orderNumber: "",
            });
          } else {
            setFrom({
              file: "",
              document_Type: "",
              translation_Type: "",
              tranfrom: "",
              tranto: "",
              Deadline: getCurrentDate(),
              Additional_explanation: "",
              type: "",
              Price: "",
              orderNumber: "",
            });
          }
        }
        setPage(x);
      }
    } else {
      setGroupData([from]);
      setPage(x);
      console.log("groupData:", groupData);
    }
  }

  function Add_data() {
    if (groupData === null) {
      console.log("c1:", groupData);
      setGroupData([from]);
      setFrom({
        file: "",
        document_Type: "",
        translation_Type: "",
        tranfrom: "",
        tranto: "",
        Deadline: getCurrentDate(),
        Additional_explanation: "",
        type: "",
        Price: "",
        orderNumber: "",
      });
      chagngeDataPage(2, 0);
    } else {
      console.log("c2:", groupData);
      setGroupData([...groupData, from]);
      let x = page + 1;
      chagngeDataPage(x, 1);
    }
  }
  function SUMbuttons(x) {
    console.log(x);
  }

  const createButtons = () => {
    if (deleteData === true) {
      let buttons = [];
      let someCondition = count;
      for (let i = 0; i < someCondition; i++) {
        const buttonNumber = i + 1;
        const isCurrentPage = buttonNumber === page;
        const buttonStyle = isCurrentPage
          ? styles.buttonArrow2
          : styles.buttonArrow;
        buttons.push(
          <button
            key={i}
            className={buttonStyle}
            onClick={() => chagngeDataPage(buttonNumber, 0)}
          >
            {buttonNumber}
          </button>
        );
      }
      SUMbuttons(buttons.length, 0);
      return buttons;
    } else {
      let buttons = [];
      let someCondition = count2;
      for (let i = 0; i < someCondition; i++) {
        const buttonNumber = i + 1;
        const isCurrentPage = buttonNumber === page;
        const buttonStyle = isCurrentPage
          ? styles.buttonArrow2
          : styles.buttonArrow;
        buttons.push(
          <button
            key={i}
            className={buttonStyle}
            onClick={() => chagngeDataPage(buttonNumber, 0)}
          >
            {buttonNumber}
          </button>
        );
      }
      SUMbuttons(buttons.length, 0);
      // console.log("buttons2");
      return buttons;
    }
  };

  function Delete_data(e) {
    let x = e - 1; //เลือกตำแหน่งข้อมูลที่เราเลือก
    groupData.splice(x, 1); //ลบข้อมูลที่เราเลือก
    // console.log(groupData);
    setDelete(true);
    if (typeof count === "number") {
      if (count === 1) {
        setPage(1);
      } else {
        let z = page - 1;
        chagngeDataPage(z, 0);
      }
    } else {
      setPage(1);
    }
  }

  function switch_page(x) {
    let C = groupData?.length;
    let z = page + 1;
    // console.log(countButtons);
    if (x === "next") {
      console.log("page:", page, "length:", C, "groupData", groupData);
      if (typeof C === "number") {
        if (page > C) {
          chagngeDataPage(page, 0);
        } else {
          if (page < C) {
            chagngeDataPage(z, 0);
          } else {
            if (page === C) {
              if (page === 1) {
                chagngeDataPage(page, 0);
              } else {
                chagngeDataPage(page, 0);
              }
            } else {
              console.log("5555");
            }
          }
        }
      } else {
        setPage(1);
      }
    } else if (x === "back") {
      if (page === 1) {
        setPage(1);
      } else {
        let y = page - 1;
        chagngeDataPage(y, 0);
      }
    }
  }

  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      backgroundColor: "#44b700",
      color: "#44b700",
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      "&::after": {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        animation: "ripple 1.2s infinite ease-in-out",
        border: "1px solid currentColor",
        content: '""',
      },
    },
    "@keyframes ripple": {
      "0%": {
        transform: "scale(.8)",
        opacity: 1,
      },
      "100%": {
        transform: "scale(2.4)",
        opacity: 0,
      },
    },
  }));

  function promotion(x) {
    let y = from?.translation_Type;
    if (y) {
      if (groupData === null) {
        setPromo(x);
        window.scrollTo(0, 1500);
      } else {
        setGroupData([...groupData, from]);
        setPromo(x);
        window.scrollTo(0, 1500);
      }
    }
  }

  const goSignup = () => {
    navigate("/Signup");
  };

  const cutsting = (x) => {
    // console.log(x);
    if (x !== undefined) {
      return x.slice(0, 30);
    } else {
      setFrom({ ...from, file: "" });
    }
  };

  function generatePrice() {
    const PriceCount = (Math.floor(Math.random() * 999) + 1).toString();

    return PriceCount + "฿";
  }

  function generateOrderNumber(length) {
    // Generate a random number
    let orderNumber = Math.floor(Math.random() * Math.pow(10, length));

    // Pad the number with zeroes
    return orderNumber.toString().padStart(length, "0");
  }

  function sendEmail() {
    const datatext = {
      email: email,
      subject: "Thank you.",
      message: "Your payment has been successfully processed.",
    };
    emailjs
      .send(
        "service_u5757dr",
        "template_dueh1d9",
        datatext,
        "BikYNuNxSh4MGJ69-"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  function OpneMode(x) {
    // console.log("x:", x);
    if (x === 1) {
      setFrom({
        ...from,
        Price: generatePrice(),
        orderNumber: generateOrderNumber(12),
      });
      window.scroll(0, 0);
      setOpen(true);
      setTimeout(function () {
        setOpen(false);
        setopenModel({
          ...openModel,
          openModel1: true,
        });
      }, 3000);
    } else if (x === 2) {
      setopenModel({
        ...openModel,
        openModel2: true,
      });
    } else if (x === 3) {
      setopenModel({
        ...openModel,
        openModel3: true,
      });
    } else if (x === 4) {
      setopenModel({
        ...openModel,
        openModel1: false,
        openModel2: false,
        openModel3: false,
        openModel4: true,
      });
    } else if (x === 5) {
      sendEmail();
      setopenModel({
        ...openModel,
        openModel4: false,
        openModel5: true,
      });
    } else if (x === 6) {
      setopenModel({
        ...openModel,
        openModel5: false,
      });
      navigate("/");
    } else if (x === "back to receipt") {
      setopenModel({
        ...openModel,
        openModel2: false,
      });
      setChoose(false);
    } else if (x === "back to Payment") {
      setChoose(false);
      setopenModel({
        ...openModel,
        openModel3: false,
      });
    }
  }

  // function generateOrderNumber() {
  //   const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  //   const randomLetter = () => chars[Math.floor(Math.random() * chars.length)];

  //   const letters = randomLetter() + randomLetter();
  //   const language = Math.floor(Math.random() * 100)
  //     .toString()
  //     .padStart(2, "0");

  //   const orderCount = Math.floor(Math.random() * 1000)
  //     .toString()
  //     .padStart(3, "0");

  //   return letters + language + orderCount;
  // }

  const Cards = () => {
    // Define the initial state of the form and create a reference to the form.
    const [state, setState] = React.useState({
      number: "",
      name: "",
      expiry: "",
      cvc: "",
      issuer: "",
      focused: "",
      formData: null,
    });
    const formRef = React.useRef();

    // Function to remove all non-numeric characters from a string.
    function clearNumber(value = "") {
      return value.replace(/\D+/g, "");
    }

    // Function to format a credit card number based on the card issuer.
    function formatCreditCardNumber(value) {
      if (!value) {
        return value;
      }

      // Determine the type of the card based on the number.
      const issuer = Payment.fns.cardType(value);
      const clearValue = clearNumber(value);
      let nextValue;

      switch (issuer) {
        case "amex":
          nextValue = `${clearValue.slice(0, 4)} ${clearValue.slice(
            4,
            10
          )} ${clearValue.slice(10, 15)}`;
          break;
        case "dinersclub":
          nextValue = `${clearValue.slice(0, 4)} ${clearValue.slice(
            4,
            10
          )} ${clearValue.slice(10, 14)}`;
          break;
        default:
          nextValue = `${clearValue.slice(0, 4)} ${clearValue.slice(
            4,
            8
          )} ${clearValue.slice(8, 12)} ${clearValue.slice(12, 19)}`;
          break;
      }

      return nextValue.trim();
    }

    // Function to limit the length of the CVC based on the card issuer.
    function formatCVC(value, prevValue, allValues = {}) {
      const clearValue = clearNumber(value);
      let maxLength = 4;
      if (allValues.number) {
        const issuer = Payment.fns.cardType(allValues.number);
        maxLength = issuer === "amex" ? 4 : 3;
      }
      return clearValue.slice(0, maxLength);
    }

    // Function to format the expiration date.
    function formatExpirationDate(value) {
      const clearValue = clearNumber(value);
      if (clearValue.length >= 3) {
        return `${clearValue.slice(0, 2)}/${clearValue.slice(2, 4)}`;
      }
      return clearValue;
    }

    // Function to prepare the form data for display.
    function formatFormData(data) {
      return Object.keys(data).map((d) => `${d}: ${data[d]}`);
    }

    // // Function to handle input focus.
    const handleInputFocus = ({ target }) => {
      setState((prevState) => ({ ...prevState, focused: target.name }));
    };

    // Function to handle changes to the input values.
    const handleInputChange = ({ target }) => {
      let value = target.value;
      if (target.name === "number") {
        value = formatCreditCardNumber(value);
      } else if (target.name === "expiry") {
        value = formatExpirationDate(value);
      } else if (target.name === "cvc") {
        value = formatCVC(value);
      }

      // Update the state with the new value.
      setState((prevState) => ({ ...prevState, [target.name]: value }));
    };

    // Function to handle form submission.
    const handleSubmit = (e) => {
      e.preventDefault();
      const formData = [...e.target.elements]
        .filter((d) => d.name)
        .reduce((acc, d) => {
          acc[d.name] = d.value;
          // OpneMode(4);
          return acc;
        }, {});

      // Reset the form and update the state with the form data.
      setState((prevState) => ({ ...prevState, formData }));
      formRef.current.reset();
    };

    // Render the form and credit card preview.
    return (
      <div key="Payment">
        <div className={styles.App_payment}>
          <Card
            number={state?.number}
            name={state?.name}
            expiry={state?.expiry}
            cvc={state?.cvc}
            focused={state?.focused}
            // callback={handleCallback}
          />

          <form ref={formRef} onSubmit={handleSubmit}>
            <div className={styles.form_group}>
              <input
                type="tel"
                name="number"
                className="form-control"
                placeholder="Card Number"
                pattern="[\d\s]{16,22}"
                required
                maxLength={19}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
            </div>
            <div className={styles.form_group}>
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Name"
                required
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                value={state?.name}
              />
            </div>
            <div className={styles.form_group2}>
              <div className={styles.cvc}>
                <input
                  type="tel"
                  name="expiry"
                  className="form-control"
                  placeholder="Valid Thru"
                  pattern="\d\d/\d\d"
                  required
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  value={state?.expiry}
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="cvc"
                  className="form-control"
                  placeholder="CVC"
                  pattern="\d{3,4}"
                  required
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  value={state?.cvc}
                />
              </div>
            </div>
            <input type="hidden" name="issuer" value={state?.issuer} />

            <div id="keep-mounted-modal-description">
              <div style={{ position: "relative", top: "15px" }}>
                <button
                  className={styles.buttonModel1}
                  // onClick={() => OpneMode(4)}
                  type="submit"
                  value="Submit"
                >
                  Pay
                </button>
                <button
                  className={styles.buttonModel1_2}
                  onClick={() => OpneMode("back to Payment")}
                >
                  Back to Payment
                </button>
              </div>
            </div>
          </form>
          {state?.formData && (
            <div className="App-highlight">
              {formatFormData(state?.formData).map((d, i) => (
                <div key={i}>{d}</div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
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

      {/* Modal */}
      {/* Receipt */}
      <Modal
        hideBackdrop
        open={openModel?.openModel1}
        onClose={() =>
          setopenModel({
            ...openModel,
            openModel1: false,
          })
        }
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            width: "36vw",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 5,
            border: "1px solid #E5E5E5",
            textAlign: "center",
            top: "10vh",
            left: "35vw",
          }}
        >
          <div
            id="keep-mounted-modal-description"
            sx={{
              mt: 2,
              textAlign: "center",
              borderBottom: "1px solid #C4C4C4",
            }}
          >
            <img src={Logo} alt="logo" className={styles.Logo} />
            <p className={styles.H_text01}>
              Receipt confirming the order of translation
            </p>
          </div>

          <div className={styles.borderReceipt}></div>
          <div
            id="keep-mounted-modal-description"
            sx={{
              mt: 2,
              textAlign: "left",
              overflowY: "auto",
            }}
          >
            {groupData ? (
              <>
                <div className={styles.Box_detailH_Model}>
                  <p className={styles.H_Model}>Ref Number</p>
                  <p className={styles.H_Model2}>{groupData[0]?.orderNumber}</p>
                </div>
                <div className={styles.Box_detailH_Model}>
                  <p className={styles.H_Model}>Date</p>
                  <p className={styles.H_Model2}>{groupData[0]?.Deadline}</p>
                </div>
                <div className={styles.Box_detailH_Model}>
                  <p className={styles.H_Model}>Translator</p>
                  <p className={styles.H_Model2}>Habi Yang</p>
                </div>
              </>
            ) : (
              <>
                <div className={styles.Box_detailH_Model}>
                  <p className={styles.H_Model}>Ref Number</p>
                  <p className={styles.H_Model2}>000088874612</p>
                </div>
                <div className={styles.Box_detailH_Model}>
                  <p className={styles.H_Model}>Date</p>
                  <p className={styles.H_Model2}>07-12-2023</p>
                </div>
                <div className={styles.Box_detailH_Model}>
                  <p className={styles.H_Model}>Translator</p>
                  <p className={styles.H_Model2}>Habi Yang</p>
                </div>
              </>
            )}
          </div>
          <div className={styles.borderReceipt}></div>
          {groupData ? (
            <>
              <div
                // key={index}
                id="keep-mounted-modal-description"
                style={{
                  mt: 2,
                  textAlign: "left",
                  overflowY: "auto",
                  height: 140,
                }}
              >
                {groupData?.map((item, index) => (
                  <div key={index}>
                    <div className={styles.Box_detailH_Model}>
                      <p className={styles.H_Model2}>Order {index + 1}</p>
                      <p className={styles.H_Model}></p>
                    </div>
                    <div className={styles.Box_detailH_Model}>
                      <p className={styles.H_Model}>Document Type</p>
                      <p className={styles.H_Model2}>{item?.document_Type}</p>
                    </div>

                    <div className={styles.Box_detailH_Model}>
                      <p className={styles.H_Model}>Translation Type</p>
                      <p className={styles.H_Model2}>
                        {item?.translation_Type}
                      </p>
                    </div>

                    <div className={styles.Box_detailH_Model}>
                      <p className={styles.H_Model}>Translate to</p>
                      <p className={styles.H_Model2}>{item?.tranto}</p>
                    </div>

                    <div className={styles.Box_detailH_Model}>
                      <p className={styles.H_Model}>Additional explanation</p>
                      <p className={styles.H_Model2}>
                        {item?.Additional_explanation}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className={styles.borderReceipt}></div>
              <div className={styles.Box_detailH_Model2}>
                <p className={styles.H_Model}>TOTAL :</p>
                <p className={styles.H_Model3}>{from?.Price}</p>
              </div>

              <button
                className={styles.buttonModel1}
                onClick={() => OpneMode(2)}
              >
                Pay
              </button>
              <button
                className={styles.buttonModel1_2}
                onClick={() =>
                  setopenModel({
                    ...openModel,
                    openModel1: false,
                  })
                }
              >
                Cancel
              </button>
            </>
          ) : (
            <>
              <div
                id="keep-mounted-modal-description"
                style={{
                  mt: 2,
                  textAlign: "left",
                  overflowY: "auto",
                  height: 140,
                }}
              >
                <div className={styles.Box_detailH_Model}>
                  <p className={styles.H_Model2}>Order 1</p>
                  <p className={styles.H_Model}></p>
                </div>
                <div className={styles.Box_detailH_Model}>
                  <p className={styles.H_Model}>Document Type</p>
                  <p className={styles.H_Model2}>{from?.document_Type}</p>
                </div>
                <div className={styles.Box_detailH_Model}>
                  <p className={styles.H_Model}>Translation Type</p>
                  <p className={styles.H_Model2}>{from?.translation_Type}</p>
                </div>

                <div className={styles.Box_detailH_Model}>
                  <p className={styles.H_Model}>Translate to</p>
                  <p className={styles.H_Model2}>{from?.tranto}</p>
                </div>

                <div className={styles.Box_detailH_Model}>
                  <p className={styles.H_Model}>Additional explanation</p>
                  <p className={styles.H_Model2}>
                    {from?.Additional_explanation}
                  </p>
                </div>
              </div>

              <div className={styles.borderReceipt}></div>
              <div className={styles.Box_detailH_Model2}>
                <p className={styles.H_Model}>TOTAL :</p>
                <p className={styles.H_Model3}>{from?.Price}</p>
              </div>

              <button
                className={styles.buttonModel1}
                onClick={() => OpneMode(2)}
              >
                Pay
              </button>
              <button
                className={styles.buttonModel1_2}
                onClick={() =>
                  setopenModel({
                    ...openModel,
                    openModel1: false,
                  })
                }
              >
                Cancel
              </button>
            </>
          )}
        </Box>
      </Modal>

      {/* Payment */}
      <Modal
        hideBackdrop
        open={openModel?.openModel2}
        onClose={() =>
          setopenModel({
            ...openModel,
            openModel2: false,
          })
        }
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            width: "50vw",
            height: "75vh",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 5,
            border: "1px solid #E5E5E5",
            textAlign: "center",
            top: "10vh",
            left: "25vw",
          }}
        >
          <div
            id="keep-mounted-modal-description"
            sx={{
              mt: 2,
              textAlign: "center",
              borderBottom: "1px solid #C4C4C4",
            }}
          >
            <img src={Logo} alt="logo" className={styles.Logo} />
            <p className={styles.H_text01}>Payment</p>
          </div>
          <div id="keep-mounted-modal-description">
            <div>
              <div className={styles.boxpayment}>
                {choose === false ? (
                  <button
                    className={styles.cardpayment}
                    onClick={() => setChoose(true)}
                  >
                    <img src={card} alt="card" />
                    <p>card</p>
                  </button>
                ) : (
                  <button
                    className={styles.cardpayment3}
                    onClick={() => setChoose(false)}
                  >
                    <img src={card} alt="card" />
                    <p>card</p>
                  </button>
                )}

                <button className={styles.cardpayment2}>
                  <img src={MobileBanking} alt="MobileBanking" />
                  <p>Mobile Banking</p>
                </button>
                <button className={styles.cardpayment2}>
                  <img src={Promptpay} alt="Promptpay" />
                  <p>Prompt pay</p>
                </button>
                <button className={styles.cardpayment2}>
                  <img src={Gpay2} alt="Gpay" />
                  <p>Google Pay</p>
                </button>
              </div>
              {/* <div className={styles.boxpayment}>
                <div className={styles.cardpayment}>
                  <img src={card} alt="card" />
                  <p>card</p>
                </div>
                <div className={styles.cardpayment}>
                  <img src={card} alt="card" />
                  <p>card</p>
                </div>
                <div className={styles.cardpayment}>
                  <img src={card} alt="card" />
                  <p>card</p>
                </div>
                <div className={styles.cardpayment}>
                  <img src={card} alt="card" />
                  <p>card</p>
                </div>
              </div>
              <div className={styles.boxpayment}>
                <div className={styles.cardpayment}>
                  <img src={card} alt="card" />
                  <p>card</p>
                </div>
                <div className={styles.cardpayment}>
                  <img src={card} alt="card" />
                  <p>card</p>
                </div>
                <div className={styles.cardpayment}>
                  <img src={card} alt="card" />
                  <p>card</p>
                </div>
                <div className={styles.cardpayment}>
                  <img src={card} alt="card" />
                  <p>card</p>
                </div>
              </div> */}
            </div>
            <div style={{ position: "relative", top: "120px" }}>
              <button
                className={styles.buttonModel1}
                onClick={() => OpneMode(3)}
              >
                Pay
              </button>
              <button
                className={styles.buttonModel1_2}
                onClick={() => OpneMode("back to receipt")}
              >
                Back to Receipt
              </button>
            </div>
          </div>
        </Box>
      </Modal>

      {/* card */}
      <Modal
        hideBackdrop
        open={openModel?.openModel3}
        onClose={() =>
          setopenModel({
            ...openModel,
            openModel3: false,
          })
        }
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            width: "50vw",
            height: "88vh",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 5,
            border: "1px solid #E5E5E5",
            textAlign: "center",
            top: "7vh",
            left: "25vw",
          }}
        >
          <Typography
            id="keep-mounted-modal-description"
            sx={{
              mt: 2,
              textAlign: "center",
              borderBottom: "1px solid #C4C4C4",
            }}
          >
            <img src={Logo} alt="logo" className={styles.Logo} />
          </Typography>
          <Cards />
          {/* <div id="keep-mounted-modal-description">
            <div style={{ position: "relative", top: "15px" }}>
              <button
                className={styles.buttonModel1}
                onClick={() => OpneMode(4)}
              >
                Pay
              </button>
              <button
                className={styles.buttonModel1_2}
                onClick={() => OpneMode("back to Payment")}
              >
                Back to Payment
              </button>
            </div>
          </div> */}
        </Box>
      </Modal>

      {/*  email to track */}
      <Modal
        hideBackdrop
        open={openModel?.openModel4}
        onClose={() =>
          setopenModel({
            ...openModel,
            openModel4: false,
          })
        }
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            width: "50vw",
            height: "55vh",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 5,
            border: "1px solid #E5E5E5",
            textAlign: "center",
            top: "10vh",
            left: "25vw",
          }}
        >
          <div
            id="keep-mounted-modal-description"
            sx={{
              mt: 2,
              textAlign: "center",
              borderBottom: "1px solid #C4C4C4",
            }}
          >
            <img src={Logo} alt="logo" className={styles.Logo} />
            <p className={styles.H_text01}>Enter your email</p>
            <p className={styles.H_text02}>
              Please enter your email to track and receive your order.
            </p>
          </div>
          <div>
            <div>
              <p
                style={{
                  fontWeight: 500,
                  fontSize: 20,
                  color: "#242424",
                  textAlign: "left",
                  fontFamily: "DBHeavent",
                }}
              >
                Email
              </p>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Example@mail.com"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #F1F1F1 ",
                  borderRadius: 20,
                  width: "100%",
                  height: 30,
                  padding: 20,
                  paddingLeft: 12,
                  margin: 10,
                  fontSize: 13,
                }}
              />
            </div>
          </div>
          <div id="keep-mounted-modal-description">
            <div style={{ position: "relative", top: "15px" }}>
              <button
                className={styles.buttonModel1}
                onClick={() => OpneMode(5)}
              >
                Sent
              </button>
            </div>
          </div>
        </Box>
      </Modal>

      {/* Thank you */}
      <Modal
        hideBackdrop
        open={openModel?.openModel5}
        onClose={() =>
          setopenModel({
            ...openModel,
            openModel5: false,
          })
        }
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            width: "35vw",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 5,
            border: "1px solid #E5E5E5",
            textAlign: "center",
            top: "10vh",
            left: "30vw",
          }}
        >
          <div
            id="keep-mounted-modal-description"
            sx={{
              mt: 2,
              textAlign: "center",
              borderBottom: "1px solid #C4C4C4",
            }}
          >
            <img src={Logo} alt="logo" className={styles.Logo} />
            <p className={styles.H_text01}>Thank you.</p>
            <p className={styles.H_text02}>
              Your payment has been successfully processed.
            </p>
          </div>
          <div>
            <div style={{ margin: 25 }}>
              <p
                style={{
                  fontWeight: 500,
                  fontSize: 20,
                  color: "#242424",
                  fontFamily: "DBHeavent",
                }}
              >
                TRANSACTION NO.
              </p>
              <p
                style={{
                  fontWeight: 500,
                  fontSize: 20,
                  color: "#242424",
                  fontFamily: "DBHeaventLi",
                }}
              >
                {generateOrderNumber()}
              </p>
            </div>
            <div style={{ margin: 25 }}>
              <p
                style={{
                  fontWeight: 500,
                  fontSize: 20,
                  color: "#242424",

                  fontFamily: "DBHeavent",
                }}
              >
                AMOUNT
              </p>
              {groupData ? (
                <p
                  style={{
                    fontWeight: 500,
                    fontSize: 20,
                    color: "#242424",

                    fontFamily: "DBHeaventLi",
                  }}
                >
                  {groupData[0]?.Price}
                </p>
              ) : (
                <p
                  style={{
                    fontWeight: 500,
                    fontSize: 20,
                    color: "#242424",

                    fontFamily: "DBHeaventLi",
                  }}
                >
                  {groupData?.Price}
                </p>
              )}
            </div>
          </div>
          <div id="keep-mounted-modal-description">
            <div style={{ position: "relative", top: "15px" }}>
              <button
                className={styles.buttonModel1}
                onClick={() => OpneMode(6)}
              >
                Back to home
              </button>
            </div>
          </div>
        </Box>
      </Modal>

      {/* Alert */}
      <Box
        sx={{
          width: " 30%",
          position: "absolute",
          top: "80px",

          left: "67vw",
        }}
      >
        <Collapse in={open}>
          <Alert
            severity="info"
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            sx={{ mb: 2 }}
          >
            <AlertTitle>Please wait a moment.</AlertTitle>
            The translator is accepting your work
          </Alert>
        </Collapse>
      </Box>

      <>
        <div
          style={{
            background: `linear-gradient(0deg, rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.2)), url(${require("../../Images/fram1Home.png")})`,
            height: "85vh",
            backgroundRepeat: "round",
          }}
        >
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div
              style={{
                textAlign: "center",
                justifyItems: "center",
                // width: 1100,
                display: "inline-grid",
                position: "relative",
                top: 125,
              }}
            >
              <div>
                <p
                  style={{
                    fontWeight: "bold",
                    fontSize: 56,
                    color: "#FFFFFF",
                  }}
                >
                  {CustomerEN[0].label}
                </p>
              </div>
              <div className={styles.textCustomerH}>
                <p style={{ fontSize: 23, color: "#FFFFFF", width: "80vw" }}>
                  {CustomerEN[1].label}
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

        <div
          style={{
            width: width,
            height: 800,
          }}
        >
          <div>
            <div
              style={{
                textAlign: "center",
                marginBottom: 10,
              }}
            >
              <p className={styles.textHeading2_overviwe}>YOUR ORDER</p>
            </div>

            <div>
              {/* file */}
              {from?.file === "" ? (
                <div
                  style={{
                    position: "absolute",
                    left: width * 0.08,
                    width: 415,
                    height: 725,
                    background: "#FFFFFF",
                    border: "1px solid #E5E5E5",
                    boxSizing: "border-box",
                    float: "left",
                    borderRadius: 20,
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.04)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <label htmlFor="icon-button-file">
                    <Input
                      accept="image/*"
                      id="icon-button-file"
                      type="file"
                      style={{ display: "none" }}
                      onChange={(e) =>
                        setFrom({ ...from, file: e.target.value })
                      }
                    />
                    <IconButton
                      color="primary"
                      aria-label="upload picture"
                      component="span"
                    >
                      <img
                        src={Fileimg}
                        alt="Fileimg"
                        className={styles.BsFileEarmarkFill}
                      />
                    </IconButton>
                  </label>
                </div>
              ) : (
                <div
                  style={{
                    position: "absolute",
                    left: width * 0.08,
                    width: 415,
                    height: 725,
                    background: "#FFFFFF",
                    border: "1px solid #E5E5E5",
                    boxSizing: "border-box",
                    float: "left",
                    borderRadius: 20,
                    boxShadow: " 0px 4px 5px rgba(0, 0, 0, 0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <label htmlFor="icon-button-file">
                    <Input
                      accept="image/*"
                      id="icon-button-file"
                      type="file"
                      style={{ display: "none" }}
                      onChange={(e) =>
                        setFrom({ ...from, file: e.target.value })
                      }
                    />
                    <IconButton
                      color="primary"
                      aria-label="upload picture"
                      component="span"
                    >
                      <p
                        style={{
                          fontWeight: "bold",
                          fontSize: 24,
                          color: "#B5B5B5",
                        }}
                      >
                        {cutsting(from?.file)}
                      </p>
                    </IconButton>
                  </label>
                </div>
              )}

              {/* fromdetail */}
              <div className={styles.fromdetail}>
                <div style={{ float: "left" }}>
                  <div style={{ marginBottom: 10 }}>
                    <p
                      style={{
                        fontWeight: "bold",
                        fontSize: 24,
                        color: "#333333",
                      }}
                    >
                      {CustomerEN[5].label}
                    </p>
                  </div>
                  <Autocomplete
                    id="country-select-demo"
                    sx={{
                      width: 300,
                      margin: 0,
                      marginBottom: "30px",
                      height: "30px",
                    }}
                    options={data2}
                    defaultValue={from?.document_Type}
                    autoHighlight
                    value={from?.document_Type}
                    onChange={(event, value) =>
                      setFrom({ ...from, document_Type: value?.label })
                    }
                    popupIcon={
                      <MdArrowDropDown
                        style={{ color: "#333333", width: 30, height: 33 }}
                      />
                    }
                    renderOption={(props, option) => (
                      <Box
                        component="li"
                        sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                        {...props}
                      >
                        {option.label}
                      </Box>
                    )}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label={CustomerEN[9].label}
                        inputProps={{
                          ...params.inputProps,
                          autoComplete: "new-password",
                        }}
                      />
                    )}
                    isOptionEqualToValue={(option, value) =>
                      value === undefined ||
                      value === "" ||
                      option.id === value.id
                    }
                  />
                </div>

                <div style={{ float: "left" }}>
                  <div style={{ marginBottom: 10 }}>
                    <p
                      style={{
                        fontWeight: "bold",
                        fontSize: 24,
                        color: "#333333",
                      }}
                    >
                      {CustomerEN[4].label}
                    </p>
                  </div>
                  {from?.document_Type === null ? (
                    <Autocomplete
                      id="country-select-demo"
                      sx={{
                        width: 300,
                        margin: 0,
                        marginBottom: "30px",
                        height: "30px",
                      }}
                      defaultValue={from?.translation_Type}
                      options={data5}
                      autoHighlight
                      value={from?.translation_Type}
                      onChange={(event, value) =>
                        setFrom({ ...from, translation_Type: value?.label })
                      }
                      popupIcon={
                        <MdArrowDropDown
                          style={{ color: "#333333", width: 30, height: 33 }}
                        />
                      }
                      renderOption={(props, option) => (
                        <Box
                          component="li"
                          sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                          {...props}
                        >
                          {option.label}
                        </Box>
                      )}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label={CustomerEN[9].label}
                          inputProps={{
                            ...params.inputProps,
                            autoComplete: "new-password",
                          }}
                        />
                      )}
                      isOptionEqualToValue={(option, value) =>
                        value === undefined ||
                        value === "" ||
                        option.id === value.id
                      }
                    />
                  ) : from?.document_Type === "Official Document" ? (
                    <Autocomplete
                      id="country-select-demo"
                      sx={{
                        width: 300,
                        margin: 0,
                        marginBottom: "30px",
                        height: "30px",
                      }}
                      defaultValue={from?.translation_Type}
                      options={data4}
                      autoHighlight
                      value={from?.translation_Type}
                      onChange={(event, value) =>
                        setFrom({ ...from, translation_Type: value?.label })
                      }
                      popupIcon={
                        <MdArrowDropDown
                          style={{ color: "#333333", width: 30, height: 33 }}
                        />
                      }
                      renderOption={(props, option) => (
                        <Box
                          component="li"
                          sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                          {...props}
                        >
                          {option.label}
                        </Box>
                      )}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label={CustomerEN[9].label}
                          inputProps={{
                            ...params.inputProps,
                            autoComplete: "new-password",
                          }}
                        />
                      )}
                      isOptionEqualToValue={(option, value) =>
                        value === undefined ||
                        value === "" ||
                        option.id === value.id
                      }
                    />
                  ) : from?.document_Type === "General Document" ? (
                    <Autocomplete
                      id="country-select-demo"
                      sx={{
                        width: 300,
                        margin: 0,
                        marginBottom: "30px",
                        height: "30px",
                      }}
                      options={data3}
                      autoHighlight
                      defaultValue={from?.translation_Type}
                      value={from?.translation_Type}
                      onChange={(event, value) =>
                        setFrom({ ...from, translation_Type: value?.label })
                      }
                      popupIcon={
                        <MdArrowDropDown
                          style={{ color: "#333333", width: 30, height: 33 }}
                        />
                      }
                      renderOption={(props, option) => (
                        <Box
                          component="li"
                          sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                          {...props}
                        >
                          {option.label}
                        </Box>
                      )}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label={CustomerEN[9].label}
                          inputProps={{
                            ...params.inputProps,
                            autoComplete: "new-password",
                          }}
                        />
                      )}
                      isOptionEqualToValue={(option, value) =>
                        value === undefined ||
                        value === "" ||
                        option.id === value.id
                      }
                    />
                  ) : (
                    <Autocomplete
                      id="country-select-demo"
                      sx={{
                        width: 300,
                        margin: 0,
                        marginBottom: "30px",
                        height: "30px",
                      }}
                      options={data5}
                      autoHighlight
                      defaultValue={from?.translation_Type}
                      value={from?.translation_Type}
                      onChange={(event, value) =>
                        setFrom({ ...from, translation_Type: value?.label })
                      }
                      popupIcon={
                        <MdArrowDropDown
                          style={{ color: "#333333", width: 30, height: 33 }}
                        />
                      }
                      renderOption={(props, option) => (
                        <Box
                          component="li"
                          sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                          {...props}
                        >
                          {option.label}
                        </Box>
                      )}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label={CustomerEN[9].label}
                          inputProps={{
                            ...params.inputProps,
                            autoComplete: "new-password",
                          }}
                        />
                      )}
                      isOptionEqualToValue={(option, value) =>
                        value === undefined ||
                        value === "" ||
                        option.id === value.id
                      }
                    />
                  )}
                </div>

                <div
                  style={{
                    float: "left",
                  }}
                >
                  <div style={{ marginBottom: 10 }}>
                    <p
                      style={{
                        fontWeight: "bold",
                        fontSize: 24,
                        color: "#333333",
                      }}
                    >
                      {CustomerEN[6].label}
                    </p>
                  </div>

                  <Autocomplete
                    id="country-select-demo"
                    sx={{
                      width: 300,
                      margin: 0,
                      marginBottom: "30px",
                      height: "30px",
                    }}
                    options={data}
                    autoHighlight
                    defaultValue={from?.tranfrom}
                    value={from?.tranfrom}
                    onChange={(event, value) =>
                      setFrom({ ...from, tranfrom: value?.label })
                    }
                    popupIcon={
                      <MdArrowDropDown
                        style={{ color: "#333333", width: 30, height: 33 }}
                      />
                    }
                    renderOption={(props, option) => (
                      <Box
                        component="li"
                        sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                        {...props}
                      >
                        {option.label}
                      </Box>
                    )}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label={CustomerEN[9].label}
                        inputProps={{
                          ...params.inputProps,
                          autoComplete: "new-password",
                        }}
                      />
                    )}
                    isOptionEqualToValue={(option, value) =>
                      value === undefined ||
                      value === "" ||
                      option.id === value.id
                    }
                  />
                </div>

                <div
                  style={{
                    float: "left",
                  }}
                >
                  <div style={{ marginBottom: 10 }}>
                    <p
                      style={{
                        fontWeight: "bold",
                        fontSize: 24,
                        color: "#333333",
                      }}
                    >
                      {CustomerEN[7].label}
                    </p>
                  </div>
                  <Autocomplete
                    id="country-select-demo"
                    sx={{
                      width: 300,
                      margin: 0,
                      marginBottom: "30px",
                      height: "30px",
                    }}
                    options={data}
                    autoHighlight
                    defaultValue={from?.tranto}
                    value={from?.tranto}
                    onChange={(event, value) =>
                      setFrom({ ...from, tranto: value?.label })
                    }
                    popupIcon={
                      <MdArrowDropDown
                        style={{ color: "#333333", width: 30, height: 33 }}
                      />
                    }
                    renderOption={(props, option) => (
                      <Box
                        component="li"
                        sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                        {...props}
                      >
                        {option.label}
                      </Box>
                    )}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label={CustomerEN[9].label}
                        inputProps={{
                          ...params.inputProps,
                          autoComplete: "new-password",
                        }}
                      />
                    )}
                    isOptionEqualToValue={(option, value) =>
                      value === undefined ||
                      value === "" ||
                      option.id === value.id
                    }
                  />
                </div>

                <div>
                  <div style={{ marginBottom: 10 }}>
                    <p
                      style={{
                        fontWeight: "bold",
                        fontSize: 24,
                        color: "#333333",
                      }}
                    >
                      Deadline
                    </p>
                  </div>

                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      label="Date picker"
                      value={from?.Deadline}
                      onChange={handleDateChange}
                      open={openDatePicker}
                      onOpen={() => setOpenDatePicker(true)}
                      onClose={() => setOpenDatePicker(false)}
                      renderInput={(props) => (
                        <TextField
                          {...props}
                          sx={{ position: "absolute", width: "45vw" }}
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <EventIcon
                                  onClick={() => setOpenDatePicker(true)}
                                />
                              </InputAdornment>
                            ),
                          }}
                        />
                      )}
                    />
                  </LocalizationProvider>
                </div>

                <br />

                <div
                  style={{
                    marginTop: 65,
                    marginRight: 50,
                    marginBottom: 0,
                  }}
                >
                  <div style={{ marginBottom: 10 }}>
                    <p
                      style={{
                        fontWeight: "bold",
                        fontSize: 24,
                        color: "#333333",
                      }}
                    >
                      Additional explanation
                    </p>
                  </div>
                  <textarea
                    value={from?.Additional_explanation}
                    onChange={(event, value) =>
                      setFrom({
                        ...from,
                        Additional_explanation: event.target.value,
                      })
                    }
                    maxLength={300}
                    style={{
                      position: "absolute",
                      width: "45.5vw",
                      height: 140,
                      background: "#FFFFFF",
                      border: "1px solid #E5E5E5",
                      boxSizing: "border-box",
                      borderRadius: 5,
                      padding: 20,
                    }}
                  />
                </div>

                <br />
                {/*button Delete page */}
                <div style={{ position: "relative", top: 160 }}>
                  {page === 1 ? (
                    <></>
                  ) : (
                    <button
                      className={styles.buttonAddandDelete}
                      onClick={() => Delete_data(page)}
                    >
                      <RiDeleteBin5Fill style={{ color: " #f04438" }} />
                      <p className={styles.TextbuttonAddandDelete1}>Delete</p>
                    </button>
                  )}
                </div>

                <div
                  style={{
                    position: "relative",
                    top: 160,
                    left: 200,
                    width: "100px",
                  }}
                >
                  <button
                    className={styles.buttonAddandDelete}
                    onClick={() => Add_data()}
                  >
                    <IoMdAddCircleOutline
                      style={{
                        color: "#3b005f",
                        fontSize: 20,
                      }}
                    />
                    <p className={styles.TextbuttonAddandDelete2}>Add order</p>
                  </button>
                </div>

                <div className={styles.Box_next}>
                  <div className={styles.BoxNumber}>
                    <button
                      className={styles.buttonArrow}
                      onClick={() => switch_page("back")}
                    >
                      <IoIosArrowBack className={styles.icon1} />
                    </button>
                    {typeof count !== "number" ? (
                      <button className={styles.buttonArrow2}>1</button>
                    ) : count >= 1 ? (
                      <div>{createButtons()}</div>
                    ) : null}

                    <button
                      className={styles.buttonArrow}
                      onClick={() => switch_page("next")}
                    >
                      <IoIosArrowForward className={styles.icon1} />
                    </button>
                  </div>
                  <button
                    onClick={() => promotion(1)}
                    className={styles.Get_Quote}
                  >
                    <p style={{ color: "#FFFFFF", fontSize: 18 }}>
                      {CustomerEN[11].label}
                    </p>
                  </button>
                </div>
              </div>
            </div>

            {/* promo */}
            {promo === 1 ? (
              <div
                style={{
                  height: "200vh",
                  width: width,
                }}
              >
                <div
                  style={{
                    position: "relative",
                    left: width * 0.06,
                    width: width * 0.91,
                    height: 500,
                    // background: "#FFF9E5",
                    boxSizing: "border-box",
                    textAlign: "left",
                    padding: 20,
                    top: "800px",
                  }}
                >
                  <div>
                    <div>
                      <p className={styles.textHeading2_overviwe2}>
                        Translator
                      </p>
                    </div>
                    <div className={styles.BoxFilter}>
                      <div
                        style={{
                          float: "left",
                          marginLeft: 45,
                          marginRight: 45,
                        }}
                      >
                        <div style={{ marginBottom: 10 }}>
                          <p
                            style={{
                              fontWeight: 500,
                              fontSize: 24,
                              color: "#333333",
                            }}
                          >
                            {CustomerEN[5].label}
                          </p>
                        </div>
                      </div>

                      <div>
                        <p
                          style={{
                            fontWeight: 500,
                            fontSize: 24,
                            color: "#333333",
                          }}
                        >
                          Rating
                        </p>

                        <div>
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={checked?.checked1}
                                onChange={(e) =>
                                  setChecked({
                                    ...checked,
                                    checked1: e.target.checked,
                                  })
                                }
                                inputProps={{ "aria-label": "controlled" }}
                              />
                            }
                            label="5 Star"
                          />
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={checked?.checked2}
                                onChange={(e) =>
                                  setChecked({
                                    ...checked,
                                    checked2: e.target.checked,
                                  })
                                }
                                inputProps={{ "aria-label": "controlled" }}
                              />
                            }
                            label="4 Star"
                          />
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={checked?.checked3}
                                onChange={(e) =>
                                  setChecked({
                                    ...checked,
                                    checked3: e.target.checked,
                                  })
                                }
                                inputProps={{ "aria-label": "controlled" }}
                              />
                            }
                            label="3 Star"
                          />
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={checked?.checked4}
                                onChange={(e) =>
                                  setChecked({
                                    ...checked,
                                    checked4: e.target.checked,
                                  })
                                }
                                inputProps={{ "aria-label": "controlled" }}
                              />
                            }
                            label="2 Star"
                          />
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={checked?.checked5}
                                onChange={(e) =>
                                  setChecked({
                                    ...checked,
                                    checked5: e.target.checked,
                                  })
                                }
                                inputProps={{ "aria-label": "controlled" }}
                              />
                            }
                            label="1 Star"
                          />
                        </div>
                      </div>
                    </div>

                    {/* ตรงนี้ */}
                    <div>
                      <div className={styles.cardTranslator}>
                        <div>
                          <div
                            style={{
                              width: " 100%",
                              display: "grid",
                              justifyContent: "center",
                              textAlign: "center",
                            }}
                          >
                            <Stack direction="row" spacing={2}>
                              <StyledBadge
                                overlap="circular"
                                anchorOrigin={{
                                  vertical: "bottom",
                                  horizontal: "right",
                                }}
                                variant="dot"
                              >
                                <FaUserCircle
                                  alt="avatar"
                                  className={styles.profile}
                                />
                              </StyledBadge>
                            </Stack>
                            <p
                              style={{
                                marginTop: 10,
                                fontWeight: 400,
                                fontSize: 18,
                              }}
                            >
                              Habi Yang
                            </p>
                          </div>

                          <div
                            style={{
                              width: "100%",
                              display: "flex",
                              marginBottom: 10,
                            }}
                          >
                            <div className={styles.iconcardTranslator}>
                              <img src={rating} alt="rating" />
                            </div>

                            <div>
                              <p
                                style={{
                                  color: "#BDBDBD",
                                  fontSize: "12px",
                                }}
                              >
                                Rating
                              </p>
                              <p style={{ marginRight: 10 }}>5.0</p>
                            </div>
                          </div>

                          <div
                            style={{
                              width: "100%",
                              display: "flex",
                              marginBottom: 10,
                            }}
                          >
                            <div className={styles.iconcardTranslator}>
                              <img src={skills} alt="skills" />
                            </div>

                            <div>
                              <p
                                style={{
                                  color: "#BDBDBD",
                                  fontSize: "12px",
                                }}
                              >
                                Skills
                              </p>
                              <p>General Document, Official Document</p>
                            </div>
                          </div>

                          <div
                            style={{
                              width: "100%",
                              display: "flex",
                              marginBottom: 10,
                            }}
                          >
                            <div className={styles.iconcardTranslator}>
                              <img src={languages} alt="languages" />
                            </div>

                            <div>
                              <p
                                style={{
                                  color: "#BDBDBD",
                                  fontSize: "12px",
                                }}
                              >
                                Languages
                              </p>
                              <p>English,汉语 官话,粵語, ไทย,한국어</p>
                            </div>
                          </div>

                          <div
                            style={{
                              fontSize: 13,
                              marginLeft: 30,
                              marginRight: 30,
                              marginTop: 10,
                            }}
                          >
                            <button
                              className={styles.Deal}
                              onClick={() => OpneMode(1)}
                            >
                              Deal
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div
                style={{
                  height: "100vh",
                  width: width,
                }}
              ></div>
            )}
          </div>

          {/* Footer */}
          <div style={{ position: "relative", top: "200px" }}>
            <div>
              <Footer v="English" />
            </div>
          </div>
        </div>
      </>
    </>
  );
};
export default Customer;
