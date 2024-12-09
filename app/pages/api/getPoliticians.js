// pages/api/getPoliticians.js  
import axios from "axios";
  
export default async function handler(req, res) {  
  const { zipCode } = req.query;  
  
  if (!zipCode) {  
   return res.status(400).json({ error: "Zip code is required" });  
  }  
  
  try {  
   const response = await axios.get(`https://www.googleapis.com/civicinfo/v2/representatives?key=${process.env.GOOGLE_CIVIC_API_KEY}&address=${zipCode}`);  
  
   if (response.data.error) {  
    return res.status(500).json({ error: response.data.error.message });  
   }  
  
   const politicians = response.data.officials.map((official) => {  
    return {  
      name: official.name,  
      office: official.office,  
      party: official.party,  
      phone: official.phones ? official.phones[0] : "",  
      email: official.emails ? official.emails[0] : "",  
      address: official.address ? official.address[0] : "",  
    };  
   });  
  
   res.status(200).json(politicians);  
  } catch (error) {  
   res.status(500).json({ error: error.message });  
  }  
}
