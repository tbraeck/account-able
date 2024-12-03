// components/SearchForm.js
import axios from "axios";
import { useState } from "react";

const SearchForm = ({ setPoliticians }) => {
  const [zipCode, setZipCode] = useState("");

  const handleSearch = async () => {
    const response = await axios.get(`/api/getPoliticians?zipCode=${zipCode}`);
    setPoliticians(response.data.officials);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Zip Code"
        value={zipCode}
        onChange={(e) => setZipCode(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchForm;
