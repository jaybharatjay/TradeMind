

import { useEffect, useState } from "react";
import api from "./shared/api/api";

function App() {

  const [status, setStatus] = useState("Connecting...");

  useEffect(() => {

    api.get("/health")
      .then((res) => {
        setStatus(res.data.message);
      })
      .catch(() => {
        setStatus("❌ Backend Not Connected");
      });

  }, []);

  return (
    <div style={{ padding: 40, fontFamily: "Arial" }}>
      <h1>🚀 TradeMind</h1>

      <hr />

      <h2>{status}</h2>
    </div>
  );
}

export default App;