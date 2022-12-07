import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css'
import App from './App';
import { StyledEngineProvider } from '@mui/material';
import PropertyContext from './PropertyContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PropertyContext>
    <StyledEngineProvider injectFirst>
    <App />
    </StyledEngineProvider>
    </PropertyContext>
  </React.StrictMode>
);
