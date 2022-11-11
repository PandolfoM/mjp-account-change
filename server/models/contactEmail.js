const nodemailer = require("nodemailer");
require("dotenv").config();

const contactEmail = nodemailer.createTransport({
  host: "smtp.office365.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.USER,
    pass: process.env.PASSWORD,
  },
});

contactEmail.verify((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Ready to send");
  }
});

module.exports = contactEmail;
