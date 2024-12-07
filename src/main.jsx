import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './pages/App.jsx'
import './index.css'
import "tw-elements-react/dist/css/tw-elements-react.min.css";
import { RouterProvider } from 'react-router';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}
  </StrictMode>,
)
