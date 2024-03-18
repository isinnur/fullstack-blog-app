const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  //? createdAt ve updatedAt olmak üzere ekstra 2 alan ekler
  { timestamps: true }
);

module.exports = mongoose.model("Category", CategorySchema);
