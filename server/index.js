// import * as dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";

import bodyParser from "body-parser";
import morgan from "morgan";

import fs from "fs";
import https from "https";

import resgister from "./routes/register.js";
import login from "./routes/login.js";

const uri = "mongodb+srv://Ozone:Jirayu30052@cluster0.ots5oju.mongodb.net/test";
const port = 3001;
const key = fs.readFileSync('./private.key');
const cert = fs.readFile('./certificate.crt');

const app = express();

const cred = {
  key,
  cert,
};

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

app.get("/", (req, res) => {
  res.send("Welcome our to online shop API...");
});

app.get("/:universalURL", (req, res) => {
  res.send("404 URL NOT FOUND");
});

app.use("/api/login", login);
app.use("/api/register", resgister);

app.listen(port, () => {
  console.log(`Server running on port: ${port}...`);
});

mongoose
  .connect(uri, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connection established..."))
  .catch((error) => console.error("MongoDB connection failed:", error.message));

const httpsServer = https.createServer(cred, app);
httpsServer.listen(port);
