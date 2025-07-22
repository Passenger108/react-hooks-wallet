import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export default function LocalStorageExample() {
  const [name, setName] = useLocalStorage("username", "");

  return (
    <div style={{ padding: "1rem", fontFamily: "sans-serif" }}>
      <h2>👤 Persist Username in LocalStorage</h2>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{
          padding: "0.5rem",
          fontSize: "1rem",
          width: "100%",
          maxWidth: "300px",
        }}
      />
      <p style={{ marginTop: "1rem" }}>
        {name ? `Welcome back, ${name}!` : "Please enter your name. and refresh page to see its magic"}
      </p>
    </div>
  );
}