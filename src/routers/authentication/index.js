const express = require("express");
const { createCookieToken } = require("../../api/jwt");
const router = express.Router();

router.post("/jwt", createCookieToken);

module.exports = router;
