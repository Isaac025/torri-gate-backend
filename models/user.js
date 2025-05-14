const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//test@, match

const userSchema = new Schema(
  {
    fullName: {
      type: String,
      required: [true, "Full Name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    },
    phoneNumber: {
      type: String,
      unique: true,
      match: /^\+?[1-9][0-9]{7,14}$/,
    },
    profilePicture: {
      type: String,
      default:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhtMRbtowke9ZnnGtyYJmIuJaB2Q1y5I-3IA&s",
    },
    role: {
      type: String,
      enum: ["tenant", "landlord"],
      default: "tenant",
    },
    password: {
      type: String,
      minlength: [6, "Minimum password length is 6"],
      required: [true, "Password is required"],
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    verificationToken: String,
    verificationTokenExpires: Date,
    resetPasswordToken: String,
    resetPasswordExpires: Date,
  },
  { timestamps: true }
);

const USER = mongoose.model("user", userSchema);

module.exports = USER;
