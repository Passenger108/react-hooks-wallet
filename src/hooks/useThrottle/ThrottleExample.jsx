import React, { useState } from "react";
import useThrottle from "./useThrottle";

export default function ThrottleExample() {
  const [inputValue, setInputValue] = useState("");
  const throttledValue = useThrottle(inputValue, 1000); // Throttle by 1 second

  return (
    <div style={{ fontFamily: "sans-serif", padding: "20px" }}>
      <h2>Throttle Hook Demo</h2>
      <p>Type in the input below. The throttled value updates at most once every second.</p>

      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Type something..."
        style={{
          padding: "8px",
          fontSize: "16px",
          marginBottom: "10px",
          display: "block",
        }}
      />

      <div style={{ marginTop: "10px" }}>
        <strong>Actual Value:</strong> {inputValue}
      </div>
      <div>
        <strong>Throttled Value:</strong> {throttledValue}
      </div>
    </div>
  );
}