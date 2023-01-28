import * as React from "react";
import {
  Box,
  ListItem,
  ListItemIcon,
  ListItemText,
  Rating,
  // Drawer,
  Toolbar,
  List,
  Avatar,
  MenuItem,
  Select,
  styled,
  InputBase,
} from "@mui/material";
import Drawer from "../Drawer/DrawerTranslate";
import Navbars from "../Navbar/navbarHome2.js";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import moment from "moment";
import axios from "axios";

import All_online from "../../Images/All_customers.png";
import Old_customers from "../../Images//Old_customers.png";
import Country from "../../Images/Country.png";
import All_work from "../../Images/All_work.png";
import Map from "../../Images/Map.png";

import Chart from "./Chart.js";
import "./Dashboard.css";

export default function Dashboard_freelance() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const auth = useSelector((state) => state.auth);
  let Doc = location?.state?.languages;
  let Value = auth?.token;
  // let value = auth?._id;

  const goLogin = () => {
    navigate("/Login");
  };
  const checklogin = () => {
    if (Value) {
      console.log("value :", Value);
    } else {
      goLogin();
    }
  };
  React.useEffect(() => {
    checklogin();
  });

  // const [value, setValue] = React.useState(4);
  // const [value2, setValue2] = React.useState(5);
  // const [sizeState, setSize] = React.useState();
  const [data1, setData1] = React.useState([]);
  const [all_work, setAll_work] = React.useState(0);
  const [old_work, setOld_work] = React.useState(0);
  const [data2, setData2] = React.useState([]);

  const [hovering, setHovering] = React.useState(false);

  // const handleSizeChange = React.useCallback((event) => {
  //   setSize(Number(event.target.value));
  // }, []);

  // const handlesetMonthChange = React.useCallback((event) => {
  //   setMonth(Number(event.target.value));
  // }, []);

  // const handlesetTypeChange = React.useCallback((event) => {
  //   setType(Number(event.target.value));
  // }, []);

  // const BootstrapInput = styled(InputBase)(({ theme }) => ({
  //   "label + &": {
  //     marginTop: theme.spacing(3),
  //   },
  //   "& .MuiInputBase-input": {
  //     borderRadius: 4,
  //     position: "relative",
  //     backgroundColor: theme.palette.background.paper,
  //     border: "1px solid #ced4da",
  //     fontSize: 16,
  //     padding: "10px 26px 10px 12px",
  //     transition: theme.transitions.create(["border-color", "box-shadow"]),
  //     fontFamily: [
  //       "-apple-system",
  //       "BlinkMacSystemFont",
  //       '"Segoe UI"',
  //       "Roboto",
  //       '"Helvetica Neue"',
  //       "Arial",
  //       "sans-serif",
  //       '"Apple Color Emoji"',
  //       '"Segoe UI Emoji"',
  //       '"Segoe UI Symbol"',
  //     ].join(","),
  //     "&:focus": {
  //       borderRadius: 4,
  //       borderColor: "#80bdff",
  //       boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
  //     },
  //   },
  // }));

  // let { x } = useParams();
  // console.log("jijijij",auth);
  // const { innerWidth: width } = window;
  const name = { Translator_name: auth?.name };
  const url = "http://localhost:3001/api";

  const setDataOrder = (i) => {
    let all_work = i?.length;
    setAll_work(all_work);
    const ll = i.filter((item) => item.Customer_name);
    setOld_work(ll.length);
    const DataOrder = i?.map((item, index) => {
      try {
        const formattedDate = moment(item?.Date).format("MM/DD/YYYY");
        let formattedDate2 = moment(item?.Date).format("h:mm:ss a");
        return {
          index: index,
          orderID: index,
          orderType: item?.Order_type,
          orderName: item?.Order_type,
          translator: item?.Translator_name,
          orderPrice: item?.Price,
          orderedDate: formattedDate,
          status: formattedDate2,
        };
      } catch (e) {
        console.error(e);
        return null;
      }
    });
    setData1(DataOrder);
  };
  const setAllUser = (i) => {
    const All = i?.filter((item) => item.type === "customer");
    console.log("All", All.length);
    // const AllUser = i?.map((item, index) => {
    //   try {
    //     const formattedDate = moment(item?.Date).format("MM/DD/YYYY");
    //     let formattedDate2 = moment(item?.Date).format("h:mm:ss a");
    //     return {
    //       All: All,
    //     };
    //   } catch (e) {
    //     console.error(e);
    //     return null;
    //   }
    // });
    setData2(All.length);
  };

  const getOrder = async (values) => {
    try {
      const token = await axios.get(`${url}/getOrder`, {
        params: { Translator_name: values.Translator_name },
      });
      const token2 = await axios.get(`${url}/getUsers`, {});
      setDataOrder(token?.data);
      setAllUser(token2?.data);
    } catch (error) {
      if (error.response && error.response.status === 404) {
        throw new Error("Translator not found");
      } else if (error.response && error.response.status === 500) {
        throw new Error("Internal server error");
      } else if (error.response && error.response.status === 400) {
        throw new Error("Bad request");
      } else {
        throw new Error("Something went wrong");
      }
    }
  };

  React.useEffect(() => {
    getOrder(name);
  }, []);

  console.log("data1", data1);
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

      <Box sx={{ display: "flex", width: "100% " }}>
        <Drawer languages={Doc} value={Value} />

        <Box component="main">
          <div className="mainDashboard">
            <div className="HeaderDashboard">
              <p className="HDashboard">Dashboard</p>
              <div className="gbutton">
                {/* <button>Default</button>
              <button>Save</button> */}
                <button className="Settingbutton">Setting Dashboard</button>
              </div>
            </div>

            <div className="group1">
              <div className="BoxAllg1">
                <div className="box_num_1">
                  <p id="head3">All customers</p>
                  <br />
                  <div className="BoxDB">
                    <img src={All_online} alt="All_online" id="img_icons" />
                    <p id="int_count">{all_work}</p>
                  </div>
                  <br />
                </div>

                <div className="box_num">
                  <p id="head3">Old customers</p>
                  <br />
                  <div className="BoxDB">
                    <img
                      src={Old_customers}
                      alt="Old_customers"
                      id="img_icons2"
                    />
                    <p id="int_count">{old_work}</p>
                  </div>

                  <br />
                </div>

                <div className="box_num_1">
                  <p id="head3">Country</p>
                  <br />
                  <div className="BoxDB">
                    <img src={Country} alt="Country" id="img_icons2" />
                    <p id="int_count">0</p>
                  </div>
                  <br />
                </div>

                <div className="box_num">
                  <p id="head3">All work</p>
                  <br />
                  <div className="BoxDB">
                    <img src={All_work} alt="All_work" id="img_icons" />
                    <p id="int_count">{old_work}</p>
                  </div>
                  <br />
                </div>
              </div>
              <div className="Wallet">
                <h3>Wallet</h3>
                <div className="ChartDB1">
                  <Chart />
                </div>
              </div>
              <div className="box_salary">
                <h3>Customer Map</h3>
                <div style={{ textAlign: "center", marginTop: 20 }}>
                  <img
                    src={Map}
                    alt="Map"
                    onMouseEnter={() => setHovering(true)}
                    onMouseLeave={() => setHovering(false)}
                  />
                  {hovering ? <div className="HoverText">oncoming</div> : null}
                </div>
              </div>
            </div>

            {/* <div className="group2">
              <div className="Job_status">
                <h3>Job status</h3>
                <div style={{ textAlign: "center", marginTop: 20 }}>
                   <img src={Map} alt="Map" /> 
                </div>
              </div>
              <div className="Review">
                <h3>Review</h3>
                <div style={{ textAlign: "center", marginTop: 20 }}>
                  <img src={Map} alt="Map" /> 
                </div>
              </div>
              {/* <div className="box_search">
                <div className="in_box_search">
                  <p id="head3">Year</p>
                  <br />
                  <Select
                    value={sizeState}
                    onChange={handleSizeChange}
                    input={<BootstrapInput className="Select" />}
                    IconComponent={() => <FaAngleDown className="FaAngleDown" />}
                    className="Select"
                  >
                    <MenuItem value={2021}>2021</MenuItem>
                    <MenuItem value={2022}>2022</MenuItem>
                  </Select>
                </div>

                <div className="in_box_search">
                  <p id="head3">Month</p>
                  <br />
                  <Select
                    value={month}
                    onChange={handlesetMonthChange}
                    input={<BootstrapInput className="Select" />}
                    IconComponent={() => <FaAngleDown className="FaAngleDown" />}
                    className="Select"
                  >
                    <MenuItem value={0}>All</MenuItem>
                    <MenuItem value={1}>January</MenuItem>
                    <MenuItem value={2}>February</MenuItem>
                    <MenuItem value={3}>March</MenuItem>
                    <MenuItem value={4}>April</MenuItem>
                    <MenuItem value={5}>May</MenuItem>
                    <MenuItem value={6}>June</MenuItem>
                    <MenuItem value={7}>July</MenuItem>
                    <MenuItem value={8}>August</MenuItem>
                    <MenuItem value={9}>September</MenuItem>
                    <MenuItem value={10}>October</MenuItem>
                    <MenuItem value={11}>November</MenuItem>
                    <MenuItem value={12}>December</MenuItem>
                  </Select>
                </div>

                <div className="in_box_search">
                  <p id="head3">Type</p>
                  <br />
                  <Select
                    value={type}
                    onChange={handlesetTypeChange}
                    input={<BootstrapInput className="Select" />}
                    IconComponent={() => <FaAngleDown className="FaAngleDown" />}
                    className="Select"
                  >
                    <MenuItem value={0}>All</MenuItem>
                    <MenuItem value={1}>General offical</MenuItem>
                    <MenuItem value={2}>Document offical</MenuItem>
                  </Select>
                </div>
              </div> 
            </div> */}
          </div>
        </Box>
      </Box>
    </div>
  );
}
