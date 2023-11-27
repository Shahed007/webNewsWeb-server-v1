const Article = require("../../models/Articles");

const createArticle = async (req, res) => {
  try {
    const { title } = req.body;
    const article = req.body;

    // Check if the title already exists
    const existingArticle = await Article.findOne({ title });

    if (existingArticle) {
      return res
        .status(400)
        .send({ message: "Article with this title already exists" });
    }

    // Create a new article instance
    const newArticle = new Article({
      ...article,
    });

    // Save the new article to the database
    const result = await newArticle.save();

    console.log(result);

    res
      .status(201)
      .json({ message: "Article created successfully", success: true });
  } catch (error) {
    console.error("Error creating article:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = createArticle;
