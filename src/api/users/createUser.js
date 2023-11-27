const Users = require("../../models/Users");

const createUser = async (req, res) => {
  try {
    const user = req.body;

    const filter = { email: user.email };
    const update = { ...user };
    const options = { upsert: true, new: true };

    const createdUser = await Users.findOneAndUpdate(filter, update, options);

    if (createdUser) {
      res.json({ createUser: true, message: createdUser });
    } else {
      res.json({ createUser: false, message: "User creation failed" });
    }
  } catch (err) {
    res
      .status(500)
      .json({ createUser: false, message: "Internal server error" });
  }
};

module.exports = createUser;
