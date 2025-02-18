import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Accueil from '../components/Accueil';
import Detail from '../components/Detail';
import ErrorPage from '../components/ErrorPage';
import RoutesDynamique from './RoutesDynamique';

const RoutesPosts = () => {
  return (
    <Routes>
      <Route path="/" element={<Accueil />} />
      <Route path="/detail" element={<Detail />} />
      <Route path="/:id" element={<RoutesDynamique />} /> 
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default RoutesPosts;