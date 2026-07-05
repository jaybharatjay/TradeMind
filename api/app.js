require("dotenv").config();

const express = require("express");
const cors = require("cors");

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

// 404 Handler
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