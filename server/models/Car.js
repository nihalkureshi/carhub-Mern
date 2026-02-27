import mongoose from "mongoose";

const carSchema = new mongoose.Schema(
  {
    brand: { type: String, required: true },
    model: { type: String, required: true },
    price: { type: Number, required: true },
    fuelType: { type: String },
    transmission: { type: String },
    engine: { type: String },
    mileage: { type: String },
    bodyType: { type: String },
    images: [{ type: String }],
    description: { type: String }
  },
  { timestamps: true }
);

export default mongoose.model("Car", carSchema);