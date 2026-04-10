export async function geocodeAddress(query: string): Promise<[number, number] | null> {

  const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(query)}&format=json&limit=1`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data && data.length > 0) {
      // Nominatim returns string values, so we parse them to floats
      return [parseFloat(data[0].lon), parseFloat(data[0].lat)];
    }
    
    return null;
  } catch (error) {
    console.error("Geocoding Error:", error);
    return null;
  }
}