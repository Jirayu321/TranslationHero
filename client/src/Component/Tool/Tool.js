import * as React from "react";
import { Box, Modal, Autocomplete, TextField } from "@mui/material";
import Drawer from "../Drawer/DrawerTranslate";
import Navbars from "../Navbar/navbarTanslater";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
import Icons from "../../Images/icons_ai.png";
import { BsFileEarmarkText } from "react-icons/bs";
import { ImTextColor } from "react-icons/im";
import {
  FaRegFileImage,
  FaLongArrowAltLeft,
  FaLongArrowAltRight,
} from "react-icons/fa";
import { data } from "../Data/data";
import "./Tool.css";

function Tool() {
  const [typeOpen, setTypeOpen] = React.useState(false);
  const [page, setPage] = React.useState("");
  const [languages, setLanguages] = React.useState("");
  const [languages2, setLanguages2] = React.useState("");
  const [textex, setText] = React.useState("");
  const [translateFrom, setTranslateFrom] = React.useState("");

  // const [value_Text, setValue_Text] = React.useState("");

  const handleChange = (content) => {
    console.log(content.trim());
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

  const TranslateFrom = (x) => {
    setLanguages(x);
    if (x === "English") {
      setTranslateFrom("en");
    } else if (x === "Thai") {
      setTranslateFrom("th");
    } else if (x === "German") {
      setTranslateFrom("de");
    } else {
      setTranslateFrom("en");
    }
  };

  const translate = () => {
    const text = textex
    const translateTo = languages2;
    console.log(typeof text);
    let apiUrl = `https://api.mymemory.translated.net/get?q=${text}&langpair=${translateFrom}|${translateTo}`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        const valueText = data.responseData.translatedText;
        console.log(valueText);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div className="AppBobyTool">
      <header className="App-header">
        <Navbars />
      </header>
      <Box sx={{ display: "flex", width: "100% " }}>
        <Drawer />
        <Box component="main">
          <div className="BobyTool">
            <p className="TextHTool">Tool</p>

            <div className="FormBtton">
              <button className="helper" onClick={() => setTypeOpen(true)}>
                <img alt="Icons" src={Icons} />
                <p>helper</p>
              </button>
              <button className="Submit">Submit work</button>
            </div>
            {page === "" ? (
              <div className="BoxSunEditor">
                <div className="InBoxSunEditor">
                  <BsFileEarmarkText className="BsFileEarmarkText" />
                  <div>
                    <p>NameFile</p>
                  </div>
                </div>
                <SunEditor
                  height="350px"
                  className="SunEditor"
                  onBlur={(e) => handleChange(e.target.innerText)}
                />
              </div>
            ) : (
              <div className="BoxSunEditor">
                <div className="InBoxSunEditor">
                  {/* <BsFileEarmarkText className="BsFileEarmarkText" /> */}
                  <p>TEXT SCAN</p>
                </div>
                <SunEditor
                  height="350px"
                  className="SunEditor"
                  onBlur={(e) => handleChange(e.target.innerText)}
                />
                <div className="form">
                  <div className="formIn">
                    <div style={{ float: "left" }}>
                      <p
                        style={{
                          textAlign: "start",
                          color: "#353535",
                          fontSize: 18,
                        }}
                      >
                        Translate From
                      </p>
                      <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={data}
                        className="Autocomplete"
                        renderInput={(params) => (
                          <TextField {...params} label="language" />
                        )}
                        isOptionEqualToValue={(option, value) =>
                          option.code === value
                        }
                        value={languages}
                        onChange={(event, value) => TranslateFrom(value?.label)}
                      />
                    </div>

                    <button
                      style={{
                        float: "left",
                        width: 30,
                        top: 35,
                        position: "relative",
                        fontSize: 30,
                        marginLeft: 20,
                        marginRight: 20,
                        background: "transparent",
                        border: "none",
                        color: "#262DBB",
                      }}
                      onClick={() => switchLanguage()}
                    >
                      <FaLongArrowAltRight style={{ position: "absolute" }} />

                      <FaLongArrowAltLeft style={{ position: "relative" }} />
                    </button>

                    <div style={{ float: "left" }}>
                      <p
                        style={{
                          textAlign: "start",
                          color: "#353535",
                          fontSize: 18,
                        }}
                      >
                        Translate To
                      </p>
                      <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={data}
                        className="Autocomplete"
                        renderInput={(params) => (
                          <TextField {...params} label="language" />
                        )}
                        isOptionEqualToValue={(option, value) =>
                          option.code === value
                        }
                        value={languages2}
                        onChange={(event, value) => setLanguages2(value?.label)}
                      />
                    </div>
                  </div>

                  <div className="formIn2">
                    <button
                      style={{
                        float: "left",
                        width: 115,
                        fontSize: 18,
                        marginLeft: 20,
                        marginRight: 20,
                        background: "transparent",
                        border: " 1px solid #E5E5E5",
                        color: "#606060",
                      }}
                      onClick={() => translate()}
                    >
                      Translate
                    </button>
                  </div>
                </div>
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

              <button className="BoxModalButton">
                <p>IMAGE SCAN</p>
                <br />
                <FaRegFileImage className="ImTextColor" />
              </button>
            </Box>
          </Modal>
        </Box>
      </Box>
    </div>
  );
}
export default Tool;
