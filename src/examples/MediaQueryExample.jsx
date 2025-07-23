
import React from 'react';
import useMediaQuery from '../hooks/useMediaQuery';

export default function MediaQueryExample() {
  const isTabletOrMobile = useMediaQuery('(max-width: 768px)');

  return (
    <div style={{
      fontFamily: 'sans-serif',
      textAlign: 'center',
      padding: '2rem',
      border: '2px dashed #ccc',
      borderRadius: '12px',
      maxWidth: '400px',
      margin: '2rem auto',
      backgroundColor: isTabletOrMobile ? '#e0f7fa' : '#fce4ec'
    }}>
      <h2>{isTabletOrMobile ? '📱 Mobile View' : '🖥️ Desktop View'}</h2>
      <p>
        {isTabletOrMobile
          ? 'You are using a tablet or mobile device.'
          : 'You are on a larger screen.'}
      </p>
    </div>
  );
}