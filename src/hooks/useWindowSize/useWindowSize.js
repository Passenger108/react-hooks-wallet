import { useState, useEffect } from "react";

export default function useWindowSize() {
  const [size, setSize] = useState({
    width: undefined,
    height: undefined
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handler = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    handler();

    window.addEventListener("resize", handler);


    return () => {
      window.removeEventListener("resize", handler);
    };
  }, []); 

  return size;
}