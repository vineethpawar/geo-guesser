import { HStack, VStack } from "native-base";
import React from "react";
import MapStreetViewRenderer from "../../components/MapStreetViewRenderer";

const MultiplayerQuiz = () => {
  return (
    <VStack p={5} flex={1} bg="appBG">
      <HStack space={5} flex={1}>
        <VStack rounded={"xl"} bg="cardBG" flex={3} overflow={"hidden"}>
          <MapStreetViewRenderer />
        </VStack>
        <VStack rounded={"xl"} bg={"cardBG"} maxW={"400px"} flex={1}></VStack>
      </HStack>
    </VStack>
  );
};

export default MultiplayerQuiz;
