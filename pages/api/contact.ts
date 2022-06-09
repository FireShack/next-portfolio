// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

type Data = {
  msg: string;
};

export default async function contact(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const body = req.body;
  const { name, email, msg } = JSON.parse(body);

  try {
    if (!name || !email || !msg) {
      return res.status(400).json({msg: "Error"});
    }
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      auth: {
        user: "deliveryshack@gmail.com",
        pass: "wgptqfeafmiksvlb",
      },
    });
    const info = await transporter.sendMail({
      from: `${email}`,
      to: "francoguardini10@gmail.com",
      subject: `Portfolio Contact from ${name}`,
      text: `${msg}`,
    });

    console.log("Message sent: %s", info.messageId);
    res.status(200).json({ msg: "Message sended" });
  } catch (error) {
    res.status(500).json({ msg: "Something went wrong" });
  }
}
