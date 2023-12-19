import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './App'
// Import custom CSS
import './scss/styles.scss'
// // Import all of Bootstrap's JS
// import * as bootstrap from 'bootstrap'

const container = document.getElementById('root')
const root = createRoot(container);

root.render(<StrictMode>
    <App />
</StrictMode>)