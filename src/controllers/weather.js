const express = require("express");
const router = express.Router();
const weather = require("../utils/weather");

router.get("/map", async (req, res) => {
  response = await weather.getMap(req.query.city);
  res.send(response.data);
});

router.get("/geo", async (req, res) => {
  response = await weather.getGeo(req.query.city);
  res.send(response.data);
});

module.exports = router;
