import { Router } from "express";
import jwt from "jsonwebtoken";
import Joi from "Joi";
import bcrypt from "bcrypt";
import User from "../models/loginContenet.js";

const router = Router();

router.post("/", async (req, res) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    email: Joi.string().min(3).max(200).required().email(),
    password: Joi.string().min(6).required(),
    confirmPassword: Joi.string().min(6).required(),
    mobilePhone: Joi.string().max(10),
    profilePicture: Joi.array(),
    imageURLs: Joi.array(),
    address: Joi.string(),
    district: Joi.string(),
    province: Joi.string(),
    country: Joi.string(),
    postalCode: Joi.string(),
  });

  const generateAuthToken = (user) => {
    const jwtSecretKey = process.env.JWT_SECRET_KEY;
    const token = jwt.sign(
      { _id: user._id, name: user.name, email: user.email },
      jwtSecretKey
    );
    return token;
  };

  try {
    const { error } = await schema.validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    let user = await User.findOne({ email: req.body.email });
    if (user) return res.status(400).send("User already exists...");
    const {
      name,
      email,
      password,
      confirmPassword,
      mobilePhone,
      profilePicture,
      imageURLs,
      address,
      district,
      province,
      country,
      postalCode,
    } = await req.body;
    user = await new User({
      name,
      email,
      password,
      confirmPassword,
      mobilePhone,
      profilePicture,
      imageURLs,
      address,
      district,
      province,
      country,
      postalCode,
    });
    const salt = await bcrypt.genSalt(10);
    let token = await generateAuthToken(user);
    console.log("token:", token);
    user.password = await bcrypt.hash(user.password, salt);
    await user.save();
    await res.send(token);
    await res.status(200).json();
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

export default router;
