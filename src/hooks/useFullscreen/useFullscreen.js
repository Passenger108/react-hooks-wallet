import { useState, useEffect, useCallback } from "react";

export default function useFullscreen(ref) {

  const [isFullscreen, setIsFullscreen] = useState(false);
  const [supported, setSupported] = useState(false);
  const [error, setError] = useState(null);


  const enterFullscreen = useCallback(() => {
    if (!ref.current) return;
    try {
      const req = ref.current.requestFullscreen();

      if (req && typeof req.then === "function") {
        req.catch(setError);
      }
    } catch (error) {
      setError(error);
    }
  }, [ref]);


  const exitFullscreen = useCallback(() => {
    try {
      const exit = document.exitFullscreen();
      if (exit && typeof exit.then === "function") {
        exit.catch(setError);
      }
    } catch (error) {
      setError(error);
    }
  }, []);


  const toggleFullscreen = useCallback(() => {
    if (isFullscreen) {
      exitFullscreen();
    } else {
      enterFullscreen();
    }
  }, [isFullscreen, enterFullscreen, exitFullscreen]);


  useEffect(() => {
    const handleFullscreenChange = () => {
      if (document.fullscreenElement === ref.current) {
        setIsFullscreen(true);
      } else {
        setIsFullscreen(false);
      }
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, [ref]);


  useEffect(() => {
    if (ref.current && typeof ref.current.requestFullscreen === "function") {
      setSupported(true);
    } else {
      setSupported(false);
      setError(new Error("Fullscreen API not supported in this environment."));
    }
  }, [ref]);


  return {
    isFullscreen,
    enterFullscreen,
    exitFullscreen,
    toggleFullscreen,
    supported,
    error,
  };
}