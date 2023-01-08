import * as dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import resgister from "./routes/register.js";
import login from "./routes/login.js";

const app = express();

dotenv.config();

// console.log(process.env);

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome our to online shop API...");
});

app.use("/api/register", resgister);
app.use("/api/login", login);

const uri = "mongodb+srv://Ozone:Jirayu30052@cluster0.ots5oju.mongodb.net/test"
const port = 3001;

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
