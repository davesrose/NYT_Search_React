const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  // Title of Article
  title: {
    type: String,
    required: true
  },

  // Date of Article
  date: {
    type: String,
    default: Date()
  },
  
  // Link to Article
  url: {
    type: String,
    required: true
  }
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;
