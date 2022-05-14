import React from 'react';
import ReactDOM from 'react-dom/client';
import './_index.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <BrowserRouter basename="/react-movie-database-tmdb">
    <App />
  </BrowserRouter>
  // </React.StrictMode>
);