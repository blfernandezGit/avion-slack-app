import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ClientContextProvider from "./context/ClientContext";

ReactDOM.render(
  <React.StrictMode>
    <ClientContextProvider>
      <App />
    </ClientContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);