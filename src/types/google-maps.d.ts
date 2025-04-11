
declare namespace google {
  namespace maps {
    class Map {
      constructor(element: HTMLElement, options: MapOptions);
      setCenter(latLng: LatLng): void;
      setZoom(zoom: number): void;
    }

    class Marker {
      constructor(options: MarkerOptions);
      setMap(map: Map | null): void;
      addListener(event: string, callback: () => void): void;
    }

    class LatLng {
      constructor(lat: number, lng: number);
      lat(): number;
      lng(): number;
    }

    class InfoWindow {
      constructor(options: InfoWindowOptions);
      open(map?: Map, anchor?: Marker): void;
      close(): void;
    }

    interface InfoWindowOptions {
      content?: string | Node;
      disableAutoPan?: boolean;
      maxWidth?: number;
      pixelOffset?: Size;
      position?: LatLng | LatLngLiteral;
      zIndex?: number;
    }

    interface LatLngLiteral {
      lat: number;
      lng: number;
    }

    enum Animation {
      DROP,
      BOUNCE
    }

    enum ControlPosition {
      TOP_LEFT,
      TOP_CENTER,
      TOP_RIGHT,
      LEFT_TOP,
      LEFT_CENTER,
      LEFT_BOTTOM,
      RIGHT_TOP,
      RIGHT_CENTER,
      RIGHT_BOTTOM,
      BOTTOM_LEFT,
      BOTTOM_CENTER,
      BOTTOM_RIGHT
    }

    enum MapTypeId {
      ROADMAP,
      SATELLITE,
      HYBRID,
      TERRAIN
    }

    enum SymbolPath {
      CIRCLE,
      BACKWARD_CLOSED_ARROW,
      FORWARD_CLOSED_ARROW,
      BACKWARD_OPEN_ARROW,
      FORWARD_OPEN_ARROW
    }

    interface MapOptions {
      center?: LatLng | LatLngLiteral;
      zoom?: number;
      mapTypeId?: MapTypeId;
      mapTypeControl?: boolean;
      streetViewControl?: boolean;
      fullscreenControl?: boolean;
      fullscreenControlOptions?: FullscreenControlOptions;
      zoomControl?: boolean;
      zoomControlOptions?: ZoomControlOptions;
      styles?: MapStyleOption[];
    }

    interface FullscreenControlOptions {
      position?: ControlPosition;
    }

    interface ZoomControlOptions {
      position?: ControlPosition;
    }

    interface MapStyleOption {
      featureType?: string;
      elementType?: string;
      stylers: MapStylerOptions[];
    }

    interface MapStylerOptions {
      color?: string;
      visibility?: string;
      saturation?: number;
      lightness?: number;
    }

    interface MarkerOptions {
      position?: LatLng | LatLngLiteral;
      map?: Map;
      title?: string;
      animation?: Animation;
      icon?: string | Icon | Symbol;
    }

    interface Icon {
      url?: string;
      size?: Size;
      origin?: Point;
      anchor?: Point;
      scaledSize?: Size;
    }

    interface Symbol {
      path: SymbolPath | string;
      fillColor?: string;
      fillOpacity?: number;
      scale?: number;
      strokeColor?: string;
      strokeOpacity?: number;
      strokeWeight?: number;
    }

    class Size {
      constructor(width: number, height: number);
      width: number;
      height: number;
    }

    class Point {
      constructor(x: number, y: number);
      x: number;
      y: number;
    }
  }
}
