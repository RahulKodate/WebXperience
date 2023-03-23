const express = require("express");
const {
  registerUser,
  editUser,
  deleteUser,
  getUsers,
} = require("../Controllers/userControllers");

const router = express.Router();

router.route("/").post(registerUser);
router.route("/").put(editUser);
router.route("/").delete(deleteUser);
router.route("/").get(getUsers);

module.exports = router;
