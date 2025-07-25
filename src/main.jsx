import React from 'react'
import {createRoot} from 'react-dom/client'
import GeolocationExample from './hooks/useGeolocation/GeolocationExample'


// Temporary dev playground
const App = () => {
  return <GeolocationExample/>
}

createRoot(document.getElementById('root'))
.render(
    <React.StrictMode>
    <App />
    </React.StrictMode>
)