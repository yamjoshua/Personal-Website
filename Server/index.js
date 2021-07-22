const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const Port = process.env.PORT || 3600;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res, next) => {
  return res.json({ message: "Server Running" });
});


