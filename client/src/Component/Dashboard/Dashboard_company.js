import * as React from "react";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Rating,
  Box,
  Drawer,
  Toolbar,
  List,
  Avatar,
} from "@mui/material";

import Navbars from "../Navbar/navbar";
import Dashboard from "../../Images/Dashboard.png";
import Tools from "../../Images/Tools.png";
import Chat from "../../Images/Chat.png";
import Notification from "../../Images/Notification.png";
import Setting from "../../Images/Setting.png";
import Logout from "../../Images/Logout.png";
import All_online from "../../Images/All_online.png";
import All_work from "../../Images/All_work.png";
import Country from "../../Images/Country.png";
import Old_online from "../../Images/Old_online.png";
import Map from "../../Images/Map.png";

import { FaAngleRight, FaEllipsisV } from "react-icons/fa";


const drawerWidth = 170;

export default function Dashboard_company() {
  const [value, setValue] = React.useState(4);
  const [value2, setValue2] = React.useState(5);

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
                  {index === 0 ? (
                    <ListItemText primary={text} />
                  ) : index === 1 ? (
                    <a
                      href="/"
                      style={{ color: "#034d82", textDecoration: "none" }}
                    >
                      {text}
                    </a>
                  ) : null}
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>

        <Box component="main">
          <div style={{ marginTop: 60, marginLeft: 5 }}>
            <div className="box_num">
              <text id="head3">All customers</text>
              <br />
              <img src={All_online} alt="All_online" id="img_icons" />
              <text id="int_count">150</text>
              <br />
            </div>

            <div className="box_num">
              <text id="head3">Old customers</text>
              <br />
              <img src={Old_online} alt="Old_online" id="img_icons" />
              <text id="int_count">5</text>
              <br />
            </div>

            <div className="box_num">
              <text id="head3">Country</text>
              <br />
              <img src={Country} alt="Country" id="img_icons" />
              <text id="int_count">15</text>
              <br />
            </div>

            <div className="box_num">
              <text id="head3">All work</text>
              <br />
              <img src={All_work} alt="All_work" id="img_icons" />
              <text id="int_count">15</text>
              <br />
            </div>
          </div>
          <div style={{ marginLeft: 5 }}>
            <div className="box_salary">
              <h3>Salary</h3>
              <div style={{ marginTop: 20 }}>
                <div className="month">
                  <text id="month">January</text>
                  <br />
                  <text id="Balance">Balance/Month</text>
                </div>
                <div className="amount">
                  <text id="amount">1000</text>
                </div>
                <button className="FaAngleRight" style={{ top: 95 }}>
                  <FaAngleRight id="FaAngleRight" />
                </button>
              </div>
              <br />
              <div style={{ marginTop: 20 }}>
                <div className="month">
                  <text id="month">2022</text>
                  <br />
                  <text id="Balance">Balance/Month</text>
                </div>
                <div className="amount">
                  <text id="amount">1000</text>
                </div>
                <button className="FaAngleRight" style={{ top: 160 }}>
                  <FaAngleRight id="FaAngleRight" />
                </button>
              </div>
              <br />
              <div style={{ marginTop: 20 }}>
                <div className="month">
                  <text id="month">2021-present</text>
                  <br />
                  <text id="Balance">All</text>
                </div>
                <div className="amount">
                  <text id="amount">15000</text>
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
            <div className="box_team">
              <h3>Team</h3>
              <div style={{ marginTop: 20 }}>
                <div className={"header_inbox"} style={{ marginLeft: 130 }}>
                  <text>Name</text>
                </div>
                <div className={"header_inbox"}>
                  <text>General offical</text>
                </div>
                <div className={"header_inbox"}>
                  <text>Document offical</text>
                </div>
                <div className={"header_inbox"}>
                  <text>Succeed</text>
                </div>
                <div className={"header_inbox"}>
                  <text>In progress</text>
                </div>
                <br />
                <hr className="hr3" />
                <div style={{ display: "block" }}>
                  <Avatar
                    alt="avatar"
                    src={require("../../Images/Avatar2.png")}
                    id={"avatar3"}
                  />
                </div>
                <div className={"index_inbox"} style={{ marginLeft: 15 }}>
                  <text>Candy123@Company.co.th</text>
                </div>
                <div className={"index_inbox"} style={{ marginLeft: 50 }}>
                  <text>1</text>
                </div>
                <div className={"index_inbox"}>
                  <text>4</text>
                </div>
                <div className={"index_inbox"}>
                  <text>3</text>
                </div>
                <div className={"index_inbox"} style={{ marginLeft: 124 }}>
                  <text>2</text>
                </div>
                <button className="FaEllipsisV">
                  <FaEllipsisV id="FaEllipsisV" />
                </button>
                <br />
                <hr className="hr3" />
                <div style={{ display: "block" }}>
                  <Avatar
                    alt="avatar"
                    src={require("../../Images/Avatar3.png")}
                    id={"avatar3"}
                  />
                </div>
                <div className={"index_inbox"} style={{ marginLeft: 15 }}>
                  <text>Modeal21@Company.co.th</text>
                </div>
                <div className={"index_inbox"} style={{ marginLeft: 50 }}>
                  <text>4</text>
                </div>
                <div className={"index_inbox"}>
                  <text>2</text>
                </div>
                <div className={"index_inbox"}>
                  <text>2</text>
                </div>
                <div className={"index_inbox"} style={{ marginLeft: 124 }}>
                  <text>4</text>
                </div>
                <button className="FaEllipsisV">
                  <FaEllipsisV id="FaEllipsisV" />
                </button>
                <br />
                <hr className="hr3" />
                <div style={{ display: "block" }}>
                  <Avatar
                    alt="avatar"
                    src={require("../../Images/Avatar4.png")}
                    id={"avatar3"}
                  />
                </div>
                <div className={"index_inbox"} style={{ marginLeft: 15 }}>
                  <text>Yumma24@Company.co.th</text>
                </div>
                <div className={"index_inbox"} style={{ marginLeft: 50 }}>
                  <text>0</text>
                </div>
                <div className={"index_inbox"}>
                  <text>4</text>
                </div>
                <div className={"index_inbox"}>
                  <text>3</text>
                </div>
                <div className={"index_inbox"} style={{ marginLeft: 124 }}>
                  <text>1</text>
                </div>
                <button className="FaEllipsisV">
                  <FaEllipsisV id="FaEllipsisV" />
                </button>
                <br />
                <hr className="hr3" />
                <div style={{ display: "block" }}>
                  <Avatar
                    alt="avatar"
                    src={require("../../Images/Avatar5.png")}
                    id={"avatar3"}
                  />
                </div>
                <div className={"index_inbox"} style={{ marginLeft: 15 }}>
                  <text>SinSinn32@Company.co.th</text>
                </div>
                <div className={"index_inbox"} style={{ marginLeft: 50 }}>
                  <text>5</text>
                </div>
                <div className={"index_inbox"}>
                  <text>0</text>
                </div>
                <div className={"index_inbox"}>
                  <text>4</text>
                </div>
                <div className={"index_inbox"} style={{ marginLeft: 124 }}>
                  <text>1</text>
                </div>
                <button className="FaEllipsisV">
                  <FaEllipsisV id="FaEllipsisV" />
                </button>
                <br />
                <hr className="hr3" />
                <div style={{ display: "block" }}>
                  <Avatar
                    alt="avatar"
                    src={require("../../Images/Avatar6.png")}
                    id={"avatar3"}
                  />
                </div>
                <div className={"index_inbox"} style={{ marginLeft: 15 }}>
                  <text>Tommy123@Company.co.th</text>
                </div>
                <div className={"index_inbox"} style={{ marginLeft: 50 }}>
                  <text>2</text>
                </div>
                <div className={"index_inbox"}>
                  <text>1</text>
                </div>
                <div className={"index_inbox"}>
                  <text>1</text>
                </div>
                <div className={"index_inbox"} style={{ marginLeft: 124 }}>
                  <text>2</text>
                </div>
                <button className="FaEllipsisV">
                  <FaEllipsisV id="FaEllipsisV" />
                </button>
                <br />
                <hr className="hr3" />
              </div>
              <br />
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
                src={require("../../Images/Avatar_company.png")}
                id={"avatar2"}
              />
            </div>
            <h5>Translator Co., Ltd.</h5>
            <div
              style={{
                position: "fixed",
                margin: 10,
                width: 270,
                marginTop: 0,
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
                <text id="result">AdminTranslate@Company.co.th</text>
                <br />
                <text id="head">Password</text>
                <br />
                <text id="result">**********</text>
                <br />
                <text id="head">Company</text>
                <br />
                <text id="result">Translator Co., Ltd.</text>
                <br />
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
                <text id="result">All</text>
                <br />
                <text id="head">Team</text>
                <br />
                <text id="result">23</text>
                <br />
              </div>

              <hr class="hr1" />

              <h6
                style={{
                  textAlign: "initial",
                  marginBottom: 10,
                  marginLeft: 1,
                }}
              >
                Review
              </h6>
              <div
                style={{
                  textAlign: "start",
                  backgroundColor: "#FFF8E0",
                  borderRadius: 6,
                  padding: 15,
                  width: 256,
                  height: 200,
                }}
              >
                <div>
                  <text id="result">Review : 4</text>
                  <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                    readOnly
                    style={{
                      color: "#262DBB",
                      margin: 10,
                      top: 5,
                      marginTop: 0,
                    }}
                  />
                  <br /> <text id="result">Comment</text>
                  <hr class="hr2" />
                  <text id="result">John spinger</text>
                  <Rating
                    name="simple-controlled"
                    value={value2}
                    onChange={(event, newValue) => {
                      setValue2(newValue);
                    }}
                    readOnly
                    style={{ color: "#262DBB", margin: 10, top: 5 }}
                  />
                  <br />
                  <text id="head2">
                    The translation is correct. Very good. I like it.
                  </text>
                  <text
                    id="result"
                    style={{ margin: 10, color: "#047acf", fontSize: 16 }}
                  >
                    view all
                  </text>
                </div>
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
