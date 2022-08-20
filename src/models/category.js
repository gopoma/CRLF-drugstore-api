const { mongoose } = require("../config/db");

const categorySchema = new mongoose.Schema({
  name: String
});

const CategoryModel = mongoose.model("category", categorySchema);

module.exports = CategoryModel;
