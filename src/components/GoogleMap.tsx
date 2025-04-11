
import { useEffect, useRef, useState } from 'react';

interface GoogleMapProps {
  address?: string;
  height?: string;
}

const GoogleMap = ({ address = "Dubai World Trade Centre, Dubai, UAE", height = "400px" }: GoogleMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<google.maps.Map | null>(null);
  const markerRef = useRef<google.maps.Marker | null>(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const scriptRef = useRef<HTMLScriptElement | null>(null);
  const isMounted = useRef(true);

  useEffect(() => {
    isMounted.current = true;
    
    const isScriptLoaded = () => {
      return window.google && window.google.maps;
    };

    const loadScript = () => {
      if (isScriptLoaded()) {
        setMapLoaded(true);
        initMap();
        return;
      }

      const existingScript = document.querySelector('script[src*="maps.googleapis.com/maps/api/js"]');
      
      if (existingScript) {
        existingScript.addEventListener('load', () => {
          if (isMounted.current) {
            setMapLoaded(true);
            initMap();
          }
        });
        return;
      }

      const script = document.createElement('script');
      scriptRef.current = script;
      script.src = `https://maps.googleapis.com/maps/api/js?key=&libraries=places`;
      script.async = true;
      script.defer = true;
      script.onload = () => {
        if (isMounted.current) {
          setMapLoaded(true);
          initMap();
        }
      };
      document.head.appendChild(script);
    };

    function initMap() {
      if (!mapRef.current || !window.google || !window.google.maps) return;

      try {
        // Dubai World Trade Centre coordinates
        const defaultLocation = new google.maps.LatLng(25.2285, 55.2867); 

        // Create map with styling to match the image
        mapInstance.current = new google.maps.Map(mapRef.current, {
          center: defaultLocation,
          zoom: 15,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          styles: [
            { elementType: "geometry", stylers: [{ color: "#f5f5f5" }] },
            { elementType: "labels.icon", stylers: [{ visibility: "on" }] },
            { elementType: "labels.text.fill", stylers: [{ color: "#616161" }] },
            { elementType: "labels.text.stroke", stylers: [{ color: "#f5f5f5" }] },
            { featureType: "administrative.land_parcel", stylers: [{ visibility: "off" }] },
            { featureType: "poi.park", elementType: "geometry", stylers: [{ color: "#e5e5e5" }] },
            { featureType: "road", elementType: "geometry", stylers: [{ color: "#ffffff" }] },
            { featureType: "road.highway", elementType: "geometry", stylers: [{ color: "#dadada" }] },
            { featureType: "water", elementType: "geometry", stylers: [{ color: "#c9c9c9" }] },
          ],
          // Match the UI controls as shown in the image
          mapTypeControl: false,
          streetViewControl: false,
          fullscreenControl: true,
          fullscreenControlOptions: {
            position: google.maps.ControlPosition.TOP_RIGHT
          },
          zoomControl: true,
          zoomControlOptions: {
            position: google.maps.ControlPosition.RIGHT_BOTTOM
          },
        });

        // Add a prominent red marker like in the image
        markerRef.current = new google.maps.Marker({
          position: defaultLocation,
          map: mapInstance.current,
          title: address,
          icon: {
            path: google.maps.SymbolPath.CIRCLE,
            fillColor: '#EA4335', // Red color similar to Google marker
            fillOpacity: 1,
            strokeWeight: 0,
            scale: 10,
          },
        });
      } catch (error) {
        console.error("Error initializing Google Map:", error);
      }
    }

    loadScript();

    return () => {
      isMounted.current = false;
      
      // Clean up marker if it exists
      if (markerRef.current) {
        markerRef.current.setMap(null);
        markerRef.current = null;
      }
      
      // Clean up map instance
      if (mapInstance.current) {
        mapInstance.current = null;
      }
      
      scriptRef.current = null;
    };
  }, [address]);

  return (
    <div 
      ref={mapRef} 
      style={{ 
        width: '100%', 
        height, 
        borderRadius: '0.5rem',
        overflow: 'hidden',
        position: 'relative',
      }}
      className="shadow-md border border-border"
    >
      {!mapLoaded && (
        <div className="flex items-center justify-center h-full bg-gray-100">
          <p>Loading map...</p>
        </div>
      )}
      
      {/* Google logo overlay - similar to the image */}
      {mapLoaded && (
        <div 
          style={{ 
            position: 'absolute', 
            bottom: '0',
            left: '0',
            padding: '3px',
            background: 'rgba(255,255,255,0.8)',
            fontSize: '10px',
            zIndex: 1
          }}
        >
          <span>Map data ©2025 Google</span>
        </div>
      )}
    </div>
  );
};

export default GoogleMap;
