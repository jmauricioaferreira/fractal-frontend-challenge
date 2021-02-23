import React from 'react';
import { Routes, Route } from 'react-router-dom';

import DotsMap from '../components/MapStructure/DotsMap';
import LinesMap from '../components/MapStructure/LinesMap';
import PolygonMap from '../components/MapStructure/PolygonMap';
import Charts from '../components/Charts';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/mapas/poligono" element={<PolygonMap />} />
      <Route path="/mapas/linhas" element={<LinesMap />} />
      <Route path="/mapas/pontos" element={<DotsMap />} />
      <Route path="/graficos/coluna" element={<Charts />} />
      <Route path="/graficos/linha" element={<Charts />} />
    </Routes>
  );
};

export default AppRoutes;
