const CategoryModel = require("../models/category");
const dbError = require("../helpers/dbError");

class CategoryService {
  async getAll() {
    const categories = await CategoryModel.find();
    return categories;
  }
  
  async create(data) {
    try {
      const category = await CategoryModel.create(data);
      return {
        success: true,
        category
      };
    } catch(error) {
      return {
        success: false,
        errors: dbError(error)
      };
    }
  }
}

module.exports = CategoryService;
