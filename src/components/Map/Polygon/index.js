import React, { useEffect, useState } from 'react';
import L from 'leaflet';
import { MapContainer, TileLayer, Tooltip, Polygon, Pane } from 'react-leaflet';

const PolygonMap = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`/poligono.json`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  const position = [-27.7570073, -48.9000048];

  return (
    <MapContainer
      id="polygn"
      center={position}
      zoom={11}
      scrollWheelZoom={false}
      style={{ height: '500px' }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Polygon pathOptions={{ color: 'purple' }} positions={data}>
        <Tooltip sticky>sticky Tooltip for Polygon</Tooltip>
      </Polygon>
    </MapContainer>
  );
};

export default PolygonMap;
