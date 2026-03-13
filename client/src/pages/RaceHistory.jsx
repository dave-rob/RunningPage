import { Box, Container, Heading, VStack } from "@chakra-ui/react";
import RaceCard from "../components/RaceCard";

const races = [
  {
    id: 2,
    marathon: "Boulderthon",
    date: "Sep. 28, 2025",
    gtime: "4:00:00",
    ftime: "3:58:55",
    pace: "9:07 min/mi",
    dates_trained: "May 19, 2025 - Sep. 28, 2025",
    weeks: 19,
    lessons: [
      "Stick to the plan",
      "Run your own race",
      "Ensure you can use the restroom beforehand",
    ],
  },
  {
    id: 1,
    marathon: "Colorado Springs",
    date: "Sep. 28, 2024",
    ftime: "4:22:56",
    gtime: "4:00:00",
    pace: "10:02 min/mi",
    dates_trained: "Oct 23, 2023 - Sep. 28, 2024",
    weeks: 49,
    lessons: [
      "20 mile bonk is real",
      "If not consistent with the training, it will show",
      "Increase mileage and slow runs",
    ],
  },
];

export default function RaceHistory() {
  return (
    <>
      <Container maxW="7xl" py={16}>
        {/* Page Title */}
        <Heading fontSize={"2rem"} mb={10} color="#FC4C02">
          Marathon Journey
        </Heading>
        <VStack align={"stretch"} position="relative">
          <Box
            position="absolute"
            left="10px"
            top="0"
            bottom="0"
            width="2px"
            bg="gray.600"
          />
          {races.map((race) => (
            <Box key={race.id}>
            <RaceCard
              marathon={race.marathon}
              date={race.date}
              fTime={race.ftime}
              gTime={race.gtime}
              pace={race.pace}
              dates_trained={race.dates_trained}
              weeks={race.weeks}
              lessons={race.lessons}
            />
            </Box>
          ))}
        </VStack>
      </Container>
    </>
  );
}
