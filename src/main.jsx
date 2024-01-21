import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './css/index.css'
import './css/about.css'
import './css/contact.css'
import { PlayProvider } from './contexts/Play'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PlayProvider>
    <App />
    </PlayProvider>
  </React.StrictMode>,
)
