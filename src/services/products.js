const ProductModel = require("../models/product");
const dbError = require("../helpers/dbError");

class ProductService {
  async getAll() {
    const products = await ProductModel.find().populate("categories", "name");
    return products;
  }

  async create(data) {
    try {
      const product = await ProductModel.create(data);
      return {
        success: true,
        product
      };
    } catch(error) {
      return {
        success: false,
        errors: dbError(error)
      }
    }
  }

  async edit(idProduct, data) {
    try {
      const product = await ProductModel.findOneAndUpdate(idProduct, data, {new:true});
      return {
        success: true,
        product
      };
    } catch(error) {
      return {
        success: false,
        errors: dbError(error)
      };
    }
  }

  async update(idProduct, data) {
    try {
      if(!data.name || !data.price || !data.description) {
        return {
          success: false,
          errors: ["Fill all the necessary fields"]
        };
      }

      const product = await ProductModel.findOneAndUpdate(idProduct, data, {new:true});
      return {
        success: true,
        product
      }
    } catch(error) {
      return {
        success: false,
        errors: dbError(error)
      };
    }
  }

  async delete(idProduct) {
    try {
      const product = await ProductModel.findByIdAndDelete(idProduct);
      return {
        success: true,
        product
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
