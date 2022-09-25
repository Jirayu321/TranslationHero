import * as React from "react";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import Navbars from "../Navbar/navbarHome2.js";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterLuxon } from "@mui/x-date-pickers/AdapterLuxon";

import Drawer from "../Drawer/Drawer";
import { useLocation } from "react-router-dom";

import All from "../../Images/All.png";
import All2 from "../../Images/All2.png";
import Cancle from "../../Images/Cancle.png";
import Cancle2 from "../../Images/Cancle2.png";
import Inprocess from "../../Images/Inprocess.png";
import Inprocess2 from "../../Images/Inprocess2.png";
import Succeed from "../../Images/Succeed.png";
import Succeed2 from "../../Images/Succeed2.png";

export default function Order() {
  const [type, setType] = React.useState(0);
  const [value, setValue] = React.useState(new Date());
  const [value2, setValue2] = React.useState(new Date());
  const location = useLocation();

  function createData(
    orderID,
    orderType,
    orderName,
    translator,
    orderPrice,
    orderedDate,
    status
  ) {
    return {
      orderID,
      orderType,
      orderName,
      translator,
      orderPrice,
      orderedDate,
      status,
    };
  }
  const rows = [
    createData(
      "001",
      "General Document",
      `${location.state.Doc}`,
      "Michael Lee",
      "$25",
      `${location.state.Day}`,
      `${location.state.Time}`
    ),
    // createData(
    //   "099",
    //   "Official Document",
    //   "Identification Card",
    //   "Sam Smith",
    //   "$42.5",
    //   "13 June 2022",
    //   "Succeed"
    // ),
    // createData(
    //   "0100",
    //   "Official Document",
    //   "Identification Card",
    //   "Sam Smith",
    //   "$42.5",
    //   "13 June 2022",
    //   "05:21:35"
    // ),
    // createData(
    //   "0101",
    //   "Official Document",
    //   "Certificate of use",
    //   "Michael Lee",
    //   "$31.2",
    //   "14 June 2022",
    //   "06:21:35"
    // ),
    // createData(
    //   "0102",
    //   "Official Document",
    //   "Certificate of use",
    //   "Michael Lee",
    //   "$31.2",
    //   "15 June 2022",
    //   "Succeed"
    // ),
    // createData(
    //   "0103",
    //   "Official Document",
    //   "Certificate of use",
    //   "Michael Lee",
    //   "$31.2",
    //   "14 June 2022",
    //   "Cancle"
    // ),
  ];

  const rows1 = [
    createData(
      "098",
      "General Document",
      "Novel",
      "Michael Lee",
      "$25",
      "05 June 2022",
      "00:21:35"
    ),

    // createData(
    //   "0100",
    //   "Official Document",
    //   "Identification Card",
    //   "Sam Smith",
    //   "$42.5",
    //   "13 June 2022",
    //   "05:21:35"
    // ),
    // createData(
    //   "0101",
    //   "Official Document",
    //   "Certificate of use",
    //   "Michael Lee",
    //   "$31.2",
    //   "14 June 2022",
    //   "06:21:35"
    // ),
  ];

  // const rows2 = [
  //   createData(
  //     "099",
  //     "Official Document",
  //     "Identification Card",
  //     "Sam Smith",
  //     "$42.5",
  //     "13 June 2022",
  //     "Succeed"
  //   ),
  //   createData(
  //     "0102",
  //     "Official Document",
  //     "Certificate of use",
  //     "Michael Lee",
  //     "$31.2",
  //     "15 June 2022",
  //     "Succeed"
  //   ),
  // ];

  // const rows3 = [
  //   createData(
  //     "0103",
  //     "Official Document",
  //     "Certificate of use",
  //     "Michael Lee",
  //     "$31.2",
  //     "14 June 2022",
  //     "Cancle"
  //   ),
  // ];

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
            Your Orders
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

        <div style={{ position: "absolute", left: 175, top: 180 }}>
          {type === 1 ? (
            <>
              <button
                style={{
                  width: 215,
                  background: "#FFFFFF",
                  color: "#606060",
                  height: 210,
                  border: "1px solid #E5E5E5",
                  borderRadius: 20,
                  fontSize: 24,
                  fontWeight: 600,
                  marginRight: 80,
                  padding: 20,
                }}
                onClick={() => setType(0)}
              >
                <img
                  src={All}
                  alt="ALL"
                  style={{ width: "60%", height: "50%" }}
                />
                <br />
                <br />
                <p>ALL</p>
              </button>

              <button
                style={{
                  width: 215,
                  background: "#FFFFFF",
                  color: "#FFC100",
                  height: 210,
                  border: "1px solid #E5E5E5",
                  borderRadius: 20,
                  fontSize: 24,
                  fontWeight: 600,
                  marginRight: 80,
                  padding: 20,
                }}
                onClick={() => setType(1)}
              >
                <img
                  src={Inprocess2}
                  alt="Inprocess"
                  style={{ width: "60%", height: "50%" }}
                />
                <br />
                <br />
                <p>INPROCESS</p>
              </button>

              <button
                style={{
                  width: 215,
                  background: "#FFFFFF",
                  color: "#606060",
                  height: 210,
                  border: "1px solid #E5E5E5",
                  borderRadius: 20,
                  fontSize: 24,
                  fontWeight: 600,
                  marginRight: 80,
                  padding: 20,
                }}
                onClick={() => setType(2)}
              >
                <img
                  src={Succeed}
                  alt="Succeed"
                  style={{ width: "60%", height: "50%" }}
                />
                <br />
                <br />
                <p>SUCCEED</p>
              </button>

              <button
                style={{
                  width: 215,
                  background: "#FFFFFF",
                  color: "#606060",
                  height: 210,
                  border: "1px solid #E5E5E5",
                  borderRadius: 20,
                  fontSize: 24,
                  fontWeight: 600,
                  marginRight: 80,
                }}
                onClick={() => setType(3)}
              >
                <img
                  src={Cancle}
                  alt="Cancle"
                  style={{ width: "50%", height: "40%" }}
                />
                <br />
                <br />
                <p>CANCLE</p>
              </button>

              <div
                style={{
                  textAlign: "left",
                  position: "absolute",
                  top: 245,
                  width: "fit-content",
                }}
              >
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 1090 }}>
                    <TableHead style={{ background: "#263238" }}>
                      <TableRow>
                        <TableCell align="center" style={{ color: "#FFFFFF" }}>
                          Order ID
                        </TableCell>
                        <TableCell align="center" style={{ color: "#FFFFFF" }}>
                          Order type
                        </TableCell>
                        <TableCell align="center" style={{ color: "#FFFFFF" }}>
                          Order name
                        </TableCell>
                        <TableCell align="center" style={{ color: "#FFFFFF" }}>
                          Translator
                        </TableCell>
                        <TableCell align="center" style={{ color: "#FFFFFF" }}>
                          Order price
                        </TableCell>
                        <TableCell align="center" style={{ color: "#FFFFFF" }}>
                          Ordered date
                        </TableCell>
                        <TableCell align="center" style={{ color: "#FFFFFF" }}>
                          Status
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows1.map((row) => (
                        <TableRow
                          key={row.orderID}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell component="th" scope="row">
                            {row.orderID}
                          </TableCell>
                          <TableCell align="center">{row.orderType}</TableCell>
                          <TableCell align="center">{row.orderName}</TableCell>
                          <TableCell align="center">{row.translator}</TableCell>
                          <TableCell align="center">{row.orderPrice}</TableCell>
                          <TableCell align="center">
                            {row.orderedDate}
                          </TableCell>
                          {row.status === "Succeed" ? (
                            <TableCell
                              align="center"
                              style={{ color: "#46BC52" }}
                            >
                              {row.status}
                            </TableCell>
                          ) : row.status === "Cancle" ? (
                            <TableCell
                              align="center"
                              style={{ color: "#CF0202" }}
                            >
                              {row.status}
                            </TableCell>
                          ) : (
                            <TableCell align="center">{row.status}</TableCell>
                          )}
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            </>
          ) : type === 2 ? (
            <>
              <button
                style={{
                  width: 215,
                  background: "#FFFFFF",
                  color: "#606060",
                  height: 210,
                  border: "1px solid #E5E5E5",
                  borderRadius: 20,
                  fontSize: 24,
                  fontWeight: 600,
                  marginRight: 80,
                  padding: 20,
                }}
                onClick={() => setType(0)}
              >
                <img
                  src={All}
                  alt="ALL"
                  style={{ width: "60%", height: "50%" }}
                />
                <br />
                <br />
                <p>ALL</p>
              </button>

              <button
                style={{
                  width: 215,
                  background: "#FFFFFF",
                  color: "#606060",
                  height: 210,
                  border: "1px solid #E5E5E5",
                  borderRadius: 20,
                  fontSize: 24,
                  fontWeight: 600,
                  marginRight: 80,
                  padding: 20,
                }}
                onClick={() => setType(1)}
              >
                <img
                  src={Inprocess}
                  alt="Inprocess"
                  style={{ width: "60%", height: "50%" }}
                />
                <br />
                <br />
                <p>INPROCESS</p>
              </button>

              <button
                style={{
                  width: 215,
                  background: "#FFFFFF",
                  color: "#46BC52",
                  height: 210,
                  border: "1px solid #E5E5E5",
                  borderRadius: 20,
                  fontSize: 24,
                  fontWeight: 600,
                  marginRight: 80,
                  padding: 20,
                }}
                onClick={() => setType(2)}
              >
                <img
                  src={Succeed2}
                  alt="Succeed"
                  style={{ width: "60%", height: "50%" }}
                />
                <br />
                <br />
                <p>SUCCEED</p>
              </button>

              <button
                style={{
                  width: 215,
                  background: "#FFFFFF",
                  color: "#606060",
                  height: 210,
                  border: "1px solid #E5E5E5",
                  borderRadius: 20,
                  fontSize: 24,
                  fontWeight: 600,
                  marginRight: 80,
                }}
                onClick={() => setType(3)}
              >
                <img
                  src={Cancle}
                  alt="Cancle"
                  style={{ width: "50%", height: "40%" }}
                />
                <br />
                <br />
                <p>CANCLE</p>
              </button>

              <div
                style={{
                  textAlign: "left",
                  position: "absolute",
                  top: 245,
                  width: "fit-content",
                }}
              >
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 1090 }}>
                    <TableHead style={{ background: "#263238" }}>
                      <TableRow>
                        <TableCell align="center" style={{ color: "#FFFFFF" }}>
                          Order ID
                        </TableCell>
                        <TableCell align="center" style={{ color: "#FFFFFF" }}>
                          Order type
                        </TableCell>
                        <TableCell align="center" style={{ color: "#FFFFFF" }}>
                          Order name
                        </TableCell>
                        <TableCell align="center" style={{ color: "#FFFFFF" }}>
                          Translator
                        </TableCell>
                        <TableCell align="center" style={{ color: "#FFFFFF" }}>
                          Order price
                        </TableCell>
                        <TableCell align="center" style={{ color: "#FFFFFF" }}>
                          Ordered date
                        </TableCell>
                        <TableCell align="center" style={{ color: "#FFFFFF" }}>
                          Status
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    {/* <TableBody>
                      {rows2.map((row) => (
                        <TableRow
                          key={row.orderID}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell component="th" scope="row">
                            {row.orderID}
                          </TableCell>
                          <TableCell align="center">{row.orderType}</TableCell>
                          <TableCell align="center">{row.orderName}</TableCell>
                          <TableCell align="center">{row.translator}</TableCell>
                          <TableCell align="center">{row.orderPrice}</TableCell>
                          <TableCell align="center">
                            {row.orderedDate}
                          </TableCell>
                          {row.status === "Succeed" ? (
                            <TableCell
                              align="center"
                              style={{ color: "#46BC52" }}
                            >
                              {row.status}
                            </TableCell>
                          ) : row.status === "Cancle" ? (
                            <TableCell
                              align="center"
                              style={{ color: "#CF0202" }}
                            >
                              {row.status}
                            </TableCell>
                          ) : (
                            <TableCell align="center">{row.status}</TableCell>
                          )}
                        </TableRow>
                      ))}
                    </TableBody> */}
                  </Table>
                </TableContainer>
              </div>
            </>
          ) : type === 3 ? (
            <>
              <button
                style={{
                  width: 215,
                  background: "#FFFFFF",
                  color: "#606060",
                  height: 210,
                  border: "1px solid #E5E5E5",
                  borderRadius: 20,
                  fontSize: 24,
                  fontWeight: 600,
                  marginRight: 80,
                  padding: 20,
                }}
                onClick={() => setType(0)}
              >
                <img
                  src={All}
                  alt="ALL"
                  style={{ width: "60%", height: "50%" }}
                />
                <br />
                <br />
                <p>ALL</p>
              </button>

              <button
                style={{
                  width: 215,
                  background: "#FFFFFF",
                  color: "#606060",
                  height: 210,
                  border: "1px solid #E5E5E5",
                  borderRadius: 20,
                  fontSize: 24,
                  fontWeight: 600,
                  marginRight: 80,
                  padding: 20,
                }}
                onClick={() => setType(1)}
              >
                <img
                  src={Inprocess}
                  alt="Inprocess"
                  style={{ width: "60%", height: "50%" }}
                />
                <br />
                <br />
                <p>INPROCESS</p>
              </button>

              <button
                style={{
                  width: 215,
                  background: "#FFFFFF",
                  color: "#606060",
                  height: 210,
                  border: "1px solid #E5E5E5",
                  borderRadius: 20,
                  fontSize: 24,
                  fontWeight: 600,
                  marginRight: 80,
                  padding: 20,
                }}
                onClick={() => setType(2)}
              >
                <img
                  src={Succeed}
                  alt="Succeed"
                  style={{ width: "60%", height: "50%" }}
                />
                <br />
                <br />
                <p>SUCCEED</p>
              </button>

              <button
                style={{
                  width: 215,
                  background: "#FFFFFF",
                  color: "#CF0202",
                  height: 210,
                  border: "1px solid #E5E5E5",
                  borderRadius: 20,
                  fontSize: 24,
                  fontWeight: 600,
                  marginRight: 80,
                }}
                onClick={() => setType(3)}
              >
                <img
                  src={Cancle2}
                  alt="Cancle"
                  style={{ width: "50%", height: "40%" }}
                />
                <br />
                <br />
                <p>CANCLE</p>
              </button>

              <div
                style={{
                  textAlign: "left",
                  position: "absolute",
                  top: 245,
                  width: "fit-content",
                }}
              >
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 1090 }}>
                    <TableHead style={{ background: "#263238" }}>
                      <TableRow>
                        <TableCell align="center" style={{ color: "#FFFFFF" }}>
                          Order ID
                        </TableCell>
                        <TableCell align="center" style={{ color: "#FFFFFF" }}>
                          Order type
                        </TableCell>
                        <TableCell align="center" style={{ color: "#FFFFFF" }}>
                          Order name
                        </TableCell>
                        <TableCell align="center" style={{ color: "#FFFFFF" }}>
                          Translator
                        </TableCell>
                        <TableCell align="center" style={{ color: "#FFFFFF" }}>
                          Order price
                        </TableCell>
                        <TableCell align="center" style={{ color: "#FFFFFF" }}>
                          Ordered date
                        </TableCell>
                        <TableCell align="center" style={{ color: "#FFFFFF" }}>
                          Status
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    {/* <TableBody>
                      {rows3.map((row) => (
                        <TableRow
                          key={row.orderID}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell component="th" scope="row">
                            {row.orderID}
                          </TableCell>
                          <TableCell align="center">{row.orderType}</TableCell>
                          <TableCell align="center">{row.orderName}</TableCell>
                          <TableCell align="center">{row.translator}</TableCell>
                          <TableCell align="center">{row.orderPrice}</TableCell>
                          <TableCell align="center">
                            {row.orderedDate}
                          </TableCell>
                          {row.status === "Succeed" ? (
                            <TableCell
                              align="center"
                              style={{ color: "#46BC52" }}
                            >
                              {row.status}
                            </TableCell>
                          ) : row.status === "Cancle" ? (
                            <TableCell
                              align="center"
                              style={{ color: "#CF0202" }}
                            >
                              {row.status}
                            </TableCell>
                          ) : (
                            <TableCell align="center">{row.status}</TableCell>
                          )}
                        </TableRow>
                      ))}
                    </TableBody> */}
                  </Table>
                </TableContainer>
              </div>
            </>
          ) : type === 0 ? (
            <>
              <button
                style={{
                  width: 215,
                  background: "#FFFFFF",
                  color: "#0082E0",
                  height: 210,
                  border: "1px solid #E5E5E5",
                  borderRadius: 20,
                  fontSize: 24,
                  fontWeight: 600,
                  marginRight: 80,
                  padding: 20,
                }}
                onClick={() => setType(0)}
              >
                <img
                  src={All2}
                  alt="ALL"
                  style={{ width: "60%", height: "50%" }}
                />
                <br />
                <br />
                <p>ALL</p>
              </button>

              <button
                style={{
                  width: 215,
                  background: "#FFFFFF",
                  color: "#606060",
                  height: 210,
                  border: "1px solid #E5E5E5",
                  borderRadius: 20,
                  fontSize: 24,
                  fontWeight: 600,
                  marginRight: 80,
                  padding: 20,
                }}
                onClick={() => setType(1)}
              >
                <img
                  src={Inprocess}
                  alt="Inprocess"
                  style={{ width: "60%", height: "50%" }}
                />
                <br />
                <br />
                <p>INPROCESS</p>
              </button>

              <button
                style={{
                  width: 215,
                  background: "#FFFFFF",
                  color: "#606060",
                  height: 210,
                  border: "1px solid #E5E5E5",
                  borderRadius: 20,
                  fontSize: 24,
                  fontWeight: 600,
                  marginRight: 80,
                  padding: 20,
                }}
                onClick={() => setType(2)}
              >
                <img
                  src={Succeed}
                  alt="Succeed"
                  style={{ width: "60%", height: "50%" }}
                />
                <br />
                <br />
                <p>SUCCEED</p>
              </button>

              <button
                style={{
                  width: 215,
                  background: "#FFFFFF",
                  color: "#606060",
                  height: 210,
                  border: "1px solid #E5E5E5",
                  borderRadius: 20,
                  fontSize: 24,
                  fontWeight: 600,
                  marginRight: 80,
                }}
                onClick={() => setType(3)}
              >
                <img
                  src={Cancle}
                  alt="Cancle"
                  style={{ width: "50%", height: "40%" }}
                />
                <br />
                <br />
                <p>CANCLE</p>
              </button>

              <div
                style={{
                  textAlign: "left",
                  position: "absolute",
                  top: 245,
                  width: "fit-content",
                }}
              >
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 1090 }}>
                    <TableHead style={{ background: "#263238" }}>
                      <TableRow>
                        <TableCell align="center" style={{ color: "#FFFFFF" }}>
                          Order ID
                        </TableCell>
                        <TableCell align="center" style={{ color: "#FFFFFF" }}>
                          Order type
                        </TableCell>
                        <TableCell align="center" style={{ color: "#FFFFFF" }}>
                          Order name
                        </TableCell>
                        <TableCell align="center" style={{ color: "#FFFFFF" }}>
                          Translator
                        </TableCell>
                        <TableCell align="center" style={{ color: "#FFFFFF" }}>
                          Order price
                        </TableCell>
                        <TableCell align="center" style={{ color: "#FFFFFF" }}>
                          Ordered date
                        </TableCell>
                        <TableCell align="center" style={{ color: "#FFFFFF" }}>
                          Status
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <TableRow
                          key={row.orderID}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell component="th" scope="row">
                            {row.orderID}
                          </TableCell>
                          <TableCell align="center">{row.orderType}</TableCell>
                          <TableCell align="center">{row.orderName}</TableCell>
                          <TableCell align="center">{row.translator}</TableCell>
                          <TableCell align="center">{row.orderPrice}</TableCell>
                          <TableCell align="center">
                            {row.orderedDate}
                          </TableCell>
                          {row.status === "Succeed" ? (
                            <TableCell
                              align="center"
                              style={{ color: "#46BC52" }}
                            >
                              {row.status}
                            </TableCell>
                          ) : row.status === "Cancle" ? (
                            <TableCell
                              align="center"
                              style={{ color: "#CF0202" }}
                            >
                              {row.status}
                            </TableCell>
                          ) : (
                            <TableCell align="center">{row.status}</TableCell>
                          )}
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            </>
          ) : null}
        </div>
      </Box>
    </div>
  );
}
