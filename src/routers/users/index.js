const express = require("express");
const {
  createUser,
  getAllUser,
  createAdmin,
  updateUserByEmail,
  getSingleUser,
} = require("../../api/users");
const verifyToken = require("../../middlewares/verifyToken");
const router = express.Router();

router.put("/users", createUser);
router.get("/users", verifyToken, getAllUser);
router.patch("/admin/:id", verifyToken, createAdmin);
router.patch("/user/:email", updateUserByEmail);
router.get("/user/:email", getSingleUser);
module.exports = router;
