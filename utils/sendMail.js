const nodemailer = require("nodemailer");
require("dotenv").config();

const { EMAIL_PASSWORD } = process.env;

const nodemailerConfig = {
  host: "smtp.meta.ua",
  port: 465, // 25, 465, 2255
  secure: true,
  maxMessages: Infinity,
  maxConnections: 20,
  auth: {
    user: "slim-mom.devops@meta.ua",
    pass: EMAIL_PASSWORD,
  },
};

const transporter = nodemailer.createTransport(nodemailerConfig, {
  from: "Slim Mom <slim-mom.devops@meta.ua>",
});

module.exports = transporter;
