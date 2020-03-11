const tables = require("../data/tables");
// const waitlist = require("../data/waitlist");

module.exports = function(app) {
  app.get("/api/waitlist", (req, res) => {
    res.json(tables);
  });

  app.post("/api/tables", (req, res) => {
    const newTable = req.body;
    newTable.routeName = req.body.name.split(" ").join("").toLowerCase();
    tables.push(newTable);
    res.json(newTable);
  });
}