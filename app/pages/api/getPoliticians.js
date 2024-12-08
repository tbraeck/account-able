// components/Search.js  
import axios from "axios";
import { useState } from "react";
import LetterEditor from "./LetterEditor";
  
const Search = () => {  
  const [zipCode, setZipCode] = useState("");  
  const [politicianName, setPoliticianName] = useState("");  
  const [searchResults, setSearchResults] = useState([]);  
  const [selectedPolitician, setSelectedPolitician] = useState(null);  
  
  const handleSearch = async (event) => {  
   event.preventDefault();  
   try {  
    const response = await axios.get(`https://www.googleapis.com/civicinfo/v2/representatives?key=${process.env.GOOGLE_CIVIC_API_KEY}&address=${zipCode}`);  
    setSearchResults(response.data.officials);  
   } catch (error) {  
    console.error(error);  
   }  
  };  
  
  const handleSelectPolitician = (politician) => {  
   setSelectedPolitician(politician);  
   setPoliticianName(`${politician.name} (${politician.office})`);  
  };  
  
  return (  
   <div>  
    <form onSubmit={handleSearch}>  
      <input  
       type="text"  
       value={zipCode}  
       onChange={(event) => setZipCode(event.target.value)}  
       placeholder="Enter your zip code"  
      />  
      <button type="submit">Search</button>  
    </form>  
    <ul>  
      {searchResults.map((politician) => (  
       <li key={politician.name}>  
        <button onClick={() => handleSelectPolitician(politician)}>  
          {politician.name} ({politician.office})  
        </button>  
       </li>  
      ))}  
    </ul>  
    {selectedPolitician && (  
      <LetterEditor politicianName={politicianName} onSend={(content) => console.log(content)} />  
    )}  
   </div>  
  );  
};  
  
export default Search;

