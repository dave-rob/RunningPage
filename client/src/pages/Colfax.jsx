import { useState, useEffect } from "react";
import RunChart from "../components/RunChart";
import RunCard from "../components/RunCard";
import {
  Separator,
  Stack,
  Flex,
  Collapsible,
  Text,
  Container,
  Box,
  Heading,
  Image,
  Spinner
} from "@chakra-ui/react";
import { ChevronRight } from "lucide-react";
import CountdownTimer from "../components/Landing/Countdown";

function groupRunsByWeek(runs) {
  const weeks = {};
  let index = 0;
  runs.forEach((run) => {
    const date = new Date(run.start_date);

    // Convert JS day (0=Sun) into Monday-based index
    const day = date.getDay();
    const diffToMonday = day === 0 ? -6 : 1 - day;

    const monday = new Date(date);
    monday.setDate(date.getDate() + diffToMonday);
    monday.setHours(0, 0, 0, 0);

    const weekKey = monday.toISOString().split("T")[0];

    if (!weeks[weekKey]) {
      const sunday = new Date(monday);
      sunday.setDate(monday.getDate() + 6);
      index++;
      weeks[weekKey] = {
        weekStart: weekKey, // Monday
        weekEnd: sunday.toISOString().split("T")[0], // Sunday
        weekNum: index,
        runs: [],
      };
    }

    weeks[weekKey].runs.push(run);
  });

  // console.log(weeks)
  return Object.values(weeks).sort(
    (a, b) => new Date(a.weekStart) - new Date(b.weekStart),
  );
}

const milesPerWeek = (week) => {
  const mileage =
    week.runs.reduce((sum, run) => sum + run.distance, 0) / 1609.34;
  return mileage.toFixed(2);
};

export default function Colfax({race}) {
  const colfaxRuns = [];
  const [runs, setRuns] = useState([]);
  const [isDataLoading, setIsDataLoading] = useState(true);
  useEffect(() => {
    const fetchActivities = async () => {
      // const response = await fetch(
      //   "http://localhost:5000/api/activities/marathon/colfax",
      // );
      const response = await fetch(
        import.meta.env.VITE_API_URL + "api/activities/marathon/colfax",
      );
      const activities = await response.json();

      setRuns(activities);
      setIsDataLoading(false);
    };

    fetchActivities();
  }, []);

  groupRunsByWeek(runs).map((w) => {
    const week = "Week " + w.weekNum;
    const miles = milesPerWeek(w);
    colfaxRuns.push({ week: week, miles: miles });
  });

  return (
    <>
    <Container width={"100vw"}>
      <Stack spacing={6} mx={"auto"} px={10}>
        <Box width={"100"} >
        {/* <Image src="/images/Colfax.svg" /> */}
          <Heading color={"gainsboro"} textAlign={"center"} lineHeight={1.1} marginTop={5}
                    fontWeight={600}
                    fontSize={{
                      base: "3xl",
                      sm: "4xl",
                      lg: "6xl",
                    }}>{race} Marathon Training</Heading>
        </Box>

        <Box width="100%">
         {isDataLoading ? (
           <Container
     backgroundColor={"gray.900"}
      marginY={10}
      paddingY={10}
      borderRadius={10}
      textAlign={"center"}
      overflow={"hidden"}
    >
      <Spinner color={"#FC4C02"} boxSize={{base: "230px"}} borderWidth={"4px"} animationDuration={"0.8s"}/> 
      </Container>): (<RunChart weeklyRuns={colfaxRuns} />)}
        </Box>

        <Flex direction={{ base: "column", md: "row" }} gap={6} width="100%">
          <Box
            flex={4}
            height={"30%"}
            rounded={"2xl"}
            boxShadow={"2xl"}
            width={"full"}
            overflow={"hidden"}
          >
            <CountdownTimer
              targetDate={"2026-05-17T06:00:00"}
              marathon="Colfax Marathon"
              element={"compact"}
            />
          </Box>

          <Box
            flex={1}
            rounded="2xl"
            boxShadow="2xl"
            bg="gray.900"
            color="white"
            p={6}
            display="flex"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
          >
            <Stack spacing={1}>
              <Text fontSize="sm" color="#FC4C02">
                Goal Time
              </Text>
              <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold">
                3:30:00
              </Text>
            </Stack>
          </Box>
        </Flex>
      </Stack>
      </Container>
      <Box padding={10} width={"100%"}>
      {groupRunsByWeek(runs)
        .toReversed()
        .map((week) => (
          <Box key={week.weekStart} maxWidth={"100%"}>
            <Collapsible.Root>
              <Collapsible.Trigger
                paddingY="3"
                display="flex"
                gap="2"
                alignItems="center"
                width={"100%"}
              >
                <Collapsible.Indicator
                  transition="transform 0.2s"
                  _open={{ transform: "rotate(90deg)" }}
                >
                  <ChevronRight color="white" />
                </Collapsible.Indicator>
                <Text color={"white"}> Week {week.weekNum} </Text>
                <Text color={"white"} ml={"auto"}> {milesPerWeek(week)} miles</Text>
              </Collapsible.Trigger>
              <Separator />
              <Collapsible.Content>
                <Stack
                  justify={"center"}
                  spacing={{ base: 8, md: 10 }}
                  py={{ base: 15, md: 25 }}
                  direction={{ base: "column", lg: "row" }}
                >
                  <Flex wrap={"wrap"} gap={"10"} justify={"center"}>
                    {week.runs.map((run) => (
                      <RunCard key={run.id} run={run} />
                    ))}
                  </Flex>
                </Stack>
              </Collapsible.Content>
            </Collapsible.Root>
          </Box>
        ))}
    </Box>
    </>
  );
}
