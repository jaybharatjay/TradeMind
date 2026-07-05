function ema(prices, period = 20) {
  if (prices.length < period) return null;

  const multiplier = 2 / (period + 1);

  let emaValue =
    prices.slice(0, period).reduce((a, b) => a + b, 0) / period;

  for (let i = period; i < prices.length; i++) {
    emaValue = (prices[i] - emaValue) * multiplier + emaValue;
  }

  return Number(emaValue.toFixed(2));
}

module.exports = {
  ema,
};

