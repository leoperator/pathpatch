"use client";

import { useEffect } from 'react';
import Map, { Source, Layer } from 'react-map-gl/maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';
import { useLogisticsStore } from '@/lib/store';
import { fetchOSRMRoute } from '@/lib/route-fetching';
import { useTheme } from 'next-themes';

export default function MapDashboard() {
  const hub = useLogisticsStore((state) => state.hub);
  const routes = useLogisticsStore((state) => state.routes);
  const setRouteGeometry = useLogisticsStore((state) => state.setRouteGeometry);
  const { theme } = useTheme();

  // Determine the map URL based on the current theme
  const mapStyleUrl = theme === 'dark' 
    ? "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json" 
    : "https://basemaps.cartocdn.com/gl/positron-gl-style/style.json";

  useEffect(() => {
    routes.forEach(async (route) => {
      if (!route.routeGeometry) {
        const geometry = await fetchOSRMRoute(hub.coordinates, route.destination.coordinates);
        if (geometry) {
          setRouteGeometry(route.truckId, geometry);
        }
      }
    });
  }, [hub.coordinates, routes, setRouteGeometry]);

  return (
    <div className="absolute inset-0 bg-surface-container-highest">
      <Map
        initialViewState={{
          longitude: hub.coordinates[0],
          latitude: hub.coordinates[1],
          zoom: 10.5
        }}
        style={{ width: '100%', height: '100%' }}
        mapStyle={mapStyleUrl}
      >
        {routes.map((route) => (
          route.routeGeometry && (
            <Source 
              key={`source-${route.truckId}`} 
              id={`source-${route.truckId}`} 
              type="geojson" 
              data={route.routeGeometry}
            >
              <Layer
                id={`layer-${route.truckId}`}
                type="line"
                paint={{
                  'line-color': '#006d35',
                  'line-width': 4,
                  'line-opacity': 0.8
                }}
              />
            </Source>
          )
        ))}
      </Map>
    </div>
  );
}