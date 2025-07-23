import React, { useRef } from "react";
import useScroll from "./useScroll";

export default function ScrollExample() {
  const divRef = useRef(null);
  const scroll = useScroll(divRef);

  return (
    <div>
      <h2>Element Scroll Position: X = {scroll.x}, Y = {scroll.y}</h2>
      <div
        ref={divRef}
        style={{
          height: "200px",
          width: "400px",
          overflow: "scroll",
          border: "2px solid black",
        }}
      >
        <div style={{ height: "600px", width: "800px", background: "#eee" }}>
          Scroll inside this box!
        </div>
      </div>
    </div>
  );
}