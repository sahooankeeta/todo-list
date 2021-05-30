const express = require("express");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.set("views", "front-end/view");

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static("front-end/assests"));
const List = require("./models/taskModel");
//TO GET ALL TASKS FROM DATABASE
app.get("/", async (req, res) => {
  //tasks are sorted according to deadline
  const lists = await List.find().sort("deadline");

  return res.status(200).render("home.ejs", {
    todolist: lists,
  });
});
//TO ADD NEW TASK INTO DATABASE
app.post("/", async (req, res) => {
  try {
    const newtask = await List.create(req.body);

    return res.redirect("/");
  } catch (err) {
    return res.redirect("/");
  }
});
//TO EDIT A TASK
app.post("/edittask/:id", async (req, res) => {
  try {
    const item = await List.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    return res.redirect("/");
  } catch (err) {
    return res.redirect("/");
  }
});
//TO DELETE TASK FROM DATABASE
app.route("/deletetask/:id").get(async (req, res) => {
  try {
    await List.findByIdAndDelete(req.params.id);
    return res.redirect("/");
  } catch (err) {
    return res.redirect("/");
  }
});

module.exports = app;
