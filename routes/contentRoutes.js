const express = require("express");
const router = express.Router();
const contentController = require("./../controllers/contentController");

router.route("/getcontent").post(contentController.getContent);

module.exports = router;
