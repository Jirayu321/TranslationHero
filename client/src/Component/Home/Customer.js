import * as React from "react";

import Navbars from "../Navbar/navbarHome";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import { data, data2, data3, data4, data5 } from "../Data/data";
import { IconButton, Input, TextField, Autocomplete, Box } from "@mui/material";

import { MdArrowDropDown } from "react-icons/md";


const Customer = () => {
  const { innerWidth: width, innerHeight: height } = window;
  const [type, settype] = React.useState(null);
  const [trantype, setTranstype] = React.useState("");
  const [textarea, setTextarea] = React.useState("");
  const [price, setPrice] = React.useState("35 $");
  const [tranfrom, setTranfrom] = React.useState("");
  const [tranto, setTranto] = React.useState("");
  const [file, setFile] = React.useState("");
  const [promo, setPromo] = React.useState("");

  const handleChange = (event) => {
    setTextarea(event.target.value);
  };

  const promotion = (x) => {
    setPromo(x);
    window.scrollTo(0, 1500);
  };

  return (
    <>
      <header className="App-header">
        <Navbars />
      </header>

      <div>
        <div>
          <div
            style={{
              top: 100,
              background: "#97D5FF",
              opacity: 0.3,
              filter: "blur(20px)",
              position: "absolute",
              width: 400,
              height: 400,
              left: 400,
              borderRadius: 200,
            }}
          ></div>

          <div
            style={{
              top: 100,
              background: "#FFEDB2",
              opacity: 0.3,
              filter: "blur(20px)",
              position: "absolute",
              width: 400,
              height: 400,
              left: 700,
              borderRadius: 200,
            }}
          ></div>
        </div>

        <div
          style={{
            textAlign: "center",
            justifyItems: "center",
            width: 1100,
            display: "inline-grid",
            marginTop: 50,
          }}
        >
          <div>
            <text
              style={{
                fontWeight: "bold",
                fontSize: 56,
                color: "#0097FE",
              }}
            >
              Customer
            </text>
          </div>
          <div>
            <text style={{ fontSize: 30, color: "#444444" }}>
              For customers who want to translate documents translator hero
              There is a translation system that calculates all costs. Including
              professional translators who guarantee excellent translation
              quality.
            </text>
          </div>
          <div
            style={{
              position: "absolute",
              top: 380,
            }}
          >
            <button
              className="box5"
              style={{ width: 220, height: 50, borderRadius: 40 }}
            >
              <Link
                to="/Signup"
                style={{
                  color: "#FFFF",
                  fontSize: 18,
                  lineHeight: 21,
                  textDecorationLine: "none",
                }}
              >
                Get Start
              </Link>
            </button>
          </div>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          top: height * 0.7,
          width: width,
          height: 800,
        }}
      >
        <div>
          <div
            style={{
              textAlign: "center",
              marginBottom: 10,
            }}
          >
            <text
              style={{
                fontWeight: "bold",
                fontSize: 56,
                color: "#0097FE",
              }}
            >
              Your Order
            </text>
          </div>

          <div>
            {file === "" ? (
              <div
                style={{
                  position: "absolute",
                  left: width * 0.08,
                  width: width * 0.35,
                  height: 670,
                  background: "#FFFFFF",
                  border: "1px solid #E5E5E5",
                  boxSizing: "border-box",
                  float: "left",
                  borderRadius: 20,
                }}
              >
                <label htmlFor="icon-button-file">
                  <Input
                    accept="image/*"
                    id="icon-button-file"
                    type="file"
                    style={{ display: "none" }}
                    onChange={(e) => setFile(e.target.value)}
                  />
                  <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="span"
                  >
                    <text
                      style={{
                        fontWeight: "bold",
                        fontSize: 24,
                        lineHeight: 24,
                        color: "#B5B5B5",
                      }}
                    >
                      Upload File
                    </text>
                  </IconButton>
                </label>
              </div>
            ) : (
              <div
                style={{
                  position: "absolute",
                  left: width * 0.04,
                  width: width * 0.35,
                  height: 670,
                  background: "#FFFFFF",
                  border: "1px solid #E5E5E5",
                  boxSizing: "border-box",
                  float: "left",
                  borderRadius: 20,
                }}
              >
                <label htmlFor="icon-button-file">
                  <Input
                    accept="image/*"
                    id="icon-button-file"
                    type="file"
                    style={{ display: "none" }}
                    onChange={(e) => setFile(e.target.value)}
                  />
                  <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="span"
                  >
                    <text
                      style={{
                        fontWeight: "bold",
                        fontSize: 24,
                        lineHeight: 24,
                        color: "#B5B5B5",
                      }}
                    >
                      `${file}`
                    </text>
                  </IconButton>
                </label>
              </div>
            )}

            <div
              style={{
                position: "absolute",
                width: width * 0.55,
                height: 670,
                border: "1px solid #E5E5E5",
                boxSizing: " border-box",
                borderRadius: 20,
                left: width * 0.42,
                padding: 10,
                textAlign: "left",
                borderLeft: "none",
                borderBottomLeftRadius: "unset",
                borderTopLeftRadius: "unset",
              }}
            >
              <div style={{ float: "left", marginLeft: 90 }}>
                <div style={{ marginBottom: 10 }}>
                  <text
                    style={{
                      fontWeight: "bold",
                      fontSize: 24,
                      color: "#333333",
                    }}
                  >
                    Document type
                  </text>
                </div>
                <Autocomplete
                  id="country-select-demo"
                  sx={{ width: 260 }}
                  options={data2}
                  autoHighlight
                  getOptionLabel={(option) => option.label}
                  onChange={(event, value) => settype(value?.label)}
                  popupIcon={
                    <MdArrowDropDown
                      style={{ color: "#333333", width: 30, height: 33 }}
                    />
                  }
                  renderOption={(props, option) => (
                    <Box
                      component="li"
                      sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                      {...props}
                    >
                      <img
                        loading="lazy"
                        width="20"
                        src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                        srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                        alt=""
                      />
                      {option.label}
                    </Box>
                  )}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Choose a Document type"
                      inputProps={{
                        ...params.inputProps,
                        autoComplete: "new-password",
                      }}
                    />
                  )}
                />
              </div>

              <div style={{ float: "left", marginLeft: 60 }}>
                <div style={{ marginBottom: 10 }}>
                  <text
                    style={{
                      fontWeight: "bold",
                      fontSize: 24,
                      color: "#333333",
                    }}
                  >
                    Translation type
                  </text>
                </div>
                {type === null ? (
                  <Autocomplete
                    id="country-select-demo"
                    sx={{ width: 260 }}
                    options={data5}
                    autoHighlight
                    getOptionLabel={(option) => option.label}
                    onChange={(event, value) => setTranstype(value?.label)}
                    popupIcon={
                      <MdArrowDropDown
                        style={{ color: "#333333", width: 30, height: 33 }}
                      />
                    }
                    renderOption={(props, option) => (
                      <Box
                        component="li"
                        sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                        {...props}
                      >
                        <img
                          loading="lazy"
                          width="20"
                          src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                          srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                          alt=""
                        />
                        {option.label}
                      </Box>
                    )}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Choose a Translation type"
                        inputProps={{
                          ...params.inputProps,
                          autoComplete: "new-password",
                        }}
                      />
                    )}
                  />
                ) : type === "Official Document" ? (
                  <Autocomplete
                    id="country-select-demo"
                    sx={{ width: 260 }}
                    options={data4}
                    autoHighlight
                    getOptionLabel={(option) => option.label}
                    onChange={(event, value) => setTranstype(value?.label)}
                    popupIcon={
                      <MdArrowDropDown
                        style={{ color: "#333333", width: 30, height: 33 }}
                      />
                    }
                    renderOption={(props, option) => (
                      <Box
                        component="li"
                        sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                        {...props}
                      >
                        <img
                          loading="lazy"
                          width="20"
                          src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                          srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                          alt=""
                        />
                        {option.label}
                      </Box>
                    )}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Choose a Translation type"
                        inputProps={{
                          ...params.inputProps,
                          autoComplete: "new-password",
                        }}
                      />
                    )}
                  />
                ) : type === "General Document" ? (
                  <Autocomplete
                    id="country-select-demo"
                    sx={{ width: 260 }}
                    options={data3}
                    autoHighlight
                    getOptionLabel={(option) => option.label}
                    onChange={(event, value) => setTranstype(value?.label)}
                    popupIcon={
                      <MdArrowDropDown
                        style={{ color: "#333333", width: 30, height: 33 }}
                      />
                    }
                    renderOption={(props, option) => (
                      <Box
                        component="li"
                        sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                        {...props}
                      >
                        <img
                          loading="lazy"
                          width="20"
                          src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                          srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                          alt=""
                        />
                        {option.label}
                      </Box>
                    )}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Choose a Translation type"
                        inputProps={{
                          ...params.inputProps,
                          autoComplete: "new-password",
                        }}
                      />
                    )}
                  />
                ) : (
                  <Autocomplete
                    id="country-select-demo"
                    sx={{ width: 260 }}
                    options={data5}
                    autoHighlight
                    getOptionLabel={(option) => option.label}
                    onChange={(event, value) => console.log(value?.label)}
                    popupIcon={
                      <MdArrowDropDown
                        style={{ color: "#333333", width: 30, height: 33 }}
                      />
                    }
                    renderOption={(props, option) => (
                      <Box
                        component="li"
                        sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                        {...props}
                      >
                        <img
                          loading="lazy"
                          width="20"
                          src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                          srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                          alt=""
                        />
                        {option.label}
                      </Box>
                    )}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Choose a Translation type"
                        inputProps={{
                          ...params.inputProps,
                          autoComplete: "new-password",
                        }}
                      />
                    )}
                  />
                )}
              </div>

              <div
                style={{
                  float: "left",
                  margin: 30,
                  marginLeft: 90,
                  marginBottom: 20,
                }}
              >
                <div style={{ marginBottom: 10 }}>
                  <text
                    style={{
                      fontWeight: "bold",
                      fontSize: 24,
                      color: "#333333",
                    }}
                  >
                    Translate From
                  </text>
                </div>

                <Autocomplete
                  id="country-select-demo"
                  sx={{ width: 260 }}
                  options={data}
                  autoHighlight
                  getOptionLabel={(option) => option.label}
                  onChange={(event, value) => setTranfrom(value?.label)}
                  popupIcon={
                    <MdArrowDropDown
                      style={{ color: "#333333", width: 30, height: 33 }}
                    />
                  }
                  renderOption={(props, option) => (
                    <Box
                      component="li"
                      sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                      {...props}
                    >
                      <img
                        loading="lazy"
                        width="20"
                        src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                        srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                        alt=""
                      />
                      {option.label}
                    </Box>
                  )}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Choose a language"
                      inputProps={{
                        ...params.inputProps,
                        autoComplete: "new-password",
                      }}
                    />
                  )}
                />
              </div>

              <div style={{ float: "left", margin: 30, marginBottom: 20 }}>
                <div style={{ marginBottom: 10 }}>
                  <text
                    style={{
                      fontWeight: "bold",
                      fontSize: 24,
                      color: "#333333",
                    }}
                  >
                    Translate To
                  </text>
                </div>
                <Autocomplete
                  id="country-select-demo"
                  sx={{ width: 260 }}
                  options={data}
                  autoHighlight
                  getOptionLabel={(option) => option.label}
                  onChange={(event, value) => setTranto(value?.label)}
                  popupIcon={
                    <MdArrowDropDown
                      style={{ color: "#333333", width: 30, height: 33 }}
                    />
                  }
                  renderOption={(props, option) => (
                    <Box
                      component="li"
                      sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                      {...props}
                    >
                      <img
                        loading="lazy"
                        width="20"
                        src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                        srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                        alt=""
                      />
                      {option.label}
                    </Box>
                  )}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Choose a language"
                      inputProps={{
                        ...params.inputProps,
                        autoComplete: "new-password",
                      }}
                    />
                  )}
                />
              </div>

              <div
                style={{
                  float: "left",
                  marginRight: 50,
                  marginLeft: 50,
                  marginBottom: 0,
                  position: "absolute",
                  top: 290,
                  left: 50,
                }}
              >
                <div style={{ marginBottom: 10 }}>
                  <text
                    style={{
                      fontWeight: "bold",
                      fontSize: 24,
                      color: "#333333",
                    }}
                  >
                    Text
                  </text>
                </div>
                <textarea
                  value={textarea}
                  onChange={handleChange}
                  maxLength={150}
                  style={{
                    position: "absolute",
                    width: 620,
                    height: 243,
                    background: "#FFFFFF",
                    border: "1px solid #E5E5E5",
                    boxSizing: "border-box",
                    borderRadius: 5,
                    padding: 20,
                    
                  }}
                />
              </div>

              <button
                style={{
                  float: "left",
                  marginRight: 50,
                  marginLeft: 50,
                  position: "absolute",
                  top: 600,
                  left: width * 0.42,
                  background: "#0097FE",
                  width: 110,
                  padding: 10,
                  borderRadius: 30,
                  textAlign: "center",
                  borderColor: "transparent",
                }}
                onClick={() => promotion(1)}
              >
                <text style={{ color: "#FFFFFF", fontSize: 18 }}>
                  Get Quote
                </text>
              </button>
            </div>
          </div>

          <div
            style={{
              height: height,
              width: width,
            }}
          >
            {promo === 1 ? (
              <div
                style={{
                  position: "absolute",
                  left: width * 0.06,
                  width: width * 0.91,
                  height: 500,
                  background: "#FFF9E5",
                  boxSizing: "border-box",
                  textAlign: "left",
                  padding: 50,
                  top: height * 1.1,
                }}
              >
                <div
                  style={{
                    float: "left",
                    // margin: 30,
                    marginRight: 400,
                    // marginBottom: 20,
                  }}
                >
                  <div>
                    <text
                      style={{
                        fontWeight: "bold",
                        fontSize: 24,
                        color: "#333333",
                      }}
                    >
                      Document type
                    </text>
                    <br />
                    <text
                      style={{
                        fontWeight: "bold",
                        fontSize: 18,
                        color: "#888888",
                      }}
                    >
                      {type}
                    </text>
                  </div>

                  <div>
                    <text
                      style={{
                        fontWeight: "bold",
                        fontSize: 24,
                        color: "#333333",
                      }}
                    >
                      Translate From
                    </text>
                    <br />
                    <text
                      style={{
                        fontWeight: "bold",
                        fontSize: 18,
                        color: "#888888",
                      }}
                    >
                      {tranfrom}
                    </text>
                  </div>

                  <div>
                    <text
                      style={{
                        fontWeight: "bold",
                        fontSize: 24,
                        color: "#333333",
                      }}
                    >
                      Text
                    </text>
                    <div style={{ width: 400, wordWrap: "break-word" }}>
                      <text
                        style={{
                          fontWeight: "bold",
                          fontSize: 18,
                          color: "#888888",
                        }}
                      >
                        {textarea}
                      </text>
                    </div>
                  </div>

                  <div style={{ marginTop: 100 }}>
                    <text
                      style={{
                        fontWeight: "bold",
                        fontSize: 24,
                        color: "#333333",
                      }}
                    >
                      Price
                    </text>
                    <br />
                    <text
                      style={{
                        fontWeight: "bold",
                        fontSize: 24,
                        color: "#CF0202",
                      }}
                    >
                      {price}
                    </text>
                  </div>
                </div>

                <div style={{ float: "left" }}>
                  <div>
                    <text
                      style={{
                        fontWeight: "bold",
                        fontSize: 24,
                        color: "#333333",
                      }}
                    >
                      Translation type
                    </text>
                    <br />
                    <text
                      style={{
                        fontWeight: "bold",
                        fontSize: 18,
                        color: "#888888",
                      }}
                    >
                      {trantype}
                    </text>
                  </div>

                  <div>
                    <text
                      style={{
                        fontWeight: "bold",
                        fontSize: 24,
                        color: "#333333",
                      }}
                    >
                      Translate To
                    </text>
                    <br />
                    <text
                      style={{
                        fontWeight: "bold",
                        fontSize: 18,
                        color: "#888888",
                      }}
                    >
                      {tranto}
                    </text>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>

      {promo === 1 ? (
        <div style={{ top: height * 2.5, position: "relative" }}>
          <div>
            <Footer />
          </div>
        </div>
      ) : (
        <div style={{ top: height * 1.56, position: "relative" }}>
          <div>
            <Footer />
          </div>
        </div>
      )}
    </>
  );
};
export default Customer;
