// const users = [
//   {
//     id: 12,
//     email: "praj1.yog@gmail.com",
//     password: "abcd",
//   },
//   {
//     id: 23,
//     email: "adi@gmail.com",
//     password: "efgh",
//   },
//   {
//     id: 13,
//     email: "praj.yog@gmail.com",
//     password: "efgh",
//   },
// ];

// module.exports = users;

const mongoose = require("mongoose");
const userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: String,
    marks: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("user", userSchema);
