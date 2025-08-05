import React from 'react';
import useIdle from './useIdle';  // Import your custom hook here

export default function IdleExample() {
  const { isIdle, idleTime } = useIdle({
    idleTimeout: 5000, // 5 seconds idle timeout
  });
  console.log(isIdle,idleTime)
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>🛑 Idle Detection Example</h1>
      <p>
        {isIdle
          ? '😴 You are idle!'
          : '🟢 You are active!'}
      </p>
      <p>Idle Timer: {Math.floor(idleTime / 1000)} seconds</p>
      <p>
        Interact with the page (mouse move, click, scroll, key press) to reset
        idle timer.
      </p>
    </div>
  );
}