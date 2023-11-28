const express = require("express");
const {
  createArticles,
  getAllArticles,
  getSingleArticle,
  updateView,
} = require("../../api/articles");
const router = express.Router();
router.post("/article", createArticles);
router.get("/articles", getAllArticles);
router.get("/article/:id", getSingleArticle);
module.exports = router;
