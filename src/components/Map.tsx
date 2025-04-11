
import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Card } from '@/components/ui/card';

// You'll need to replace this with your actual Mapbox token
const MAPBOX_TOKEN = 'pk.eyJ1IjoiZXhhbXBsZXRva2VuIiwiYSI6ImNsc3hnMXd4ZzBnem0yanA2dHlvYWJvb3UifQ.wQYNZSV1Go-1_98QUFGAWQ';

const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    // Initialize the map
    mapboxgl.accessToken = MAPBOX_TOKEN;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [55.2885, 25.2048], // Dubai coordinates
      zoom: 13
    });

    // Add navigation controls
    map.current.addControl(
      new mapboxgl.NavigationControl(),
      'top-right'
    );

    // Add a marker for the venue
    new mapboxgl.Marker({
      color: '#E8B341' // Using summit gold color
    })
      .setLngLat([55.2885, 25.2048]) // Dubai World Trade Centre coordinates
      .setPopup(new mapboxgl.Popup().setHTML('<h3>Dubai World Trade Centre</h3><p>Sheikh Zayed Road, Dubai, UAE</p>'))
      .addTo(map.current);

    // Clean up on unmount
    return () => {
      map.current?.remove();
    };
  }, []);

  return (
    <Card className="overflow-hidden shadow-md">
      <div className="relative w-full h-[400px]">
        <div ref={mapContainer} className="absolute inset-0" />
      </div>
    </Card>
  );
};

export default Map;
