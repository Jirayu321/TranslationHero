import * as React from "react";
import "./Matching.css";
import profile from "../../Images/Avatar7.png";
import Navbars from "../Navbar/navbarHome2.js";
import Drawer from "../Drawer/DrawerCustomer";
import {
  FaLanguage,
  FaFile,
  FaLongArrowAltLeft,
  FaLongArrowAltRight,
} from "react-icons/fa";

import {
  IconButton,
  Input,
  Box,
  Autocomplete,
  TextField,
  Stack,
  Rating,
  Modal,
  Typography,
} from "@mui/material";
import { data } from "../Data/data";
import { useNavigate,useLocation } from "react-router-dom";
import moment from"moment"


const Matching = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [languages, setLanguages] = React.useState("");
  const [languages2, setLanguages2] = React.useState("");
  const [page, setPage] = React.useState("Text");
  const [findA_Translator, setFindA_Translator] = React.useState("Translate");
  const [textarea, setTextarea] = React.useState("");
  const [images, setImages] = React.useState([]);
  const [imageURLs, setImageURLs] = React.useState([]);
  const [open, setOpen] = React.useState(false);


const Doc = location.state.name
// const Type = location.state.type
const Time = moment(new Date()).format("h:mm:ss") 
const Day = moment(new Date()).format("DD MMM YYYY") 


  const handleChange = (event) => {
    setTextarea(event.target.value);
  };
  const switchLanguage = () => {
    setLanguages(languages2);
    setLanguages2(languages);
  };

  function onImageChange(e) {
    setImages([...e.target.files]);
  }
  const find_Translator = () => {
    setFindA_Translator("Find_ATranslator");
    window.scroll(0, 0);
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  React.useEffect(() => {
    if (images.length < 1) return;
    const newImageUrls = [];
    images.forEach((image) => newImageUrls.push(URL.createObjectURL(image)));
    setImageURLs(newImageUrls);
  }, [images]);

  return (
    <div className="App-body-Order">
      <header className="App-header">
        <Navbars />
      </header>

      <Box sx={{ display: "flex", width: "100% " }}>
        <Drawer />
        {findA_Translator === "Translate" ? (
          <>
            <div style={{ marginTop: 60, height: 100 }}>
              <h4
                style={{
                  fontWeight: 500,
                  fontSize: 26,
                  color: " #034D82",
                  marginLeft: 20,
                  position: "absolute",
                  top: "13%",
                }}
              >
                Translate
              </h4>
            </div>
            <div className="bodyMatching">
              <div style={{ margin: 30 }}>
                <p
                  style={{
                    textAlign: "start",
                    color: "#034D82",
                    fontWeight: 600,
                    fontSize: 24,
                  }}
                >
                  {location.state.name}
                </p>

                {page === "Text" ? (
                  <div>
                    <div style={{ textAlign: "start" }}>
                      <button
                        className="buttonMatching1"
                        onClick={() => setPage("Text")}
                      >
                        <FaLanguage className="iconsMatching" />
                        <p className="textMatching">Text</p>
                      </button>
                      <button
                        className="buttonMatching"
                        onClick={() => setPage("File")}
                      >
                        <FaFile className="iconsMatching" />
                        <p className="textMatching">File</p>
                      </button>
                    </div>
                    <div style={{ float: "left" }}>
                      <p
                        style={{
                          textAlign: "start",
                          color: "#353535",
                          fontSize: 18,
                          marginBottom: 20,
                        }}
                      >
                        language
                      </p>
                      <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={data}
                        sx={{ width: 582 }}
                        renderInput={(params) => (
                          <TextField {...params} label="language" />
                        )}
                        isOptionEqualToValue={(option, value) =>
                          option.code === value
                        }
                        value={languages}
                        onChange={(event, value) => setLanguages(value?.label)}
                      />
                    </div>

                    <button
                      style={{
                        float: "left",
                        width: 30,
                        top: 60,
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
                          marginBottom: 20,
                        }}
                      >
                        language
                      </p>
                      <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={data}
                        sx={{ width: 582 }}
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

                    <div>
                      <textarea
                        value={textarea}
                        onChange={handleChange}
                        maxLength={350}
                        style={{
                          position: "relative",
                          width: "100%",
                          height: 300,
                          background: "#FFFFFF",
                          border: "1px solid #E5E5E5",
                          boxSizing: "border-box",
                          borderRadius: 5,
                          padding: 20,
                          top: 30,
                          fontSize: 25,
                        }}
                        placeholder="Text"
                      />
                    </div>

                    <div style={{ marginTop: 38 }}>
                      <div style={{ float: "left" }}>
                        <button
                          style={{
                            width: 100,
                            height: 40,
                            background: "transparent",
                            color: "#CF0202",
                            border: "1px solid #CF0202",
                            borderRadius: 5,
                          }}
                          onClick={() => setFindA_Translator("Translate")}
                        >
                          Cancle
                        </button>
                      </div>
                      <div style={{ textAlign: "end" }}>
                        <button
                          style={{
                            width: 200,
                            height: 40,
                            background: "#047ACF",
                            color: "#FFFFFF",
                            border: "none",
                            borderRadius: 5,
                          }}
                          onClick={() => find_Translator()}
                        >
                          Find a translator
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div style={{ textAlign: "start" }}>
                      <button
                        className="buttonMatching"
                        onClick={() => setPage("Text")}
                      >
                        <FaLanguage className="iconsMatching" />
                        <p className="textMatching">Text</p>
                      </button>
                      <button
                        className="buttonMatching1"
                        onClick={() => setPage("File")}
                      >
                        <FaFile className="iconsMatching" />
                        <p className="textMatching">File</p>
                      </button>
                    </div>
                    <p
                      style={{
                        fontSize: 25,
                        fontWeight: 800,
                        marginBottom: 20,
                      }}
                    >
                      select document
                    </p>
                    <p
                      style={{
                        fontSize: 25,
                        fontWeight: 800,
                        marginBottom: 20,
                      }}
                    >
                      Upload a .docx, .pdf, .pptx, or .xlsx file.
                    </p>
                    {images.length < 1 ? (
                      <div
                        style={{
                          position: "relative",
                          borderColor: "#0865A8",
                          borderWidth: 2,
                          margin: 25,
                          left: "40%",
                          width: 200,
                          height: 40,
                          background: "#047ACF",
                          color: "#FFFFFF",
                          border: "none",
                          borderRadius: 5,
                        }}
                      >
                        <label htmlFor="icon-button-file">
                          <Input
                            accept="image/*"
                            id="icon-button-file"
                            type="file"
                            style={{ display: "none" }}
                            onChange={onImageChange}
                          />
                          <IconButton
                            color="primary"
                            aria-label="upload picture"
                            component="span"
                          >
                            <p
                              style={{
                                fontSize: 18,
                                color: "#FFFF",
                                position: "relative",
                              }}
                            >
                              Upload File
                            </p>
                          </IconButton>
                        </label>
                      </div>
                    ) : (
                      <div
                        style={{
                          borderRadius: 100,
                          width: 100,
                          height: 100,
                          position: "relative",
                          borderWidth: 2,
                          margin: 25,
                          left: "30%",
                          fontSize: 18,
                        }}
                      >
                        <label htmlFor="icon-button-file">
                          <Input
                            accept="image/*"
                            id="icon-button-file"
                            type="file"
                            style={{ display: "none" }}
                            onChange={onImageChange}
                          />
                          <IconButton
                            color="primary"
                            aria-label="upload picture"
                            component="span"
                          >
                            {/* {imageURLs.map((imageSrc, idx) => (
                          <img
                            key={idx}
                            src={imageSrc}
                            alt="imageURLs"
                            style={{
                              position: "absolute",
                              width: 90,
                              height: 90,
                              borderRadius: "100%",
                              top: -20,
                            }}
                          />
                        ))} */}
                            {imageURLs.map((imageSrc, idx) => (
                              <p>{imageURLs}</p>
                            ))}
                          </IconButton>
                        </label>
                      </div>
                    )}
                    <div style={{ marginTop: "18%" }}>
                      <div style={{ float: "left" }}>
                        <button
                          style={{
                            width: 100,
                            height: 40,
                            background: "transparent",
                            color: "#CF0202",
                            border: "1px solid #CF0202",
                            borderRadius: 5,
                          }}
                          onClick={() => setFindA_Translator("Translate")}
                        >
                          Cancle
                        </button>
                      </div>
                      <div style={{ textAlign: "end" }}>
                        <button
                          style={{
                            width: 200,
                            height: 40,
                            background: "#047ACF",
                            color: "#FFFFFF",
                            border: "none",
                            borderRadius: 5,
                          }}
                          onClick={() => find_Translator()}
                        >
                          Find a translator
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </>
        ) : (
          <>
            <div style={{ marginTop: 60, height: 100 }}>
              <h4
                style={{
                  fontWeight: 500,
                  fontSize: 26,
                  color: " #034D82",
                  marginLeft: 20,
                  position: "absolute",
                  top: "13%",
                }}
              >
                Find a translator
              </h4>
            </div>
            <div className="bodyMatchingFind">
              <div style={{ margin: 30 }}>
                <p
                  style={{
                    textAlign: "start",
                    color: "#034D82",
                    fontWeight: 600,
                    fontSize: 24,
                  }}
                >
                  {location.state.name}
                </p>
                <p
                  style={{
                    textAlign: "start",
                    color: "#034D82",
                    fontWeight: 600,
                    fontSize: 17,
                    marginTop: 10,
                    float: "left",
                  }}
                >
                  language :
                </p>
                {languages === "English" ? (
                  <p
                    style={{
                      textAlign: "start",
                      color: "#353535",
                      fontWeight: 600,
                      fontSize: 17,
                      marginTop: 10,
                      float: "left",
                      marginLeft: 25,
                    }}
                  >
                    EN
                  </p>
                ) : languages === "German" ? (
                  <p
                    style={{
                      textAlign: "start",
                      color: "#353535",
                      fontWeight: 600,
                      fontSize: 17,
                      marginTop: 10,
                      float: "left",
                      marginLeft: 25,
                    }}
                  >
                    DE
                  </p>
                ) : languages === "Thai" ? (
                  <p
                    style={{
                      textAlign: "start",
                      color: "#353535",
                      fontWeight: 600,
                      fontSize: 17,
                      marginTop: 10,
                      float: "left",
                      marginLeft: 25,
                    }}
                  >
                    TH
                  </p>
                ) : null}

                <p
                  style={{
                    float: "left",
                    width: 15,
                    top: 12,
                    position: "relative",
                    fontSize: 18,
                    marginLeft: 20,
                    marginRight: 20,
                    background: "transparent",
                    border: "none",
                    color: "#353535",
                  }}
                  onClick={() => switchLanguage()}
                >
                  <FaLongArrowAltRight style={{ position: "absolute" }} />

                  <FaLongArrowAltLeft style={{ position: "relative" }} />
                </p>

                {languages2 === "English" ? (
                  <p
                    style={{
                      textAlign: "start",
                      color: "#353535",
                      fontWeight: 600,
                      fontSize: 17,
                      marginTop: 10,
                    }}
                  >
                    EN
                  </p>
                ) : languages2 === "German" ? (
                  <p
                    style={{
                      textAlign: "start",
                      color: "#353535",
                      fontWeight: 600,
                      fontSize: 17,
                      marginTop: 10,
                    }}
                  >
                    DE
                  </p>
                ) : languages2 === "Thai" ? (
                  <p
                    style={{
                      textAlign: "start",
                      color: "#353535",
                      fontWeight: 600,
                      fontSize: 17,
                      marginTop: 10,
                    }}
                  >
                    TH
                  </p>
                ) : null}
                <div style={{ width: "7%", float: "left", marginRight: 20 }}>
                  <p
                    style={{
                      textAlign: "end",
                      color: "#034D82",
                      fontWeight: 600,
                      fontSize: 17,
                      marginTop: 10,
                    }}
                  >
                    Text :
                  </p>
                </div>
                <p
                  style={{
                    color: "#353535",
                    fontWeight: 600,
                    fontSize: 17,
                    marginTop: 10,
                    textAlign: "start",
                  }}
                >
                  {textarea}
                </p>
              </div>
            </div>
            <div style={{ position: "relative", top: "215%", width: "100%" }}>
              <h4
                style={{
                  fontWeight: 500,
                  fontSize: 26,
                  color: "#034D82",
                  marginLeft: 20,
                  textAlign: "start",
                }}
              >
                Translator
              </h4>
              <div className="cardTranslator">
                <div style={{ position: "relative", top: 30 }}>
                  <img src={profile} alt="profile" className="profile" />
                  <p style={{ marginTop: 10, fontWeight: 400, fontSize: 18 }}>
                    Ozone Black
                  </p>
                  <div style={{ width: "100%", marginLeft: 60 }}>
                    <p style={{ float: "left", marginRight: 10 }}>5.0</p>
                    <Stack spacing={1}>
                      <Rating
                        name="half-rating-read"
                        defaultValue={5}
                        readOnly
                      />
                    </Stack>
                  </div>
                  <div
                    style={{
                      fontSize: 13,
                      marginLeft: 30,
                      marginRight: 30,
                      marginTop: 10,
                    }}
                  >
                    <p style={{ float: "left" }}>Skills :</p>
                    <p>
                      Translating theses, articles, important documents, movie
                      subtitles
                    </p>
                  </div>
                  <div
                    style={{
                      fontSize: 13,
                      marginLeft: 30,
                      marginRight: 30,
                      marginTop: 10,
                    }}
                  >
                    <p style={{ float: "left" }}>Languages :</p>
                    <p>English,汉语 官话,粵語, ไทย,한국어</p>
                    <button
                      style={{
                        width: 200,
                        height: 40,
                        background: "#047ACF",
                        color: "#FFFFFF",
                        border: "none",
                        borderRadius: 20,
                        marginTop: 20,
                      }}
                      // onClick={() => handleOpen()}
                      onClick={()=> navigate("/Order",{state:{Doc:Doc,Time:Time,Day:Day}})}

                    >
                      Deal
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: 400,
                  bgcolor: "background.paper",
                  border: "2px solid #000",
                  boxShadow: 24,
                  p: 4,
                  textAlign: "center",
                }}
              >
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  coming soon
                </Typography>
              </Box>
            </Modal>
          </>
        )}
      </Box>
    </div>
  );
};

export default Matching;
