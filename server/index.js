import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import morgan from "morgan";
import https from "https";
import createOrder from "./routes/createOrder.js";
import getOrder from "./routes/getOrder.js";

const uri = "mongodb+srv://Ozone:Jirayu30052@cluster0.ots5oju.mongodb.net/test";
const port = 3000;

const app = express();

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
  next();
});

app.get("/", (req, res) => {
  res.send("Welcome Dev");
});

app.get("/:universalURL", (req, res) => {
  res.send("404 URL NOT FOUND");
});

app.use("/api/createOrder", createOrder);
app.use("/api/getOrder", getOrder);

app.listen(port, () => {
  console.log(`Server running on port: ${port}...`);
});

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connection established..."))
  .catch((error) => console.error("MongoDB connection failed:", error.message));

// Note: HTTPS setup is commented out because it's not being used
// If you want to use HTTPS, uncomment the relevant parts and make sure to provide the necessary SSL certificates

// const key = fs.readFileSync("private.key");
// const cert = fs.readFileSync("certificate.crt");

// const options = {
//   key,
//   cert,
// };

// https.createServer(options, app).listen(8443, function () {
//   console.log("Server started at port 8443");
// });
