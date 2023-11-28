const Article = require("../../models/Articles");

const getAllArticles = async (req, res) => {
  try {
    const { title, tag, publisher, author_email } = req.query;
    console.log(publisher);

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

    const articles = await Article.find(query);

    res.status(200).send(articles);
  } catch (error) {
    res.status(500).send({ message: "Internal server error" });
  }
};

module.exports = getAllArticles;
