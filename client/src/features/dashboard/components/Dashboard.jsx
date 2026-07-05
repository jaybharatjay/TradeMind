import { useEffect, useState } from "react";
import { getScanner } from "../../../shared/scannerApi";
import "./Dashboard.css";

function Dashboard() {
  const [scanner, setScanner] = useState([]);

  useEffect(() => {
    getScanner()
      .then((data) => {
        console.log("Scanner:", data);
        setScanner(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="dashboard">
      <h1>📈 TradeMind Dashboard</h1>

      <div className="card">
        <h3>📊 AI Scanner</h3>

        <table style={{ width: "100%", marginTop: "10px" }}>
          <thead>
            <tr>
              <th align="left">Stock</th>
              <th align="left">Signal</th>
              <th align="right">Price</th>
            </tr>
          </thead>

          <tbody>
            {scanner.map((stock) => (
              <tr key={stock.symbol}>
                <td>{stock.symbol}</td>
                <td>{stock.signal}</td>
                <td align="right">₹{stock.price}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h3>Total Stocks: {scanner.length}</h3>
      </div>
    </div>
  );
}

export default Dashboard;