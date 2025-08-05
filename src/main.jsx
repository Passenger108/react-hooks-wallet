import React from 'react'
import {createRoot} from 'react-dom/client'
import FullscreenExample from './hooks/useFullscreen/FullscreenExample' ;


// Temporary dev playground
const App = () => {
  return <FullscreenExample/>
}

createRoot(document.getElementById('root'))
.render(
    <React.StrictMode>
    <App />
    </React.StrictMode>
)