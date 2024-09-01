// src/models/User.ts
import mongoose, { Schema, models, model } from 'mongoose';


const UserSchema = new Schema(
  {
    userName: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    otpVerificationBySMS: { type: String, required: true },
    order: [{ type: Schema.Types.ObjectId, ref: 'Order' }],
  },
  { timestamps: true }
);

const User = models.User || model('User', UserSchema);
export default User;