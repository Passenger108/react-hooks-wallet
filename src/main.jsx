import React from 'react'
import {createRoot} from 'react-dom/client'
import ScrollExample from './hooks/useScroll/ScrollExample'


// Temporary dev playground
const App = () => {
  return <ScrollExample/>
}

createRoot(document.getElementById('root'))
.render(
    <React.StrictMode>
    <App />
    </React.StrictMode>
)