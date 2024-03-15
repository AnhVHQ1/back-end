const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
      // enum: [
      //   "NaturAlmond",
      //   "PrimeCuts",
      //   "HarvestHarmony",
      //   "SweetIndulgence",
      //   "ChocoCrunch",
      //   "CaramelCrave",
      // ], // List of brand options
    },
    quantity: {
      type: Number,
      required: true,
    },
    sold: {
      type: Number,
      default: 0,
      // select: false,
    },
    images: [
      {
        public_id: String,
        url: String,
      },
    ],
    tag: {
      type: String,
      required: true,
    },
    nutrition: {
      servingSize: {
        type: String,
        required: true,
      },
      calories: {
        type: Number,
        required: true,
      },
      fat: {
        type: Number,
        required: true,
      },
      saturatedFat: {
        type: Number,
        required: true,
      },
      sugar: {
        type: Number,
        required: true,
      },
      salt: {
        type: Number,
        required: true,
      },
    },
    ratings: [
      {
        star: Number,
        comment: String,
        postedby: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      },
    ],
    totalrating: {
      type: String,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

//Export the model
module.exports = mongoose.model("Product", productSchema);
