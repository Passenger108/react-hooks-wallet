import { useRef } from 'react';
import useFullscreen from './useFullscreen';

export default function FullscreenExample() {
  const boxRef = useRef(null);

  const {
    isFullscreen,
    enterFullscreen,
    exitFullscreen,
    toggleFullscreen,
    supported,
    error,
  } = useFullscreen(boxRef);

  return (
    <div style={{ padding: '20px' }}>
      <h2>🖥️ Fullscreen API Demo</h2>

      {!supported && <p>❌ Fullscreen API is not supported in this browser.</p>}
      {error && <p style={{ color: 'red' }}>⚠️ Error: {error.message}</p>}

      <div
        ref={boxRef}
        style={{

          height: '200px',
          background: 'lightblue',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          border: '2px solid #333',
          marginBottom: '20px',
        }}
      >
        <p>{isFullscreen ? '🔲 Fullscreen Mode' : '🟥 Windowed Mode'}</p>

        <button onClick={enterFullscreen} disabled={!supported || isFullscreen}>
        Enter Fullscreen
      </button>

      <button onClick={exitFullscreen} disabled={!supported || !isFullscreen} style={{ marginLeft: '10px' }}>
        Exit Fullscreen
      </button>

      <button  onClick={toggleFullscreen} disabled={!supported} style={{ marginLeft: '10px' }}>
        Toggle Fullscreen
      </button>

      </div>

      
    </div>
  );
}