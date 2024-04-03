import { NextApiRequest, NextApiResponse } from "next";

// cteate product

// get a single produt
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { name, email } = req.body; // Assuming JSON data
    // Process the data from req.body
    res.status(200).json({ message: `Received data: ${name}, ${email}` });
  } else {
    // Handle other HTTP methods (optional)
    res.status(405).json({ message: "Method Not Allowed" });
  }
}

// get all products
