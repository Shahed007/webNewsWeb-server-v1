const Users = require("../../models/Users");

const updateUserByEmail = async (req, res) => {
  try {
    // if (req.params?.email !== req.user?.email) {
    //   return res.status(403).send({ message: "access denied" });
    // }
    const userEmail = req.params.email;
    const updatedUserData = req.body;

    const updatedUser = await Users.findOneAndUpdate(
      { email: userEmail },
      { ...updatedUserData },
      { new: true }
    );

    res.json({ message: "User updated successfully", success: true });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = updateUserByEmail;
