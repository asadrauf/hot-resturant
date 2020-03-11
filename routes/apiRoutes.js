const reservation = require("../data/reservation");
const waitlist = require("../data/waitlist");

module.exports = function(app) {
  app.get("/api/waitlist/:order", (req, res) => {
    const order = req.params.order;
    console.log(order);

    let found;

    reservation.forEach(char => {
      if(order === char.routeName) {
        found = char;
      }
    });

    res.json(found || { success: false });
  });

  app.post("/api/reservation", (req, res) => {
    const newOrder = req.body;

    newOrder.routeName = req.body.name.split(" ").join("").toLowerCase();
    
    reservation.push(newOrder);
    console.log(reservation);
    res.json(newOrder);
  });
};

