const mongoose = require("mongoose");
const app = require("./app");

const { DB_HOST } = process.env;

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3003);
    console.log("wish u well - in hell ...😂");
  })
  .catch((error) => {
    console.log(error.message);
    process.env(1);
  });
