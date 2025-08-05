import React from 'react'
import {createRoot} from 'react-dom/client'
import OnlineStatusExample from './hooks/useOnlineStatus/OnlineStatusExample'


// Temporary dev playground
const App = () => {
  return <OnlineStatusExample/>
}

createRoot(document.getElementById('root'))
.render(
    <React.StrictMode>
    <App />
    </React.StrictMode>
)