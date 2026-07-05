import { useEffect, useState } from "react";
import { getScanner } from "../../../shared/scannerApi";

function Scanner() {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    getScanner().then(setStocks);
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>📊 AI Scanner</h2>

      <table
        border="1"
        cellPadding="8"
        style={{
          borderCollapse: "collapse",
          width: "100%",
          marginTop: 20
        }}
      >
        <thead>
          <tr>
            <th>Stock</th>
            <th>Price</th>
            <th>RSI</th>
<th>MACD</th>
<th>Volume (Cr)</th>
            <th>Signal</th>
<th>AI Score</th>
          </tr>
        </thead>

        <tbody>
          {stocks.map((s) => (
            <tr key={s.symbol}>
              <td>{s.symbol}</td>
              <td>₹{s.price}</td>
              <td>{s.rsi}</td>
<td>{s.macd}</td>
<td>{s.volume}</td>
             <td>{s.signal}</td>
<td>{s.score}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3 style={{ marginTop: 20 }}>
        Total Stocks : {stocks.length}
      </h3>
    </div>
  );
}

export default Scanner;