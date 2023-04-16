const mongoose = require("mongoose");
const EmpListSchema = new mongoose.Schema({
  EmpNo: {
    type: String,
    required: true,
  },
  Name: {
    type: String,
    required: true,
  },
  Designation: {
    type: String,
    required: true,
  },
  Nationality: {
    type: String,
    required: true,
  },
});

const EmpListModel = mongoose.model("EmpList", EmpListSchema);
module.exports = EmpListModel;
