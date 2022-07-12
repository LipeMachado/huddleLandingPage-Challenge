import React from 'react'
import ReactDOM from 'react-dom/client'
import { InitialPage } from './Pages/InitialPage/'
import { GlobalStyle } from './Pages/InitialPage/styledGlobal.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <InitialPage />
  </React.StrictMode>
)
