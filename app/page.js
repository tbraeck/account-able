// pages/index.js
"use client"
import { useState } from "react";
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
    <div className="w-80">
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
  );
};

export default Home;
