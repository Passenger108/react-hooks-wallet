import React from 'react'
import {createRoot} from 'react-dom/client'
import UpdateEffectExample from './examples/UpdateEffectExample'


// Temporary dev playground
const App = () => {
  return <UpdateEffectExample/>
}

createRoot(document.getElementById('root'))
.render(
    <React.StrictMode>
    <App />
    </React.StrictMode>
)