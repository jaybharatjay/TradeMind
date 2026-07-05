function calculateScore(stock) {
  let score = 0;

  if (stock.rsi < 30) score += 30;
  else if (stock.rsi < 40) score += 20;
  else if (stock.rsi < 50) score += 10;

  if (stock.price > stock.sma20) score += 25;

  if (stock.macd !== null && stock.macd > 0) score += 20;

  if (stock.volume >= 2) score += 15;

  return score;
}

module.exports = {
  calculateScore,
};