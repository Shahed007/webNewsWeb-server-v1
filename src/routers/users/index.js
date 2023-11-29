const express = require("express");
const {
  createUser,
  allUser,
  createAdmin,
  updateUserByEmail,
  getSingleUser,
} = require("../../api/users");
const verifyTokens = require("../../middlewares/verifyToken");
const router = express.Router();

router.put("/users", createUser);
router.get("/users", allUser);
router.patch("/admin/:id", createAdmin);
router.patch("/user/:email", updateUserByEmail);
router.get("/user/:email",  getSingleUser);
module.exports = router;
