const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: false,
    },
    categories: {
      type: Array,
      required: false,
    },
  },

  //? createdAt ve updatedAt olmak üzere ekstra 2 alan ekler
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);
