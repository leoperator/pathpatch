"use client";

import { useEffect } from 'react';
import Map, { Source, Layer } from 'react-map-gl/maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';
import { useLogisticsStore } from '@/lib/store';
import { fetchOSRMRoute } from '@/lib/route-fetching';

export default function MapDashboard() {
  const hub = useLogisticsStore((state) => state.hub);
  const routes = useLogisticsStore((state) => state.routes);
  const setRouteGeometry = useLogisticsStore((state) => state.setRouteGeometry);

  // Fetch the routes when the component mounts
  useEffect(() => {
    routes.forEach(async (route) => {
      // Only fetch if we haven't already saved the geometry
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
        mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
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