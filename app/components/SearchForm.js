// components/SearchForm.js
import axios from "axios";
import { useState } from "react";

const SearchForm = ({ setPoliticians }) => {
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState("");

  const handleSearch = async () => {
    const response = await axios.get(`/api/getPoliticians?zipCode=${zipCode}`);
    setPoliticians(response.data.officials);
  };

  return (
    <div className="drop-shadow-2xl  bg-gray-500 p-6 border rounded-md justify-center items-center">
      
      <div className="m-2">
        <input
          type="text"
          placeholder="Enter City / Town"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="p-1 "
        />
      </div>
      <div className="m-2">
        <input
          type="text"
          placeholder="Enter State"
          value={state}
          onChange={(e) => setState(e.target.value)}
          className="p-1 "
        />
      </div>
       <div className="m-2">
        <input
          type="text"
          placeholder="Enter Zip Code"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
          className="p-1 "
        />
       </div>
      <div className="flex items-center justify-center">
        <button onClick={handleSearch} className="bg-violet-400 border rounded-md p-1 px-2 mt-4 text-white">Search</button>
      </div>
    </div>
  );
};

export default SearchForm;
