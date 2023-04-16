const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const cors = require("cors");
app.use(cors());
app.use(express.json());

/// DATABASE CONNECTION
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let db = mongoose.connection;

const usersRouter = require("./routes/Users");
app.use("/", usersRouter);

const empListRouter = require("./routes/EmplList");
app.use("/", empListRouter);

app.listen(3001, () => {
  console.log("server up");
});

module.exports = mongoose;
