import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ message: "Method not allowed" });

  try {
    const data = await signupToAWSMarketplace(req.body ?? {});
    res.status(200).json({ message: "AWS Marketplace signup", data });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
}

async function signupToAWSMarketplace(fields: {}) {
  const response = await fetch(getGatewayEndpoint(), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(fields),
  });
  return response.json();
}

function getGatewayEndpoint(): string {
  const gatewayEndpoint = process.env.API_GATEWAY_ENDPOINT;
  if (!gatewayEndpoint) throw new Error("API Gateway Endpoint not found");
  return gatewayEndpoint;
}
