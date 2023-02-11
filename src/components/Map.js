import './Map.css';
import { useRef, useEffect } from 'react';

const Map = props => {
    const mapRef = useRef();

    const { center, zoom } = props;

    useEffect(() => {
        const map = new window.google.maps.Map(mapRef.current, {
            center: { lat: 45.7432298, lng: 21.2455966 },
            zoom: 15
        });
        new window.google.maps.Marker({
            position: { lat: 45.7432298, lng: 21.2455966 }, map: map, icon: {
                url: 'https://maps.google.com/mapfiles/ms/icons/orange-dot.png',
                scaledSize: new window.google.maps.Size(70, 70) 
            }
        });
        new window.google.maps.Marker({
            position: { lat: 45.7455497, lng: 21.2273818 }, map: map, icon: {
                url: 'https://maps.google.com/mapfiles/ms/icons/orange-dot.png',
                scaledSize: new window.google.maps.Size(70, 70) 
            }
        });
    }, [center, zoom]);

    return (
        <div ref={mapRef} className={`map ${props.className}`} style={props.style}>

        </div>
    );
};

export default Map;