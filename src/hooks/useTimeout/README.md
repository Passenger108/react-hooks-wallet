# useTimeout Hook

A custom React hook that provides an easy way to set, clear, and reset a timeout with cleanup and stale callback protection.

---

## 📦 Installation

Simply copy `useTimeout.js` into your hooks folder.

---

## API

    const { start, clear, reset, isActive } = useTimeout(callback, delay, autoStart);


## 🔧 Usage

```jsx
import React, { useState } from "react";
import useTimeout from "./useTimeout";

function MyComponent() {
  const [message, setMessage] = useState("Waiting...");

  const { start, clear, reset, isActive } = useTimeout(() => {
    setMessage("Done!");
  }, 3000, false);

  return (
    <div>
      <p>Status: {isActive ? "Running" : "Stopped"}</p>
      <p>{message}</p>
      <button onClick={start}>Start</button>
      <button onClick={clear}>Clear</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}