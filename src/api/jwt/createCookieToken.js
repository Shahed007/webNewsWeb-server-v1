const jwt = require("jsonwebtoken");
const generateToken = require("../../utils/generetToken");

require("dotenv").config();

const createCookieToken = async (req, res) => {
  const user = req.body;
  const token = generateToken(user);
  res
    .cookie("token", token, {
      // httpOnly: false,
      // secure: process.env.NODE_ENV === "production",
      // sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
      httpOnly: false,
      secure: false,
    })
    .send({ success: true });
};

module.exports = createCookieToken;
