import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// ReactDOM.createRoot busca el div#root en index.html y monta la app ahí
ReactDOM.createRoot(document.getElementById('root')).render(
  // StrictMode hace que React haga chequeos extra durante desarrollo
  // (puede que algunos efectos se ejecuten dos veces en dev — es normal)
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
