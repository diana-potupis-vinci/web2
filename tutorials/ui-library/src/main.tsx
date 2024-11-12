import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App/index.tsx'
import './index.css'
import "@fontsource/roboto/700.css";
import CssBaseline from "@mui/material/CssBaseline";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CssBaseline />{/* Global CSS reset from Material-UI */}
    <App />
  </StrictMode>,
)
