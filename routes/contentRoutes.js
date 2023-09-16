const express = require("express");
const router = express.Router();
const contentController = require("./../controllers/contentController");


// Import the verifyToken middleware
const verifyToken = require('./../middleware/auth');

// Apply the verifyToken middleware to routes that require authentication
router.use(verifyToken)

router.route("/getcontent").post(contentController.getContent);
router.route("/create").post(contentController.createContent);
router.route("/delete").post(contentController.deleteContent);
router.route("/search").post(contentController.searchContent);

module.exports = router;
