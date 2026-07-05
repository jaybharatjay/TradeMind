function ema(values, period) {
  if (values.length < period) return null;

  const k = 2 / (period + 1);

  let emaValue =
    values.slice(0, period).reduce((a, b) => a + b, 0) / period;

  for (let i = period; i < values.length; i++) {
    emaValue = values[i] * k + emaValue * (1 - k);
  }

  return emaValue;
}

function calculateMACD(prices) {
  const ema12 = ema(prices, 12);
  const ema26 = ema(prices, 26);

  if (ema12 === null || ema26 === null) return null;

  return +(ema12 - ema26).toFixed(2);
}

module.exports = {
  calculateMACD,
};