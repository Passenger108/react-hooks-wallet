import React from 'react'
import {createRoot} from 'react-dom/client'
import MediaQueryExample from './examples/MediaQueryExample'


// Temporary dev playground
const App = () => {
  return <MediaQueryExample/>
}

createRoot(document.getElementById('root'))
.render(
    <React.StrictMode>
    <App />
    </React.StrictMode>
)