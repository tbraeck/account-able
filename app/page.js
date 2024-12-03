// pages/index.js
"use client"
import { useState } from "react";
import Header from "./components/Header";
import LetterEditor from "./components/LetterEditor";
import SearchForm from "./components/SearchForm";

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
    <div className='absolute left-0 flex justify-between items-center'>
    <Header/>
   <div>
      <SearchForm setPoliticians={setPoliticians} />
      {politicians.length > 0 && (
        <ul>
          {politicians.map((p, index) => (
            <li key={index}>{p.name}</li>
          ))}
        </ul>
      )}
      <LetterEditor onSend={handleSend} />
      </div>
    </div>
  );
};

export default Home;
