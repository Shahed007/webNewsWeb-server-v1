const Article = require("../../models/Articles");

const createArticles = async (req, res) => {
  try {
    const { title } = req.body;
    const article = req.body;

    const existingArticle = await Article.findOne({ title });

    if (existingArticle) {
      return res
        .status(400)
        .json({ message: "Article with this title already exists" });
    }

    const newArticle = new Article({
      ...article,
    });

    await newArticle.save();

    res
      .status(201)
      .json({ message: "Article created successfully", success: true });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = createArticles;
