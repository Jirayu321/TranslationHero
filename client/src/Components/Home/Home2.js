import * as React from "react";
import {
  Box,
  // Collapse,
  // Alert,
  // IconButton,
  // AlertTitle,
  Modal,
} from "@mui/material";

import Drawer from "../Drawer/DrawerTranslate";
import Navbars from "../Navbar/navbarHome2.js";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Calendar, momentLocalizer, Views } from "react-big-calendar";
// import ProgressBar from "../Dashboard/ProgressBar";
import moment from "moment";
import "moment/locale/de";
import "moment/locale/th";

// import axios from "axios";

// import { data6 } from "../Data/data";
// import imgtest1 from "../../Images/1.jpeg";
// import imgtest2 from "../../Images/49.jpeg";
// import imgtest3 from "../../Images/dii.jpg";

import axios from "axios";
import { url } from "../../slices/api.js";

import "react-big-calendar/lib/css/react-big-calendar.css";
import "./Home2.css";

export default function Home2() {
  moment.locale("en-US");
  // moment.locale("de");
  // moment.locale("th");

  const localizer = momentLocalizer(moment);
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
  //     start: "2024/03/15",
  //     end: "2024/03/15",
  //     allDay: false,
  //     isImportant: true,
  //   },
  //   {
  //     title: "THOG0023535",
  //     start: "2024/03/10",
  //     end: "2024/03/10",
  //     allDay: false,
  //     isImportant: false,
  //   },
  // ];

  function eventStyleGetter(events) {
    console.log("event", events);
    let style = {
      backgroundColor: events.isImportant ? "#FFFACD" : "rgb(199 230 247)",
      color: events.isImportant ? "#FFB31F" : "rgb(4 84 212)",
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

  const messages = {
    today: "today",
    next: "next",
    back: "back",
    month: "month",
    day: "day",
    agenda: "agenda",
  };

  // const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  // const [open3, setOpen3] = React.useState(false);
  const [open4, setOpen4] = React.useState(false);

  const [amount, setAmount] = React.useState("");
  const [orders, setOrders] = React.useState("");
  const [events, setEvents] = React.useState([]);
  const [detail, setDetail] = React.useState([]);
  const [title, setTitle] = React.useState("");

  // function handleInputChange(event) {
  //   let x = event.target.value;
  //   let a = x - x * 0.13;
  //   setAmount(a);
  // }

  // const handleClose = (i) => {
  //   if (i === 1) {
  //     setOpen(false);
  //   } else if (i === 2) {
  //     setOpen2(false);
  //     setOpen3(true);
  //   }
  // };

  const setevents = (x) => {
    console.log("x", x);

    // const date = new Date();
    // const formattedDate = date.toLocaleDateString("en-US", {
    //   day: "2-digit",
    //   month: "2-digit",
    //   year: "numeric",
    // });
    function formatDate(inputDate) {
      var parts = inputDate.split("/");
      var formattedDate = parts[2] + "/" + parts[0] + "/" + parts[1];
      return formattedDate;
    }

    const newEvents = x.map((order) => {
      return {
        title: order.orderNumber,
        start: formatDate(order?.data.at(0)?.Deadline),
        end: formatDate(order?.data.at(0)?.Deadline),
        allDay: false,
        isImportant: true,
      };
    });
    console.log("newEvents", newEvents);
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

  function OpenDetail(title, Price, data) {
    setAmount(Price);
    setTitle(title);
    console.log("data", data);
    setDetail(data);
    setOpen2(true);
  }
  console.log("detail", detail);

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
    <div className="App-body3">
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
            open={open2}
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
                height: 740,
                bgcolor: "background.paper",
                boxShadow: 24,
                p: 4,
                borderRadius: 5,
                border: "1px solid #E5E5E5",
                textAlign: "center",
                paddingRight: "25px",
                paddingLeft: "25px",
              }}
            >
              {Array.isArray(detail) && detail.length > 0 && (
                <>
                  {detail?.map((data, index) => (
                    <>
                      {buttonpage === index + 1 ? (
                        <>
                          <div key={index}>
                            <p className="Home2ScheduleDetailModalHard">
                              {title}
                            </p>
                          </div>
                          <div className="Home2ScheduleDetailModal">
                            <p className="Home2ScheduleDetailModalInHard">
                              Order {index + 1}
                            </p>
                            <div className="Home2ScheduleDetailModalBox">
                              <div className="Home2ScheduleDetailModalInBox">
                                <p>Document type :{data?.document_Type}</p>
                                <p>Translate from : {data?.tranfrom}</p>
                                <p>Deadline : {data?.Deadline}</p>
                                <p>
                                  Additional explanation :
                                  {data?.Additional_explanation}
                                </p>
                              </div>
                              <div className="Home2ScheduleDetailModalInBox">
                                <p>
                                  Translation type :{data?.translation_Type}
                                </p>
                                <p>Translate to : {data?.tranto}</p>
                              </div>
                            </div>
                          </div>
                          <div style={{ display: "flex" }}>
                            {detail.map((_, buttonIndex) => (
                              <button
                                key={buttonIndex}
                                className={
                                  buttonpage === buttonIndex + 1
                                    ? "Home2Schedulebuttonpage"
                                    : "Home2Schedulebuttonpage2"
                                }
                                onClick={() => setButtonpage(buttonIndex + 1)}
                              >
                                {buttonIndex + 1}
                              </button>
                            ))}
                          </div>
                        </>
                      ) : (
                        <></>
                      )}
                    </>
                  ))}
                </>
              )}

              <div className="Home2ScheduleinputBox">
                <p className="Home2ScheduleinputBoxP">All attachments</p>
                <button
                  className="Home2buttonview"
                  onClick={() => setOpen4(true)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M1.61342 8.47415C1.52262 8.33039 1.47723 8.25851 1.45182 8.14764C1.43273 8.06436 1.43273 7.93303 1.45182 7.84975C1.47723 7.73889 1.52262 7.66701 1.61341 7.52325C2.36369 6.33526 4.59693 3.33203 8.00027 3.33203C11.4036 3.33203 13.6369 6.33526 14.3871 7.52325C14.4779 7.66701 14.5233 7.73889 14.5487 7.84975C14.5678 7.93303 14.5678 8.06436 14.5487 8.14764C14.5233 8.25851 14.4779 8.33039 14.3871 8.47415C13.6369 9.66214 11.4036 12.6654 8.00027 12.6654C4.59693 12.6654 2.36369 9.66214 1.61342 8.47415Z"
                      stroke="#000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8.00027 9.9987C9.10484 9.9987 10.0003 9.10327 10.0003 7.9987C10.0003 6.89413 9.10484 5.9987 8.00027 5.9987C6.8957 5.9987 6.00027 6.89413 6.00027 7.9987C6.00027 9.10327 6.8957 9.9987 8.00027 9.9987Z"
                      stroke="#000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p>view</p>
                </button>
              </div>

              <div className="Home2ScheduleinputBox">
                <p className="Home2ScheduleinputBoxP">Price</p>
                {/* <input
                  className="Home2Scheduleinput"
                  placeholder="฿ Total Price"
                  // value={amount}
                  onChange={handleInputChange}
                  // onChange={(e) => setamount(e)}
                />
               */}
                <p>amount of money you will get {amount}</p>
              </div>

              <div className="Home2Schedulebuttongreu">
                <button
                  className="Home2SchedulebuttonCancel"
                  onClick={() => setOpen2(false)}
                >
                  Cancel
                </button>
                <button
                  className="Home2SchedulebuttonAccept"
                  onClick={() => setOpen2(false)}
                >
                  Sent
                </button>
              </div>
            </Box>
          </Modal>

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
              {Array.isArray(detail) && detail.length > 0 && (
                <>
                  {detail?.map((data, index) => (
                    <>
                      {buttonpage2 === index + 1 ? (
                        <>
                          <div key={index}>
                            <p className="Home2ScheduleDetailModalHard">
                              {title}
                            </p>
                          </div>
                          <div className="Home2ScheduleDetailModal4">
                            <p className="Home2ScheduleDetailModalInHard">
                              Order {index + 1}
                            </p>
                            <div className="Home2ScheduleDetailModalBox">
                              <img
                                src={data?.file}
                                alt="imgtest1"
                                className="Home2imgtest1"
                              />
                            </div>
                          </div>
                          <div style={{ display: "flex" }}>
                            {detail.map((_, buttonIndex) => (
                              <button
                                key={buttonIndex}
                                className={
                                  buttonpage === buttonIndex + 1
                                    ? "Home2Schedulebuttonpage"
                                    : "Home2Schedulebuttonpage2"
                                }
                                onClick={() => setButtonpage(buttonIndex + 1)}
                              >
                                {buttonIndex + 1}
                              </button>
                            ))}
                          </div>
                        </>
                      ) : (
                        <></>
                      )}
                    </>
                  ))}
                </>
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

          {/* Alert */}
          {/* <Box className={styles.BoxAlert}>
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
          </Box> */}

          <div className="mainDashboard_Home">
            <div className="HeaderDashboard">
              <p className="HDashboard">Home</p>
            </div>

            <div className="group">
              <Calendar
                localizer={localizer}
                defaultDate={new Date()}
                defaultView="month"
                views={[Views.MONTH, Views.DAY]}
                events={events}
                eventPropGetter={eventStyleGetter}
                // messages={messages}
                style={{ height: "100vh", width: "60vw", padding: "10px" }}
              />

              <div className="box_salary">
                <h3>Volume of work this month</h3>
                <div style={{ textAlign: "center", marginTop: 20 }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="120"
                    height="120"
                    viewBox="0 0 120 120"
                    fill="none"
                  >
                    <circle cx="60" cy="60" r="60" fill="#FFF1D7"></circle>
                  </svg>
                  <p className="percent">0%</p>
                  <p>
                    You can view all your received job or workload dashboards on
                    the dashboard menu.
                  </p>
                </div>
                <div>
                  <p className="Schedule">Schedule</p>

                  {Array.isArray(orders) && orders.length > 0 && (
                    <>
                      {orders.map((order) => (
                        <div
                          key={order.orderNumber}
                          className={
                            order.data[0].document_Type === "General Document"
                              ? "Home2Box2Schedule"
                              : "Home2Box1Schedule"
                          }
                        >
                          <div
                            className={
                              order.data[0].document_Type === "General Document"
                                ? "Home2Box2ScheduleDetail"
                                : "Home2Box1ScheduleDetail"
                            }
                          >
                            <p>{order.orderNumber}</p>
                            <button
                              className="Home2Schedulebutton1"
                              onClick={() =>
                                OpenDetail(
                                  order.orderNumber,
                                  order.Price,
                                  order.data
                                )
                              }
                            >
                              Detail
                            </button>
                            <div>
                              <button className="Home2Schedulebutton2">
                                Cancel
                              </button>
                              <button
                                className="Home2Schedulebutton3"
                                onClick={() =>
                                  OpenDetail(
                                    order.orderNumber,
                                    order.Price,
                                    order.data
                                  )
                                }
                              >
                                Accept
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Box>
      </Box>
    </div>
  );
}
