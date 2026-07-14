import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import MyListProvider from './components/MyListProvider.jsx'
import AuthProvider from './components/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <AuthProvider>
<MyListProvider>
    <App />
    </MyListProvider>
    </AuthProvider>
    </BrowserRouter>
  </StrictMode>
  
)
