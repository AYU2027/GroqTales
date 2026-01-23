import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, select: false },
  authProvider: { type: String, enum: ["credentials", "google"], default: "credentials" },
  googleId: { type: String },
  username: { type: String, unique: true, sparse: true },
  displayName: { type: String, default: "" },
  image: { type: String },
  bio: { type: String, maxLength: 500, default: "" },
  primaryGenre: { 
    type: String, 
    enum: ["Fantasy", "Sci-Fi", "Mystery", "Romance", "Horror", "Non-Fiction", "Other"],
    default: "Other" 
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
}, { timestamps: true });

export const User = mongoose.models.User || mongoose.model("User", UserSchema);