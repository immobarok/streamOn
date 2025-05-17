import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./index.css"
import { RouterProvider } from 'react-router'
import { router } from './Routes/Router.jsx'
import { SpinnerProvider } from './Provider/SpinnerContext.jsx'

createRoot(document.getElementById('root')).render(
  <SpinnerProvider>
    <RouterProvider router={router} />
  </SpinnerProvider>
)
