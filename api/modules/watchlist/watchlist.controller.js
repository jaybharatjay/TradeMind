exports.getWatchlist = (req, res) => {
  res.json([
    {
      symbol: "SBIN",
      price: 865,
      change: "+1.25%"
    },
    {
      symbol: "HDFCBANK",
      price: 2018,
      change: "-0.45%"
    },
    {
      symbol: "ICICIBANK",
      price: 1498,
      change: "+0.82%"
    }
  ]);
};