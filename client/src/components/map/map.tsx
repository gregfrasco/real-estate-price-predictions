import React, { FC, useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { Card } from '@material-ui/core';
import mapStyle from './mapStyle.json';
import { useFlip } from '../../context/flip.context';

const center = {
  lat: 42.3551282,
  lng: -71.065483
};

const containerStyle = {
  width: '100%',
  height: '600px'
};

const Map: FC = () => {
  const { homes } = useFlip();
  const [markers, setMakers] = useState();
  useEffect(() => {
    setMakers(
      homes.map(h => {
        return <Marker key={h.MLSNUM} position={h.location} />;
      })
    );
  }, [homes, setMakers]);
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
