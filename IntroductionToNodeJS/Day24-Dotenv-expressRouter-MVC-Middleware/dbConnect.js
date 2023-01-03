const mongoose = require("mongoose");

module.exports = () => {
  const mongoUri =
    "mongodb+srv://Prajna:o6C4bWVY4E2TIv3l@cluster0.e7kaolo.mongodb.net/?retryWrites=true&w=majority";

  try {
    mongoose.connect(
      mongoUri,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      () => {
        console.log("mongodb connected");
      }
    );
  } catch (e) {
    console.log(e);
  }
};
