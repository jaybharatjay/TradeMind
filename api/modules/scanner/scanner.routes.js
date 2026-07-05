const express = require("express");
const router = express.Router();

const scannerController = require("./scanner.controller");

router.get("/", scannerController.getScanner);

module.exports = router;