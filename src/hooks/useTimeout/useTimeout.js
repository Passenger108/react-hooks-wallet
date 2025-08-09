import { useState, useEffect, useRef, useCallback } from "react";

export default function useTimeout(callback = () => {}, delay = 0, autoStart = true) {
  const timer = useRef(null);
  const savedCallback = useRef(callback);
  const [isActive, setIsActive] = useState(false);

  // Keep the latest callback
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  const start = useCallback(() => {
    if (!timer.current) {
      timer.current = setTimeout(() => {
        savedCallback.current();
        timer.current = null;
        setIsActive(false);
      }, delay);
      setIsActive(true);
    }
  }, [delay]);

  const clear = useCallback(() => {
    if (isActive) {
      clearTimeout(timer.current);
      timer.current = null;
      setIsActive(false);
    }
  }, [isActive]);

  const reset = useCallback(() => {
    clear();
    start();
  }, [clear, start]);

  useEffect(() => {
    if (autoStart) {
      start();
    }
    return clear; // Cleanup on unmount
  }, [autoStart, start, clear]);

  return { start, clear, reset, isActive };
}