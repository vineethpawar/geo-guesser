import { Skeleton, Text, VStack } from "native-base";
import React, { useEffect, useState } from "react";
import ReactStreetview from "react-streetview";
import { getCountryFromLatLng } from "../../utils/getCountryFromLatLng";

const MapStreetViewRenderer = () => {
  const [randomLocation, setRandomLocation] = useState<[string, string] | []>(
    []
  );
  const [country, setCountry] = useState<string | null>(null);

  const getRandomStreetView = async () => {
    const streetview = require("awesome-streetview");
    const location = await streetview();
    setRandomLocation(location);
    const country = await getCountryFromLatLng(location[0]!, location[1]!);
    setCountry(country);
  };

  useEffect(() => {
    getRandomStreetView();
  }, []);

  return (
    <>
      <VStack flex={1}>
        {!!randomLocation ? (
          <ReactStreetview
            apiKey={process.env.GOOGLE_MAPS_API_KEY}
            streetViewPanoramaOptions={{
              position: { lat: randomLocation[0], lng: randomLocation[1] },
              pov: { heading: 100, pitch: 0 },
              zoom: 1,
              addressControl: false,
              showRoadLabels: false,
              zoomControl: false,
              motionTracking: false,
            }}
          />
        ) : (
          <Skeleton
            flex={1}
            startColor={"light.500"}
            endColor={"light.700"}
          ></Skeleton>
        )}
      </VStack>

      {!!randomLocation && <Text color={"white"}>{country} </Text>}
    </>
  );
};

export default MapStreetViewRenderer;
