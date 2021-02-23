import React, { useEffect, useState } from 'react';
import { Tooltip, Polygon, MapContainer, TileLayer } from 'react-leaflet';
import useFetch from '../../../useFetch.js';

const PolygonMap = () => {
  const center = [-27.60922322, -48.95];
  const { request, data } = useFetch();
  const purpleOptions = { color: 'purple' };

  useEffect(() => {
    request('/poligono.json');
  }, [request]);

  if (data)
    return (
      <MapContainer
        center={center}
        zoom={11}
        scrollWheelZoom={true}
        style={{ height: '600px' }}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/  copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Polygon pathOptions={purpleOptions} positions={data} />
      </MapContainer>
    );
  else return null;
};

export default PolygonMap;
