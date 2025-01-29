import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import './index.css'
import App from './App.tsx'
import { RootLayout } from './layout/layout.tsx'
import { Login } from './pages/login.tsx'
import { Register } from './pages/register.tsx'
import { Fifo } from './pages/fifo.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route
            path='login'
            element={<Login />}
          />
          <Route
            path='register'
            element={<Register />}
          />
          <Route
            path='fifo'
            element={<Fifo />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
