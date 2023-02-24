const express = require("express");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();

// routers //
const authRouter = require("./routes/api/auth");
const dailyRouter = require("./routes/api/daily");
const diaryRouter = require("./routes/api/diary");
const summaryRouter = require("./routes/api/summary");

// app //
const app = express();
const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// routes //
app.use("/api/auth", authRouter);
app.use("/api/daily", dailyRouter);
app.use("/api/diary", diaryRouter);
app.use("/api/summary", summaryRouter);

// middlewares //
app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});
app.use((err, req, res, next) => {
  res.status(err.status).json({ message: err.message });
});
app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message, err });
});

module.exports = app;
