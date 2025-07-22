import React from 'react'
import {createRoot} from 'react-dom/client'
import CounterExample from './examples/CounterExample'


// Temporary dev playground
const App = () => {
  return <CounterExample/>
}

createRoot(document.getElementById('root'))
.render(
    <React.StrictMode>
    <App />
    </React.StrictMode>
)