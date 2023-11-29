const Article = require("../../models/Articles");

const getAllArticleCollection = async (req, res) => {
  try {
    const article = await Article.find();
    res.send(article);
  } catch (error) {
    res.status(500).send({ message: "internal server error" });
  }
};

module.exports = getAllArticleCollection;
