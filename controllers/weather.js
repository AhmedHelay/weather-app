const express = require("express");
const router = express.Router();
const weather = require("./../utils/weather");

router.get("/", async (req, res) => {
  response = await weather.get(req.query.city);
  res.send(response.data);
});

module.exports = router;
