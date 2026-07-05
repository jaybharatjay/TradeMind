const scanner = require("../database/scanner.json");
const watchlist = require("../database/watchlist.json");
const journal = require("../database/journal.json");

exports.getDashboardData = () => {
  return {
    scanner,
    watchlist,
    journal
  };
};