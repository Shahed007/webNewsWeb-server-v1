const express = require("express");
const { createArticles, getAllArticles } = require("../../api/articles");
const router = express.Router();
router.post("/article", createArticles);
router.get("/articles", getAllArticles);
module.exports = router;
