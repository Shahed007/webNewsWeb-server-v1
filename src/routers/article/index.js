const express = require("express");
const {
  createArticles,
  getAllArticles,
  getSingleArticle,
  updateArticle,
} = require("../../api/articles");
const router = express.Router();
router.post("/article", createArticles);
router.get("/articles", getAllArticles);
router.get("/article/:id", getSingleArticle);
router.put("/update/:id", updateArticle);
module.exports = router;
