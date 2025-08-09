import React from 'react'
import {createRoot} from 'react-dom/client'
import TimeoutExample from './hooks/useTimeout/TimeoutExample' ;


// Temporary dev playground
const App = () => {
  return <TimeoutExample/>
}

createRoot(document.getElementById('root'))
.render(
    <React.StrictMode>
    <App />
    </React.StrictMode>
)