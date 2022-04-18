const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.use(express.json());

const catsRouter = require("./routes/cats");

mongoose.connect("mongodb://localhost:27017/CatCollection").then(() => {
  console.log("Database connected");
  app.use("/cats", catsRouter);
});

app.listen("3000");
