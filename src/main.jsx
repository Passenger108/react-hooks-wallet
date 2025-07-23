import React from 'react'
import {createRoot} from 'react-dom/client'
import DebounceExample from './hooks/useDebounce/DebounceExample'


// Temporary dev playground
const App = () => {
  return <DebounceExample/>
}

createRoot(document.getElementById('root'))
.render(
    <React.StrictMode>
    <App />
    </React.StrictMode>
)