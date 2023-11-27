const express = require("express");
const { createArticles } = require("../../api/articles");
const router = express.Router();
router.post("/article", createArticles);
module.exports = router;
