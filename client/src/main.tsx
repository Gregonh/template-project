import React from 'react';
import ReactDOM from 'react-dom/client';

import Pages from './pages/index.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Pages />
  </React.StrictMode>,
);
