import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log("query: ", req.query);

  res.status(200).json({ message: "Need to display actual form" });
}
