import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";

const generateAuthToken = (user) => {
  dotenv.config();

  const jwtSecretKey = process.env.JWT_SECRET_KEY;
  
  const token = jwt.sign(
    { _id: user._id, name: user.name, email: user.email },
    jwtSecretKey
  );

  return token;
};

export default generateAuthToken ;
