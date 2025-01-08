import { useState } from "react";

const PostRequestComponent = () => {
  const [responseMessage, setResponseMessage] = useState("");

  const handlePostRequest = async () => {
    const url = "https://api.clay.com/v3/sources/webhook/pull-in-data-from-a-webhook-d2ca968f-5408-44f6-b763-7fe23204cd93";
    const data = {
      name: "John Doe",
      email: "john.doe@example.com",
      linkedinUrl: "https://linkedin.com/in/johndoe",
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json(); // Parse JSON response if needed
        setResponseMessage("OK");
        console.log("Response:", result);
      } else {
        setResponseMessage("Failed to send data");
        console.error("Error:", response.statusText);
      }
    } catch (error) {
      setResponseMessage("Error occurred during the request");
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <h1>POST Request Example</h1>
      <button onClick={handlePostRequest}>Send POST Request</button>
      {responseMessage && <p>Response: {responseMessage}</p>}
    </div>
  );
};

export default PostRequestComponent;
