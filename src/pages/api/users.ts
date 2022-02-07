import dbConnect from "../../lib/dbConnect";
import User from "../../models/User";
import { NextApiRequest, NextApiResponse } from "next";

// Get all users
export default async function users(req: NextApiRequest, res: NextApiResponse) {
  // Connect to the database
  await dbConnect();
  switch (req.method) {
    case "GET":
      try {
        const users = await User.find();
        res.status(200).json({
          success: true,
          data: users,
        });
      } catch (error) {
        res.status(500).json({
          success: false,
          error: error.message,
        });
      }
      break;
    case "POST":
      try {
        const newUser = await User.create(req.body);
        await newUser.save();
        res.status(201).json({
          success: true,
          data: newUser,
        });
      } catch (err) {
        res.status(500).json({
          success: false,
          message: err.message,
        });
      }
      break;

    // The challenge!
    case "DELETE":
      try {
        res.status(200);
      } catch {
        res.status(500);
      }
      break;

    default:
      res.setHeader("Allow", ["GET", "POST", "DELETE"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
      break;
  }
}
