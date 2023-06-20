export const getCountryFromLatLng = async (
  latitude: string,
  longitude: string
): Promise<string | null> => {
  const accessToken = process.env.MAPBOX_API_KEY;
  const geocodeUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json?access_token=${accessToken}`;

  return fetch(geocodeUrl)
    .then((response) => response.json())
    .then((data) => {
      const features = data.features;
      if (features.length > 0) {
        // @ts-ignore
        const country = features[0].context.find((context) =>
          context.id.startsWith("country")
        );
        if (country) {
          return country.text;
        }
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      return null;
    });
};
