import React from 'react'
import {createRoot} from 'react-dom/client'
import BatteryVisualizer from './hooks/useBatteryStatus/BatteryVisualizer'


// Temporary dev playground
const App = () => {
  return <BatteryVisualizer/>
}

createRoot(document.getElementById('root'))
.render(
    <React.StrictMode>
    <App />
    </React.StrictMode>
)