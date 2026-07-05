require("dotenv").config();


const express = require("express");
const cors = require("cors");

const dashboardRoutes = require("./modules/dashboard/dashboard.routes");
const scannerRoutes = require("./modules/scanner/scanner.routes");
const watchlistRoutes = require("./modules/watchlist/watchlist.routes");

const app = express();

app.use(cors());
app.use(express.json());

// Health Check API
app.get("/api/health", (req, res) => {
    res.status(200).json({
        success: true,
        project: "TradeMind",
        version: "1.0.0",
        message: "TradeMind API is running successfully 🚀"
    });
});

// Dashboard API
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/scanner", scannerRoutes);
app.use("/api/watchlist", watchlistRoutes);

// 404 Handler (Always LAST)
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "API Not Found"
    });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`🚀 TradeMind API running on http://localhost:${PORT}`);
});