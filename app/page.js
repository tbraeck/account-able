// pages/index.js
"use client"
import { useState } from "react";
import Header from "./components/Header";
import LetterEditor from "./components/LetterEditor";
import SearchForm from "./components/SearchForm";
import SearchResults from "./components/SearchResults";
const Home = () => {
  const [politicians, setPoliticians] = useState([]);

  const handleSend = async (letter) => {
    const recipients = politicians.map((p) => ({ email: p.email }));
    await axios.post("/api/sendEmails", {
      recipients,
      subject: "A Letter from Your Constituent",
      body: letter,
    });
  };

  return (
    <div className='flex flex-col justify-center items-center '>
      <div className="mb-6 pb-3 bg-white h-46 w-full">
        <Header/>
      </div>
   <div className="flex ">
    <div className="mx-10">
    <h1 className="flex justify-center m-0 mb-3">Search For Politicians Here</h1>
      <SearchForm setPoliticians={setPoliticians} />
        {politicians.length > 0 && (
          <ul>
            {politicians.map((p, index) => (
              <li key={index}>{p.name}</li>
            ))}
          </ul>
        )}
    </div>
    <div className="mt-6">
      <SearchResults />
    </div>
     <div className="mx-10">
      <LetterEditor onSend={handleSend} />
     </div>
      </div>
    </div>
  );
};

export default Home;
