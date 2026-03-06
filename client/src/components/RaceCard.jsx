import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  Flex,
  Card,
  Separator,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Stat({ label, value }) {
  return (
    <Box minW="150px">
      <Text fontSize="sm" color="gray.400">
        {label}
      </Text>
      <Text fontSize="lg" fontWeight="bold">
        {value}
      </Text>
    </Box>
  );
}

export default function RaceCard({
  marathon,
  date,
  fTime,
  gTime,
  pace,
  dates_trained,
  weeks,
  lessons,
}) {
  const groupedRuns = [];
  const [runs, setRuns] = useState([]);
  useEffect(() => {
    const fetchActivities = async () => {
      //   const response = await fetch(
      //     `http://localhost:5000/api/races/${marathon}`,
      //   );
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}api/races/${marathon}`,
      );
      const activities = await response.json();

      setRuns(activities);
    };

    fetchActivities();
  }, []);

  return (
    <Container maxW="7xl" py={16}>
      {/* Page Title */}
      <Heading mb={10} color="#FC4C02">
        Marathon Journey
      </Heading>

      {/* Race Card */}
      <Card.Root
        bg="gray.800"
        color="white"
        borderRadius="2xl"
        boxShadow="2xl"
        p={8}
      >
        <Stack spacing={6}>
          {/* Race Header */}
          <Box>
            <Heading size="lg">{marathon}</Heading>
            <Text color="gray.400">{date}</Text>
          </Box>

          <Separator borderColor="gray.600" />

          {/* Race Stats */}
          <Flex wrap="wrap" gap={10}>
            <Stat label="Finish Time" value={fTime} />
            <Stat label="Goal Time" value={gTime} />
            <Stat label="Pace" value={pace} />
          </Flex>

          <Separator borderColor="gray.600" />

          {/* Training Block */}
          <Box>
            <Heading size="md" mb={4} color="#FC4C02">
              Training Block
            </Heading>

            <Flex wrap="wrap" gap={10}>
              <Stat label="Training Period" value={dates_trained} />
              <Stat label="Total Miles" value={runs.totalMiles} />
              <Stat label="Longest Run" value={runs.longestRun} />
              <Stat
                label="Avg Weekly"
                value={(runs.totalMiles / weeks).toFixed(2)}
              />
            </Flex>
          </Box>

          <Separator borderColor="gray.600" />

          {/* Lessons */}
          <Box>
            <Heading size="md" mb={3}>
              Lessons Learned
            </Heading>

            <Stack spacing={2} color="gray.300">
              {lessons.map((l) => (
                <Text>• {l}</Text>
              ))}
            </Stack>
          </Box>
        </Stack>
      </Card.Root>
    </Container>
  );
}
