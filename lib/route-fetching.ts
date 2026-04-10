export async function fetchOSRMRoute(startCoords: [number, number], endCoords: [number, number]) {
  // OSRM expects coordinates in longitude,latitude format
  const start = `${startCoords[0]},${startCoords[1]}`;
  const end = `${endCoords[0]},${endCoords[1]}`;
  
  // We request the full overview geometry in GeoJSON format
  const url = `https://router.project-osrm.org/route/v1/driving/${start};${end}?geometries=geojson&overview=full`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.code === 'Ok' && data.routes.length > 0) {
      // Returns a GeoJSON LineString object
      return data.routes[0].geometry;
    }
    
    throw new Error("No route found");
  } catch (error) {
    console.error("OSRM Routing Error:", error);
    return null;
  }
}