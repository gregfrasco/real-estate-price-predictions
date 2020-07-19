import React, { FC, useEffect, useState } from 'react';
import { GoogleMap, InfoWindow, LoadScript, Marker } from '@react-google-maps/api';
import { Card } from '@material-ui/core';
import mapStyle from './mapStyle.json';
import { useFlip } from '../../context/flip.context';
import { Home } from '../home';

const center = {
  lat: 42.3551282,
  lng: -71.065483
};

const containerStyle = {
  width: '100%',
  height: '600px'
};

const Map: FC = () => {
  const { homes, flip, setFlip } = useFlip();
  const [markers, setMakers] = useState();
  useEffect(() => {
    setMakers(
      homes.map(h => {
        return (
          <Marker key={h.MLSNUM} position={h.location} onClick={() => setFlip(h)}>
            {flip && flip.MLSNUM === h.MLSNUM && (
              <InfoWindow>
                <Home viewHome />
              </InfoWindow>
            )}
          </Marker>
        );
      })
    );
  }, [flip, setFlip, homes, setMakers]);
  return (
    <Card style={{ flex: 1 }}>
      <LoadScript googleMapsApiKey="AIzaSyAftwrvS2Mphv821bXwZMOR3EmC6esH8Fk">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={13}
          options={{
            fullscreenControl: false,
            clickableIcons: false,
            backgroundColor: '#aaa',
            mapTypeControl: false,
            maxZoom: 15,
            minZoom: 8,
            streetViewControl: false,
            styles: mapStyle
          }}
        >
          {markers}
        </GoogleMap>
      </LoadScript>
    </Card>
  );
};

export { Map };
