const express = require("express");
const {
  createArticles,
  getAllArticles,
  getSingleArticle,
  updateArticle,
  deleteArticle,
} = require("../../api/articles");
const router = express.Router();
router.post("/article", createArticles);
router.get("/articles", getAllArticles);
router.get("/article/:id", getSingleArticle);
router.put("/update/:id", updateArticle);
router.delete("/article/:id", deleteArticle);
module.exports = router;
