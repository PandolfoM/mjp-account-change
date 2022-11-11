const express = require("express");
const router = express.Router();
const contactEmail = require("../models/contactEmail");
require('dotenv').config()

router.post("/contact", (req, res) => {
  const name = req.body.name;
  const network = req.body.network;
  const email = req.body.email;
  const username = req.body.username;
  const password = req.body.password;
  const form = req.body.form;

  const mail = {
    from: "MJP Systems Account Details<mattp@mjpsystems.com>",
    to: process.env.MAILLIST,
    subject: form,
    html: `<p>Name: ${name}</p>
           <p>Network: ${network}</p>
           <p>Email: ${email}</p>
           <p>Username: ${username}</p>
           <p>Password: ${password}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: "ERROR" });
    } else {
      res.json({ status: "Message Sent" });
    }
  });
});

module.exports = router;