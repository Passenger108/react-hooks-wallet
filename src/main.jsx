import React from 'react'
import {createRoot} from 'react-dom/client'
import LocalStorageExample from './examples/LocalStorageExample'


// Temporary dev playground
const App = () => {
  return <LocalStorageExample/>
}

createRoot(document.getElementById('root'))
.render(
    <React.StrictMode>
    <App />
    </React.StrictMode>
)