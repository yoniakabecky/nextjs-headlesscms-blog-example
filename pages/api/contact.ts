import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default function (req: NextApiRequest, res: NextApiResponse) {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    port: 465,
    secure: true, // true for 465, false for other ports
    host: "smtp.gmail.com",
    auth: {
      user: process.env.EMAIL, // less secure GMail
      pass: process.env.PASSWORD,
    },
  });

  const mailOption = {
    from: `${email}`,
    to: `${process.env.EMAIL}`,
    subject: `Message From ${name}`,
    text: `${message} | Sent from: ${name} <${email}>`,
    html: `<div>${message}</div>
    <p>From ${name} -${email}-</p>`,
  };

  transporter.sendMail(mailOption, function (err, info) {
    if (err) {
      console.error(err);
      res.send("error" + JSON.stringify(err));
    } else {
      console.log(info.messageId);
      res.status(200).json({ message: "email sent" });
    }
  });
}
