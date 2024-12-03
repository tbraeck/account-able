// components/LetterEditor.js
import { useState } from "react";

const LetterEditor = ({ onSend }) => {
  const [content, setContent] = useState("");

  return (
    <div className=" flex flex-col justify-center items-center ">
      <div className="border rounded-md">
        <textarea
          rows={10}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="h-48"
        />
      </div>
      <div >
        <button onClick={() => onSend(content)} className="justify-center bg-violet-400 border rounded-md p-1 mt-4 text-white">Send Letter</button>  
      </div>
    </div>
  );
};

export default LetterEditor;
