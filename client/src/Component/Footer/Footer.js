import * as React from "react";
import { data } from "../Data/data";
import { TextField, Autocomplete, Box } from "@mui/material";
import { MdArrowDropDown } from "react-icons/md";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

import { BsInstagram, BsTwitter } from "react-icons/bs";

import App_store from "../../Images/App_store.png";
import Google_play from "../../Images/Google_play.png";

import logo from "../../logo.svg";

const Footer = () => {
  const { innerWidth: width, innerHeight: height } = window;

  return (
    <>
        <div
          style={{
            backgroundColor: "#FDEFC2",
            width: width,
            height: height * 0.42,
            position: "relative",
            textAlign: "left",
            padding: 50,
          }}
        >
          <img src={logo} alt="logo" style={{ width: 160, float: "left" }} />

          <div style={{ float: "left", marginLeft: 100 }}>
            <text
              style={{
                fontWeight: 500,
                fontSize: 16,
                lineHeight: 3,
                color: "#034D82",
              }}
            >
              Helps
            </text>
            <br />
            <text
              style={{
                fontWeight: 500,
                fontSize: 16,
                lineHeight: 3,
                color: "#034D82",
              }}
            >
              Follow us
            </text>
            <br />
            <text
              style={{
                fontWeight: 500,
                fontSize: 16,
                lineHeight: 3,
                color: "#034D82",
              }}
            >
              Download
            </text>
            <br />
            <div style={{ margin: 0, marginTop: 60 }}>
              <div
                style={{
                  backgroundColor: "#ffff",
                  borderRadius: 20,
                  border: "1px solid #000",
                  textAlign: "center",
                  float: "left",
                }}
              >
                <img
                  style={{ margin: 10, marginLeft: 16, width: 90 }}
                  src={App_store}
                  alt="App_store"
                />
              </div>

              <div
                style={{
                  backgroundColor: "#ffff",
                  borderRadius: 20,
                  border: "1px solid #000",
                  textAlign: "center",
                  float: "left",
                  marginLeft: 16,
                }}
              >
                <img
                  style={{ margin: 10, marginLeft: 16, width: 100 }}
                  src={Google_play}
                  alt="Google_play"
                />
              </div>
            </div>
          </div>

          <div style={{ float: "left", marginLeft: 10 }}>
            <Autocomplete
              id="country-select-demo"
              sx={{ width: 200, background: "#ffff" }}
              options={data}
              autoHighlight
              getOptionLabel={(option) => option.label}
              onChange={(event, value) => console.log(value)}
              popupIcon={
                <MdArrowDropDown
                  style={{ color: "#034D82", width: 30, height: 33 }}
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
            <text
              style={{
                fontWeight: 500,
                fontSize: 16,
                lineHeight: 3,
                color: "#034D82",
              }}
            >
              FAQs
            </text>
            <br />
            <text
              style={{
                fontWeight: 500,
                fontSize: 16,
                lineHeight: 3,
                color: "#034D82",
              }}
            >
              Terms and Conditions
            </text>
            <br />
            <text
              style={{
                fontWeight: 500,
                fontSize: 16,
                lineHeight: 3,
                color: "#034D82",
              }}
            >
              Privacy policy
            </text>
          </div>

          <div style={{ float: "left", marginLeft: 150 }}>
            <text
              style={{
                fontWeight: 500,
                fontSize: 16,
                lineHeight: 3,
                color: "#034D82",
              }}
            >
              Contact us
            </text>
            <br />
            <text
              style={{
                fontWeight: 500,
                fontSize: 12,
                lineHeight: 3,
                color: "#034D82",
                width: 200,
              }}
            >
              GIVE NETWORK GLOBAL INTERPRETER AND VOLUNTEER <br />
              EDUCATION NETWORK 178/49 Moo 11 Tambol Huay Yai, Amphur <br />
              Banglamung, Chonburi 20150 <br />
              Tel. +66 803265329
            </text>
            <br />
            <div style={{ marginTop: 10 }}>
              <div
                style={{
                  backgroundColor: "#FFC100",
                  borderRadius: 30,
                  border: "1px solid #ffff",
                  textAlign: "center",
                  float: "left",
                }}
              >
                <FaFacebookF
                  style={{
                    margin: 10,
                    width: 15,
                    height: 15,
                    color: "#fff",
                  }}
                />
              </div>
              <div
                style={{
                  backgroundColor: "#FFC100",
                  borderRadius: 30,
                  border: "1px solid #ffff",
                  textAlign: "center",
                  float: "left",
                  marginLeft: 16,
                }}
              >
                <BsInstagram
                  style={{
                    margin: 10,
                    width: 15,
                    height: 15,
                    color: "#fff",
                  }}
                />
              </div>
              <div
                style={{
                  backgroundColor: "#FFC100",
                  borderRadius: 30,
                  border: "1px solid #ffff",
                  textAlign: "center",
                  float: "left",
                  marginLeft: 16,
                }}
              >
                <FaLinkedinIn
                  style={{
                    margin: 10,
                    width: 15,
                    height: 15,
                    color: "#fff",
                  }}
                />
              </div>
              <div
                style={{
                  backgroundColor: "#FFC100",
                  borderRadius: 30,
                  border: "1px solid #ffff",
                  textAlign: "center",
                  float: "left",
                  marginLeft: 16,
                }}
              >
                <BsTwitter
                  style={{
                    margin: 10,
                    width: 15,
                    height: 15,
                    color: "#fff",
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            backgroundColor: "#034D82",
            width: width,
            position: "relative",
            textAlign: "center",
            padding: 10,
          }}
        >
          <text style={{ color: "#FCC33E" }}>
            Copyrights Give Network 2021.
          </text>
          <text style={{ color: "#FCC33E", marginLeft: 60 }}>
            Privacy policy
          </text>
        </div>
    </>
  );
};
export default Footer;
