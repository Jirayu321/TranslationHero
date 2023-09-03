import * as React from "react";
import { Box, Modal, Autocomplete, TextField, Paper } from "@mui/material";
import Drawer from "../Drawer/DrawerTranslate";
import Navbars from "../Navbar/navbarHome2.js";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
// import Icons from "../../Images/icons_ai.png";
// import { BsFileEarmarkText } from "react-icons/bs";
import { ImTextColor } from "react-icons/im";
import {
  FaRegFileImage,
  FaLongArrowAltLeft,
  FaLongArrowAltRight,
} from "react-icons/fa";
import { data } from "../Data/data";

import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterLuxon } from "@mui/x-date-pickers/AdapterLuxon";

import Test from "../../Images/1.jpeg";
import Test2 from "../../Images/outputImage1.jpg";
import Test3 from "../../Images/49.jpeg";
import Test4 from "../../Images/outputImage2.jpg";
import Test5 from "../../Images/dii.jpg";
import Test6 from "../../Images/outputImage3.jpg";

import "./Tool.css";
function Tool() {
  const [value, setValue] = React.useState(new Date());
  const [typeOpen, setTypeOpen] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [open4, setOpen4] = React.useState(false);

  const [page, setPage] = React.useState("");
  const [groupbutton, setGroupbutton] = React.useState(1);
  const [languages, setLanguages] = React.useState("");
  const [languages2, setLanguages2] = React.useState("");
  const [textex, setText] = React.useState("");
  const [translateFrom, setTranslateFrom] = React.useState("");
  const [result, setResult] = React.useState("");
  const [option, setOption] = React.useState("1");
  const [screen, setScreen] = React.useState(1);

  const [openbuttonHaed, setOpenbuttonHaed] = React.useState({
    openbuttonHaed1: true,
    openbuttonHaed2: false,
    openbuttonHaed3: false,
    openbuttonHaed4: false,
    openbuttonHaed5: false,
  });

  const handleButtonClick = (stateName) => {
    const newState = {};
    for (const buttonState in openbuttonHaed) {
      newState[buttonState] = buttonState === stateName;
    }
    setOpenbuttonHaed(newState);
  };

  const buttonConfig = [
    { text: "All", stateName: "openbuttonHaed1" },
    { text: "Deadline", stateName: "openbuttonHaed2" },
    { text: "Imminent", stateName: "openbuttonHaed3" },
    { text: "More than 1 week left", stateName: "openbuttonHaed4" },
    { text: "Sent", stateName: "openbuttonHaed5" },
  ];
  // const [value_Text, setValue_Text] = React.useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  let Doc = location?.state?.languages;
  let Value = auth?.token;

  React.useEffect(() => {
    if (Value) {
      console.log("value :", Value);
    } else {
      // navigate("/Login");
    }
  }, [navigate, Value]);

  const handleChange = (content) => {
    console.log(":::", content.trim());
    setText(content);
  };

  const handleClose = () => {
    setTypeOpen(false);
  };

  const TEXT_SCAN = () => {
    setPage("TEXT_SCAN");
    setTypeOpen(false);
  };

  const switchLanguage = () => {
    setLanguages(languages2);
    setLanguages2(languages);
  };

  const switchpage = (i) => {
    if (i === 2) {
      setScreen(2);
    }
  };

  const TranslateFrom = (x) => {
    setLanguages(x);
    if (x === "English") {
      setTranslateFrom("en-GB");
    } else if (x === "Thai") {
      setTranslateFrom("th-TH");
    } else if (x === "German") {
      setTranslateFrom("de-DE");
    } else {
      setTranslateFrom("en-GB");
    }
  };

  const translate = () => {
    const text = textex;
    const translateTo = languages2;
    console.log(text, translateTo);
    let apiUrl = `https://api.mymemory.translated.net/get?q=${text}&langpair=${translateFrom}|${translateTo}`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log("data::", data);
        const valueText = data.responseData.translatedText;
        setResult(valueText);
      })
      .catch((e) => {
        console.log(e);
      });
    setOpen(true);
  };

  return (
    <div className="AppBobyTool">
      <header className="App-header">
        {Doc === "English" ? (
          <Navbars
            navigate={navigate}
            languages="English"
            dispatch={dispatch}
          />
        ) : Doc === "Thai" ? (
          <Navbars navigate={navigate} languages="Thai" dispatch={dispatch} />
        ) : Doc === "German" ? (
          <Navbars navigate={navigate} languages="German" dispatch={dispatch} />
        ) : (
          <Navbars
            navigate={navigate}
            languages="English"
            dispatch={dispatch}
          />
        )}
      </header>

      <Box sx={{ display: "flex", width: "100% " }}>
        <Drawer languages={Doc} value={Value} />
        <Box component="main">
          <div className="BobyTool">
            {screen === 1 ? (
              <div className="BoxSunEditor">
                <div className="ToolHaed">
                  <div className="ToolHaed2">
                    <div>
                      <p className="TextHTool">Tool</p>
                    </div>

                    <div className="ToolrowpoinBOX">
                      <div className="ToolBOX">
                        <div className="ToolpoinBOX1" />
                        <p>Deadline</p>
                      </div>
                      <div className="ToolBOX">
                        <div className="ToolpoinBOX2" />
                        <p>Imminent</p>
                      </div>
                      <div className="ToolBOX">
                        <div className="ToolpoinBOX3" />
                        <p>More than 1 week left</p>
                      </div>
                      <div className="ToolBOX">
                        <div className="ToolpoinBOX4" />
                        <p>Sent</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <Paper
                      component="form"
                      sx={{
                        p: "2px 4px",
                        display: "flex",
                        alignItems: "center",
                        width: 410,
                        position: "absolute",
                        left: "75%",
                        top: "20%",
                        backgroundColor: "transparent",
                        boxShadow: "none",
                        //   borderRadius: 10,
                      }}
                    >
                      <LocalizationProvider
                        dateAdapter={AdapterLuxon}
                        //   localeText={{ start: "Check-in", end: "Check-out" }}
                      >
                        <DatePicker
                          label=""
                          value={value}
                          // inputFormat="DD/MMM/YYYY"
                          mask="__/__/___"
                          onChange={(newValue) => {
                            setValue(newValue);
                          }}
                          renderInput={(Props) => (
                            <React.Fragment>
                              <TextField {...Props} />
                            </React.Fragment>
                          )}
                        />
                      </LocalizationProvider>
                    </Paper>
                  </div>
                </div>

                <div className="Toolrowbutton">
                  {buttonConfig.map(({ text, stateName }) => (
                    <button
                      key={text}
                      className={
                        openbuttonHaed[stateName]
                          ? "ToolbuttonHaed1"
                          : "ToolbuttonHaed2"
                      }
                      onClick={() => handleButtonClick(stateName)}
                    >
                      <p>{text}</p>
                    </button>
                  ))}
                </div>

                <div>
                  {!(
                    openbuttonHaed.openbuttonHaed3 ||
                    openbuttonHaed.openbuttonHaed4 ||
                    openbuttonHaed.openbuttonHaed5
                  ) && (
                    <>
                      <button
                        className="Tooltask"
                        onClick={() => switchpage(2)}
                      >
                        <p className="ToolText1">THGD0020034</p>
                        <p className="ToolText2">Birth Certificate</p>
                        <p className="ToolText3"> 2023/9/4</p>
                      </button>

                      <button
                        className="Tooltask"
                        onClick={() => switchpage(2)}
                      >
                        <p className="ToolText1">THOG0023535</p>
                        <p className="ToolText2">Article</p>
                        <p className="ToolText3"> 2023/9/5</p>
                      </button>
                    </>
                  )}
                </div>
              </div>
            ) : screen === 2 ? (
              <div className="BoxSunEditor">
                <div className="ToolHaed4">
                  <div className="ToolInHaed4">
                    <p className="ToolInHaed4text1">Tools</p>
                    <p className="ToolInHaed4text2">/ THOG0024534</p>
                  </div>
                  {groupbutton === 1 ? (
                    <div style={{ display: "flex" }}>
                      <button
                        className="ToolHelper"
                        onClick={() => setScreen(3)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <g clip-path="url(#clip0_1849_18814)">
                            <path
                              d="M5.99992 1.33203V2.66536M9.99992 1.33203V2.66536M5.99992 13.332V14.6654M9.99992 13.332V14.6654M13.3333 5.9987H14.6666M13.3333 9.33203H14.6666M1.33325 5.9987H2.66659M1.33325 9.33203H2.66659M5.86659 13.332H10.1333C11.2534 13.332 11.8134 13.332 12.2412 13.114C12.6176 12.9223 12.9235 12.6163 13.1153 12.24C13.3333 11.8122 13.3333 11.2521 13.3333 10.132V5.86536C13.3333 4.74526 13.3333 4.18521 13.1153 3.75738C12.9235 3.38106 12.6176 3.0751 12.2412 2.88335C11.8134 2.66536 11.2534 2.66536 10.1333 2.66536H5.86659C4.74648 2.66536 4.18643 2.66536 3.7586 2.88335C3.38228 3.0751 3.07632 3.38106 2.88457 3.75738C2.66659 4.18521 2.66659 4.74526 2.66659 5.86536V10.132C2.66659 11.2521 2.66659 11.8122 2.88457 12.24C3.07632 12.6163 3.38228 12.9223 3.7586 13.114C4.18643 13.332 4.74648 13.332 5.86659 13.332ZM7.06659 9.9987H8.93325C9.30662 9.9987 9.4933 9.9987 9.63591 9.92604C9.76135 9.86212 9.86334 9.76013 9.92726 9.63469C9.99992 9.49208 9.99992 9.3054 9.99992 8.93203V7.06537C9.99992 6.692 9.99992 6.50531 9.92726 6.3627C9.86334 6.23726 9.76135 6.13528 9.63591 6.07136C9.4933 5.9987 9.30662 5.9987 8.93325 5.9987H7.06659C6.69322 5.9987 6.50653 5.9987 6.36393 6.07136C6.23848 6.13528 6.1365 6.23726 6.07258 6.3627C5.99992 6.50531 5.99992 6.692 5.99992 7.06537V8.93203C5.99992 9.3054 5.99992 9.49208 6.07258 9.63469C6.1365 9.76013 6.23848 9.86212 6.36393 9.92604C6.50653 9.9987 6.69322 9.9987 7.06659 9.9987Z"
                              stroke="url(#paint0_linear_1849_18814)"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </g>
                          <defs>
                            <linearGradient
                              id="paint0_linear_1849_18814"
                              x1="2.1182"
                              y1="1.33203"
                              x2="16.3943"
                              y2="3.42784"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="#3B005F" />
                              <stop offset="1" stop-color="#1466B1" />
                            </linearGradient>
                            <clipPath id="clip0_1849_18814">
                              <rect width="16" height="16" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                        <p className="TooltextHelper">Helper</p>
                      </button>
                      <button
                        className="ToolbuttonNext"
                        onClick={() => setGroupbutton(2)}
                      >
                        <p>Next</p>
                      </button>
                      {/* <button
                      className="ToolSubmit"
                      onClick={() => navigate("/In")}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_1849_18817)">
                          <path
                            d="M4.99992 7.9987L6.99992 9.9987L10.9999 5.9987M14.6666 7.9987C14.6666 11.6806 11.6818 14.6654 7.99992 14.6654C4.31802 14.6654 1.33325 11.6806 1.33325 7.9987C1.33325 4.3168 4.31802 1.33203 7.99992 1.33203C11.6818 1.33203 14.6666 4.3168 14.6666 7.9987Z"
                            stroke="white"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1849_18817">
                            <rect width="16" height="16" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <p>Submit</p>
                    </button> */}
                    </div>
                  ) : groupbutton === 2 ? (
                    <div style={{ display: "flex" }}>
                      <button
                        className="ToolbuttonNext"
                        onClick={() => setGroupbutton(1)}
                      >
                        <p>Back</p>
                      </button>

                      <button
                        className="ToolHelper"
                        onClick={() => setScreen(3)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <g clip-path="url(#clip0_1849_18814)">
                            <path
                              d="M5.99992 1.33203V2.66536M9.99992 1.33203V2.66536M5.99992 13.332V14.6654M9.99992 13.332V14.6654M13.3333 5.9987H14.6666M13.3333 9.33203H14.6666M1.33325 5.9987H2.66659M1.33325 9.33203H2.66659M5.86659 13.332H10.1333C11.2534 13.332 11.8134 13.332 12.2412 13.114C12.6176 12.9223 12.9235 12.6163 13.1153 12.24C13.3333 11.8122 13.3333 11.2521 13.3333 10.132V5.86536C13.3333 4.74526 13.3333 4.18521 13.1153 3.75738C12.9235 3.38106 12.6176 3.0751 12.2412 2.88335C11.8134 2.66536 11.2534 2.66536 10.1333 2.66536H5.86659C4.74648 2.66536 4.18643 2.66536 3.7586 2.88335C3.38228 3.0751 3.07632 3.38106 2.88457 3.75738C2.66659 4.18521 2.66659 4.74526 2.66659 5.86536V10.132C2.66659 11.2521 2.66659 11.8122 2.88457 12.24C3.07632 12.6163 3.38228 12.9223 3.7586 13.114C4.18643 13.332 4.74648 13.332 5.86659 13.332ZM7.06659 9.9987H8.93325C9.30662 9.9987 9.4933 9.9987 9.63591 9.92604C9.76135 9.86212 9.86334 9.76013 9.92726 9.63469C9.99992 9.49208 9.99992 9.3054 9.99992 8.93203V7.06537C9.99992 6.692 9.99992 6.50531 9.92726 6.3627C9.86334 6.23726 9.76135 6.13528 9.63591 6.07136C9.4933 5.9987 9.30662 5.9987 8.93325 5.9987H7.06659C6.69322 5.9987 6.50653 5.9987 6.36393 6.07136C6.23848 6.13528 6.1365 6.23726 6.07258 6.3627C5.99992 6.50531 5.99992 6.692 5.99992 7.06537V8.93203C5.99992 9.3054 5.99992 9.49208 6.07258 9.63469C6.1365 9.76013 6.23848 9.86212 6.36393 9.92604C6.50653 9.9987 6.69322 9.9987 7.06659 9.9987Z"
                              stroke="url(#paint0_linear_1849_18814)"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </g>
                          <defs>
                            <linearGradient
                              id="paint0_linear_1849_18814"
                              x1="2.1182"
                              y1="1.33203"
                              x2="16.3943"
                              y2="3.42784"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="#3B005F" />
                              <stop offset="1" stop-color="#1466B1" />
                            </linearGradient>
                            <clipPath id="clip0_1849_18814">
                              <rect width="16" height="16" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                        <p className="TooltextHelper">Helper</p>
                      </button>

                      <button
                        className="ToolbuttonNext"
                        onClick={() => setGroupbutton(3)}
                      >
                        <p>Next</p>
                      </button>
                    </div>
                  ) : groupbutton === 3 ? (
                    <div style={{ display: "flex" }}>
                      <button
                        className="ToolbuttonNext"
                        onClick={() => setGroupbutton(2)}
                      >
                        <p>Back</p>
                      </button>

                      <button
                        className="ToolHelper"
                        onClick={() => setScreen(3)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <g clip-path="url(#clip0_1849_18814)">
                            <path
                              d="M5.99992 1.33203V2.66536M9.99992 1.33203V2.66536M5.99992 13.332V14.6654M9.99992 13.332V14.6654M13.3333 5.9987H14.6666M13.3333 9.33203H14.6666M1.33325 5.9987H2.66659M1.33325 9.33203H2.66659M5.86659 13.332H10.1333C11.2534 13.332 11.8134 13.332 12.2412 13.114C12.6176 12.9223 12.9235 12.6163 13.1153 12.24C13.3333 11.8122 13.3333 11.2521 13.3333 10.132V5.86536C13.3333 4.74526 13.3333 4.18521 13.1153 3.75738C12.9235 3.38106 12.6176 3.0751 12.2412 2.88335C11.8134 2.66536 11.2534 2.66536 10.1333 2.66536H5.86659C4.74648 2.66536 4.18643 2.66536 3.7586 2.88335C3.38228 3.0751 3.07632 3.38106 2.88457 3.75738C2.66659 4.18521 2.66659 4.74526 2.66659 5.86536V10.132C2.66659 11.2521 2.66659 11.8122 2.88457 12.24C3.07632 12.6163 3.38228 12.9223 3.7586 13.114C4.18643 13.332 4.74648 13.332 5.86659 13.332ZM7.06659 9.9987H8.93325C9.30662 9.9987 9.4933 9.9987 9.63591 9.92604C9.76135 9.86212 9.86334 9.76013 9.92726 9.63469C9.99992 9.49208 9.99992 9.3054 9.99992 8.93203V7.06537C9.99992 6.692 9.99992 6.50531 9.92726 6.3627C9.86334 6.23726 9.76135 6.13528 9.63591 6.07136C9.4933 5.9987 9.30662 5.9987 8.93325 5.9987H7.06659C6.69322 5.9987 6.50653 5.9987 6.36393 6.07136C6.23848 6.13528 6.1365 6.23726 6.07258 6.3627C5.99992 6.50531 5.99992 6.692 5.99992 7.06537V8.93203C5.99992 9.3054 5.99992 9.49208 6.07258 9.63469C6.1365 9.76013 6.23848 9.86212 6.36393 9.92604C6.50653 9.9987 6.69322 9.9987 7.06659 9.9987Z"
                              stroke="url(#paint0_linear_1849_18814)"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </g>
                          <defs>
                            <linearGradient
                              id="paint0_linear_1849_18814"
                              x1="2.1182"
                              y1="1.33203"
                              x2="16.3943"
                              y2="3.42784"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="#3B005F" />
                              <stop offset="1" stop-color="#1466B1" />
                            </linearGradient>
                            <clipPath id="clip0_1849_18814">
                              <rect width="16" height="16" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                        <p className="TooltextHelper">Helper</p>
                      </button>

                      <button
                        className="ToolSubmit"
                        onClick={() => navigate("/In")}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <g clip-path="url(#clip0_1849_18817)">
                            <path
                              d="M4.99992 7.9987L6.99992 9.9987L10.9999 5.9987M14.6666 7.9987C14.6666 11.6806 11.6818 14.6654 7.99992 14.6654C4.31802 14.6654 1.33325 11.6806 1.33325 7.9987C1.33325 4.3168 4.31802 1.33203 7.99992 1.33203C11.6818 1.33203 14.6666 4.3168 14.6666 7.9987Z"
                              stroke="white"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_1849_18817">
                              <rect width="16" height="16" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                        <p>Submit</p>
                      </button>
                    </div>
                  ) : (
                    <></>
                  )}
                </div>

                {groupbutton === 1 ? (
                  <div className="ToolHaed3_1">
                    <div className="ToolHaed2">
                      <div>
                        <p className="TextHTool">Article</p>
                      </div>
                      <p>Timeline : 2023/9/4 </p>
                      <p>Detail : - </p>
                      <p>File: 1.jpeg</p>
                    </div>
                    <div>
                      <button
                        className="ToolbuttonOpenFile"
                        onClick={() => setOpen2(true)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <g clip-path="url(#clip0_1849_18824)">
                            <path
                              d="M14.6666 7.38918V8.00251C14.6658 9.44013 14.2003 10.839 13.3395 11.9904C12.4787 13.1418 11.2688 13.9842 9.89016 14.3918C8.51154 14.7994 7.03809 14.7504 5.68957 14.2522C4.34104 13.754 3.18969 12.8332 2.40723 11.6272C1.62476 10.4212 1.25311 8.99456 1.3477 7.56006C1.44229 6.12556 1.99806 4.76006 2.93211 3.66723C3.86615 2.57439 5.12844 1.81277 6.53071 1.49594C7.93298 1.17912 9.4001 1.32407 10.7133 1.90918M14.6666 2.66536L7.99992 9.3387L5.99992 7.3387"
                              stroke="white"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_1849_18824">
                              <rect width="16" height="16" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                        <p>Open File</p>
                      </button>
                    </div>
                  </div>
                ) : groupbutton === 2 ? (
                  <div className="ToolHaed3_1">
                    <div className="ToolHaed2">
                      <div>
                        <p className="TextHTool">Article</p>
                      </div>
                      <p>Timeline : 2023/9/4 </p>
                      <p>Detail : 12345 </p>
                      <p>File: 49.jpeg</p>
                    </div>
                    <div>
                      <button
                        className="ToolbuttonOpenFile"
                        onClick={() => setOpen3(true)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <g clip-path="url(#clip0_1849_18824)">
                            <path
                              d="M14.6666 7.38918V8.00251C14.6658 9.44013 14.2003 10.839 13.3395 11.9904C12.4787 13.1418 11.2688 13.9842 9.89016 14.3918C8.51154 14.7994 7.03809 14.7504 5.68957 14.2522C4.34104 13.754 3.18969 12.8332 2.40723 11.6272C1.62476 10.4212 1.25311 8.99456 1.3477 7.56006C1.44229 6.12556 1.99806 4.76006 2.93211 3.66723C3.86615 2.57439 5.12844 1.81277 6.53071 1.49594C7.93298 1.17912 9.4001 1.32407 10.7133 1.90918M14.6666 2.66536L7.99992 9.3387L5.99992 7.3387"
                              stroke="white"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_1849_18824">
                              <rect width="16" height="16" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                        <p>Open File</p>
                      </button>
                    </div>
                  </div>
                ) : groupbutton === 3 ? (
                  <div className="ToolHaed3_1">
                    <div className="ToolHaed2">
                      <div>
                        <p className="TextHTool">Article</p>
                      </div>
                      <p>Timeline : 2023/9/4 </p>
                      <p>Detail : - </p>
                      <p>File: dii.jpg</p>
                    </div>
                    <div>
                      <button
                        className="ToolbuttonOpenFile"
                        onClick={() => setOpen4(true)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <g clip-path="url(#clip0_1849_18824)">
                            <path
                              d="M14.6666 7.38918V8.00251C14.6658 9.44013 14.2003 10.839 13.3395 11.9904C12.4787 13.1418 11.2688 13.9842 9.89016 14.3918C8.51154 14.7994 7.03809 14.7504 5.68957 14.2522C4.34104 13.754 3.18969 12.8332 2.40723 11.6272C1.62476 10.4212 1.25311 8.99456 1.3477 7.56006C1.44229 6.12556 1.99806 4.76006 2.93211 3.66723C3.86615 2.57439 5.12844 1.81277 6.53071 1.49594C7.93298 1.17912 9.4001 1.32407 10.7133 1.90918M14.6666 2.66536L7.99992 9.3387L5.99992 7.3387"
                              stroke="white"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_1849_18824">
                              <rect width="16" height="16" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                        <p>Open File</p>
                      </button>
                    </div>
                  </div>
                ) : (
                  <></>
                )}

                <SunEditor
                  height="265px"
                  // className="SunEditor2"
                  onBlur={(e) => handleChange(e.target.innerText)}
                />
              </div>
            ) : (
              <div className="BoxSunEditor">
                <div className="ToolHaed4">
                  <div className="ToolInHaed4">
                    <p className="ToolInHaed4text1">Tools</p>
                    <p className="ToolInHaed4text2">/ THOG0024534</p>
                  </div>

                  {groupbutton === 1 ? (
                    <div style={{ display: "flex" }}>
                      <button
                        className="ToolHelper"
                        onClick={() => setScreen(3)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <g clip-path="url(#clip0_1849_18814)">
                            <path
                              d="M5.99992 1.33203V2.66536M9.99992 1.33203V2.66536M5.99992 13.332V14.6654M9.99992 13.332V14.6654M13.3333 5.9987H14.6666M13.3333 9.33203H14.6666M1.33325 5.9987H2.66659M1.33325 9.33203H2.66659M5.86659 13.332H10.1333C11.2534 13.332 11.8134 13.332 12.2412 13.114C12.6176 12.9223 12.9235 12.6163 13.1153 12.24C13.3333 11.8122 13.3333 11.2521 13.3333 10.132V5.86536C13.3333 4.74526 13.3333 4.18521 13.1153 3.75738C12.9235 3.38106 12.6176 3.0751 12.2412 2.88335C11.8134 2.66536 11.2534 2.66536 10.1333 2.66536H5.86659C4.74648 2.66536 4.18643 2.66536 3.7586 2.88335C3.38228 3.0751 3.07632 3.38106 2.88457 3.75738C2.66659 4.18521 2.66659 4.74526 2.66659 5.86536V10.132C2.66659 11.2521 2.66659 11.8122 2.88457 12.24C3.07632 12.6163 3.38228 12.9223 3.7586 13.114C4.18643 13.332 4.74648 13.332 5.86659 13.332ZM7.06659 9.9987H8.93325C9.30662 9.9987 9.4933 9.9987 9.63591 9.92604C9.76135 9.86212 9.86334 9.76013 9.92726 9.63469C9.99992 9.49208 9.99992 9.3054 9.99992 8.93203V7.06537C9.99992 6.692 9.99992 6.50531 9.92726 6.3627C9.86334 6.23726 9.76135 6.13528 9.63591 6.07136C9.4933 5.9987 9.30662 5.9987 8.93325 5.9987H7.06659C6.69322 5.9987 6.50653 5.9987 6.36393 6.07136C6.23848 6.13528 6.1365 6.23726 6.07258 6.3627C5.99992 6.50531 5.99992 6.692 5.99992 7.06537V8.93203C5.99992 9.3054 5.99992 9.49208 6.07258 9.63469C6.1365 9.76013 6.23848 9.86212 6.36393 9.92604C6.50653 9.9987 6.69322 9.9987 7.06659 9.9987Z"
                              stroke="url(#paint0_linear_1849_18814)"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </g>
                          <defs>
                            <linearGradient
                              id="paint0_linear_1849_18814"
                              x1="2.1182"
                              y1="1.33203"
                              x2="16.3943"
                              y2="3.42784"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="#3B005F" />
                              <stop offset="1" stop-color="#1466B1" />
                            </linearGradient>
                            <clipPath id="clip0_1849_18814">
                              <rect width="16" height="16" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                        <p className="TooltextHelper">Helper</p>
                      </button>
                      <button
                        className="ToolbuttonNext"
                        onClick={() => setGroupbutton(2)}
                      >
                        <p>Next</p>
                      </button>
                      {/* <button
                      className="ToolSubmit"
                      onClick={() => navigate("/In")}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_1849_18817)">
                          <path
                            d="M4.99992 7.9987L6.99992 9.9987L10.9999 5.9987M14.6666 7.9987C14.6666 11.6806 11.6818 14.6654 7.99992 14.6654C4.31802 14.6654 1.33325 11.6806 1.33325 7.9987C1.33325 4.3168 4.31802 1.33203 7.99992 1.33203C11.6818 1.33203 14.6666 4.3168 14.6666 7.9987Z"
                            stroke="white"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1849_18817">
                            <rect width="16" height="16" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <p>Submit</p>
                    </button> */}
                    </div>
                  ) : groupbutton === 2 ? (
                    <div style={{ display: "flex" }}>
                      <button
                        className="ToolbuttonNext"
                        onClick={() => setGroupbutton(1)}
                      >
                        <p>Back</p>
                      </button>

                      <button
                        className="ToolHelper"
                        onClick={() => setScreen(3)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <g clip-path="url(#clip0_1849_18814)">
                            <path
                              d="M5.99992 1.33203V2.66536M9.99992 1.33203V2.66536M5.99992 13.332V14.6654M9.99992 13.332V14.6654M13.3333 5.9987H14.6666M13.3333 9.33203H14.6666M1.33325 5.9987H2.66659M1.33325 9.33203H2.66659M5.86659 13.332H10.1333C11.2534 13.332 11.8134 13.332 12.2412 13.114C12.6176 12.9223 12.9235 12.6163 13.1153 12.24C13.3333 11.8122 13.3333 11.2521 13.3333 10.132V5.86536C13.3333 4.74526 13.3333 4.18521 13.1153 3.75738C12.9235 3.38106 12.6176 3.0751 12.2412 2.88335C11.8134 2.66536 11.2534 2.66536 10.1333 2.66536H5.86659C4.74648 2.66536 4.18643 2.66536 3.7586 2.88335C3.38228 3.0751 3.07632 3.38106 2.88457 3.75738C2.66659 4.18521 2.66659 4.74526 2.66659 5.86536V10.132C2.66659 11.2521 2.66659 11.8122 2.88457 12.24C3.07632 12.6163 3.38228 12.9223 3.7586 13.114C4.18643 13.332 4.74648 13.332 5.86659 13.332ZM7.06659 9.9987H8.93325C9.30662 9.9987 9.4933 9.9987 9.63591 9.92604C9.76135 9.86212 9.86334 9.76013 9.92726 9.63469C9.99992 9.49208 9.99992 9.3054 9.99992 8.93203V7.06537C9.99992 6.692 9.99992 6.50531 9.92726 6.3627C9.86334 6.23726 9.76135 6.13528 9.63591 6.07136C9.4933 5.9987 9.30662 5.9987 8.93325 5.9987H7.06659C6.69322 5.9987 6.50653 5.9987 6.36393 6.07136C6.23848 6.13528 6.1365 6.23726 6.07258 6.3627C5.99992 6.50531 5.99992 6.692 5.99992 7.06537V8.93203C5.99992 9.3054 5.99992 9.49208 6.07258 9.63469C6.1365 9.76013 6.23848 9.86212 6.36393 9.92604C6.50653 9.9987 6.69322 9.9987 7.06659 9.9987Z"
                              stroke="url(#paint0_linear_1849_18814)"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </g>
                          <defs>
                            <linearGradient
                              id="paint0_linear_1849_18814"
                              x1="2.1182"
                              y1="1.33203"
                              x2="16.3943"
                              y2="3.42784"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="#3B005F" />
                              <stop offset="1" stop-color="#1466B1" />
                            </linearGradient>
                            <clipPath id="clip0_1849_18814">
                              <rect width="16" height="16" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                        <p className="TooltextHelper">Helper</p>
                      </button>

                      <button
                        className="ToolbuttonNext"
                        onClick={() => setGroupbutton(3)}
                      >
                        <p>Next</p>
                      </button>
                    </div>
                  ) : groupbutton === 3 ? (
                    <div style={{ display: "flex" }}>
                      <button
                        className="ToolbuttonNext"
                        onClick={() => setGroupbutton(2)}
                      >
                        <p>Back</p>
                      </button>

                      <button
                        className="ToolHelper"
                        onClick={() => setScreen(3)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <g clip-path="url(#clip0_1849_18814)">
                            <path
                              d="M5.99992 1.33203V2.66536M9.99992 1.33203V2.66536M5.99992 13.332V14.6654M9.99992 13.332V14.6654M13.3333 5.9987H14.6666M13.3333 9.33203H14.6666M1.33325 5.9987H2.66659M1.33325 9.33203H2.66659M5.86659 13.332H10.1333C11.2534 13.332 11.8134 13.332 12.2412 13.114C12.6176 12.9223 12.9235 12.6163 13.1153 12.24C13.3333 11.8122 13.3333 11.2521 13.3333 10.132V5.86536C13.3333 4.74526 13.3333 4.18521 13.1153 3.75738C12.9235 3.38106 12.6176 3.0751 12.2412 2.88335C11.8134 2.66536 11.2534 2.66536 10.1333 2.66536H5.86659C4.74648 2.66536 4.18643 2.66536 3.7586 2.88335C3.38228 3.0751 3.07632 3.38106 2.88457 3.75738C2.66659 4.18521 2.66659 4.74526 2.66659 5.86536V10.132C2.66659 11.2521 2.66659 11.8122 2.88457 12.24C3.07632 12.6163 3.38228 12.9223 3.7586 13.114C4.18643 13.332 4.74648 13.332 5.86659 13.332ZM7.06659 9.9987H8.93325C9.30662 9.9987 9.4933 9.9987 9.63591 9.92604C9.76135 9.86212 9.86334 9.76013 9.92726 9.63469C9.99992 9.49208 9.99992 9.3054 9.99992 8.93203V7.06537C9.99992 6.692 9.99992 6.50531 9.92726 6.3627C9.86334 6.23726 9.76135 6.13528 9.63591 6.07136C9.4933 5.9987 9.30662 5.9987 8.93325 5.9987H7.06659C6.69322 5.9987 6.50653 5.9987 6.36393 6.07136C6.23848 6.13528 6.1365 6.23726 6.07258 6.3627C5.99992 6.50531 5.99992 6.692 5.99992 7.06537V8.93203C5.99992 9.3054 5.99992 9.49208 6.07258 9.63469C6.1365 9.76013 6.23848 9.86212 6.36393 9.92604C6.50653 9.9987 6.69322 9.9987 7.06659 9.9987Z"
                              stroke="url(#paint0_linear_1849_18814)"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </g>
                          <defs>
                            <linearGradient
                              id="paint0_linear_1849_18814"
                              x1="2.1182"
                              y1="1.33203"
                              x2="16.3943"
                              y2="3.42784"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="#3B005F" />
                              <stop offset="1" stop-color="#1466B1" />
                            </linearGradient>
                            <clipPath id="clip0_1849_18814">
                              <rect width="16" height="16" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                        <p className="TooltextHelper">Helper</p>
                      </button>

                      <button
                        className="ToolSubmit"
                        onClick={() => navigate("/In")}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <g clip-path="url(#clip0_1849_18817)">
                            <path
                              d="M4.99992 7.9987L6.99992 9.9987L10.9999 5.9987M14.6666 7.9987C14.6666 11.6806 11.6818 14.6654 7.99992 14.6654C4.31802 14.6654 1.33325 11.6806 1.33325 7.9987C1.33325 4.3168 4.31802 1.33203 7.99992 1.33203C11.6818 1.33203 14.6666 4.3168 14.6666 7.9987Z"
                              stroke="white"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_1849_18817">
                              <rect width="16" height="16" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                        <p>Submit</p>
                      </button>
                    </div>
                  ) : (
                    <></>
                  )}
                </div>

                {groupbutton === 1 ? (
                  <div className="ToolHaed3_1">
                    <div className="ToolHaed2">
                      <div>
                        <p className="TextHTool">Article</p>
                      </div>
                      <p>Timeline : 2023/9/4 </p>
                      <p>Detail : - </p>
                      <p>File: 1.jpeg</p>
                    </div>
                    <div>
                      <button
                        className="ToolbuttonOpenFile"
                        onClick={() => setOpen2(true)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <g clip-path="url(#clip0_1849_18824)">
                            <path
                              d="M14.6666 7.38918V8.00251C14.6658 9.44013 14.2003 10.839 13.3395 11.9904C12.4787 13.1418 11.2688 13.9842 9.89016 14.3918C8.51154 14.7994 7.03809 14.7504 5.68957 14.2522C4.34104 13.754 3.18969 12.8332 2.40723 11.6272C1.62476 10.4212 1.25311 8.99456 1.3477 7.56006C1.44229 6.12556 1.99806 4.76006 2.93211 3.66723C3.86615 2.57439 5.12844 1.81277 6.53071 1.49594C7.93298 1.17912 9.4001 1.32407 10.7133 1.90918M14.6666 2.66536L7.99992 9.3387L5.99992 7.3387"
                              stroke="white"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_1849_18824">
                              <rect width="16" height="16" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                        <p>Open File</p>
                      </button>
                    </div>
                  </div>
                ) : groupbutton === 2 ? (
                  <div className="ToolHaed3_1">
                    <div className="ToolHaed2">
                      <div>
                        <p className="TextHTool">Article</p>
                      </div>
                      <p>Timeline : 2023/9/4 </p>
                      <p>Detail : 12345 </p>
                      <p>File: 49.jpeg</p>
                    </div>
                    <div>
                      <button
                        className="ToolbuttonOpenFile"
                        onClick={() => setOpen2(true)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <g clip-path="url(#clip0_1849_18824)">
                            <path
                              d="M14.6666 7.38918V8.00251C14.6658 9.44013 14.2003 10.839 13.3395 11.9904C12.4787 13.1418 11.2688 13.9842 9.89016 14.3918C8.51154 14.7994 7.03809 14.7504 5.68957 14.2522C4.34104 13.754 3.18969 12.8332 2.40723 11.6272C1.62476 10.4212 1.25311 8.99456 1.3477 7.56006C1.44229 6.12556 1.99806 4.76006 2.93211 3.66723C3.86615 2.57439 5.12844 1.81277 6.53071 1.49594C7.93298 1.17912 9.4001 1.32407 10.7133 1.90918M14.6666 2.66536L7.99992 9.3387L5.99992 7.3387"
                              stroke="white"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_1849_18824">
                              <rect width="16" height="16" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                        <p>Open File</p>
                      </button>
                    </div>
                  </div>
                ) : groupbutton === 3 ? (
                  <div className="ToolHaed3_1">
                    <div className="ToolHaed2">
                      <div>
                        <p className="TextHTool">Article</p>
                      </div>
                      <p>Timeline : 2023/9/4 </p>
                      <p>Detail : - </p>
                      <p>File: dii.jpg</p>
                    </div>
                    <div>
                      <button
                        className="ToolbuttonOpenFile"
                        onClick={() => setOpen2(true)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <g clip-path="url(#clip0_1849_18824)">
                            <path
                              d="M14.6666 7.38918V8.00251C14.6658 9.44013 14.2003 10.839 13.3395 11.9904C12.4787 13.1418 11.2688 13.9842 9.89016 14.3918C8.51154 14.7994 7.03809 14.7504 5.68957 14.2522C4.34104 13.754 3.18969 12.8332 2.40723 11.6272C1.62476 10.4212 1.25311 8.99456 1.3477 7.56006C1.44229 6.12556 1.99806 4.76006 2.93211 3.66723C3.86615 2.57439 5.12844 1.81277 6.53071 1.49594C7.93298 1.17912 9.4001 1.32407 10.7133 1.90918M14.6666 2.66536L7.99992 9.3387L5.99992 7.3387"
                              stroke="white"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_1849_18824">
                              <rect width="16" height="16" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                        <p>Open File</p>
                      </button>
                    </div>
                  </div>
                ) : (
                  <></>
                )}
                {groupbutton === 1 ? (
                  <div className="Toolbobywork">
                    <div className="ToolSelectfile">
                      <img src={Test} alt="img" className="ToolTest" />
                    </div>
                    <div className="ToolSelectfile">
                      <img src={Test2} alt="img2" className="ToolTest2" />
                    </div>
                  </div>
                ) : groupbutton === 2 ? (
                  <div className="Toolbobywork">
                    <div className="ToolSelectfile">
                      <img src={Test3} alt="img3" className="ToolTest" />
                    </div>
                    <div className="ToolSelectfile">
                      <img src={Test4} alt="img4" className="ToolTest2" />
                    </div>
                  </div>
                ) : groupbutton === 3 ? (
                  <div className="Toolbobywork">
                    <div className="ToolSelectfile">
                      <img src={Test5} alt="img3" className="ToolTest" />
                    </div>
                    <div className="ToolSelectfile">
                      <img src={Test6} alt="img4" className="ToolTest2" />
                    </div>
                  </div>
                ) : (
                  <></>
                )}

                {option === "1" ? (
                  <div className="rowbuttonTools">
                    <button
                      onClick={() => setOption("1")}
                      className="Toolsbutton2"
                    >
                      Option 1
                    </button>
                    <button
                      onClick={() => setOption("2")}
                      className="Toolsbutton"
                    >
                      <p>Option 2</p>
                    </button>
                    <button
                      onClick={() => setOption("3")}
                      className="Toolsbutton"
                    >
                      <p>Option 3</p>
                    </button>
                    <button
                      onClick={() => setOption("4")}
                      className="Toolsbutton"
                    >
                      <p> Option 4</p>
                    </button>
                  </div>
                ) : option === "2" ? (
                  <div className="rowbuttonTools">
                    <button
                      onClick={() => setOption("1")}
                      className="Toolsbutton"
                    >
                      <p> Option 1</p>
                    </button>
                    <button
                      onClick={() => setOption("2")}
                      className="Toolsbutton2"
                    >
                      Option 2
                    </button>
                    <button
                      onClick={() => setOption("3")}
                      className="Toolsbutton"
                    >
                      <p>Option 3</p>
                    </button>
                    <button
                      onClick={() => setOption("4")}
                      className="Toolsbutton"
                    >
                      <p>Option 4</p>
                    </button>
                  </div>
                ) : option === "3" ? (
                  <div className="rowbuttonTools">
                    <button
                      onClick={() => setOption("1")}
                      className="Toolsbutton"
                    >
                      <p>Option 1</p>
                    </button>
                    <button
                      onClick={() => setOption("2")}
                      className="Toolsbutton"
                    >
                      <p> Option 2</p>
                    </button>
                    <button
                      onClick={() => setOption("3")}
                      className="Toolsbutton2"
                    >
                      Option 3
                    </button>
                    <button
                      onClick={() => setOption("4")}
                      className="Toolsbutton"
                    >
                      <p> Option 4</p>
                    </button>
                  </div>
                ) : option === "4" ? (
                  <div className="rowbuttonTools">
                    <button
                      onClick={() => setOption("1")}
                      className="Toolsbutton"
                    >
                      <p> Option 1</p>
                    </button>
                    <button
                      onClick={() => setOption("2")}
                      className="Toolsbutton"
                    >
                      <p> Option 2</p>
                    </button>
                    <button
                      onClick={() => setOption("3")}
                      className="Toolsbutton"
                    >
                      <p> Option 3</p>
                    </button>
                    <button
                      onClick={() => setOption("4")}
                      className="Toolsbutton2"
                    >
                      Option 4
                    </button>
                  </div>
                ) : null}
              </div>
            )}
          </div>

          <Modal
            open={typeOpen}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box className="BoxModal">
              <button className="BoxModalButton" onClick={() => TEXT_SCAN()}>
                <p>TEXT SCAN</p>
                <br />
                <ImTextColor className="ImTextColor" />
              </button>

              <button
                className="BoxModalButton"
                style={{
                  color: "beige",
                  border: "1px solid",
                }}
              >
                <p>IMAGE SCAN</p>
                <br />
                <FaRegFileImage className="ImTextColor" />
              </button>
            </Box>
          </Modal>

          <Modal
            open={open2}
            // onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box className="BoxModal2">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p>File: </p>
              </div>

              <div
                style={{
                  width: " 100%",
                  height: "500px",
                  background: " #F6FBFE",
                  border: "1px solid #E5E5E5",
                  borderRadius: 5,
                  textAlign: "start",
                  padding: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img src={Test} alt="Test" className="ToolTest2" />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <button
                  style={{
                    height: 40,
                    borderRadius: 5,
                    color: "#034D82",
                    fontWeight: 700,
                    filter: "drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.1))",
                    background: "#FFFFFF",
                    border: "1px solid #034D82",
                    marginTop: 10,
                    alignContent: "center",
                  }}
                  onClick={() => setOpen2(false)}
                >
                  Close
                </button>
              </div>
            </Box>
          </Modal>

          <Modal
            open={open3}
            // onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box className="BoxModal2">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p>File: </p>
              </div>

              <div
                style={{
                  width: " 100%",
                  height: "500px",
                  background: " #F6FBFE",
                  border: "1px solid #E5E5E5",
                  borderRadius: 5,
                  textAlign: "start",
                  padding: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img src={Test3} alt="Test" className="ToolTest2" />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <button
                  style={{
                    height: 40,
                    borderRadius: 5,
                    color: "#034D82",
                    fontWeight: 700,
                    filter: "drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.1))",
                    background: "#FFFFFF",
                    border: "1px solid #034D82",
                    marginTop: 10,
                    alignContent: "center",
                  }}
                  onClick={() => setOpen3(false)}
                >
                  Close
                </button>
              </div>
            </Box>
          </Modal>

          <Modal
            open={open4}
            // onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box className="BoxModal2">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p>File: </p>
              </div>

              <div
                style={{
                  width: " 100%",
                  height: "500px",
                  background: " #F6FBFE",
                  border: "1px solid #E5E5E5",
                  borderRadius: 5,
                  textAlign: "start",
                  padding: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img src={Test5} alt="Test" className="ToolTest2" />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <button
                  style={{
                    height: 40,
                    borderRadius: 5,
                    color: "#034D82",
                    fontWeight: 700,
                    filter: "drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.1))",
                    background: "#FFFFFF",
                    border: "1px solid #034D82",
                    marginTop: 10,
                    alignContent: "center",
                  }}
                  onClick={() => setOpen4(false)}
                >
                  Close
                </button>
              </div>
            </Box>
          </Modal>

          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box className="BoxModal3">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p>Result</p>
                <button
                  style={{
                    height: 40,
                    borderRadius: 5,
                    color: "#034D82",
                    fontWeight: 700,
                    filter: "drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.1))",
                    background: "#FFFFFF",
                    border: "1px solid #034D82",
                    marginBottom: 5,
                  }}
                  onClick={() => setOpen(false)}
                >
                  Close
                </button>
              </div>
              {option === "4" ? (
                <textarea
                  style={{
                    width: " 100%",
                    height: "500px",
                    background: " #F6FBFE",
                    border: "1px solid #E5E5E5",
                    borderRadius: 5,
                    textAlign: "start",
                    padding: "20px",
                  }}
                >
                  <p></p>
                </textarea>
              ) : (
                <div
                  style={{
                    width: " 100%",
                    height: "500px",
                    background: " #F6FBFE",
                    border: "1px solid #E5E5E5",
                    borderRadius: 5,
                    textAlign: "start",
                    padding: "20px",
                  }}
                >
                  <p>{result}</p>
                </div>
              )}

              {option === "1" ? (
                <div className="rowbuttonTools">
                  <button
                    onClick={() => setOption("1")}
                    className="Toolsbutton2"
                  >
                    Option 1
                  </button>
                  <button
                    onClick={() => setOption("2")}
                    className="Toolsbutton"
                  >
                    Option 2
                  </button>
                  <button
                    onClick={() => setOption("3")}
                    className="Toolsbutton"
                  >
                    Option 3
                  </button>
                  <button
                    onClick={() => setOption("4")}
                    className="Toolsbutton"
                  >
                    Option 4
                  </button>
                </div>
              ) : option === "2" ? (
                <div className="rowbuttonTools">
                  <button
                    onClick={() => setOption("1")}
                    className="Toolsbutton"
                  >
                    Option 1
                  </button>
                  <button
                    onClick={() => setOption("2")}
                    className="Toolsbutton2"
                  >
                    Option 2
                  </button>
                  <button
                    onClick={() => setOption("3")}
                    className="Toolsbutton"
                  >
                    Option 3
                  </button>
                  <button
                    onClick={() => setOption("4")}
                    className="Toolsbutton"
                  >
                    Option 4
                  </button>
                </div>
              ) : option === "3" ? (
                <div className="rowbuttonTools">
                  <button
                    onClick={() => setOption("1")}
                    className="Toolsbutton"
                  >
                    Option 1
                  </button>
                  <button
                    onClick={() => setOption("2")}
                    className="Toolsbutton"
                  >
                    Option 2
                  </button>
                  <button
                    onClick={() => setOption("3")}
                    className="Toolsbutton2"
                  >
                    Option 3
                  </button>
                  <button
                    onClick={() => setOption("4")}
                    className="Toolsbutton"
                  >
                    Option 4
                  </button>
                </div>
              ) : option === "4" ? (
                <div className="rowbuttonTools">
                  <button
                    onClick={() => setOption("1")}
                    className="Toolsbutton"
                  >
                    Option 1
                  </button>
                  <button
                    onClick={() => setOption("2")}
                    className="Toolsbutton"
                  >
                    Option 2
                  </button>
                  <button
                    onClick={() => setOption("3")}
                    className="Toolsbutton"
                  >
                    Option 3
                  </button>
                  <button
                    onClick={() => setOption("4")}
                    className="Toolsbutton2"
                  >
                    Option 4
                  </button>
                </div>
              ) : null}
            </Box>
          </Modal>
        </Box>
      </Box>
    </div>
  );
}
export default Tool;
