// import mongoose from "mongoose";
import Login from "../models/loginContenet.js";

const login = async (req, res) => {
  try {
    const login = await Login.find();
    res.status(200).json(login);
  } catch(error) {
    res.status(404).json({message: error.message})
  }
};
const signup = async (req, res) => {
    const body =res.body
    const newUeser = new Login({
        ...body
    });
  try {
    await newUeser.save();
    res.status(201).json(newUeser);
  } catch(error) {
    res.status(409).json({message: error.message})
  }
};

export { login, signup };
