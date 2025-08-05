import React from 'react'
import {createRoot} from 'react-dom/client'
import PageVisibilityExample from './hooks/usePageVisibility/PageVisibilityExample' ;


// Temporary dev playground
const App = () => {
  return <PageVisibilityExample/>
}

createRoot(document.getElementById('root'))
.render(
    <React.StrictMode>
    <App />
    </React.StrictMode>
)