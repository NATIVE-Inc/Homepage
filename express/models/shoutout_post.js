// /backend/data.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our data base's data structure
const Shoutout = new Schema(
  {
    id: Number,
    title: String,
    img: String,
    sub_title: String,
    description: String,
    category: String,
    comments: Array,
    likes: String,
    author: String,
    location: String,
    date: {
      day: Number,
      month: String,
    },
  },
  { timestamps: true }
);

// export the new Schema so we could modify it using Node.js
// Caution: schema and model shouldn't have thesame name
module.exports = mongoose.model("shoutouts", Shoutout);
