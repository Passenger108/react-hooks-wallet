import React, { useState } from "react";
import useTimeout from "./useTimeout";

export default function TimeoutExample() {
  const [message, setMessage] = useState("Waiting...");
  
  const { start, clear, reset, isActive } = useTimeout(() => {
    setMessage("⏰ Timeout finished!");
  }, 3000, false); // 3 seconds delay, not auto-start

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h2>useTimeout Hook Demo</h2>
      <p>Status: {isActive ? "Running" : "Stopped"}</p>
      <p>Message: {message}</p>
      
      <div style={{ marginTop: "10px" }}>
        <button onClick={start} style={{ marginRight: "5px" }}>Start</button>
        <button onClick={clear} style={{ marginRight: "5px" }}>Clear</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}