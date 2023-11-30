const Article = require("../../models/Articles");

const getAllArticles = async (req, res) => {
  try {
    const { title, tag, publisher } = req.query;
    const page = parseInt(req.params.page) || 0;
    const pageSize = parseInt(req.params.pageSize) || 10;

    let query = {};

    if (title !== "") {
      query.title = new RegExp(title, "i");
    }
    if (tag !== "") {
      query.tags = { $in: tag };
    }
    if (publisher !== "") {
      query.publisher = new RegExp(publisher, "i");
    }

    if (author_email) {
      query = { author_email: author_email };
    }

    const articles = await Article.find(query)
      .skip(page * pageSize)
      .limit(pageSize);
    const articleCount = Article.countDocuments();
    res.status(200).send(articles);
  } catch (error) {
    res.status(500).send({ message: "Internal server error" });
  }
};

module.exports = getAllArticles;
