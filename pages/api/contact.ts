import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default function (req: NextApiRequest, res: NextApiResponse) {
  const transporter = nodemailer.createTransport({
    port: 465,
    secure: true, // true for 465, false for other ports
    host: "smtp.gmail.com",
    auth: {
      user: "test.yoniakabecky@gmail.com", // less secure GMail
      pass: process.env.PASSWORD,
    },
  });

  const mailData = {
    from: "My Test account",
    to: "test.yoniakabecky@gmail.com",
    subject: `Message From ${req.body.name}`,
    text: req.body.message + " | Sent from: " + req.body.email,
    html: `<div>${req.body.message}</div>
    <p>From: ${req.body.name} (${req.body.email})</p>`,
  };

  transporter.sendMail(mailData, function (err, info) {
    if (err) console.error(err);
    else console.info(info);
  });

  res.status(200).json({ message: "email sent" });
}
