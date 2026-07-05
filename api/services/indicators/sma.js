function sma(prices, period = 20) {
  if (prices.length < period) return null;

  const slice = prices.slice(-period);

  const sum = slice.reduce((a, b) => a + b, 0);

  return Number((sum / period).toFixed(2));
}

module.exports = {
  sma,
};