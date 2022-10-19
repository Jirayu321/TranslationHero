import * as React from "react";
import {
  // ListItem,
  // ListItemIcon,
  // ListItemText,
  // Rating,
  Box,
  // Drawer,
  // Toolbar,
  // List,
  // Avatar,
  // MenuItem,
  // Select,
  // styled,
  // InputBase,
} from "@mui/material";
import Drawer from "../Drawer/DrawerTranslate";
import Navbars from "../Navbar/navbarTanslater";

// import All_online from "../../Images/All_online.png";
// import All_work from "../../Images/All_work.png";
// import Country from "../../Images/Country.png";
// import Old_online from "../../Images/Old_online.png";
// import Map from "../../Images/Map.png";
// import In_progress from "../../Images/In_progress.png";
// import Succeed from "../../Images/Succeed.png";
// import Cancel from "../../Images/Cancel.png";

// import { FaAngleRight, FaAngleDown, FaAngleUp } from "react-icons/fa";
// import { useParams } from "react-router-dom";



export default function Home() {
  // const [value, setValue] = React.useState(4);
  // const [value2, setValue2] = React.useState(5);
  // const [sizeState, setSize] = React.useState();
  // const [month, setMonth] = React.useState();
  // const [type, setType] = React.useState();

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
  // console.log({ xxx: x });
  // const { innerWidth: width } = window;
  return (
    <div className="App-body3">
      <header className="App-header">
        <Navbars />
      </header>
      <Box sx={{ display: "flex", width: "100% " }}>
        <Drawer/>

        {/* <Box component="main">
          <div style={{ marginTop: 60, marginLeft: 5 }}>
            <div className="box_num">
              <p id="head3">All customers</p>
              <br />
              <img src={All_online} alt="All_online" id="img_icons" />
              <p id="int_count">150</p>
              <br />
            </div>

            <div className="box_num">
              <p id="head3">Old customers</p>
              <br />
              <img src={Old_online} alt="Old_online" id="img_icons" />
              <p id="int_count">5</p>
              <br />
            </div>

            <div className="box_num">
              <p id="head3">Country</p>
              <br />
              <img src={Country} alt="Country" id="img_icons" />
              <p id="int_count">15</p>
              <br />
            </div>

            <div className="box_num">
              <p id="head3">All work</p>
              <br />
              <img src={All_work} alt="All_work" id="img_icons" />
              <p id="int_count">15</p>
              <br />
            </div>
          </div>
          <div style={{ marginLeft: 5 }}>
            <div className="box_salary">
              <h3>Salary</h3>
              <div style={{ marginTop: 20 }}>
                <div className="month">
                  <p id="month">January</p>
                  <br />
                  <p id="Balance">Balance/Month</p>
                </div>
                <div className="amount">
                  <p id="amount">1000</p>
                </div>
                <button className="FaAngleRight" style={{ top: 95 }}>
                  <FaAngleRight id="FaAngleRight" />
                </button>
              </div>
              <br />
              <div style={{ marginTop: 20 }}>
                <div className="month">
                  <p id="month">2022</p>
                  <br />
                  <p id="Balance">Balance/Month</p>
                </div>
                <div className="amount">
                  <p id="amount">1000</p>
                </div>
                <button className="FaAngleRight" style={{ top: 160 }}>
                  <FaAngleRight id="FaAngleRight" />
                </button>
              </div>
              <br />
              <div style={{ marginTop: 20 }}>
                <div className="month">
                  <p id="month">2021-present</p>
                  <br />
                  <p id="Balance">All</p>
                </div>
                <div className="amount">
                  <p id="amount">15000</p>
                </div>
                <button className="FaAngleRight" style={{ top: 230 }}>
                  <FaAngleRight id="FaAngleRight" />
                </button>
              </div>
            </div>
            <div className="box_salary">
              <h3>Customer Map</h3>
              <div style={{ textAlign: "center", marginTop: 20 }}>
                <img src={Map} alt="Map" />
              </div>
            </div>
          </div>
          <div style={{ marginLeft: 5 }}>
            <div className="box_search">
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
          </div>
          <div style={{ marginLeft: 8 }}>
            <div className="box_in">
              <div className="month2">
                <p id="month">In progress</p>
                <br />
                <p id="Balance">number of tasks</p>
              </div>
              <div className="In_progress">
                <img src={In_progress} alt="In_progress" id="img_box_in" />
              </div>
            </div>

            <div className="box_in">
              <div className="month2">
                <p id="month">Succeed</p>
                <br />
                <p id="Balance">number of tasks</p>
              </div>
              <div className="In_progress">
                <img src={Succeed} alt="In_progress" id="img_box_in" />
              </div>
            </div>

            <div className="box_in">
              <div className="month2">
                <p id="month">Cancel</p>
                <br />
                <p id="Balance">number of tasks</p>
              </div>
              <div className="In_progress">
                <img src={Cancel} alt="In_progress" id="img_box_in" />
              </div>
            </div>
          </div>
          <div style={{ marginLeft: 10 }}>
            <div style={{ float: "left" }}>
              <div>
                <button className="button">
                  <h3>In progress (5)</h3>
                  <FaAngleUp id="FaAngleDown" />
                </button>
              </div>
              <div>
                <button className="button">
                  <h3>Succeed (4)</h3>
                  <FaAngleUp id="FaAngleDown" style={{ top: 1003 }} />
                </button>
              </div>
              <div>
                <button className="button">
                  <h3>Cancel (0)</h3>
                  <FaAngleUp id="FaAngleDown" style={{ top: 1053 }} />
                </button>
              </div>
            </div>
          </div>
        </Box> */}

        
      </Box>
    </div>
  );
}
