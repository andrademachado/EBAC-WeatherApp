import React, { useRef } from 'react';
import { useSelector } from 'react-redux';

import { GoogleMap, useLoadScript } from '@react-google-maps/api';
import { RootReducer } from '../../store';

const containerStyle = {
    width: '100%',
    height: '80vh',
};

const center = {
    lat: -13.78,
    lng: -50.92,
};

/* const positions: MarkerProps[] = [
    { lat: -10.92, lng: -37.07, iconUrl: weatherIcon }, // aracaju
    { lat: -1.45, lng: -48.48, iconUrl: weatherIcon }, // belem
    { lat: -19.92, lng: -43.93, iconUrl: weatherIcon }, // belo horizonte
    { lat: 2.82, lng: -60.67, iconUrl: weatherIcon }, // boa vista
    { lat: -15.78, lng: -47.92, iconUrl: weatherIcon }, // brasilia
    { lat: -20.45, lng: -54.62, iconUrl: weatherIcon }, // campo grande
    { lat: -15.58, lng: -56.08, iconUrl: weatherIcon }, // cuiaba
    { lat: -25.42, lng: -49.25, iconUrl: weatherIcon }, // curitiba
    { lat: -27.58, lng: -48.57, iconUrl: weatherIcon }, // florianopolis
    { lat: -3.71, lng: -38.54, iconUrl: weatherIcon }, // fortaleza
    { lat: -7.12, lng: -34.87, iconUrl: weatherIcon }, // joao pessoa
    { lat: -16.67, lng: -49.27, iconUrl: weatherIcon }, // goiania
    { lat: 0.03, lng: -51.05, iconUrl: weatherIcon }, // macapa
    { lat: -9.67, lng: -35.72, iconUrl: weatherIcon }, // maceio
    { lat: -3.11, lng: -60.03, iconUrl: weatherIcon }, // manaus
    { lat: -5.78, lng: -35.22, iconUrl: weatherIcon }, // natal
    { lat: -10.22, lng: -48.28, iconUrl: weatherIcon }, // palmas
    { lat: -30.03, lng: -51.2, iconUrl: weatherIcon }, // porto alegre
    { lat: -8.77, lng: -63.9, iconUrl: weatherIcon }, // porto velho
    { lat: -8.05, lng: -34.9, iconUrl: weatherIcon }, // recife
    { lat: -22.9, lng: -43.23, iconUrl: weatherIcon }, // rio de janeiro
    { lat: -9.97, lng: -67.8, iconUrl: weatherIcon }, // rio branco
    { lat: -12.98, lng: -38.52, iconUrl: weatherIcon }, // salvador
    { lat: -2.52, lng: -44.27, iconUrl: weatherIcon }, // sao luis
    { lat: -23.53, lng: -46.62, iconUrl: weatherIcon }, // sao paulo
    { lat: -5.08, lng: -42.82, iconUrl: weatherIcon }, // teresina
    { lat: -20.32, lng: -40.35, iconUrl: weatherIcon }, // vitoria
]; */

const MapComponent: React.FC = () => {

    const mapPlaces = useSelector((state: RootReducer) => state.mapSlice)

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: 'AIzaSyCwRYlPYh2tfUwXnRplKB0FrCRQwkcc5jM',
    });

    const mapRef = useRef<google.maps.Map | null>(null);

    const onLoad = (map: google.maps.Map) => {
        mapRef.current = map;

        mapPlaces.forEach(({ lat, lng, iconUrl }) => {
            new google.maps.Marker({
                position: { lat, lng },
                map,
                icon: iconUrl ? { url: iconUrl, scaledSize: new google.maps.Size(64, 64) } : '',
            });
        });
    };

    if (loadError) return <div>Error loading maps</div>;
    if (!isLoaded) return <div>Carregando o mapa...</div>;

    return (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={4.8}
            onLoad={onLoad}
        />
    );
};

export default MapComponent;
