import * as React from "react";

import Navbars from "../Navbar/navbarHome";
import Footer from "../Footer/Footer";
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
  Rating,
  Modal,
  Typography,
  InputAdornment,
} from "@mui/material";
import EventIcon from "@mui/icons-material/Event";

import { FaUserCircle } from "react-icons/fa";
import { MdArrowDropDown } from "react-icons/md";
import { RiDeleteBin5Fill } from "react-icons/ri";
import {
  IoMdAddCircleOutline,
  IoIosArrowBack,
  IoIosArrowForward,
} from "react-icons/io";

import Fileimg from "../../Images/file.png";

import {
  CustomerEN,
  //  CustomerDE,
  //  CustomerTH
} from "../Data/DataLanguage";

import styles from "./Customer.module.css";

const Customer = () => {
  const { innerWidth: width, innerHeight: height } = window;
  const location = useLocation();
  const navigate = useNavigate();
  let Doc = location?.state?.languages;

  const [type, settype] = React.useState(null);
  const [trantype, setTranstype] = React.useState("");
  const [textarea, setTextarea] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [tranfrom, setTranfrom] = React.useState("");
  const [tranto, setTranto] = React.useState("");
  const [file, setFile] = React.useState("");
  const [promo, setPromo] = React.useState("");
  const [checked, setChecked] = React.useState({
    checked1: false,
    checked2: false,
    checked3: false,
    checked4: false,
    checked5: false,
  });
  const [open, setOpen] = React.useState(false);

  // const [date, setDate] = React.useState(new Date());

  // const onChange = (date) => {
  //   setDate(date);
  // };

  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleChange = (event) => {
    setTextarea(event.target.value);
  };

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const set_price = (trantype) => {
    // console.log("trantype :", typeof trantype);
    if (trantype === "Article") {
      setPrice("15 $");
    } else if (trantype === "Identification Card") {
      setPrice("20 $");
    } else if (trantype === "Family Status Registration") {
      setPrice("25 $");
    } else if (trantype === "Personal information") {
      setPrice("35 $");
    } else if (trantype === "Civil Registration Certificate") {
      setPrice("45 $");
    } else if (trantype === "Certificate of use (the noun prefix") {
      setPrice("55 $");
    } else if (trantype === "") {
      setPrice("0 $");
    } else {
      setPrice("100 $");
    }
  };

  const promotion = (x) => {
    setPromo(x);
    window.scrollTo(0, 1500);
    set_price(trantype);
  };

  const goSignup = () => {
    navigate("/Signup");
  };

  const cutsting = (x) => {
    console.log(x);
    return x.slice(0, 30);
  };

  function Deal() {
    window.scroll(0, 0);
    setOpen(true);
  }

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
      <Modal
        hideBackdrop
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 5,
            border: "1px solid #E5E5E5",
            textAlign: "center",
            top: "15vh",
            left: "30vw",
          }}
        >
          <Typography
            id="keep-mounted-modal-description"
            sx={{ mt: 2, textAlign: "center" }}
          >
            <div className={styles.Logo} />
            <p className={styles.H_text01}>
              Receipt confirming the order of translation
            </p>
          </Typography>
          <Typography
            id="keep-mounted-modal-description"
            sx={{
              mt: 2,
            }}
          ></Typography>
          <Typography
            id="keep-mounted-modal-description"
            sx={{
              mt: 2,
              textAlign: "left",
              overflowY: "auto",
            }}
          >
            <div>
              <p>Document Type</p>
              <p></p>
            </div>

            <div>
              <p>Translation Type</p>
              <p></p>
            </div>

            <div>
              <p>Translate to</p>
              <p></p>
            </div>

            <div>
              <p>Additional explanation</p>
              <p></p>
            </div>

            <div>
              <p>Price</p>
              <p></p>
            </div>

            <div>
              <p></p>
              <p></p>
            </div>
          </Typography>
          <div
            style={{
              textAlign: "left",
              borderTop: "1px solid #C4C4C4",
            }}
          ></div>
        </Box>
      </Modal>

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
                <button className={styles.fram1_button2}>Subscribe</button>
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
              {file === "" ? (
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
                      onChange={(e) => setFile(e.target.value)}
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
                      onChange={(e) => setFile(e.target.value)}
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
                        {cutsting(file)}
                      </p>
                    </IconButton>
                  </label>
                </div>
              )}

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
                    autoHighlight
                    getOptionLabel={(option) => option.label}
                    onChange={(event, value) => settype(value?.label)}
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
                  {type === null ? (
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
                      getOptionLabel={(option) => option.label}
                      onChange={(event, value) => setTranstype(value.label)}
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
                    />
                  ) : type === "Official Document" ? (
                    <Autocomplete
                      id="country-select-demo"
                      sx={{
                        width: 300,
                        margin: 0,
                        marginBottom: "30px",
                        height: "30px",
                      }}
                      options={data4}
                      autoHighlight
                      getOptionLabel={(option) => option.label}
                      onChange={(event, value) => setTranstype(value?.label)}
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
                    />
                  ) : type === "General Document" ? (
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
                      getOptionLabel={(option) => option.label}
                      onChange={(event, value) => setTranstype(value?.label)}
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
                      getOptionLabel={(option) => option.label}
                      onChange={(event, value) => console.log(value?.label)}
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
                    getOptionLabel={(option) => option.label}
                    onChange={(event, value) => setTranfrom(value?.label)}
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
                    getOptionLabel={(option) => option.label}
                    onChange={(event, value) => setTranto(value?.label)}
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
                      value={selectedDate}
                      onChange={(date) => setSelectedDate(date)}
                      renderInput={(props) => (
                        <TextField
                          {...props}
                          sx={{ position: "absolute", width: "45vw" }}
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <EventIcon />
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
                    marginTop: 80,
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
                    value={textarea}
                    onChange={handleChange}
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

                <div style={{ position: "relative", top: 160 }}>
                  <button className={styles.buttonAddandDelete}>
                    <RiDeleteBin5Fill style={{ color: " #f04438" }} />
                    <p className={styles.TextbuttonAddandDelete1}>Delete</p>
                  </button>
                </div>
                <div style={{ position: "relative", top: 160, left: 200 }}>
                  <button className={styles.buttonAddandDelete}>
                    <IoMdAddCircleOutline
                      style={{
                        color: "#3b005f",
                        fontSize: 20,
                      }}
                    />
                    <p className={styles.TextbuttonAddandDelete2}>Add order</p>
                  </button>
                </div>

                {/* ตรงนี้ */}
                <div className={styles.Box_next}>
                  <div>
                    <button className={styles.buttonArrow}>
                      <IoIosArrowBack className={styles.icon1} />
                    </button>
                    <button className={styles.buttonArrow}>1</button>
                    <button className={styles.buttonArrow2}>2</button>
                    <button className={styles.buttonArrow}>
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
                    top: "95vh",
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
                        <Autocomplete
                          id="country-select-demo"
                          sx={{
                            width: 300,
                            margin: 0,
                            marginBottom: "30px",
                            height: "30px",
                          }}
                          options={data2}
                          autoHighlight
                          getOptionLabel={(option) => option.label}
                          onChange={(event, value) => settype(value?.label)}
                          popupIcon={
                            <MdArrowDropDown
                              style={{
                                color: "#333333",
                                width: 30,
                                height: 33,
                              }}
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
                        />
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

                    <div>
                      <div className={styles.cardTranslator}>
                        <div
                          style={{
                            position: "relative",
                            top: 30,
                            textAlign: "center",
                          }}
                        >
                          {/* <img
                              src={profile}
                              alt="profile"
                              className={styles.profile}
                            /> */}
                          <FaUserCircle
                            alt="avatar"
                            className={styles.profile}
                          />
                          <p
                            style={{
                              marginTop: 10,
                              fontWeight: 400,
                              fontSize: 18,
                            }}
                          >
                            Habi
                          </p>
                          <div style={{ width: "100%", marginLeft: 60 }}>
                            <p style={{ float: "left", marginRight: 10 }}>
                              5.0
                            </p>
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
                            <p>General Document, Official Document</p>
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
                            <div className={styles.boxPrice}>
                              <p className={styles.Price}>Price</p>
                              <p className={styles.PriceInt}>35.99฿</p>
                            </div>
                            <button
                              className={styles.Deal}
                              onClick={() => Deal()}
                            >
                              Deal
                            </button>
                          </div>
                        </div>
                      </div>
                      {/* dlmldmfl;dm */}
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

          <div style={{ position: "relative" }}>
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
