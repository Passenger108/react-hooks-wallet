import React, { useState } from "react";
import useUpdateEffect from "../hooks/useUpdateEffect";

export default function UpdateEffectDemo() {
  const [count, setCount] = useState(0);

  useUpdateEffect(() => {
    console.log("Count changed:", count);
    return () => {
      console.log("Cleanup on count change:", count);
    };
  }, [count]);

  return (
    <div>
      <h2>Countt: {count}</h2>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
    </div>
  );
}