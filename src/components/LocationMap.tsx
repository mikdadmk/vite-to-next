
import { useEffect, useRef } from 'react';

const LocationMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load Google Maps API script
    const googleMapsScript = document.createElement('script');
    googleMapsScript.src = `https://maps.googleapis.com/maps/api/js?key=&callback=initMap`;
    googleMapsScript.async = true;
    googleMapsScript.defer = true;
    
    // Define the initialization function
    window.initMap = () => {
      if (!mapRef.current) return;
      
      // Dubai World Trade Centre coordinates
      const dwtcLocation = { lat: 25.2285, lng: 55.2867 };
      
      const map = new google.maps.Map(mapRef.current, {
        center: dwtcLocation,
        zoom: 15,
        styles: [
          {
            "featureType": "administrative",
            "elementType": "labels.text.fill",
            "stylers": [{"color": "#444444"}]
          },
          {
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [{"color": "#f2f2f2"}]
          },
          {
            "featureType": "poi",
            "elementType": "all",
            "stylers": [{"visibility": "off"}]
          },
          {
            "featureType": "road",
            "elementType": "all",
            "stylers": [{"saturation": -100}, {"lightness": 45}]
          },
          {
            "featureType": "road.highway",
            "elementType": "all",
            "stylers": [{"visibility": "simplified"}]
          },
          {
            "featureType": "road.arterial",
            "elementType": "labels.icon",
            "stylers": [{"visibility": "off"}]
          },
          {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [{"visibility": "off"}]
          },
          {
            "featureType": "water",
            "elementType": "all",
            "stylers": [{"color": "#c4ccd6"}, {"visibility": "on"}]
          }
        ]
      });
      
      // Add marker
      const marker = new google.maps.Marker({
        position: dwtcLocation,
        map: map,
        title: 'Dubai World Trade Centre',
        animation: google.maps.Animation.DROP
      });
      
      // Add info window
      const infoWindow = new google.maps.InfoWindow({
        content: `
          <div style="padding: 10px; max-width: 200px;">
            <h3 style="margin: 0 0 5px; font-weight: bold;">Global Futuristic Summit</h3>
            <p style="margin: 0;">Dubai World Trade Centre, Sheikh Zayed Road, Dubai, UAE</p>
          </div>
        `
      });
      
      marker.addListener('click', () => {
        infoWindow.open(map, marker);
      });
      
      // Open info window by default
      infoWindow.open(map, marker);
    };
    
    // Add the script to the document
    document.head.appendChild(googleMapsScript);
    
    // Cleanup
    return () => {
      // Check if script exists before removing
      if (document.head.contains(googleMapsScript)) {
        document.head.removeChild(googleMapsScript);
      }
      window.initMap = undefined;
    };
  }, []);

  return (
    <div className="glass-card overflow-hidden h-[400px] mb-12">
      <div ref={mapRef} className="w-full h-full"></div>
    </div>
  );
};

// Type declaration moved to global.d.ts

export default LocationMap;
