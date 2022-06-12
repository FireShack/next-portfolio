import { NextApiResponse, NextApiRequest } from "next";

export default function download(req: NextApiRequest, res: NextApiResponse) {

    try {
    } catch (error) {
        console.log(error)
    }

  return res.status(200).json("I'm alive!");
}
