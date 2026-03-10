import "../../styles/Landing.css";
import { useState, useEffect } from "react";
import {
  Card,
  Image,
  Text,
  Stack,
  Flex,
  Box,
  Container,
} from "@chakra-ui/react";
import RunCard from "../RunCard";

const RecentRuns = () => {
  const [runs, setRuns] = useState([]);
  useEffect(() => {
    const fetchActivities = async () => {
      const response = await fetch("http://localhost:5000/api/activities");
      // const response = await fetch(
      //   import.meta.env.VITE_API_URL + "api/activities",
      // );
      const activities = await response.json();

      const lastFiveRuns = activities.slice(0, 5);
      setRuns(lastFiveRuns);
    };

    fetchActivities();
  }, []);
  return (
    <div className="recent-runs">
      <Text
        fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
        color={"gray.200"}
        padding={"2rem 0 0 0"}
      >
        Recent Runs
      </Text>
      <div className="run-container">
        <Stack
          justify={"center"}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 15, md: 25 }}
          direction={{ base: "column", lg: "row" }}
        >
          <Flex wrap={"wrap"} gap={"10"} justify={"center"}>
            {runs.map((recentRun) => (
              <RunCard run={recentRun} key={recentRun.id} />
            ))}
          </Flex>
        </Stack>
      </div>
    </div>
  );
};

export default RecentRuns;
