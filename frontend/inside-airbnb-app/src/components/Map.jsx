import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Chart from 'chart.js/auto';
import axios from 'axios';
import "leaflet/dist/leaflet.css";
import CityTotalListings from './CityTotalListings';
import RoomType from './RoomType';
import L from 'leaflet';



const API_URL = 'http://localhost:5001/api/V1/cities/';

const Map = () => {

  const [data, setData] = useState([]);
  const [mapCenter, setMapCenter] = useState([40.69149, -73.80569]);

  const greenCircleIcon = L.divIcon({
    className:"bg-red-600 rounded-full",
    iconSize: [3,3],
  });

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);



  return (
    <div className='ml-2'>
      <MapContainer center={mapCenter} zoom={11}>
        <TileLayer
          url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        />
        
        {data.map((item) => (
          <Marker key={item.id} position={[item.latitude, item.longitude]} icon={greenCircleIcon}>
            <Popup>
              {item.name}
            </Popup>
          </Marker>
        ))}

      </MapContainer>
    </div>
  );

  };

export default Map