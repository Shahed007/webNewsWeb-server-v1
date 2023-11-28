const jwt = require("jsonwebtoken");
const generateToken = require("../../utils/generetToken");

require("dotenv").config();

const createCookieToken = async (req, res) => {
  const user = req.body;
  const token = generateToken(user);
  console.log(token);
  res
    .cookie("token", token, {
      httpOnly: false,
      secure: false,
      sameSite: "none",
    })
    .send({ success: true });
};

module.exports = createCookieToken;
