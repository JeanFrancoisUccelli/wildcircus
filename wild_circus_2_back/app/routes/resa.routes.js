const { authJwt } = require("../middleware");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
};

 
const models = require("../models");

module.exports = (app) => {
  app.get("/resas", (req, res) => {
    models.Resa.findAll()
        // { include: [models.Cook, models.Feedback], })
        .then((resas) => res.json(resas));
  });

  app.post("/resas", (req, res) => {
    models.Resa.create({
      name: "req.body",
      date: "req.body",
      nbPlace: req.body,
    }).then((resas) => res.json(resas));
  });
};