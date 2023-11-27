const Users = require("../../models/Users");

const createAdmin = async (req, res) => {
  try {
    const id = req.params.id;
    const { roll } = req.body;

    const result = await Users.findByIdAndUpdate(
      id,
      { $set: { roll } },
      { new: true }
    );

    if (result) {
      res.json({ message: 'User roll updated successfully', success: true });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = createAdmin;
