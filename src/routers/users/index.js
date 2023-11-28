const express = require("express");
const {
  createUser,
  allUser,
  createAdmin,
  updateUserByEmail,
} = require("../../api/users");
const router = express.Router();

router.put("/users", createUser);
router.get("/users", allUser);
router.patch("/admin/:id", createAdmin);
router.patch("/user/:email", updateUserByEmail);
module.exports = router;
