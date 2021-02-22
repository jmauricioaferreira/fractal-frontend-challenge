import React, { useState, useEffect } from 'react';
import { Marker, Popup, MapContainer, TileLayer } from 'react-leaflet';
import useFetch from '../../../useFetch';

const DotsMap = () => {
  const { request, data, error } = useFetch();
  const center = [-27.7028, -48.8019];

  useEffect(() => {
    async function fetchData() {
      request('/pontos.json');
    }
    fetchData();
  }, [request]);

  console.log(data);

  if (error) return <p>{error}</p>;
  if (data)
    return (
      <MapContainer
        center={center}
        zoom={12}
        scrollWheelZoom={true}
        style={{ height: '500px' }}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {data.map((item) => (
          <Marker position={[item.lat_stt, item.lng_stt]} key={item.id_stt} />
        ))}
      </MapContainer>
    );
  else return null;
};

export default DotsMap;
