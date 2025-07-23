import React, { useState } from "react";
import useDebounce from "./useDebounce"; 

export default function DebounceExample() {
  const [input, setInput] = useState("");
  const debouncedInput = useDebounce(input, 500); 

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h2>useDebounce Hook Demo</h2>
      <p>Type something below. The debounced value updates after 500ms of inactivity.</p>
      
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type here..."
        style={{
          padding: "0.5rem",
          width: "300px",
          fontSize: "1rem",
          border: "1px solid #ccc",
          borderRadius: "4px"
        }}
      />

      <div style={{ marginTop: "1rem" }}>
        <p><strong>Immediate Value:</strong> {input}</p>
        <p><strong>Debounced Value:</strong> {debouncedInput}</p>
      </div>
    </div>
  );
}