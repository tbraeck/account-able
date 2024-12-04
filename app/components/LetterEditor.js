// components/LetterEditor.js
import { useState } from "react";

const LetterEditor = ({ onSend }) => {
  const [content, setContent] = useState("");

  return (
    <div className=" flex flex-col justify-center items-center border rounded-md border-4 border-gray-400 bg-gray-400">
      <div className="  ">
          <textarea
          rows={10} // Controls the height by rows
          maxLength={500} // Limits the character count to 500
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="resize-none h-48 w-96 p-2  "
          placeholder="Write your letter here..."
        />
      </div>
      <div >
        <button onClick={() => onSend(content)} className="justify-center bg-violet-400  p-1 px-2 mt-4 mb-4 text-white drop-shadow-sm border rounded-md ">Send Letter</button>  
      </div>
    </div>
  );
};

export default LetterEditor;
