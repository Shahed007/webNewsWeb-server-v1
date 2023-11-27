const express = require("express");
const { createUser, allUser, createAdmin } = require("../../api/users");
const router = express.Router();

router.put("/users", createUser);
router.get("/users", allUser);
router.patch("/admin/:id", createAdmin);
module.exports = router;
