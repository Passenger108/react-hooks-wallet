import React from 'react'
import {createRoot} from 'react-dom/client'
import PreviousExample from './examples/PreviousExample'


// Temporary dev playground
const App = () => {
  return <PreviousExample/>
}

createRoot(document.getElementById('root'))
.render(
    <React.StrictMode>
    <App />
    </React.StrictMode>
)