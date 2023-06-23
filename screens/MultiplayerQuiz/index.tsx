import { HStack, VStack } from "native-base";
import React from "react";
import MapStreetViewRenderer from "../../components/MapStreetViewRenderer";
import UserScoreList from "../../components/UserScoreList";

const MultiplayerQuiz = () => {
  return (
    <VStack p={5} flex={1} bg="appBG">
      <HStack space={5} flex={1}>
        {/* @ts-expect-error - variant type issue */}
        <VStack variant="cardRounded" flex={3}>
          <MapStreetViewRenderer />
        </VStack>
        {/* @ts-expect-error - variant type issue */}
        <VStack variant="cardRounded" space={5} maxW={"400px"} flex={1}>
          <VStack bg="red.400" flex={1} p={5} space={5}>
            <UserScoreList />
          </VStack>
          <VStack bg="green.100" flex={1} p={5} space={5}></VStack>
        </VStack>
      </HStack>
    </VStack>
  );
};

export default MultiplayerQuiz;
