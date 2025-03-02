const express = require("express");
const { createInternship, utrNumber } = require("../controllers/internshipController");
const router = express.Router();

router.post("/", createInternship);
router.post("/utrsubmit", utrNumber);

module.exports = router;