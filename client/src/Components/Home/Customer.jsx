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

import Fileimg from "../../Images/file.png";
import languages from "../../Images/languages.png";
import rating from "../../Images/Rating.png";
import skills from "../../Images/skills.png";

import {
  CustomerEN,
  //  CustomerDE,
  //  CustomerTH
} from "../Data/DataLanguage";

import styles from "./Customer.module.css";

const Customer = () => {
  const { innerWidth: width } = window;
  const location = useLocation();
  const navigate = useNavigate();
  let Doc = location?.state?.languages;

  const [promo, setPromo] = React.useState("");
  const [from, setFrom] = React.useState({
    file: "",
    document_Type: "",
    translation_Type: "",
    tranfrom: "",
    tranto: "",
    Deadline: new Date(),
    Additional_explanation: "",
    type: "",
  });
  const [groupData, setGroupData] = React.useState(null);
  const count = groupData?.length;
  const [page, setPage] = React.useState(1);

  const [checked, setChecked] = React.useState({
    checked1: false,
    checked2: false,
    checked3: false,
    checked4: false,
    checked5: false,
  });
  const [open, setOpen] = React.useState(false);

  const [openModel1, setOpenModel1] = React.useState(false);

  const handleChange = (event) => {
    setFrom({ ...from, Additional_explanation: event.target.value });
  };

  React.useEffect(() => {
    console.log("groupData,page:", groupData, count);
  }, [groupData]);

  function Add_data() {
    if (groupData === null) {
      setGroupData([from]);
      setFrom({
        file: "",
        document_Type: "",
        translation_Type: "",
        tranfrom: "",
        tranto: "",
        Deadline: new Date(),
        Additional_explanation: "",
      });
    } else {
      setGroupData([...groupData, from]);
      setFrom({
        file: "",
        document_Type: "",
        translation_Type: "",
        tranfrom: "",
        tranto: "",
        Deadline: new Date(),
        Additional_explanation: "",
      });
    }
  }

  function Delete_data(e) {
    console.log("groupData:", groupData);
    let x = e - 1;
    groupData.splice(x, 1);
  }

  function switch_page(x) {
    console.log("page:", page);
    if (x === "next") {
      if (page === count) {
        setPage(count);
      } else {
        if (count) {
          setPage((prevPage) => prevPage + 1);
        }
      }
    } else if (x === "back") {
      if (page === 1) {
        setPage(1);
      } else {
        setPage((prevPage) => prevPage - 1);
      }
    } else {
      setPage(x);
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
    setPromo(x);
    window.scrollTo(0, 1500);
    setGroupData([from]);
  }

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
    setTimeout(function () {
      setOpen(false);
      setOpenModel1(true);
    }, 10000);
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
        open={openModel1}
        onClose={() => openModel1(false)}
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
            left: "35vw",
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
          {groupData ? (
            <Typography
              id="keep-mounted-modal-description"
              sx={{
                mt: 2,
                textAlign: "left",
                overflowY: "auto",
              }}
            >
              <div className={styles.Box_detailH_Model}>
                <p className={styles.H_Model}>Document Type</p>
                <p className={styles.H_Model2}>{groupData[0]?.document_Type}</p>
              </div>

              <div className={styles.Box_detailH_Model}>
                <p className={styles.H_Model}>Translation Type</p>
                <p className={styles.H_Model2}>
                  {groupData[0]?.translation_Type}
                </p>
              </div>

              <div className={styles.Box_detailH_Model}>
                <p className={styles.H_Model}>Translate to</p>
                <p className={styles.H_Model2}>{groupData[0]?.tranto}</p>
              </div>

              <div className={styles.Box_detailH_Model}>
                <p className={styles.H_Model}>Additional explanation</p>
                <p className={styles.H_Model2}>
                  {groupData[0]?.Additional_explanation}
                </p>
              </div>

              <div className={styles.Box_detailH_Model}>
                <p className={styles.H_Model}>Price</p>
                <p className={styles.H_Model3}></p>
              </div>

              <button
                className={styles.buttonModel1}
                onClick={() => setOpenModel1(false)}
              >
                Pay
              </button>
              <button
                className={styles.buttonModel1_2}
                onClick={() => setOpenModel1(false)}
              >
                Cancel
              </button>
            </Typography>
          ) : (
            <Typography
              id="keep-mounted-modal-description"
              sx={{
                mt: 2,
                textAlign: "left",
                overflowY: "auto",
              }}
            >
              <div className={styles.Box_detailH_Model}>
                <p className={styles.H_Model}>Document Type</p>
                <p className={styles.H_Model2}>{groupData?.document_Type}</p>
              </div>

              <div className={styles.Box_detailH_Model}>
                <p className={styles.H_Model}>Translation Type</p>
                <p className={styles.H_Model2}>{groupData?.translation_Type}</p>
              </div>

              <div className={styles.Box_detailH_Model}>
                <p className={styles.H_Model}>Translate to</p>
                <p className={styles.H_Model2}>{groupData?.translation_Type}</p>
              </div>

              <div className={styles.Box_detailH_Model}>
                <p className={styles.H_Model}>Additional explanation</p>
                <p className={styles.H_Model2}>{groupData?.translation_Type}</p>
              </div>

              <div className={styles.Box_detailH_Model}>
                <p className={styles.H_Model}>Price</p>
                <p className={styles.H_Model3}>{groupData?.translation_Type}</p>
              </div>

              <button className={styles.buttonModel1}>Pay</button>
              <button
                className={styles.buttonModel1_2}
                onClick={() => setOpenModel1(false)}
              >
                Cancel
              </button>
            </Typography>
          )}
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
                    defaultValue={(option) => option?.label}
                    autoHighlight
                    getOptionLabel={(option) => option?.label}
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
                      options={data5}
                      autoHighlight
                      getOptionLabel={(option) => option?.label}
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
                      options={data4}
                      autoHighlight
                      getOptionLabel={(option) => option?.label}
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
                      getOptionLabel={(option) => option?.label}
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
                      getOptionLabel={(option) => option?.label}
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
                    getOptionLabel={(option) => option?.label}
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
                    getOptionLabel={(option) => option?.label}
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
                      onChange={(date) => setFrom({ ...from, Deadline: date })}
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
                  <div>
                    <button
                      className={styles.buttonArrow}
                      onClick={() => switch_page("back")}
                    >
                      <IoIosArrowBack className={styles.icon1} />
                    </button>

                    {groupData === null || groupData === undefined ? (
                      <button className={styles.buttonArrow2}>1</button>
                    ) : (
                      groupData?.map((item, index) => {
                        const buttonNumber = index + 1;
                        const isCurrentPage = buttonNumber === page;
                        const buttonStyle = isCurrentPage
                          ? styles.buttonArrow2
                          : styles.buttonArrow;

                        return (
                          <button
                            key={index}
                            className={buttonStyle}
                            onClick={() => switch_page(buttonNumber)}
                          >
                            {buttonNumber}
                          </button>
                        );
                      })
                    )}

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
                          getOptionLabel={(option) => option?.label}
                          onChange={(event, value) =>
                            setFrom({ ...from, type: value?.label })
                          }
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
                              onClick={() => Deal()}
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
