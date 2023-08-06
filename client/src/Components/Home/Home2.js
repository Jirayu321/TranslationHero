import * as React from "react";
import {
  Box,
  // ListItem,
  // ListItemIcon,
  // ListItemText,
  // Rating,
  // Toolbar,
  // List,
  // Avatar,
  // MenuItem,
  // Select,
  // styled,
  // InputBase,
  // Paper,
  // Table,
  // // TableBody,
  // TableContainer,
  // TableCell,
  // TableRow,
  // TableHead,
  // TextField,
  // Autocomplete,
  // IconButton,
  Modal,
} from "@mui/material";
// import StarIcon from "@mui/icons-material/Star";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// import { AdapterLuxon } from "@mui/x-date-pickers/AdapterLuxon";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { MdArrowDropDown } from "react-icons/md";
// import { IoIosEye } from "react-icons/io";

import Drawer from "../Drawer/DrawerTranslate";
import Navbars from "../Navbar/navbarHome2.js";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Calendar, momentLocalizer } from "react-big-calendar";
import ProgressBar from "../Dashboard/ProgressBar";
import moment from "moment";
// import axios from "axios";

// import All_online from "../../Images/All_customers.png";
// import Old_customers from "../../Images//Old_customers.png";
// import Country from "../../Images/Country.png";
// import All_work from "../../Images/All_work.png";
import Map from "../../Images/Map.png";

// import Chart from "./Chart.js";
// import ProgressBar from "./ProgressBar";
// import Map1 from "./Map";
// import { data6 } from "../Data/data";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./Home2.css";

export default function Home2() {
  const localizer = momentLocalizer(moment);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const auth = useSelector((state) => state.auth);
  let Doc = location?.state?.languages;
  let Value = auth?.token;
  // const name = { Translator_name: auth?.name };
  // const [data1, setData1] = React.useState([]);
  // const [all_work, setAll_work] = React.useState(0);
  // const [old_work, setOld_work] = React.useState(0);
  // const [country, setCountry] = React.useState(0);
  // // const [data3, setData3] = React.useState();
  // // const [type, settype] = React.useState(null);
  // const [hovering, setHovering] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  // const url = "https://54.244.204.59/api";
  // const url = "http://localhost:3001/api";

  // const eiei = new Date();

  // const goLogin = () => {
  //   navigate("/Login");
  // };
  // const checklogin = () => {
  //   if (Value) {
  //     console.log("value :", Value);
  //   } else {
  //     goLogin();
  //   }
  // };
  const handleClose = () => {
    setOpen(false);
  };

  // React.useEffect(() => {
  //   if (Value) {
  //     checklogin();
  //     getOrder(name);
  //   }
  // }, [Value]);

  // const setDataOrder = (i) => {
  //   let all_work = i?.length;
  //   console.log("i:", i);
  //   setAll_work(all_work);
  //   const ll = i?.filter((item) => item?.Customer_name);
  //   setOld_work(ll?.length);
  //   const DataOrder = i?.map((item, index) => {
  //     try {
  //       const formattedDate = moment(item?.Date).format("MM/DD/YYYY");
  //       let formattedDate2 = moment(item?.Deadline).format("MM/DD/YYYY");
  //       const dateNow = moment(eiei).format("MM/DD/YYYY");
  //       const checkDate = dateNow > formattedDate2;
  //       setCountry(1);

  //       return {
  //         index: index,
  //         orderID: index + 1,
  //         orderType: item?.Order_type,
  //         orderName: item?.Order_type,
  //         translator: item?.Translator_name,
  //         orderPrice: item?.Price,
  //         orderedDate: formattedDate,
  //         status: item?.Status,
  //         Customer: item?.Customer_name,
  //         orderDeadline: checkDate,
  //       };
  //     } catch (e) {
  //       console.error(e);
  //       return null;
  //     }
  //   });
  //   setData1(DataOrder);
  // };

  // const setAllUser = (i) => {
  //   const All = i?.filter((item) => item.type === "customer");
  //   console.log("All", All.length);
  //   // const AllUser = i?.map((item, index) => {
  //   //   try {
  //   //     const formattedDate = moment(item?.Date).format("MM/DD/YYYY");
  //   //     let formattedDate2 = moment(item?.Date).format("h:mm:ss a");
  //   //     return {
  //   //       All: All,
  //   //     };
  //   //   } catch (e) {
  //   //     console.error(e);
  //   //     return null;
  //   //   }
  //   // });
  //   // setData3(All?.length);
  // };

  // const getOrder = async (values) => {
  //   try {
  //     const token = await axios.get(`${url}/getOrder`, {
  //       params: { Translator_name: values.Translator_name },
  //     });
  //     const token2 = await axios.get(`${url}/getUsers`, {});
  //     setDataOrder(token?.data);
  //     setAllUser(token2?.data);
  //   } catch (error) {
  //     if (error.response && error.response.status === 404) {
  //       throw new Error("Translator not found");
  //     } else if (error.response && error.response.status === 500) {
  //       throw new Error("Internal server error");
  //     } else if (error.response && error.response.status === 400) {
  //       throw new Error("Bad request");
  //     } else {
  //       throw new Error("Something went wrong");
  //     }
  //   }
  // };
  // console.log("data1", data1);
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
          <Modal
            hideBackdrop
            open={open}
            onClose={handleClose}
            aria-labelledby="keep-mounted-modal-title"
            aria-describedby="keep-mounted-modal-description"
          >
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "45%",
                transform: "translate(-50%, -70%)",
                width: 700,
                bgcolor: "background.paper",
                boxShadow: 24,
                p: 4,
                borderRadius: 5,
                border: "1px solid #E5E5E5",
                textAlign: "center",
                paddingRight: 0,
                paddingLeft: "25px",
              }}
            >
              {/* <Map1 /> */}

              <div
                style={{ marginTop: 10, textAlign: "left", float: "left" }}
              ></div>
              <div
                style={{
                  marginTop: 10,
                  textAlign: "right",
                  marginRight: "20px",
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
                  }}
                  onClick={() => handleClose(2)}
                >
                  Close
                </button>
              </div>
            </Box>
          </Modal>

          <div className="mainDashboard_Home">
            <div className="HeaderDashboard">
              <p className="HDashboard">Home</p>
            </div>

            <div className="group">
              <Calendar
                localizer={localizer}
                defaultDate={new Date()}
                defaultView="month"
                // events={this.state.events}
                style={{ height: "100vh", width: "60vw", padding: "10px" }}
              />

              <div
                className="box_salary"
                // onMouseEnter={() => setHovering(true)}
                // onMouseLeave={() => setHovering(false)}
                // onClick={() => setOpen(true)}
              >
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
                  {/* {hovering ? (
                    <div className="HoverText">click view map</div>
                  ) : null} */}
                </div>
                <div>
                  <p className="Schedule">Schedule</p>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </Box>
      </Box>
    </div>
  );
}
