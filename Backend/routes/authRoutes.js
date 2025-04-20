const express = require("express");
const router = express.Router();
const userController =require("../controllers/user.controler")

router.post("/api/register", userController.userRegister);
router.post("/api/login", userController.userLogin);

module.exports = router;
