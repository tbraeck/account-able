// pages/api/getPoliticians.js
import axios from "axios";

export default async function handler(req, res) {
  const { zipCode } = req.query;

  try {
    const response = await axios.get(
      `https://www.googleapis.com/civicinfo/v2/representatives?key=${process.env.GOOGLE_CIVIC_API_KEY}&address=${zipCode}`
    );
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
