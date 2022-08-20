const ProductModel = require("../models/product");
const dbError = require("../helpers/dbError");

class ProductService {
  async getAll() {
    return await ProductModel.find();
  }

  async create(data) {
    try {
      const newProduct = await ProductModel.create(data);
      return {
        success: true,
        data: newProduct
      };
    } catch(error) {
      return {
        success: false,
        errors: dbError(error)
      }
    }
  }
}

module.exports = ProductService;
