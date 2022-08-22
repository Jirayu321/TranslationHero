import * as React from "react";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  Drawer,
  Toolbar,
  List,
  Avatar,
  MenuItem,
  Select,
  styled,
  InputBase,
} from "@mui/material";
import Navbars from "../Navbar/navbar";
import Dashboard from "../../Images/Dashboard.png";
import Tools from "../../Images/Tools.png";
import Chat from "../../Images/Chat.png";
import Notification from "../../Images/Notification.png";
import Setting from "../../Images/Setting.png";
import Logout from "../../Images/Logout.png";
import In_progress from "../../Images/In_progress2.png";
import Succeed from "../../Images/Succeed2.png";
import Cancel from "../../Images/Cancel.png";

import {  FaAngleDown, FaAngleUp } from "react-icons/fa";
// import { useParams } from "react-router-dom";

const drawerWidth = 170;

export default function Dashboard_employee() {
  const [sizeState, setSize] = React.useState();
  const [month, setMonth] = React.useState();
  const [type, setType] = React.useState();

  const handleSizeChange = React.useCallback((event) => {
    setSize(Number(event.target.value));
  }, []);

  const handlesetMonthChange = React.useCallback((event) => {
    setMonth(Number(event.target.value));
  }, []);

  const handlesetTypeChange = React.useCallback((event) => {
    setType(Number(event.target.value));
  }, []);

  const BootstrapInput = styled(InputBase)(({ theme }) => ({
    "label + &": {
      marginTop: theme.spacing(3),
    },
    "& .MuiInputBase-input": {
      borderRadius: 4,
      position: "relative",
      backgroundColor: theme.palette.background.paper,
      border: "1px solid #ced4da",
      fontSize: 16,
      padding: "10px 26px 10px 12px",
      transition: theme.transitions.create(["border-color", "box-shadow"]),
      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
      "&:focus": {
        borderRadius: 4,
        borderColor: "#80bdff",
        boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
      },
    },
  }));

  return (
    <div className="App-body2">
      <header className="App-header">
        <Navbars />
      </header>
      <Box sx={{ display: "flex", width: "100% " }}>
        <Drawer
          variant="permanent"
          anchor="left"
          sx={{
            width: drawerWidth,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          style={{ zIndex: 0, height: "100%" }}
        >
          <Toolbar />
          <Box sx={{ overflow: "hidden" }} className={"manu"}>
            <List>
              {["Dashboard", "Tools", "Chat", "Notification"].map(
                (text, index) => (
                  <ListItem button key={text} id={"button_manu"}>
                    <ListItemIcon id={"button_icons"}>
                      {index === 0 ? (
                        <img
                          src={Dashboard}
                          alt="Dashboard"
                          className="icons"
                        />
                      ) : index === 1 ? (
                        <img src={Tools} alt="Tools" className="icons" />
                      ) : index === 2 ? (
                        <img src={Chat} alt="Chat" className="icons" />
                      ) : index === 3 ? (
                        <img
                          src={Notification}
                          alt="Notification"
                          className="icons"
                        />
                      ) : null}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                )
              )}
            </List>

            <List style={{ top: "40%" }}>
              {["Setting", "Logout"].map((text, index) => (
                <ListItem button key={text} id={"button_manu"}>
                  <ListItemIcon id={"button_icons"}>
                    {index === 0 ? (
                      <img src={Setting} alt="Setting" className="icons" />
                    ) : index === 1 ? (
                      <img src={Logout} alt="Logout" className="icons" />
                    ) : null}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>

        <Box component="main">
          <div style={{ marginTop: 60, marginLeft: 5 }}>
            <div className="box_search">
              <div className="in_box_search">
                <text id="head3">Year</text>
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
                <text id="head3">Month</text>
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
                <text id="head3">Type</text>
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
                <text id="month">In progress</text>
                <br />
                <text id="Balance">number of tasks</text>
              </div>
              <div className="In_progress">
                <img src={In_progress} alt="In_progress" id="img_box_in" />
              </div>
            </div>

            <div className="box_in">
              <div className="month2">
                <text id="month">Succeed</text>
                <br />
                <text id="Balance">number of tasks</text>
              </div>
              <div className="In_progress">
                <img src={Succeed} alt="In_progress" id="img_box_in" />
              </div>
            </div>

            <div className="box_in">
              <div className="month2">
                <text id="month">Cancel</text>
                <br />
                <text id="Balance">number of tasks</text>
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
                  <h3>In progress (2)</h3>
                  <FaAngleUp id="FaAngleDown2" />
                </button>
              </div>
              <div>
                <button className="button">
                  <h3>Succeed (1)</h3>
                  <FaAngleUp id="FaAngleDown2" style={{ top: 530 }} />
                </button>
              </div>
              <div>
                <button className="button">
                  <h3>Cancel (0)</h3>
                  <FaAngleUp id="FaAngleDown2" style={{ top: 577 }} />
                </button>
              </div>
            </div>
          </div>
        </Box>

        <Drawer
          variant="permanent"
          anchor="right"
          sx={{
            width: 280,
            [`& .MuiDrawer-paper`]: {
              width: 280,
              boxSizing: "border-box",
            },
          }}
          style={{ height: "100%" }}
        >
          <Box sx={{ overflow: "auto" }} className={"Drawer"}>
            <div style={{ display: "block", justifyContent: "center" }}>
              <Avatar
                alt="avatar"
                src={require("../../Images/Avatar2.png")}
                id={"avatar"}
              />
            </div>
            <h4 style={{ marginTop: 40 }}>Candy123</h4>
            <div
              style={{
                position: "fixed",
                margin: 10,
                width: 270,
              }}
            >
              <div
                style={{
                  textAlign: "start",
                  backgroundColor: "#FFF8E0",
                  borderRadius: 6,
                  padding: 15,
                  width: 256,
                }}
              >
                <text id="head">Email</text>
                <br />
                <text id="result">Candy123@Company.co.th</text>
                <br />
                <text id="head">Password</text>
                <br />
                <text id="result">**********</text>
                <br />
                <text id="head">Company </text>
                <br />
                <text id="result">Translator Co., Ltd.</text>
                <br/>
                <text id="head">Job reeived </text>
                <br />
                <text id="result">
                  Translating theses, articles, <br />
                  important documents, movie <br />
                  subtitles
                </text>
                <br />
                <text id="head">Language</text>
                <br />
                <text id="result">
                  English,Chinese (Simplified), <br />
                  Chinese (Traditional),Thai,Korean
                </text>
              </div>
            </div>

            <List style={{ top: "50%" }}>
              {["Setting", "Logout"].map((text, index) => (
                //   <ListItem button key={text} id={"button_manu"}>
                //     <ListItemIcon id={"button_icons"}>
                //       {index === 0 ? (
                //         <img src={Setting} alt="Setting" />
                //       ) : index === 1 ? (
                //         <img src={Logout} alt="Logout" />
                //       ) : null}
                //     </ListItemIcon>
                //     <ListItemText primary={text} />
                //   </ListItem>
                <div></div>
              ))}
            </List>
          </Box>
        </Drawer>
      </Box>
    </div>
  );
}
