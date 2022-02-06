const express = require("express");
const app = express();
const weatherRouter = require("./controllers/weather");

//express properties
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

//routes
app.get("/", (req, res) => {
  res.render("index");
});

app.use("/weather", weatherRouter);

//localhost route
app.listen(5000);
