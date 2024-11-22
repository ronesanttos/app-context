import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ContContextProvider } from './context/ContContext.jsx'
import { TitleContextProvider } from './context/TitleContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContContextProvider>
      <TitleContextProvider>
        <App/>
      </TitleContextProvider>
    </ContContextProvider>
  </React.StrictMode>,
)
