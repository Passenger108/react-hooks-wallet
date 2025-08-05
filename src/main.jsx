import React from 'react'
import {createRoot} from 'react-dom/client'
import IdleExample from './hooks/useIdle/IdleExample' ;


// Temporary dev playground
const App = () => {
  return <IdleExample/>
}

createRoot(document.getElementById('root'))
.render(
    <React.StrictMode>
    <App />
    </React.StrictMode>
)