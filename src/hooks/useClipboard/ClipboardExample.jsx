import React, { useState } from "react";
import useClipboard from "./hooks/useClipboard";

export default function ClipboardExample() {
  const [text, setText] = useState("Copy this text!");
  const { copied, copy, error } = useClipboard({ resetInterval: 3000 });

  const handleCopy = () => {
    copy(text);
  };

  return (
    <div style={{ fontFamily: "Arial", padding: "2rem", maxWidth: "400px" }}>
      <h2>📋 Clipboard Example</h2>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{
          padding: "8px",
          width: "100%",
          fontSize: "16px",
          marginBottom: "1rem",
        }}
      />

      <button
        onClick={handleCopy}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: copied ? "#4caf50" : "#007bff",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        {copied ? "✅ Copied!" : "Copy to Clipboard"}
      </button>

      {error && (
        <p style={{ color: "red", marginTop: "1rem" }}>
          ❌ Failed to copy: {error.message}
        </p>
      )}
    </div>
  );
}