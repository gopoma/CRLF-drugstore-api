const CategoryModel = require("../models/category");
const dbError = require("../helpers/dbError");

class CategoryService {
  async getAll() {
    return await CategoryModel.find();
  }
  
  async create(data) {
    try {
      const newCategory = await CategoryModel.create(data);
      return {
        success: true,
        data: newCategory
      };
    } catch(error) {
      console.log(error);
      return {
        success: false,
        errors: dbError(error)
      };
    }
  }
}

module.exports = CategoryService;
