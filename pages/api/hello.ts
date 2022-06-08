// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

const blogs = async () => {
    const res = await fetch("")
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const users = [
    { name: "Michel", pass: "1234556" },
    { name: "Michel", pass: "1234556" },
    { name: "Michel", pass: "1234556" },
    { name: "Michel", pass: "1234556" },
  ];

  return res.status(200).json({ name: "Sending" });
}
