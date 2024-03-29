import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./style.css";
import ContextData from './context/ContextDate';
import { BrowserRouter as Router } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <ContextData>
        <App />
      </ContextData>
    </Router>
  </React.StrictMode>
);

