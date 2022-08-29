import * as React from "react";
import { data } from "../Data/data";
import "./Footer.css";
import { TextField, Autocomplete, Box } from "@mui/material";
import { MdArrowDropDown } from "react-icons/md";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

import { BsInstagram, BsTwitter } from "react-icons/bs";

import App_store from "../../Images/App_store.png";
import Google_play from "../../Images/Google_play.png";

import logo from "../../logo.svg";

const Footer = () => {
  return (
    <>
      <div className="ContentFooter">
        <img src={logo} alt="logo" style={{ width: 160, float: "left" }} />
        <div style={{ float: "left", marginLeft: 100 }}>
          <p className="textFooter1">Helps</p>
          <p className="textFooter1">Follow us</p>
          <p className="textFooter1">Download</p>
          <div style={{ margin: 0, marginTop: 60 }}>
            <div className="boxImgFooter" style={{ marginLeft: 0 }}>
              <img className="ImgApp_store" src={App_store} alt="App_store" />
            </div>
            <div className="boxImgFooter">
              <img
                className="ImgGoogle_play"
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
          <p className="textFooter1">FAQs</p>

          <p className="textFooter1">Terms and Conditions</p>

          <p className="textFooter1">Privacy policy</p>
        </div>

        <div style={{ float: "left", marginLeft: 150 }}>
          <p className="textFooter1">Contact us</p>

          <p className="textFooter2">
            GIVE NETWORK GLOBAL INTERPRETER AND VOLUNTEER <br />
            EDUCATION NETWORK 178/49 Moo 11 Tambol Huay Yai, Amphur <br />
            Banglamung, Chonburi 20150 <br />
            Tel. +66 803265329
          </p>

          <div style={{ marginTop: 10 }}>
            <div
              className="boxIconsFooter"
              style={{
                marginLeft: 0,
              }}
            >
              <FaFacebookF className="IconsFooter" />
            </div>
            <div className="boxIconsFooter">
              <BsInstagram className="IconsFooter" />
            </div>
            <div className="boxIconsFooter">
              <FaLinkedinIn className="IconsFooter" />
            </div>
            <div className="boxIconsFooter">
              <BsTwitter className="IconsFooter" />
            </div>
          </div>
        </div>
      </div>

      <div className="ContentFooter2">
        <p className="textFooter3">Copyrights Give Network 2021.</p>
        <p className="textFooter4">Privacy policy</p>
      </div>
    </>
  );
};
export default Footer;
