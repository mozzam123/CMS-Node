const express = require("express");
const router = express.Router();
const contentController = require("./../controllers/contentController");

router.route("/getcontent").post(contentController.getContent);
router.route("/create").post(contentController.createContent);
router.route("/delete").post(contentController.deleteContent);

module.exports = router;
