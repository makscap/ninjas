const { Schema, model } = require("mongoose");

const schema = new Schema({
  // title: {
  //   type: String,
  //   required: true,
  // },
  nickname: {
    type: String,
    required: true,
  },
  real_name: {
    type: String,
    required: true,
  },
  origin_description: {
    type: String,
    required: true,
  },
  superpowers: {
    type: String,
    required: true,
  },
  catch_phrase: {
    type: String,
    required: true,
  },
  Images: {
    type: String,
    required: true,
  },
  // age: {
  //   type: String,
  //   required: true,
  // },
  // name: {
  //   type: String,
  //   required: true,
  // },
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = model("Todo", schema);
