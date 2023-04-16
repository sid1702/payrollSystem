const express = require("express");
const router = express.Router();
const UserModel = require("../models/Users");

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await UserModel.findOne({ username: username });

  if (!user) {
    res.json({ error: "User Doesn't Exist" });
  } else {
    if (password === user.password) {
      res.json({ username: user.username, id: user._id });
    } else {
      res.json({ error: "Wrong Username And Password Combination" });
    }
  }
});

module.exports = router;
