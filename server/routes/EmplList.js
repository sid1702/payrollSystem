const express = require("express");
const router = express.Router();
const EmpListModel = require("../models/EmpList");

router.post("/addEmployee", async (req, res) => {
  const { empNum, name, designation, nationality } = req.body;
  //console.log(empNum, name, designation, nationality);
  if (empNum != "" && name != "" && designation != "" && nationality != "") {
    const employee = await EmpListModel.create({
      EmpNo: empNum,
      Name: name,
      Designation: designation,
      Nationality: nationality,
    });
    return res.status(200).json({ success: "true", data: employee });
  }

  return res
    .status(404)
    .json({ success: "false", error: "Could not add employoee" });
});

router.get("/getAllEmp", async (req, res) => {
  const allEmp = await EmpListModel.find();
  if (allEmp.length === 0) {
    return res
      .status(404)
      .json({ success: "false", error: "There are no employees" });
  }
  res.status(200).json({ success: "true", data: allEmp });
});

router.delete("/deleteEmployee/:id", async (req, res) => {
  const { id } = req.params;

  const emp = await EmpListModel.deleteOne({
    _id: id,
  });

  if (!emp) {
    return res
      .status(404)
      .json({ success: "false", error: "employee not found" });
  }

  res.status(200).json({ success: "true", message: "deleted!" });
});

router.put("/updateDesignation/:id", async (req, res) => {
  const { id } = req.params;
  const { newDesignation } = req.body;
  const emp = EmpListModel.findById(id);

  if (!emp) {
    return res
      .status(404)
      .json({ success: "false", error: "employee not found" });
  } else {
    await EmpListModel.findOneAndUpdate(
      { _id: id },
      { $set: { Designation: newDesignation } },
      { new: true }
    );
    const allEmp = await EmpListModel.find();
    return res.status(200).json({ success: "true", data: allEmp });
  }
});

module.exports = router;
