import { createRoot } from 'react-dom/client'
import "./index.css"
import { RouterProvider } from 'react-router'
import { router } from './Routes/Router.jsx'
import { SpinnerProvider } from './Provider/SpinnerContext.jsx'
import { SearchProvider } from './Provider/SearchContext.jsx'

createRoot(document.getElementById('root')).render(
  <SearchProvider>
    <SpinnerProvider>
      <RouterProvider router={router} />
    </SpinnerProvider>
  </SearchProvider>
)
