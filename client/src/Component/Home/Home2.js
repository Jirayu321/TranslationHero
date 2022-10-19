import * as React from "react";
import {
  Box,
  Paper,
  IconButton,
  InputBase,
  // Table,
  // TableBody,
  // TableCell,
  // TableContainer,
  // TableHead,
  // TableRow,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import Navbars from "../Navbar/navbarHome2.js";
import Article from "../../Images/Article.png";
import Novel from "../../Images/Novel.png";
import Submovie from "../../Images/Submovie.png";
import Treatise from "../../Images/Treatise.png";
import Essay from "../../Images/Essay.png";
import Other from "../../Images/Other.png";
import Birth from "../../Images/Birth.png";
import HouseRegistration from "../../Images/HouseRegistration.png";
import IdentificationCard from "../../Images/IdentificationCard.png";
import MarriageCertificate from "../../Images/MarriageCertificate.png";
import DivorceCertificate from "../../Images/DivorceCertificate.png";
import DivorceRegistration from "../../Images/DivorceRegistration.png";
import{HomeEN,HomeDE,HomeTH} from ".././Data/DataLanguage"

// import Avatar7 from "../../Images/Avatar7.png";
// import Avatar8 from "../../Images/Avatar8.png";
// import Avatar9 from "../../Images/Avatar9.png";
// import Avatar10 from "../../Images/Avatar10.png";
// import Avatar11 from "../../Images/Avatar11.png";

import { IoDocumentText, IoIdCardSharp } from "react-icons/io5";
import { RiUserSearchFill } from "react-icons/ri";
import Drawer from "../Drawer/DrawerCustomer";
// import { fontSize } from "@mui/system";


import {  useNavigate } from "react-router-dom";

export default function Home2() {
  const navigate = useNavigate();

  //   const [value, setValue] = React.useState(4);
  const [type, setType] = React.useState(1);
  const { innerWidth: width } = window;
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
      "0103",
      "General Document",
      "Novel",
      "Michael Lee",
      "$25",
      "05 June 2022",
      "00:21:35"
    ),
    createData(
      "0104",
      "Official Document",
      "Identification Card",
      "Sam Smith",
      "$42.5",
      "13 June 2022",
      "05:21:35"
    ),
    createData(
      "0105",
      "Official Document",
      "Certificate of use",
      "Michael Lee",
      "$31.2",
      "14 June 2022",
      "06:21:35"
    ),
  ];

  return (
    <div className="App-body-home2">
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
              color: "#034D82",
              marginLeft: 20,
              position: "absolute",
              top: "13%",
            }}
          >
            HOME
          </h4>
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: 330,
              position: "absolute",
              left: "75%",
              top: "13%",
              borderRadius: 20,
              backgroundColor: "#FBFBFB",
              boxShadow: "none",
            }}
          >
            <IconButton
              type="submit"
              sx={{ p: "10px", color: "#034D82" }}
              aria-label="search"
            >
              <SearchIcon />
            </IconButton>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search"
              inputProps={{ "aria-label": "search google maps" }}
            />
          </Paper>
        </div>

        <div style={{ position: "absolute", left: 178, top: 180 }}>
          {type === 1 ? (
            <>
              <button
                style={{
                  width: width * 0.2,
                  background: "#FFFFFF",
                  color: "#0082E0",
                  height: 210,
                  border: "1px solid #E5E5E5",
                  borderRadius: 20,
                  fontSize: 24,
                  fontWeight: 600,
                  marginRight: 100,
                }}
                onClick={() => setType(1)}
              >
                <IoDocumentText style={{ width: "30%", height: "30%" }} />
                <br />
                <br />
                General Document
              </button>

              <button
                style={{
                  width: width * 0.2,
                  background: "#FFFFFF",
                  color: "#858585",
                  height: 210,
                  border: "1px solid #E5E5E5",
                  borderRadius: 20,
                  fontSize: 24,
                  fontWeight: 600,
                  marginRight: 100,
                }}
                onClick={() => setType(2)}
              >
                <IoIdCardSharp style={{ width: "30%", height: "30%" }} />
                <br />
                <br />
                Document offical
              </button>

              <button
                style={{
                  width: width * 0.2,
                  background: "#FFFFFF",
                  color: "#858585",
                  height: 210,
                  border: "1px solid #E5E5E5",
                  borderRadius: 20,
                  fontSize: 24,
                  fontWeight: 600,
                  marginRight: 100,
                }}
                onClick={() => setType(3)}
              >
                <RiUserSearchFill style={{ width: "30%", height: "30%" }} />
                <br />
                <br />
                Find a Translator
              </button>

              <div
                style={{
                  position: "absolute",
                  marginTop: 40,
                  display: "flex",
                  flexDirection: "row",
                  overflowX: "scroll",
                  maxWidth: "90%",
                }}
              >
                <button
                  style={{
                    background: "#FBFBFB",
                    width: 180,
                    height: 180,
                    color: "#0079CC",
                    float: "left",
                    borderRadius: 20,
                    fontSize: 15,
                    fontWeight: 500,
                    marginRight: 30,
                    border:"none"
                  }}
                  onClick={()=> navigate("/Matching",{state:{id:1,name:'Article'}})}
                >
                  <div
                    style={{
                      background: "rgb(236 248 255)",
                      borderRadius: 20,
                      width: 150,
                      margin: 15,
                      padding: 15,
                    }}
                  >
                    <img
                      src={Article}
                      alt="Article"
                      style={{
                        marginBottom: 10,
                        height: "auto",
                        width: 60,
                      }}
                    />
                  </div>
                  <p>Article</p>
                </button>

                <button
                  style={{
                    background: "#FBFBFB",
                    width: 180,
                    height: 180,
                    color: "#0079CC",
                    float: "left",
                    borderRadius: 20,
                    fontSize: 15,
                    fontWeight: 500,
                    marginRight: 30,
                    border:"none"
                  }}
                  onClick={()=> navigate("/Matching",{state:{id:1,name:'Novel'}})}
                >
                  <div
                    style={{
                      background: "rgb(236 248 255)",
                      borderRadius: 20,
                      width: 150,
                      margin: 15,
                      padding: 15,
                    }}
                  >
                    <img
                      src={Novel}
                      alt="Novel"
                      style={{
                        marginBottom: 10,
                        height: "auto",
                        width: 90,
                      }}
                    />
                  </div>
                  <p>Novel</p>
                </button>

                <button
                  style={{
                    background: "#FBFBFB",
                    width: 180,
                    height: 180,
                    color: "#0079CC",
                    float: "left",
                    borderRadius: 20,
                    fontSize: 15,
                    fontWeight: 500,
                    marginRight: 30,
                    border:"none"
                  }}
                  onClick={()=> navigate("/Matching",{state:{id:1,name:'Submovie'}})}

                >
                  <div
                    style={{
                      background: "rgb(236 248 255)",
                      borderRadius: 20,
                      width: 150,
                      margin: 15,
                      padding: 15,
                    }}
                  >
                    <img
                      src={Submovie}
                      alt="Submovie"
                      style={{
                        marginBottom: 10,
                        height: "auto",
                        width: 70,
                      }}
                    />
                  </div>
                  <p>Submovie</p>
                </button>

                <button
                  style={{
                    background: "#FBFBFB",
                    width: 180,
                    height: 180,
                    color: "#0079CC",
                    float: "left",
                    borderRadius: 20,
                    fontSize: 20,
                    fontWeight: 500,
                    marginRight: 30,
                    border:"none"
                  }}
                  onClick={()=> navigate("/Matching",{state:{id:1,name:'Treatise'}})}

                >
                  <div
                    style={{
                      background: "rgb(236 248 255)",
                      borderRadius: 20,
                      width: 150,
                      margin: 15,
                      padding: 15,
                    }}
                  >
                    <img
                      src={Treatise}
                      style={{
                        marginBottom: 10,
                        height: "auto",
                        width: 60,
                      }}
                      alt="Treatise"
                    />
                  </div>
                  <p>Treatise</p>
                </button>

                <button
                  style={{
                    background: "#FBFBFB",
                    width: 180,
                    height: 180,
                    color: "#0079CC",
                    float: "left",
                    borderRadius: 20,
                    fontSize: 20,
                    fontWeight: 500,
                    marginRight: 30,
                    border:"none"
                  }}
                  onClick={()=> navigate("/Matching",{state:{id:1,name:'Essay'}})}

                >
                  <div
                    style={{
                      background: "rgb(236 248 255)",
                      borderRadius: 20,
                      width: 150,
                      margin: 15,
                      padding: 15,
                    }}
                  >
                    <img
                      src={Essay}
                      style={{
                        marginBottom: 10,
                        height: "auto",
                        width: 60,
                      }}
                      alt="Essay"
                    />
                  </div>
                  <p>Essay</p>
                </button>

                <div
                  style={{
                    background: "#FBFBFB",
                    width: 180,
                    height: 180,
                    color: "#0079CC",
                    float: "left",
                    borderRadius: 20,
                    fontSize: 20,
                    fontWeight: 500,
                    marginRight: 30,
                  }}
                >
                  <div
                    style={{
                      background: "rgb(236 248 255)",
                      borderRadius: 20,
                      width: 150,
                      margin: 15,
                      padding: 30,
                      height: 100,
                    }}
                  >
                    <img
                      src={Other}
                      alt="Other"
                      style={{
                        marginBottom: 10,
                        height: "auto",
                        width: 60,
                      }}
                    />
                  </div>
                  <p>Other</p>
                </div>
              </div>

              <div
                style={{
                  textAlign: "left",
                  position: "absolute",
                  top: 480,
                  width: "100%",
                }}
              >
                {/* <p
                  style={{
                    textAlign: "center",
                    color: "#034D82",
                    fontSize: 24,
                    fontWeight: 600,
                  }}
                >
                  Your Order
                </p> */}
                {/* <TableContainer component={Paper}>
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
                          <TableCell align="center">{row.status}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer> */}

                {/* <p
                  style={{
                    textAlign: "center",
                    color: "#034D82",
                    fontSize: 24,
                    fontWeight: 600,
                    marginTop: 50,
                    marginBottom: 30,
                  }}
                >
                  Top 5 Translators
                </p> */}
                {/* <div style={{ width: " max-content" }}>
                  <div
                    style={{
                      textAlign: "center",
                      float: "left",
                      background: "#FFFFFF",
                      borderRadius: 20,
                      width: 220,
                      padding: 25,
                      marginRight: 20,
                      height: 350,
                    }}
                  >
                    <div
                      style={{
                        background: "#FFC100",
                        color: "#FFFF",
                        width: 30,
                        height: 30,
                        borderRadius: 100,
                        padding: 3,
                        position: "relative",
                        top: -40,
                        left: 70,
                      }}
                    >
                      1
                    </div>
                    <img
                      src={Avatar7}
                      style={{ marginBottom: 10, height: "auto", width: "50%" }}
                      alt="Avatar7"
                    />

                    <p style={{ fontSize: 25 }}>Michael Lee</p>
                    <div style={{ textAlign: "left" }}>
                      <div style={{ fontSize: 12, width: "90%" }}>
                        <p>
                          Skills : Translating theses, articles, important
                          documents
                        </p>
                      </div>
                      <div style={{ fontSize: 12, width: "90%" }}>
                        <p>Language : English, Português, Deutsch, Italiano</p>
                      </div>
                    </div>
                  </div>

                  <div
                    style={{
                      textAlign: "center",
                      float: "left",
                      background: "#FFFFFF",
                      borderRadius: 20,
                      width: 220,
                      padding: 25,
                      marginRight: 20,
                      height: 350,
                    }}
                  >
                    <div
                      style={{
                        background: "#034D82",
                        color: "#FFFF",
                        width: 30,
                        height: 30,
                        borderRadius: 100,
                        padding: 3,
                        position: "relative",
                        top: -40,
                        left: 70,
                      }}
                    >
                      2
                    </div>
                    <img
                      src={Avatar8}
                      style={{ marginBottom: 10, height: "auto", width: "50%" }}
                      alt="Avatar8"
                    />

                    <p style={{ fontSize: 25 }}>Adam Scott</p>
                    <div style={{ textAlign: "left" }}>
                      <div style={{ fontSize: 12, width: "90%" }}>
                        <p>Skills : Articles, important documents</p>
                      </div>
                      <div style={{ fontSize: 12, width: "90%" }}>
                        <p>Language : English, Français, Deutsch, Türkçe</p>
                      </div>
                    </div>
                  </div>

                  <div
                    style={{
                      textAlign: "center",
                      float: "left",
                      background: "#FFFFFF",
                      borderRadius: 20,
                      width: 220,
                      padding: 25,
                      marginRight: 20,
                      height: 350,
                    }}
                  >
                    <div
                      style={{
                        background: "#FF005C",
                        color: "#FFFF",
                        width: 30,
                        height: 30,
                        borderRadius: 100,
                        padding: 3,
                        position: "relative",
                        top: -40,
                        left: 70,
                      }}
                    >
                      3
                    </div>
                    <img
                      src={Avatar9}
                      style={{ marginBottom: 10, height: "auto", width: "50%" }}
                      alt="Avatar9"
                    />

                    <p style={{ fontSize: 25 }}>Natasha Lolan</p>
                    <div style={{ textAlign: "left" }}>
                      <div style={{ fontSize: 12, width: "90%" }}>
                        <p>Skills : Articles, novels, movie subtitles</p>
                      </div>
                      <div style={{ fontSize: 12, width: "90%" }}>
                        <p>Language : English, Deutsch</p>
                      </div>
                    </div>
                  </div>

                  <div
                    style={{
                      textAlign: "center",
                      float: "left",
                      background: "#FFFFFF",
                      borderRadius: 20,
                      width: 220,
                      padding: 25,
                      marginRight: 20,
                      height: 350,
                    }}
                  >
                    <div
                      style={{
                        background: "#858585",
                        color: "#FFFF",
                        width: 30,
                        height: 30,
                        borderRadius: 100,
                        padding: 3,
                        position: "relative",
                        top: -40,
                        left: 70,
                      }}
                    >
                      4
                    </div>
                    <img
                      src={Avatar10}
                      style={{ marginBottom: 10, height: "auto", width: "50%" }}
                      alt="Avatar10"
                    />

                    <p style={{ fontSize: 25 }}>Adam Scott</p>
                    <div style={{ textAlign: "left" }}>
                      <div style={{ fontSize: 12, width: "90%" }}>
                        <p>
                          Skills : Translating theses, articles, movie subtitles
                        </p>
                      </div>
                      <div style={{ fontSize: 12, width: "90%" }}>
                        <p>Language : English, Deutsch, 한국어</p>
                      </div>
                    </div>
                  </div>

                  <div
                    style={{
                      textAlign: "center",
                      float: "left",
                      background: "#FFFFFF",
                      borderRadius: 20,
                      width: 220,
                      padding: 25,
                      marginRight: 20,
                      height: 350,
                    }}
                  >
                    <div
                      style={{
                        background: "#858585",
                        color: "#FFFF",
                        width: 30,
                        height: 30,
                        borderRadius: 100,
                        padding: 3,
                        position: "relative",
                        top: -40,
                        left: 70,
                      }}
                    >
                      5
                    </div>
                    <img
                      src={Avatar11}
                      style={{ marginBottom: 10, height: "auto", width: "50%" }}
                      alt="Avatar11"
                    />

                    <p style={{ fontSize: 25 }}>Sam Smith</p>
                    <div style={{ textAlign: "left" }}>
                      <div style={{ fontSize: 12, width: "90%" }}>
                        <p>
                          Skills : Translating theses, articles, important
                          documents
                        </p>
                      </div>
                      <div style={{ fontSize: 12, width: "90%" }}>
                        <p>Language :English, Русский язык, Deutsch</p>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </>
          ) : type === 2 ? (
            <>
              <button
                style={{
                  width: width * 0.2,
                  background: "#FFFFFF",
                  color: "#858585",
                  height: 210,
                  border: "1px solid #E5E5E5",
                  borderRadius: 20,
                  fontSize: 24,
                  fontWeight: 600,
                  marginRight: 100,
                }}
                onClick={() => setType(1)}
              >
                <IoDocumentText style={{ width: "30%", height: "30%" }} />
                <br />
                <br />
                General Document
              </button>

              <button
                style={{
                  width: width * 0.2,
                  background: "#FFFFFF",
                  color: "#FFC100",
                  height: 210,
                  border: "1px solid #E5E5E5",
                  borderRadius: 20,
                  fontSize: 24,
                  fontWeight: 600,
                  marginRight: 100,
                }}
                onClick={() => setType(2)}
              >
                <IoIdCardSharp style={{ width: "30%", height: "30%" }} />
                <br />
                <br />
                Document offical
              </button>

              <button
                style={{
                  width: width * 0.2,
                  background: "#FFFFFF",
                  color: "#858585",
                  height: 210,
                  border: "1px solid #E5E5E5",
                  borderRadius: 20,
                  fontSize: 24,
                  fontWeight: 600,
                  marginRight: 100,
                }}
                onClick={() => setType(3)}
              >
                <RiUserSearchFill style={{ width: "30%", height: "30%" }} />
                <br />
                <br />
                Find a Translator
              </button>

              <div
                style={{
                  position: "absolute",
                  marginTop: 40,
                  display: "flex",
                  flexDirection: "row",
                  overflowX: "scroll",
                  maxWidth: "90%",
                }}
              >
                <div
                  style={{
                    background: "#FBFBFB",
                    width: 180,
                    height: 180,
                    color: "#0079CC",
                    float: "left",
                    borderRadius: 20,
                    fontSize: 15,
                    fontWeight: 500,
                    marginRight: 30,
                  }}
                >
                  <div
                    style={{
                      background: "rgb(236 248 255)",
                      borderRadius: 20,
                      width: 150,
                      margin: 15,
                      padding: 30,
                      height: 100,
                    }}
                  >
                    <img
                      src={Birth}
                      alt="Birth Certificate"
                      style={{
                        marginBottom: 10,
                        height: "auto",
                        width: 60,
                      }}
                    />
                  </div>
                  <p>Birth Certificate (TH)</p>
                </div>

                <div
                  style={{
                    background: "#FBFBFB",
                    width: 180,
                    height: 180,
                    color: "#0079CC",
                    float: "left",
                    borderRadius: 20,
                    fontSize: 15,
                    fontWeight: 500,
                    marginRight: 30,
                  }}
                >
                  <div
                    style={{
                      background: "rgb(236 248 255)",
                      borderRadius: 20,
                      width: 150,
                      margin: 15,
                      padding: 30,
                      height: 100,
                    }}
                  >
                    <img
                      src={HouseRegistration}
                      alt="HouseRegistration"
                      style={{
                        marginBottom: 10,
                        height: "auto",
                        width: 60,
                      }}
                    />
                  </div>
                  <p>House Registration (TH)</p>
                </div>

                <div
                  style={{
                    background: "#FBFBFB",
                    width: 180,
                    height: 180,
                    color: "#0079CC",
                    float: "left",
                    borderRadius: 20,
                    fontSize: 15,
                    fontWeight: 500,
                    marginRight: 30,
                  }}
                >
                  <div
                    style={{
                      background: "rgb(236 248 255)",
                      borderRadius: 20,
                      width: 150,
                      margin: 15,
                      padding: 30,
                      height: 100,
                    }}
                  >
                    <img
                      src={IdentificationCard}
                      alt="IdentificationCard"
                      style={{
                        marginBottom: 10,
                        height: "auto",
                        width: 60,
                      }}
                    />
                  </div>
                  <p>Identification Card (TH)</p>
                </div>

                <div
                  style={{
                    background: "#FBFBFB",
                    width: 180,
                    height: 180,
                    color: "#0079CC",
                    float: "left",
                    borderRadius: 20,
                    fontSize: 15,
                    fontWeight: 500,
                    marginRight: 30,
                  }}
                >
                  <div
                    style={{
                      background: "rgb(236 248 255)",
                      borderRadius: 20,
                      width: 150,
                      margin: 15,
                      padding: 30,
                      height: 100,
                    }}
                  >
                    <img
                      src={HouseRegistration}
                      alt="Family Status Registration"
                      style={{
                        marginBottom: 10,
                        height: "auto",
                        width: 60,
                      }}
                    />
                  </div>
                  <p>Family Status Registration (TH)</p>
                </div>

                <div
                  style={{
                    background: "#FBFBFB",
                    width: 180,
                    height: 180,
                    color: "#0079CC",
                    float: "left",
                    borderRadius: 20,
                    fontSize: 15,
                    fontWeight: 500,
                    marginRight: 30,
                  }}
                >
                  <div
                    style={{
                      background: "rgb(236 248 255)",
                      borderRadius: 20,
                      width: 150,
                      margin: 15,
                      padding: 30,
                      height: 100,
                    }}
                  >
                    <img
                      src={Birth}
                      alt="Personal information"
                      style={{
                        marginBottom: 10,
                        height: "auto",
                        width: 60,
                      }}
                    />
                  </div>
                  <p>Personal information (TH)</p>
                </div>

                <div
                  style={{
                    background: "#FBFBFB",
                    width: 180,
                    height: 180,
                    color: "#0079CC",
                    float: "left",
                    borderRadius: 20,
                    fontSize: 15,
                    fontWeight: 500,
                    marginRight: 30,
                  }}
                >
                  <div
                    style={{
                      background: "rgb(236 248 255)",
                      borderRadius: 20,
                      width: 150,
                      margin: 15,
                      padding: 30,
                      height: 100,
                    }}
                  >
                    <img
                      src={HouseRegistration}
                      alt="Certificate of use (the noun prefix)"
                      style={{
                        marginBottom: 10,
                        height: "auto",
                        width: 60,
                      }}
                    />
                  </div>
                  <p>Certificate of use (the noun prefix) (TH)</p>
                </div>

                <div
                  style={{
                    background: "#FBFBFB",
                    width: 180,
                    height: 180,
                    color: "#0079CC",
                    float: "left",
                    borderRadius: 20,
                    fontSize: 15,
                    fontWeight: 500,
                    marginRight: 30,
                  }}
                >
                  <div
                    style={{
                      background: "rgb(236 248 255)",
                      borderRadius: 20,
                      width: 150,
                      margin: 15,
                      padding: 30,
                      height: 100,
                    }}
                  >
                    <img
                      src={Birth}
                      alt="Civil Registration Certificate"
                      style={{
                        marginBottom: 10,
                        height: "auto",
                        width: 60,
                      }}
                    />
                  </div>
                  <p>Civil Registration Certificate (TH)</p>
                </div>

                <div
                  style={{
                    background: "#FBFBFB",
                    width: 180,
                    height: 180,
                    color: "#0079CC",
                    float: "left",
                    borderRadius: 20,
                    fontSize: 15,
                    fontWeight: 500,
                    marginRight: 30,
                  }}
                >
                  <div
                    style={{
                      background: "rgb(236 248 255)",
                      borderRadius: 20,
                      width: 150,
                      margin: 15,
                      padding: 30,
                      height: 100,
                    }}
                  >
                    <img
                      src={MarriageCertificate}
                      alt="MarriageCertificate"
                      style={{
                        marginBottom: 10,
                        height: "auto",
                        width: 60,
                      }}
                    />
                  </div>
                  <p>Marriage Certificate (TH)</p>
                </div>

                <div
                  style={{
                    background: "#FBFBFB",
                    width: 180,
                    height: 180,
                    color: "#0079CC",
                    float: "left",
                    borderRadius: 20,
                    fontSize: 15,
                    fontWeight: 500,
                    marginRight: 30,
                  }}
                >
                  <div
                    style={{
                      background: "rgb(236 248 255)",
                      borderRadius: 20,
                      width: 150,
                      margin: 15,
                      padding: 30,
                      height: 100,
                    }}
                  >
                    <img
                      src={DivorceCertificate}
                      alt="DivorceCertificate"
                      style={{
                        marginBottom: 10,
                        height: "auto",
                        width: 60,
                      }}
                    />
                  </div>
                  <p>Divorce Registration (TH)</p>
                </div>

                <div
                  style={{
                    background: "#FBFBFB",
                    width: 180,
                    height: 180,
                    color: "#0079CC",
                    float: "left",
                    borderRadius: 20,
                    fontSize: 15,
                    fontWeight: 500,
                    marginRight: 30,
                  }}
                >
                  <div
                    style={{
                      background: "rgb(236 248 255)",
                      borderRadius: 20,
                      width: 150,
                      margin: 15,
                      padding: 30,
                      height: 100,
                    }}
                  >
                    <img
                      src={DivorceRegistration}
                      alt="DivorceRegistration"
                      style={{
                        marginBottom: 10,
                        height: "auto",
                        width: 60,
                      }}
                    />
                  </div>
                  <p>PDivorce Certificate (TH)</p>
                </div>
              </div>

              <div
                style={{
                  textAlign: "left",
                  position: "absolute",
                  top: 480,
                  width: "100%",
                }}
              >
                {/* <p
                  style={{
                    textAlign: "center",
                    color: "#034D82",
                    fontSize: 24,
                    fontWeight: 600,
                  }}
                >
                  Your Order
                </p> */}
                {/* <TableContainer component={Paper}>
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
                          <TableCell align="center">{row.status}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer> */}

                {/* <p
                  style={{
                    textAlign: "center",
                    color: "#034D82",
                    fontSize: 24,
                    fontWeight: 600,
                    marginTop: 50,
                    marginBottom: 30,
                  }}
                >
                  Top 5 Translators
                </p> */}
                {/* <div style={{ width: " max-content" }}>
                  <div
                    style={{
                      textAlign: "center",
                      float: "left",
                      background: "#FFFFFF",
                      borderRadius: 20,
                      width: 220,
                      padding: 25,
                      marginRight: 20,
                      height: 350,
                    }}
                  >
                    <div
                      style={{
                        background: "#FFC100",
                        color: "#FFFF",
                        width: 30,
                        height: 30,
                        borderRadius: 100,
                        padding: 3,
                        position: "relative",
                        top: -40,
                        left: 70,
                      }}
                    >
                      1
                    </div>
                    <img
                      src={Avatar7}
                      style={{ marginBottom: 10, height: "auto", width: "50%" }}
                      alt="Avatar7"
                    />

                    <p style={{ fontSize: 25 }}>Michael Lee</p>
                    <div style={{ textAlign: "left" }}>
                      <div style={{ fontSize: 12, width: "90%" }}>
                        <p>
                          Skills : Translating theses, articles, important
                          documents
                        </p>
                      </div>
                      <div style={{ fontSize: 12, width: "90%" }}>
                        <p>Language : English, Português, Deutsch, Italiano</p>
                      </div>
                    </div>
                  </div>

                  <div
                    style={{
                      textAlign: "center",
                      float: "left",
                      background: "#FFFFFF",
                      borderRadius: 20,
                      width: 220,
                      padding: 25,
                      marginRight: 20,
                      height: 350,
                    }}
                  >
                    <div
                      style={{
                        background: "#034D82",
                        color: "#FFFF",
                        width: 30,
                        height: 30,
                        borderRadius: 100,
                        padding: 3,
                        position: "relative",
                        top: -40,
                        left: 70,
                      }}
                    >
                      2
                    </div>
                    <img
                      src={Avatar8}
                      style={{ marginBottom: 10, height: "auto", width: "50%" }}
                      alt="Avatar8"
                    />

                    <p style={{ fontSize: 25 }}>Adam Scott</p>
                    <div style={{ textAlign: "left" }}>
                      <div style={{ fontSize: 12, width: "90%" }}>
                        <p>Skills : Articles, important documents</p>
                      </div>
                      <div style={{ fontSize: 12, width: "90%" }}>
                        <p>Language : English, Français, Deutsch, Türkçe</p>
                      </div>
                    </div>
                  </div>

                  <div
                    style={{
                      textAlign: "center",
                      float: "left",
                      background: "#FFFFFF",
                      borderRadius: 20,
                      width: 220,
                      padding: 25,
                      marginRight: 20,
                      height: 350,
                    }}
                  >
                    <div
                      style={{
                        background: "#FF005C",
                        color: "#FFFF",
                        width: 30,
                        height: 30,
                        borderRadius: 100,
                        padding: 3,
                        position: "relative",
                        top: -40,
                        left: 70,
                      }}
                    >
                      3
                    </div>
                    <img
                      src={Avatar9}
                      style={{ marginBottom: 10, height: "auto", width: "50%" }}
                      alt="Avatar9"
                    />

                    <p style={{ fontSize: 25 }}>Natasha Lolan</p>
                    <div style={{ textAlign: "left" }}>
                      <div style={{ fontSize: 12, width: "90%" }}>
                        <p>Skills : Articles, novels, movie subtitles</p>
                      </div>
                      <div style={{ fontSize: 12, width: "90%" }}>
                        <p>Language : English, Deutsch</p>
                      </div>
                    </div>
                  </div>

                  <div
                    style={{
                      textAlign: "center",
                      float: "left",
                      background: "#FFFFFF",
                      borderRadius: 20,
                      width: 220,
                      padding: 25,
                      marginRight: 20,
                      height: 350,
                    }}
                  >
                    <div
                      style={{
                        background: "#858585",
                        color: "#FFFF",
                        width: 30,
                        height: 30,
                        borderRadius: 100,
                        padding: 3,
                        position: "relative",
                        top: -40,
                        left: 70,
                      }}
                    >
                      4
                    </div>
                    <img
                      src={Avatar10}
                      style={{ marginBottom: 10, height: "auto", width: "50%" }}
                      alt="Avatar10"
                    />

                    <p style={{ fontSize: 25 }}>Adam Scott</p>
                    <div style={{ textAlign: "left" }}>
                      <div style={{ fontSize: 12, width: "90%" }}>
                        <p>
                          Skills : Translating theses, articles, movie subtitles
                        </p>
                      </div>
                      <div style={{ fontSize: 12, width: "90%" }}>
                        <p>Language : English, Deutsch, 한국어</p>
                      </div>
                    </div>
                  </div>

                  <div
                    style={{
                      textAlign: "center",
                      float: "left",
                      background: "#FFFFFF",
                      borderRadius: 20,
                      width: 220,
                      padding: 25,
                      marginRight: 20,
                      height: 350,
                    }}
                  >
                    <div
                      style={{
                        background: "#858585",
                        color: "#FFFF",
                        width: 30,
                        height: 30,
                        borderRadius: 100,
                        padding: 3,
                        position: "relative",
                        top: -40,
                        left: 70,
                      }}
                    >
                      5
                    </div>
                    <img
                      src={Avatar11}
                      style={{ marginBottom: 10, height: "auto", width: "50%" }}
                      alt="Avatar11"
                    />

                    <p style={{ fontSize: 25 }}>Sam Smith</p>
                    <div style={{ textAlign: "left" }}>
                      <div style={{ fontSize: 12, width: "90%" }}>
                        <p>
                          Skills : Translating theses, articles, important
                          documents
                        </p>
                      </div>
                      <div style={{ fontSize: 12, width: "90%" }}>
                        <p>Language :English, Русский язык, Deutsch</p>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </>
          ) : type === 3 ? (
            <>
              <button
                style={{
                  width: width * 0.2,
                  background: "#FFFFFF",
                  color: "#858585",
                  height: 210,
                  border: "1px solid #E5E5E5",
                  borderRadius: 20,
                  fontSize: 24,
                  fontWeight: 600,
                  marginRight: 100,
                }}
                onClick={() => setType(1)}
              >
                <IoDocumentText style={{ width: "30%", height: "30%" }} />
                <br />
                <br />
                General Document
              </button>

              <button
                style={{
                  width: width * 0.2,
                  background: "#FFFFFF",
                  color: "#858585",
                  height: 210,
                  border: "1px solid #E5E5E5",
                  borderRadius: 20,
                  fontSize: 24,
                  fontWeight: 600,
                  marginRight: 100,
                }}
                onClick={() => setType(2)}
              >
                <IoIdCardSharp style={{ width: "30%", height: "30%" }} />
                <br />
                <br />
                Document offical
              </button>

              <button
                style={{
                  width: width * 0.2,
                  background: "#FFFFFF",
                  color: "#EB996E",
                  height: 210,
                  border: "1px solid #E5E5E5",
                  borderRadius: 20,
                  fontSize: 24,
                  fontWeight: 600,
                  marginRight: 100,
                }}
                onClick={() => setType(3)}
              >
                <RiUserSearchFill style={{ width: "30%", height: "30%" }} />
                <br />
                <br />
                Find a Translator
              </button>

              <div
                style={{
                  textAlign: "left",
                  position: "absolute",
                  top: 300,
                  width: "100%",
                }}
              >
                {/* <p
                  style={{
                    textAlign: "center",
                    color: "#034D82",
                    fontSize: 24,
                    fontWeight: 600,
                  }}
                >
                  Your Order
                </p> */}
                {/* <TableContainer component={Paper}>
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
                          <TableCell align="center">{row.status}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer> */}

                {/* <p
                  style={{
                    textAlign: "center",
                    color: "#034D82",
                    fontSize: 24,
                    fontWeight: 600,
                    marginTop: 50,
                    marginBottom: 30,
                  }}
                >
                  Top 5 Translators
                </p> */}
                {/* <div style={{ width: " max-content" }}>
                  <div
                    style={{
                      textAlign: "center",
                      float: "left",
                      background: "#FFFFFF",
                      borderRadius: 20,
                      width: 220,
                      padding: 25,
                      marginRight: 20,
                      height: 350,
                    }}
                  >
                    <div
                      style={{
                        background: "#FFC100",
                        color: "#FFFF",
                        width: 30,
                        height: 30,
                        borderRadius: 100,
                        padding: 3,
                        position: "relative",
                        top: -40,
                        left: 70,
                      }}
                    >
                      1
                    </div>
                    <img
                      src={Avatar7}
                      style={{ marginBottom: 10, height: "auto", width: "50%" }}
                      alt="Avatar7"
                    />

                    <p style={{ fontSize: 25 }}>Michael Lee</p>
                    <div style={{ textAlign: "left" }}>
                      <div style={{ fontSize: 12, width: "90%" }}>
                        <p>
                          Skills : Translating theses, articles, important
                          documents
                        </p>
                      </div>
                      <div style={{ fontSize: 12, width: "90%" }}>
                        <p>Language : English, Português, Deutsch, Italiano</p>
                      </div>
                    </div>
                  </div>

                  <div
                    style={{
                      textAlign: "center",
                      float: "left",
                      background: "#FFFFFF",
                      borderRadius: 20,
                      width: 220,
                      padding: 25,
                      marginRight: 20,
                      height: 350,
                    }}
                  >
                    <div
                      style={{
                        background: "#034D82",
                        color: "#FFFF",
                        width: 30,
                        height: 30,
                        borderRadius: 100,
                        padding: 3,
                        position: "relative",
                        top: -40,
                        left: 70,
                      }}
                    >
                      2
                    </div>
                    <img
                      src={Avatar8}
                      style={{ marginBottom: 10, height: "auto", width: "50%" }}
                      alt="Avatar8"
                    />

                    <p style={{ fontSize: 25 }}>Adam Scott</p>
                    <div style={{ textAlign: "left" }}>
                      <div style={{ fontSize: 12, width: "90%" }}>
                        <p>Skills : Articles, important documents</p>
                      </div>
                      <div style={{ fontSize: 12, width: "90%" }}>
                        <p>Language : English, Français, Deutsch, Türkçe</p>
                      </div>
                    </div>
                  </div>

                  <div
                    style={{
                      textAlign: "center",
                      float: "left",
                      background: "#FFFFFF",
                      borderRadius: 20,
                      width: 220,
                      padding: 25,
                      marginRight: 20,
                      height: 350,
                    }}
                  >
                    <div
                      style={{
                        background: "#FF005C",
                        color: "#FFFF",
                        width: 30,
                        height: 30,
                        borderRadius: 100,
                        padding: 3,
                        position: "relative",
                        top: -40,
                        left: 70,
                      }}
                    >
                      3
                    </div>
                    <img
                      src={Avatar9}
                      style={{ marginBottom: 10, height: "auto", width: "50%" }}
                      alt="Avatar9"
                    />

                    <p style={{ fontSize: 25 }}>Natasha Lolan</p>
                    <div style={{ textAlign: "left" }}>
                      <div style={{ fontSize: 12, width: "90%" }}>
                        <p>Skills : Articles, novels, movie subtitles</p>
                      </div>
                      <div style={{ fontSize: 12, width: "90%" }}>
                        <p>Language : English, Deutsch</p>
                      </div>
                    </div>
                  </div>

                  <div
                    style={{
                      textAlign: "center",
                      float: "left",
                      background: "#FFFFFF",
                      borderRadius: 20,
                      width: 220,
                      padding: 25,
                      marginRight: 20,
                      height: 350,
                    }}
                  >
                    <div
                      style={{
                        background: "#858585",
                        color: "#FFFF",
                        width: 30,
                        height: 30,
                        borderRadius: 100,
                        padding: 3,
                        position: "relative",
                        top: -40,
                        left: 70,
                      }}
                    >
                      4
                    </div>
                    <img
                      src={Avatar10}
                      style={{ marginBottom: 10, height: "auto", width: "50%" }}
                      alt="Avatar10"
                    />

                    <p style={{ fontSize: 25 }}>Adam Scott</p>
                    <div style={{ textAlign: "left" }}>
                      <div style={{ fontSize: 12, width: "90%" }}>
                        <p>
                          Skills : Translating theses, articles, movie subtitles
                        </p>
                      </div>
                      <div style={{ fontSize: 12, width: "90%" }}>
                        <p>Language : English, Deutsch, 한국어</p>
                      </div>
                    </div>
                  </div>

                  <div
                    style={{
                      textAlign: "center",
                      float: "left",
                      background: "#FFFFFF",
                      borderRadius: 20,
                      width: 220,
                      padding: 25,
                      marginRight: 20,
                      height: 350,
                    }}
                  >
                    <div
                      style={{
                        background: "#858585",
                        color: "#FFFF",
                        width: 30,
                        height: 30,
                        borderRadius: 100,
                        padding: 3,
                        position: "relative",
                        top: -40,
                        left: 70,
                      }}
                    >
                      5
                    </div>
                    <img
                      src={Avatar11}
                      style={{ marginBottom: 10, height: "auto", width: "50%" }}
                      alt="Avatar11"
                    />

                    <p style={{ fontSize: 25 }}>Sam Smith</p>
                    <div style={{ textAlign: "left" }}>
                      <div style={{ fontSize: 12, width: "90%" }}>
                        <p>
                          Skills : Translating theses, articles, important
                          documents
                        </p>
                      </div>
                      <div style={{ fontSize: 12, width: "90%" }}>
                        <p>Language :English, Русский язык, Deutsch</p>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </>
          ) : null}
        </div>
      </Box>
    </div>
  );
}
