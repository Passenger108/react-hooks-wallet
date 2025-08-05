import { useState, useEffect, useRef } from "react";

export default function useIdle({ idleTimeout = 5000 }) {
  const [isIdle, setIsIdle] = useState(false);
  const [idleTime, setIdleTime] = useState(0);
  const timerId = useRef(null);
  const lastActiveTime = useRef(Date.now());

  const resetTimer = () => {
    setIsIdle(false);
    lastActiveTime.current = Date.now();
    clearTimeout(timerId.current);

    timerId.current = setTimeout(() => {
      setIsIdle(true);
    }, idleTimeout);
  };

  useEffect(() => {
    const events = ["mousemove", "keydown", "mousedown", "scroll", "touchstart"];

    const activityHandler = () => {
      resetTimer();
    };

    events.forEach(event => window.addEventListener(event, activityHandler));

    resetTimer(); // Initialize timer on mount

    const intervalId = setInterval(() => {
      setIdleTime(Date.now() - lastActiveTime.current);
    }, 1000); // Update idleTime every 1 sec

    return () => {
      events.forEach(event => window.removeEventListener(event, activityHandler));
      clearTimeout(timerId.current);
      clearInterval(intervalId);
    };
  }, [idleTimeout]);

  return { isIdle, idleTime };
}