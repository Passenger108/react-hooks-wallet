import React from 'react'
import {createRoot} from 'react-dom/client'
import ToggleExample from './examples/ToogleExample'


// Temporary dev playground
const App = () => {
  return <ToggleExample/>
}

createRoot(document.getElementById('root'))
.render(
    <React.StrictMode>
    <App />
    </React.StrictMode>
)