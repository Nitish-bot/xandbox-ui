import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { RouteProvider } from './providers/route-provider.tsx'
import { ThemeProvider } from './providers/theme-provider.tsx'
import './css/index.css'
import App from './app/App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <RouteProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </RouteProvider>
    </HashRouter>
  </StrictMode>,
)
