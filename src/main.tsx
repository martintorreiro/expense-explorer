import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import AuthProviderComponent from './context/AuthContext/AuthContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthProviderComponent>
    <App />
    </AuthProviderComponent>
  </React.StrictMode>,
  
)
