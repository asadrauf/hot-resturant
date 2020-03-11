const path = require("path");

module.exports = function(app) {
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/reservation", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/reservation.html"));
  });

  app.get("/view", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/view.html"));
  });
};