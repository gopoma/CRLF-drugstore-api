const { mongoose } = require("../config/db");

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide name"],
    minlength: [4, "No less than 4 characters"],
  }
});

const CategoryModel = mongoose.model("category", categorySchema);

module.exports = CategoryModel;
