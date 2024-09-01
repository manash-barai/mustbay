// src/models/Product.ts
import mongoose, { Schema, models, model } from 'mongoose';


const ProductSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    newPrice: { type: Number, required: true },
    oldPrice: { type: Number, required: true },
    extraOffer: { type: String, required: false },
    featureProduct: { type: Boolean, default: false },
    image: {
      image1: {
        url: String,
        publicId: String
      },
      image2: {
        url: String,
        publicId: String
      },
      image3: {
        url: String,
        publicId: String
      },
      image4: {
        url: String,
        publicId: String
      },
    },
    brand: { type: String, required: true },
    country: { type: String, required: true },
    lifeCycle: { type: String, required: true },
  },
  { timestamps: true }
);

const Product = models.Product || model('Product', ProductSchema);
export default Product;