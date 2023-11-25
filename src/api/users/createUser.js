const Users = require("../../models/Users");

const createUser = async (req, res) => {
  try {
    const user = req.body;

    const newUser = new Users({
      ...user,
    });

    const result = await newUser.save();

    if (result) {
      res.send({ createUser: true });
    }
  } catch (err) {
    res.send(err);
  }
};

module.exports = createUser;
