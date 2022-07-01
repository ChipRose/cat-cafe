import React from 'react';
import ReactDOM from 'react-dom/client';
import { createGlobalStyle } from 'styled-components';

import App from './components/app/app';

const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap");

  html {
    width: 100%;
    height: 100%;
  }

  body,
  html {
    margin: 0;
  }

  body {
    margin: 0;
    min-width: 1140px;
    height: 100%;
    font-family: "Inter", "Arial", sans-serif;
    font-size: 18px;
    line-height: 27px;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
    background: rgba(255, 246, 217, 1);
  }

  .app {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle/>
    <App />
  </React.StrictMode>
);
