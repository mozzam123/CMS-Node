const express = require('express')
const router = express.Router()
const usercontroller = require("./../controllers/userController")


router.route("/login").post(usercontroller.login)
router.route("/register").post(usercontroller.register)

module.exports = router;