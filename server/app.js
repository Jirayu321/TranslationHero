import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import Routes from "./routes/router.js"

const app = express();

app.use(bodyParser.json({ limit: "32mb", extended: "true" }));
app.use(bodyParser.urlencoded({ limit: "32mb", extended: "true" }));
app.use(cors());

app.use("/login",Routes);

const MANGO_URI =
  "mongodb+srv://TranslateHero:TranslateHero123@cluster0.6nmhv08.mongodb.net/?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5001;

const connectDB = async () => {
  try {
    await mongoose.connect(MANGO_URI);
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
  } catch (error) {
    console.log("Conection to MongoDB failed", error);
  }
};

connectDB();
mongoose.connection.on("open",() => console.log("Conection to datebase has been esteblished successfully"))
mongoose.connection.on("error",(err) => console.log(err))

