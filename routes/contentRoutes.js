const express = require("express");
const router = express.Router();
const contentController = require("./../controllers/contentController");

router.route("/getcontent").post(contentController.getContent);
router.route("/create").post(contentController.createContent);

module.exports = router;
