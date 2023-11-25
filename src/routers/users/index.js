const express = require("express");
const { createUser } = require("../../api/users");
const router = express.Router();

router.post("users", createUser);

module.exports = router;
