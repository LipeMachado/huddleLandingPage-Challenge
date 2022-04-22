import React from 'react'
import ReactDOM from 'react-dom/client'
import { GlobalStyle } from './GlobalStyle/styledGlobal.jsx'
import { BrowserRouter as Route } from 'react-router-dom';
import Routes from "./router.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Route>
      <GlobalStyle />
      <Routes />
    </Route>
  </React.StrictMode>
)
