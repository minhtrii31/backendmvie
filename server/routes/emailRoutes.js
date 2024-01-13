const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

router.post("/sendemail", async (req, res) => {
  const { to, subject, text } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        // user: "serviceemailtesternode@gmail.com",
        // pass: "emailtester123",
        user: "serviceemailtesternode@gmail.com",
        pass: "ifqq hxfp dstb nqja",
      },
    });
    const mailOptions = {
      from: "serviceemailtesternode@gmail.com",
      to,
      subject,
      text,
    };
    await transporter.sendMail(mailOptions);

    res.json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Error sending email" });
  }
});
module.exports = router;
