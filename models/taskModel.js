const mongoose = require("mongoose");
const listSchema = new mongoose.Schema({
  category: {
    type: String,
  },
  task: {
    type: String,
    required: [true, "A task must have a name"],
    unique: true,
  },
  deadline: {
    type: String,

    required: [true, "A task must have a deadline"],
  },
});
const List = mongoose.model("List", listSchema);
module.exports = List;
