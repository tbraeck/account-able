// components/LetterEditor.js
import { useState } from "react";

const LetterEditor = ({ onSend }) => {
  const [content, setContent] = useState("");

  return (
    <div>
      <textarea
        rows={10}
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button onClick={() => onSend(content)}>Send Letter</button>
    </div>
  );
};

export default LetterEditor;
