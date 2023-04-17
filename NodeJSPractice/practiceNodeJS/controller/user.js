const User = require("../model/user");

const getAllUsers = (req, res) => {
  const users = User.map((item) => item);
  res.json(users);
};

const getUser = async (req, res) => {
  const userId = req.params.id;

  if (!userId) {
    res.status(403).send("User id is required");
    return;
  }

  const userFound = User.find((item) => item.id == userId);

  if (!userFound) {
    res.status(403).send("User with the id is not present");
    return;
  }

  res.status(200).send(userFound);
};


const deleteUser = async(req,res)=>{
   const deleteUser= req.params.id;

   if(!deleteUser){
    res.send('User is not present to be deleted')
}

const newUserList = User.filter(item => item.id !=deleteUser )
res.status(200).send(newUserList)

}

module.exports = { getAllUsers, getUser,deleteUser };
