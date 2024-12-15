// components/LetterEditor.js  
import { useState } from "react";
import templateData from '../data/templates.json';
  
const LetterEditor = ({ onSend }) => {  
  const [content, setContent] = useState("");  
  const [selectedTemplate, setSelectedTemplate] = useState(null);  
  const templates = templateData.templates; // Access the templates property of the imported object  
  
  console.log(templates, "templates")  
  
  const handleTemplateChange = (event) => {  
   const selectedTemplateId = event.target.value;  
   const template = templates.find((template) => template.id === parseInt(selectedTemplateId));  
   setSelectedTemplate(template);  
   setContent(template.body);  
  };  
  
  const handleContentChange = (event) => {  
   setContent(event.target.value);  
  };  
  
  return (  
   <div className=" drop-shadow-2xl mt-9 flex flex-col justify-center items-center border rounded-md border-4 border-gray-400 bg-gray-400">  
    <div className="mb-4">  
      <h2>Choose a template:</h2>  
      {templates.map((template) => (  
       <div key={template.id}>  
        <input  
          type="radio"  
          id={template.id}  
          name="template"  
          value={template.id}  
          onChange={handleTemplateChange}  
        />  
        <label htmlFor={template.id}>{template.name}</label>  
       </div>  
      ))}  
    </div>  
    <div>  
      <textarea  
       rows={10} // Controls the height by rows  
       maxLength={500} // Limits the character count to 500  
       value={content}  
       onChange={handleContentChange}  
       className="resize-none h-48 w-96 p-2"  
       placeholder="Write your letter here..."  
      />  
    </div>  
    <div>  
      <button onClick={() => onSend(content)} className="justify-center bg-violet-400 p-1 px-2 mt-4 mb-4 text-white drop-shadow-sm border rounded-md">Send Letter</button>  
    </div>  
   </div>  
  );  
};  
  
export default LetterEditor;
