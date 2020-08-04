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

const getMarkerColor = (score?: number | null) => {
    if (!score) {
        return '#dd2c00'
    }
    if(score > 80) {
        return '#4caf50'
    }
    if(score > 40) {
        return '#ffc107'
    }
    return '#dd2c00'
}

const Map: FC = () => {
  const { homes, flip, setFlip } = useFlip();
  const [markers, setMakers] = useState();
  const [map, setMap] = useState();
  useEffect(() => {
    const allLat: number[] = []
    const allLng: number[] = []
    const homeMarkers = homes.map(h => {
      const { lat, lng } = h;
      allLat.push(lat as number);
      allLng.push(lng as number);
      return (
          <Marker key={h.MLSNUM}
                  position={{lat, lng}}
                  icon={{
                      path: 'M64,2A43.88,43.88,0,0,0,20,45.76C20,69.94,53,126,64,126s44-56.06,44-80.24A43.88,43.88,0,0,0,64,2Zm0,57.44A17.32,17.32,0,1,1,81.32,42.12,17.32,17.32,0,0,1,64,59.44Z',
                      fillColor: getMarkerColor(h.FLIP_SCORE),
                      fillOpacity: 1,
                      strokeColor: '#000',
                      strokeWeight: 1,
                      scale: 0.25
                  }}
                  onClick={() => setFlip(h)}>
              {flip && flip.MLSNUM === h.MLSNUM && (
                  <InfoWindow>
                      <Home viewHome />
                  </InfoWindow>
              )}
          </Marker>
      );
    });
    setMakers(homeMarkers);
    if(map) {
        const newLocation = {
            lat: allLat.filter(lat => !!lat).reduce((a,v) => a + v) / allLat.filter(lat => !!lat).length,
            lng: allLng.filter(lng => !!lng).reduce((a,v) => a + v) / allLat.filter(lat => !!lat).length,
        };
        map.panTo(newLocation);
    }
  }, [flip, setFlip, homes, setMakers, map]);
  return (
    <Card style={{ flex: 1, marginTop: '2rem' }}>
      <LoadScript googleMapsApiKey="AIzaSyAftwrvS2Mphv821bXwZMOR3EmC6esH8Fk">
        <GoogleMap
          onLoad={setMap}
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
