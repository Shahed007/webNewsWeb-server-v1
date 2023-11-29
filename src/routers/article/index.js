const express = require("express");
const {
  createArticles,
  getAllArticles,
  getSingleArticle,
  updateArticle,
  deleteArticle,
  updateSingleArticle,
} = require("../../api/articles");
const getAllArticleCollection = require("../../api/articles/getAllArticleCollection");
const verifyToken = require("../../middlewares/verifyToken");
const router = express.Router();
router.post("/article", createArticles);
router.get("/articles", getAllArticles);
router.get("/article/:id", getSingleArticle);
router.put("/update/:id", updateArticle);
router.delete("/article/:id", deleteArticle);
router.get("/all-article", verifyToken, getAllArticleCollection);
router.patch("/article/:id", updateSingleArticle);
module.exports = router;
