const express = require("express");
const router = express.Router();

const { getWatchlist } = require("./watchlist.controller");

router.get("/", getWatchlist);

module.exports = router;