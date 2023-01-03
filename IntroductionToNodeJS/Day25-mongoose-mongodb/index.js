const mongoose = require("mongoose");
const User = require("./models/User");

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

//   const user = new User({
//     email:'adi@gmail.com',
//     password: '134'
//   })

//   user.save().then(()=>{
//     console.log('user added');
//   });

async function createUser(newUser) {
  const user = new User(newUser);

  const data = await user.save();
  //   console.log("user", user);
  console.log("data", data);
}

// createUser({
//   email: "adi@gmail.com",
//   password: "134",
//   marks: 80,
// });

async function findUser() {
  //   const users = await User.findById("63b263a877f1d585eb83357c");
  //   const users = await User.find({ email: "adi@gmail.com", password: "134" });
  //   const users = await User.find({ email: "adi@gmail.com" });
  //   const users = await User.findOne({ email: "adi@gmail.com" });
  //   const users = await User.find({ marks: { $lt: 20 } });
  const user = await User.find({ email: { $regex: "r" } });
  console.log(user);
  return user;
}

// findUser();

async function updateMarks(userId, marks) {
  const user = await User.findById(userId);
  user.marks = marks;
  const updatedUser = await user.save();
  console.log(updatedUser);
}

updateMarks("63b26387adc78f3333b08b87", 100);

async function deleteUser(userId) {
  const user = await User.findById(userId);
  if (!user) {
    return;
  }
  await user.deleteOne();
  console.log("user deleted");
}

deleteUser("63b272e2032e5658daecdee8");
