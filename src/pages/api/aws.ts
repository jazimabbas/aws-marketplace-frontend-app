import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const marketplaceToken = _validateReqBody(req.body);
    const redirectURL = "/marketplace-signup?token=" + marketplaceToken; // frontend signup page url

    res.redirect(302, redirectURL);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
}

function _validateReqBody(reqBody: any = {}) {
  const marketplaceToken = reqBody["x-amzn-marketplace-token"];

  if (!marketplaceToken) throw new Error("Token not found");
  return marketplaceToken;
}
