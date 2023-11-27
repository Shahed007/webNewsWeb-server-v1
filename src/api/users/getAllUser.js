const Users = require("../../models/Users");

const allUser = async (req, res) => {
  try {
    const allUser = await Users.find();

    res.send(allUser);
  } catch (err) {
    console.log(err);
  }
};

module.exports = allUser;
