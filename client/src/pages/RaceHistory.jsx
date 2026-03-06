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
import RaceCard from "../components/RaceCard";

export default function RaceHistory() {
  return (
    <RaceCard
      marathon={"Boulderthon"}
      date={"Sep. 28, 2025"}
      fTime={"3:58:55"}
      gTime={"4:00:00"}
      pace={"8:45 min/mi"}
      dates_trained={"May 19, 2025 - Sep. 28, 2025"}
      weeks={19}
      lessons={[
        "Stick to the plan",
        "Run your own race",
        "Ensure you can use the restroom beforehand",
      ]}
    />
    // <Container maxW="7xl" py={16}>

    //   {/* Page Title */}
    //   <Heading mb={10} color="#FC4C02">
    //     Marathon Journey
    //   </Heading>

    //   {/* Race Card */}
    //   <Card.Root
    //     bg="gray.800"
    //     color="white"
    //     borderRadius="2xl"
    //     boxShadow="2xl"
    //     p={8}
    //   >
    //     <Stack spacing={6}>

    //       {/* Race Header */}
    //       <Box>
    //         <Heading size="lg">Colorado Springs Marathon</Heading>
    //         <Text color="gray.400">Sep. 28, 2024</Text>
    //       </Box>

    //       <Separator borderColor="gray.600" />

    //       {/* Race Stats */}
    //       <Flex wrap="wrap" gap={10}>

    //         <Stat label="Finish Time" value="4:22:56" />
    //         <Stat label="Goal Time" value="4:00:00" />
    //         <Stat label="Pace" value="10:02 min/mi" />

    //       </Flex>

    //       <Separator borderColor="gray.600" />

    //       {/* Training Block */}
    //       <Box>
    //         <Heading size="md" mb={4} color="#FC4C02">
    //           Training Block
    //         </Heading>

    //         <Flex wrap="wrap" gap={10}>
    //           <Stat label="Training Period" value="Oct 2023 – Sep 2024" />
    //           <Stat label="Total Miles" value="620 mi" />
    //           <Stat label="Longest Run" value="20 mi" />
    //           <Stat label="Avg Weekly" value="38 mi" />
    //         </Flex>
    //       </Box>

    //       <Separator borderColor="gray.600" />

    //       {/* Lessons */}
    //       <Box>
    //         <Heading size="md" mb={3}>
    //           Lessons Learned
    //         </Heading>

    //         <Stack spacing={2} color="gray.300">
    //           <Text>• Mile 20 bonk is real</Text>
    //           <Text>• Cannot skip training</Text>
    //           <Text>• Dial in race nutrition</Text>
    //           <Text>• Don't start out too hot on the pace</Text>
    //         </Stack>
    //       </Box>

    //     </Stack>
    //   </Card.Root>
    // </Container>
  );
}

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

//boulderthon may 19- sep28
// import {
//   Box,
//   Container,
//   Heading,
//   Text,
//   Stack,
//   Flex,
//   Circle,
//   VStack,
// } from "@chakra-ui/react";

// export default function RaceTimeline() {
//   return (
//     <Container maxW="5xl" py={16}>
//       <Heading mb={12} color="#FC4C02">
//         Athlete Timeline
//       </Heading>

//       <VStack align="stretch" spacing={12} position="relative">

//         {/* Vertical Line */}
//         <Box
//           position="absolute"
//           left="10px"
//           top="0"
//           bottom="0"
//           width="2px"
//           bg="gray.600"
//         />

//         <TimelineItem
//           title="Training Block"
//           date="Jan 2023 – May 2023"
//           description="620 total miles • 38 miles per week avg • Longest Run: 20 miles"
//         />

//         <TimelineItem
//           title="Colfax Marathon"
//           date="May 2023"
//           description="Finish Time: 3:10:42 • First Marathon Experience • Hard Lesson in Pacing"
//         />

//         <TimelineItem
//           title="Current Goal"
//           date="2026"
//           description="Boston Qualifier Attempt • Target: 2:55 • World Major Journey"
//           highlight
//         />

//       </VStack>
//     </Container>
//   );
// }

// function TimelineItem({ title, date, description, highlight }) {
//   return (
//     <Flex position="relative" pl={10}>

//       {/* Timeline Dot */}
//       <Circle
//         size="20px"
//         bg={highlight ? "#FC4C02" : "gray.700"}
//         border="3px solid white"
//         position="absolute"
//         left="1px"
//         top="5px"
//       />

//       <Box
//         bg="gray.800"
//         p={6}
//         borderRadius="2xl"
//         boxShadow="2xl"
//         w="100%"
//         borderLeft={highlight ? "4px solid #FC4C02" : "4px solid transparent"}
//       >
//         <Text fontSize="sm" color="gray.400">
//           {date}
//         </Text>

//         <Heading size="md" mb={2}>
//           {title}
//         </Heading>

//         <Text color="gray.300">{description}</Text>
//       </Box>

//     </Flex>
//   );
// }
