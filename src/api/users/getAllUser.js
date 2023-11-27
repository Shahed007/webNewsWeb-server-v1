const Users = require("../../models/Users");

const allUser = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.pageSize) || 5;

    const totalCount = await Users.countDocuments();

    const users = await Users.find()
      .skip((page - 1) * pageSize)
      .limit(pageSize);

    res.json({
      users,
      totalUsers: totalCount,
    });
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = allUser;
