import React from "react";
import useWindowSize from "./useWindowSize";

export default function WindowSizeExample() {
  const { width, height } = useWindowSize();

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f5f5f5",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "sans-serif",
      }}
    >
      <h1>Window Size Hook Example</h1>
      <p style={{ fontSize: "1.2rem" }}>
        Width: <strong>{width ?? "unknown"}</strong> px
      </p>
      <p style={{ fontSize: "1.2rem" }}>
        Height: <strong>{height ?? "unknown"}</strong> px
      </p>
      <p>Try resizing your browser window to see the values update in real time.</p>
    </div>
  );
}