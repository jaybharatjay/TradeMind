const { getMockPrices } = require("../../services/marketData/mockPrices");
const { calculateRSI } = require("../../services/indicators/rsi");
const { sma } = require("../../services/indicators/sma");
const { calculateScore } = require("../../services/ai/scoring");
const { calculateMACD } = require("../../services/indicators/macd");

exports.getScanner = (req, res) => {
  const prices = getMockPrices();

  const result = Object.entries(prices).map(([symbol, history]) => {
    const current = history[history.length - 1];

    const rsi = calculateRSI(history);
    const sma20 = sma(history);

    // Temporary placeholder until MACD is implemented
    //const macd = 0;

    let signal = "HOLD";

    if (rsi !== null && sma20 !== null) {
      if (current > sma20 && rsi < 70) signal = "BUY";
      else if (current < sma20 && rsi > 30) signal = "SELL";
    }

    const volume = +(Math.random() * 4 + 1).toFixed(2);

    const macd = calculateMACD(history);

const score = calculateScore({
  price: current,
  rsi,
  sma20,
  macd,
  volume,
});

    return {
      symbol,
      price: current,
      rsi,
      sma20,
      macd,
      volume,
      score,
      signal,
    };
  });

  res.json(result);
};