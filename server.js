const mongoose = require("mongoose");

const express = require("express");

const app = require("./app");

mongoose.connect("mongodb://localhost/todolist");
const db = mongoose.connection;
db.on("error", console.error.bind(console, "error in connecting to database"));
db.once("open", function () {
  console.log("connection to database is made :)");
});
const port = 8000;

app.listen(port, () => {
  console.log("running on port ", port);
});
