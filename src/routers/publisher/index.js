const express = require("express");
const { createPublisher } = require("../../api/publisher");
const router = express.Router();

router.post("/publisher", createPublisher);

module.exports = router;
