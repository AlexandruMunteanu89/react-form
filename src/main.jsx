import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource/opendyslexic';
// Supports weights 100-900
import '@fontsource-variable/roboto/wght.css';
import * as bootstrap from 'bootstrap'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
