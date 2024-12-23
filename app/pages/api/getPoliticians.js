import axios from "axios";
import dotenv from "dotenv";
  
dotenv.config();  
  
/**  
 * Retrieves a list of politicians representing the given zip code area.  
 *  
 * @param {Object} req - API request object  
 * @param {Object} res - API response object  
 */  
export default async function handler(req, res) {  
  const { zipCode } = req.query;  
  
  // Validate zip code format (e.g., 5 digits for US zip codes)  
  if (!/^\d{5}$/.test(zipCode)) {  
   return res.status(400).json({ error: "Invalid zip code format" });  
  }  
  
  try {  
   const apiKey = process.env.GOOGLE_CIVIC_API_KEY;  
   if (!apiKey) {  
    console.error("Error: GOOGLE_CIVIC_API_KEY is not defined in .env file");  
    return res.status(500).json({ error: "Internal Server Error" });  
   }  
  
   const response = await axios.get(`https://www.googleapis.com/civicinfo/v2/representatives?key=${apiKey}&address=${zipCode}`);  
  
   if (response.data.error) {  
    console.error("API Error:", response.data.error);  
    return res.status(500).json({ error: response.data.error.message });  
   }  
  
   const politicians = response.data.officials.map((official) => ({  
    name: official.name || "",  
    office: official.office || "",  
    party: official.party || "",  
    phone: official.phones && official.phones[0] ? official.phones[0] : "",  
    email: official.emails && official.emails[0] ? official.emails[0] : "",  
    address: official.address && official.address[0] ? official.address[0] : "",  
   }));  
  
   res.status(200).json(politicians);  
  } catch (error) {  
   if (error.response) {  
    console.error("API Error:", error.response.status, error.response.data);  
    return res.status(error.response.status).json({ error: error.response.data.error.message });  
   } else {  
    console.error("Error:", error.message);  
    return res.status(500).json({ error: error.message });  
   }  
  }  
}
