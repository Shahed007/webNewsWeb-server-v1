const jwt = require("jsonwebtoken");
require("dotenv").config();

const verifyTokens = (req, res, next) => {
  const token = req.cookies?.token;
  if (!token) {
    return res.status(401).send({ message: "Unauthorized" });
  }
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).send({ message: "Forbidden" });
    }
    // if token valid
    req.user = decoded;
    next();
  });
};

module.exports = verifyTokens;