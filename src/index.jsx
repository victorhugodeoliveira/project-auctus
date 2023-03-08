import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomeAssociateSearch from './Associate/AssociateSearch/Home';
import HomeAssociateRegister from './Associate/AssociateRegister/Home';
import HomePartnerRegister from './Startap/PartnerRegister/Home';
import HomePartnerSearch from './Startap/PartnerSearch/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/associate/search" element={<HomeAssociateSearch />} />
        <Route path="/associate/register" element={<HomeAssociateRegister />} />

        <Route path="/partner/search" element={<HomePartnerSearch />} />
        <Route path="/partner/register" element={<HomePartnerRegister />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
