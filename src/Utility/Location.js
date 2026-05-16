export async function getAddressFromCoords(coords) {
  const response = await fetch(
    `https://nominatim.openstreetmap.org/reverse?format=json&lat=${coords.lat}&lon=${coords.lng}`
  );

  if (!response.ok) {
    throw new Error('Failed to fetch address. Please try again!');
  }

  const data = await response.json();

  if (data.error) {
    throw new Error(data.error);
  }

  return data.display_name;
}

export async function getCoordsFromAddress(address) {
  const urlEncodedAddress = encodeURI(address);

  const response = await fetch(
    `https://nominatim.openstreetmap.org/search?format=json&q=${urlEncodedAddress}`
  );

  if (!response.ok) {
    throw new Error('Failed to fetch coordinates. Please try again!');
  }

  const data = await response.json();

  if (!data || data.length === 0) {
    throw new Error('Could not find coordinates for the specified address.');
  }

  const bestMatch = data[0];

  return {
    lat: parseFloat(bestMatch.lat),
    lng: parseFloat(bestMatch.lon)
  };
}