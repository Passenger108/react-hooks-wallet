import React from 'react'
import {createRoot} from 'react-dom/client'
import CounterReducer from './examples/CounterReducer'


// Temporary dev playground
const App = () => {
  return <CounterReducer/>
}

createRoot(document.getElementById('root'))
.render(
    <React.StrictMode>
    <App />
    </React.StrictMode>
)