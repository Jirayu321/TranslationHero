import * as React from "react";
import { Box, Modal, TextField, Checkbox, Avatar } from "@mui/material";

import Drawer from "../Drawer/DrawerCompany";
import Navbars from "../Navbar/navbarManagement.js";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// import ProgressBar from "../Dashboard/ProgressBar";
import moment from "moment";
import "moment/locale/de";
import "moment/locale/th";

// import axios from "axios";

// import { data6 } from "../Data/data";
import imgtest1 from "../../Images/1.jpeg";
import imgtest2 from "../../Images/49.jpeg";
import imgtest3 from "../../Images/dii.jpg";

import axios from "axios";
import { url } from "../../slices/api.js";

import "react-big-calendar/lib/css/react-big-calendar.css";
import { indexOf } from "lodash";

import { CiSearch, CiEdit } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoMdAdd } from "react-icons/io";

import ImageAvatar from "../../Images/Avatar11.png";
// import "./Home2.css";
import styles from "./Management.module.css";

export default function Management() {
  moment.locale("en-US");
  // moment.locale("de");
  // moment.locale("th");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const auth = useSelector((state) => state.auth);
  let Doc = location?.state?.languages;
  let Value = auth?.token;
  const [buttonpage, setButtonpage] = React.useState(1);
  const [buttonpage2, setButtonpage2] = React.useState(1);

  // const events = [
  //   {
  //     title: "THOG0022534",
  //     start: "2023/9/15",
  //     end: "2023/9/15",
  //     allDay: false,
  //     isImportant: true,
  //   },
  //   {
  //     title: "THOG0023535",
  //     start: "2023/9/15",
  //     end: "2023/9/15",
  //     allDay: false,
  //     isImportant: false,
  //   },
  // ];

  function eventStyleGetter(event) {
    let style = {
      backgroundColor: event.isImportant ? "#FFFACD" : "rgb(199 230 247)",
      color: event.isImportant ? "#FFB31F" : "rgb(4 84 212)",
      border: "none",
      padding: "4px 8px",
      alignItems: "flex-start",
      gap: "10px",
      borderRadius: "10px",
    };
    return { style };
  }

  // const messagesTH = {
  //   today: "วันนี้",
  //   next: "ต่อไป",
  //   back: "ย้อนกลับ",
  //   month: "เดือน",
  //   week: "สัปดาห์",
  //   day: "วัน",
  //   agenda: "กำหนดการ",
  //   date: "วันที่",
  //   time: "เวลา",
  //   event: "เหตุการณ์",
  // };
  // const messagesDE = {
  //   today: "Heute",
  //   next: "nächste",
  //   back: "zurück",
  //   month: "Monat",
  //   week: "Woche",
  //   day: "Tag",
  //   agenda: "Agenda",
  //   date: "Datum",
  //   time: "Zeit",
  //   event: "Ereignis",
  // };

  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [open4, setOpen4] = React.useState(false);

  const [amount, setAmount] = React.useState("");
  const [orders, setOrders] = React.useState("");
  const [events, setEvents] = React.useState([]);

  const [checked, setChecked] = React.useState(false); // State to manage checked state

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  // function handleInputChange(event) {
  //   let x = event.target.value;
  //   let a = x - x * 0.13;
  //   setAmount(a);
  // }

  const handleClose = (i) => {
    if (i === 1) {
      setOpen(false);
    } else if (i === 2) {
      setOpen2(false);
      setOpen3(true);
    }
  };

  const setevents = (x) => {
    const date = new Date();

    const formattedDate = date.toLocaleDateString("en-US", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });

    const newEvents = x.map((order, index) => {
      return {
        title: order.orderNumber,
        start: formattedDate, // replace with the actual property name from your order object
        end: order.data.at(index)?.Deadline, // replace with the actual property name from your order object
        allDay: false, // customize as needed
        isImportant: true, // replace with the actual property name from your order object
      };
    });

    console.log("newEvents:", newEvents);

    // Assuming you want to use newEvents in your component or elsewhere
    // Update the state or use it in the desired way
    setEvents(newEvents);
  };

  const setOrder = async () => {
    // console.log("test");
    try {
      // const response = await axios.get(`${url}/getOrder/`);
      const response = await axios.get(`${url}/getOrder/`, {
        params: {
          Translator_name: auth?.name,
        },
      });

      console.log("response.data:", response?.data);
      setOrders(response?.data);
      setevents(response?.data);
    } catch (error) {
      console.error("Error fetching getOrder:", error);
    }
  };

  // console.log("translator", translator);

  React.useEffect(() => {
    if (orders === "") {
      // console.log("Data:", groupData);
      setOrder();
      // window.scrollTo(0, 10);
    } else if (orders) {
      setOrder();
      // console.log("orders", orders);
    }
  }, []);

  return (
    <div className={styles.AppbodyManagement}>
      <header className="App-headerDashboard">
        {Doc === "English" ? (
          <Navbars
            navigate={navigate}
            dispatch={dispatch}
            languages="English"
          />
        ) : Doc === "Thai" ? (
          <Navbars navigate={navigate} dispatch={dispatch} languages="Thai" />
        ) : Doc === "German" ? (
          <Navbars navigate={navigate} dispatch={dispatch} languages="German" />
        ) : (
          <Navbars
            navigate={navigate}
            dispatch={dispatch}
            languages="English"
          />
        )}
      </header>

      <Box className="Drawer_Dashboard_freelance">
        <Drawer
          languages={Doc}
          value={Value}
          dispatch={useDispatch}
          style={{
            width: "100px",
            background: "transparent",
            boxSizing: "unset",
            boxShadow: "none",
            borderRight: "0px solid",
          }}
          sx={{
            width: "100px",
            background: "transparent",
            boxSizing: "unset",
            boxShadow: "none",
            borderRight: "0px solid",
          }}
        />

        <Box component="main">
          {/* Modal */}

          <Modal
            hideBackdrop
            open={open4}
            // onClose={handleClose(3)}
            aria-labelledby="keep-mounted-modal-title"
            aria-describedby="keep-mounted-modal-description"
          >
            <Box
              sx={{
                position: "absolute",
                top: "70%",
                left: "45%",
                transform: "translate(-50%, -70%)",
                width: 800,
                height: 750,
                bgcolor: "background.paper",
                boxShadow: 24,
                padding: "5px",
                borderRadius: 5,
                border: "1px solid #E5E5E5",
                textAlign: "center",
                paddingRight: "25px",
                paddingLeft: "25px",
              }}
            >
              <div>
                <p className="Home2ScheduleDetailModalHard">THOG0024534</p>
              </div>
              {buttonpage2 === 1 ? (
                <div className="Home2ScheduleDetailModal4">
                  <p className="Home2ScheduleDetailModalInHard">Order 1</p>
                  <div className="Home2ScheduleDetailModalBox">
                    <img
                      src={imgtest1}
                      alt="imgtest1"
                      className="Home2imgtest1"
                    />
                  </div>
                </div>
              ) : buttonpage2 === 2 ? (
                <div className="Home2ScheduleDetailModal4">
                  <p className="Home2ScheduleDetailModalInHard">Order 2</p>
                  <div className="Home2ScheduleDetailModalBox">
                    <img
                      src={imgtest2}
                      alt="imgtest2"
                      className="Home2imgtest1"
                    />
                  </div>
                </div>
              ) : buttonpage2 === 3 ? (
                <div className="Home2ScheduleDetailModal4">
                  <p className="Home2ScheduleDetailModalInHard">Order 3</p>
                  <div className="Home2ScheduleDetailModalBox">
                    <img
                      src={imgtest3}
                      alt="imgtest2"
                      className="Home2imgtest1"
                    />
                  </div>
                </div>
              ) : (
                <></>
              )}

              {buttonpage2 === 1 ? (
                <div style={{ display: "flex" }}>
                  <button
                    className="Home2Schedulebuttonpage"
                    onClick={() => setButtonpage2(1)}
                  >
                    1
                  </button>
                  <button
                    className="Home2Schedulebuttonpage2"
                    onClick={() => setButtonpage2(2)}
                  >
                    2
                  </button>
                  <button
                    className="Home2Schedulebuttonpage2"
                    onClick={() => setButtonpage2(3)}
                  >
                    3
                  </button>
                </div>
              ) : buttonpage2 === 2 ? (
                <div style={{ display: "flex" }}>
                  <button
                    className="Home2Schedulebuttonpage2"
                    onClick={() => setButtonpage2(1)}
                  >
                    1
                  </button>
                  <button
                    className="Home2Schedulebuttonpage"
                    onClick={() => setButtonpage2(2)}
                  >
                    2
                  </button>
                  <button
                    className="Home2Schedulebuttonpage2"
                    onClick={() => setButtonpage2(3)}
                  >
                    3
                  </button>
                </div>
              ) : buttonpage2 === 3 ? (
                <div style={{ display: "flex" }}>
                  <button
                    className="Home2Schedulebuttonpage2"
                    onClick={() => setButtonpage2(1)}
                  >
                    1
                  </button>
                  <button
                    className="Home2Schedulebuttonpage2"
                    onClick={() => setButtonpage2(2)}
                  >
                    2
                  </button>
                  <button
                    className="Home2Schedulebuttonpage"
                    onClick={() => setButtonpage2(3)}
                  >
                    3
                  </button>
                </div>
              ) : (
                <></>
              )}

              <div className="Home2Schedulebuttongreu">
                <button
                  className="Home2SchedulebuttonAccept"
                  onClick={() => setOpen4(false)}
                >
                  Submit
                </button>
              </div>
            </Box>
          </Modal>

          <div className={styles?.mainDashboard_Home}>
            <div className={styles?.HeaderDashboard}>
              <p className={styles?.HDashboard}>Management</p>
              <button className={styles.buttonAddMember}>
                <IoMdAdd className={styles.IoMdAdd} />
                <p>Add Member</p>
              </button>
            </div>
            <div>
              <TextField
                // label="Search"
                type="search"
                placeholder="search"
                className={styles.search}
                InputProps={{
                  // Add the Search icon
                  startAdornment: (
                    <CiSearch color="inherit" className={styles.CiSearch} />
                  ),
                }}
              />
              <div className={styles.groupHname}>
                <div>
                  <Checkbox
                    checked={checked} // Pass the checked state
                    onChange={handleChange} // Function to handle change event
                    inputProps={{ "aria-label": "My Checkbox" }} // For accessibility
                    className={styles.Checkbox}
                  />
                </div>
                <div>
                  <p>Name</p>
                </div>
                <div>
                  <p>Email</p>
                </div>
                <div className={styles.Name2}>
                  <p>Phone number</p>
                </div>
                <div className={styles.Name2}>
                  <p>Total work</p>
                </div>
                <div></div>
              </div>
              <div className={styles.groupData}>
                <div>
                  <Checkbox
                    checked={checked} // Pass the checked state
                    onChange={handleChange} // Function to handle change event
                    inputProps={{ "aria-label": "My Checkbox" }} // For accessibility
                    className={styles.Checkbox}
                  />
                </div>
                <div className={styles.Name}>
                  <Avatar alt="Remy Sharp" src={ImageAvatar} />
                  <div>
                    <p className={styles.textName}>Sittiphon Thongdee</p>
                    <p className={styles.textActive}>Active 15 minutes ago</p>
                  </div>
                </div>
                <div>
                  <p>Sittiphon_01@MPGG.co.th</p>
                </div>
                <div className={styles.Name2}>
                  <p>0933445677</p>
                </div>
                <div className={styles.Name2}>
                  <p>12</p>
                </div>
                <div className={styles.groupbutton}>
                  <div className={styles.button1}>
                    <RiDeleteBin6Line />
                  </div>
                  <div className={styles.button2}>
                    <CiEdit />
                  </div>
                  <div className={styles.button3}>
                    <IoEyeOutline />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Box>
      </Box>
    </div>
  );
}
