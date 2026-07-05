import Scanner from "./features/scanner/components/Scanner";
import Watchlist from "./features/watchlist/components/Watchlist";

function App() {
  return (
    <div style={{ maxWidth: "1200px", margin: "20px auto", padding: "20px" }}>
      <h1>🚀 TradeMind</h1>

      <Scanner />

      <Watchlist />
    </div>
  );
}

export default App;