import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomeAssociate from './Associate/Home';
import HomePartner from './Partner/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/associate" element={<HomeAssociate />} />
        <Route path="/partner" element={<HomePartner />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
