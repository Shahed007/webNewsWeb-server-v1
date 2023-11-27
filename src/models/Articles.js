const { Schema, default: mongoose } = require("mongoose");

const articleSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  publisher: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  viewers: {
    type: Number,
    default: 0,
  },
  premium: {
    type: String,
  },
  publish_date: {
    type: Number,
    required: true,
  },
});

const Article = mongoose.model("article", articleSchema);

module.exports = Article;
