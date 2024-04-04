import { NextApiRequest, NextApiResponse } from "next";

// cteate product

// get a single produt
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // create a product toute
  if (req.method === "POST") {
    // Handle POST request logic here
    const { name, email } = req.body; // Assuming JSON data in body
    // Process the data (e.g., save to database)
    console.log("Received data:", { name, email });
    res.status(201).json({ message: "Data created successfully!" });

    // get a product route
  } else if (req.method === "GET") {
    // Handle GET request logic here
    // You can potentially retrieve data from a database or perform other actions
    const data = [{ message: "This is data from the GET request" }];
    res.status(200).json(data);
  } else {
    // Handle other unsupported HTTP methods (optional)
    res.status(405).json({ message: "Method Not Allowed" });
  }
}

// get all products
