import React from 'react';
import { Routes, Route } from 'react-router-dom';

import DotsMap from '../components/MapStructure/DotsMap';
import LinesMap from '../components/MapStructure/LinesMap';
import PolygonMap from '../components/MapStructure/PolygonMap';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/mapas/poligono" element={<PolygonMap />} />
      <Route path="/mapas/linhas" element={<LinesMap />} />
      <Route path="/mapas/pontos" element={<DotsMap />} />
    </Routes>
  );
};

export default AppRoutes;
