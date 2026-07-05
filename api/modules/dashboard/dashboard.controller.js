const dashboardService = require("../../services/dashboard.service");

exports.getDashboard = (req, res) => {
  const data = dashboardService.getDashboardData();

  res.status(200).json(data);
};