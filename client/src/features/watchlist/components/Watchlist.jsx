import { useEffect, useState } from "react";
import { getWatchlist } from "../../../shared/watchlistApi";

function Watchlist() {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    getWatchlist()
      .then(setStocks)
      .catch(console.error);
  }, []);

  return (
    <div style={{ marginTop: "30px" }}>
      <h2>⭐ Watchlist</h2>

      <table border="1" cellPadding="8" style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr>
            <th align="left">Stock</th>
          </tr>
        </thead>

        <tbody>
          {stocks.map((stock) => (
            <tr key={stock.symbol}>
              <td>{stock.symbol}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p style={{ marginTop: "10px" }}>
        Total Stocks: {stocks.length}
      </p>
    </div>
  );
}

export default Watchlist;