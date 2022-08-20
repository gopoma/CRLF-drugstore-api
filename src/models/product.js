const { mongoose } = require("../config/db");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide name"]
  },
  price: {
    type: Number,
    required: [true, "Please provide price"]
  },
  description: {
    type: String,
    required: [true, "Please provide description"],
    maxlength: [1023, "No greater than 1023 characters"],
  },
  offer: {
    type: Boolean,
    default: false
  },
  image: String,
  categories: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "category"
  }]
}, {timestamps:true});

const ProductModel = mongoose.model("product", productSchema);

module.exports = ProductModel;
