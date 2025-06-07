import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './v1/App.tsx';
import App2 from './v2/App2.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
