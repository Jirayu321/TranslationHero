import * as React from "react";
import "./notificaion.css";
import { Box, Paper, TextField } from "@mui/material";
import Navbars from "../Navbar/navbarHome2.js";
import Drawer from "../Drawer/Drawer";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterLuxon } from "@mui/x-date-pickers/AdapterLuxon";

const Notificaion = () => {
  const [value, setValue] = React.useState(new Date());
  const [value2, setValue2] = React.useState(new Date());

  return (
    <div className="App-body-Order">
      <header className="App-header">
        <Navbars />
      </header>

      <Box sx={{ display: "flex", width: "100% " }}>
        <Drawer />

        <div style={{ marginTop: 60, height: 100 }}>
          <h4
            style={{
              fontWeight: 500,
              fontSize: 36,
              color: " #333333",
              marginLeft: 20,
              position: "absolute",
              top: "13%",
            }}
          >
            Notification
          </h4>
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: 330,
              position: "absolute",
              left: "70%",
              top: "13%",
              backgroundColor: "#FBFBFB",
              boxShadow: "none",
              //   borderRadius: 10,
            }}
          >
            <LocalizationProvider
              dateAdapter={AdapterLuxon}
              //   localeText={{ start: "Check-in", end: "Check-out" }}
            >
              <DatePicker
                label="Start date"
                value={value}
                // inputFormat="DD/MMM/YYYY"
                mask="__/__/___"
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                renderInput={(Props) => (
                  <React.Fragment>
                    <TextField {...Props} />
                    <Box sx={{ mx: 2 }}> To </Box>
                  </React.Fragment>
                )}
              />
              <DatePicker
                label="End date"
                value={value2}
                // inputFormat="DD/MMM/YYYY"
                mask="__/__/____"
                onChange={(newValue) => {
                  setValue2(newValue);
                }}
                renderInput={(Props) => (
                  <React.Fragment>
                    <TextField {...Props} />
                  </React.Fragment>
                )}
              />
            </LocalizationProvider>
          </Paper>
        </div>

        <div className="bodyNotificaion">
          <div style={{ margin: 30 }}>
            <div
              style={{
                textAlign: "left",
                float: "left",
                borderBottom: "2px solid #FFC100",
                marginBottom: 10,
                width: "10%",
              }}
            >
              <div
                style={{
                  color: "#FFC100",
                  float: "left",
                  margin: 5,
                  fontWeight: 700,
                }}
              >
                <p className="headerNotificaion">View All</p>
              </div>
            </div>

            <div
              style={{
                textAlign: "left",
                float: "left",
                borderBottom: "2px solid #8B8B8B",
                marginBottom: 10,
                width: "20%",
              }}
            >
              <div
                style={{
                  color: "#8B8B8B",
                  float: "left",
                  margin: 5,
                  fontWeight: 700,
                }}
              >
                <p className="headerNotificaion">Chat</p>
              </div>
            </div>

            <div
              style={{
                textAlign: "left",
                float: "left",
                borderBottom: "2px solid #8B8B8B",
                marginBottom: 10,
                width: "20%",
              }}
            >
              <div
                style={{
                  color: "#8B8B8B",
                  float: "left",
                  margin: 5,
                  fontWeight: 700,
                }}
              >
                <p className="headerNotificaion">Money</p>
              </div>
            </div>

            <div
              style={{
                textAlign: "left",
                float: "left",
                borderBottom: "2px solid #8B8B8B",
                marginBottom: 10,
                width: "46.5%",
              }}
            >
              <div
                style={{
                  color: "#8B8B8B",
                  float: "left",
                  margin: 5,
                  fontWeight: 700,
                }}
              >
                <p className="headerNotificaion">Work</p>
              </div>
            </div>
          </div>
          <div className="inmocontent">
            <div className="content">
              <div className="boxcontent">
                <p className="textleft">
                  Tanny Graey has created a quote for you.
                </p>
                <p className="textright">Chat</p>
                <p className="textleft2">11.50 am</p>
                <p className="textleft2">11.50 am</p>
              </div>
            </div>

            <div className="content">
              <div className="boxcontent">
                <p className="textleft">
                  Tanny Graey has created a quote for you.
                </p>
                <p className="textright">Chat</p>
                <p className="textleft2">11.50 am</p>
                <p className="textleft2">11.50 am</p>
              </div>
            </div>
          </div>
        </div>
      </Box>
    </div>
  );
};

export default Notificaion;
