const express = require("express");
const router = express.Router();

const userController = require("../controllers/user.controller");
const validateUser = require("../middlewares/validateUser");

router.post("/register", validateUser, userController.register);
router.post("/login", userController.login);
router.get("/", userController.getUsers);

module.exports = router;
