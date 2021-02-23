import React, { useEffect } from 'react';
import { Polyline, MapContainer, TileLayer } from 'react-leaflet';
import useFetch from '../../../useFetch';

const LinesMap = () => {
  const { request, data } = useFetch();
  const limeOptions = { color: 'lime' };
  const center = [-27.029, -48.95];

  useEffect(() => {
    request('/linhas.json');
  }, [request]);
  console.log(data);

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
        <Polyline pathOptions={limeOptions} positions={data} />
      </MapContainer>
    );
  else return null;
};

export default LinesMap;
