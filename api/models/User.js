const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePic: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

// import mongoose from "mongoose";

// const bookSchema = mongoose.Schema(
//   {
//     title: {
//       type: String,
//       required: true,
//     },

//     author: {
//       type: String,
//       required: true,
//     },
//     publishYear: {
//       type: Number,
//       required: true,
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// export const Book = mongoose.model("Book", bookSchema);
