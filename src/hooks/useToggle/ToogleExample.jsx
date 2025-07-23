import React from 'react'
import useToggle from '../hooks/useToggle'

export default function ToggleExample() {
  const [isOn, toggleIsOn] = useToggle()                         // Boolean toggle
  const [theme, toggleTheme] = useToggle('light', 'dark')        // Custom values
  const [status, toggleStatus] = useToggle('active', 'inactive') // Another toggle

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <h2>🔁 useToggle Demo</h2>

      <div style={{ marginBottom: '1rem' }}>
        <strong>Boolean toggle:</strong> {isOn ? 'ON ✅' : 'OFF ❌'}
        <br />
        <button onClick={toggleIsOn}>Toggle isOn</button>
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <strong>Theme:</strong> {theme}
        <br />
        <button onClick={toggleTheme}>Toggle Theme</button>
      </div>

      <div>
        <strong>Status:</strong> {status}
        <br />
        <button onClick={toggleStatus}>Toggle Status</button>
      </div>
    </div>
  )
}