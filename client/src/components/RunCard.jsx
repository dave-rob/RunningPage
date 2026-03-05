import RunMap from "./Runmap";
import {
  Card,
  Image,
  Text,
  Flex,
  Box,
  Container,
} from "@chakra-ui/react";

const formatPace = (speed) => {
  const pace = 26.8224 / speed;
  const minutes = Math.floor(pace);
  const seconds = Math.round((pace - minutes) * 60);
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
};

const formatDate = (startDate) => {
  return startDate.split("T", 1)
}

export default function RunCard({run}) {

    return (
        <Card.Root
                overflow="hidden"
                backgroundColor={"gray.800"}
                color={"white"}
              >
                <Container paddingY={"5px"}>
                  {run.map?.summary_polyline?.length > 0 ? (
                    <RunMap encodedPolyline={run.map.summary_polyline} />
                  ) : (
                    <Image
                      src="/images/treadmill.svg"
                      width={{base:150, md:250}}
                      height={{base:150, md:250}}
                    />
                  )}
                </Container>

                <Card.Body gap="2" backgroundColor={"gray.900"}>
                <Box>
                  <Card.Title>{run.name}</Card.Title>
                  <Text fontSize={"0.75rem"} marginTop={"-1"}>{formatDate(run.start_date_local)}</Text>
                </Box>
                  
                  <Flex gap="4" wrap="wrap" width={{base:180, md:260, sm:180}}>
                    <Box width={"45%"}>
                      <Text color={"#FC4C02"} fontSize={{base:"sm", md:"md"}}>Distance</Text>
                      <Text color={"gray.400"} fontSize={{base:"xs", md:"md"}}>
                        {(run.distance / 1609.34).toFixed(2)} miles
                      </Text>
                    </Box>
                    <Box width={"45%"}>
                      <Text color={"#FC4C02"} fontSize={{base:"sm", md:"md"}}>Time</Text>
                      <Text color={"gray.400"} fontSize={{base:"xs", md:"md"}}>
                        {(run.moving_time / 60).toFixed(0)} min
                      </Text>
                    </Box>
                    <Box width={"45%"}>
                      <Text color={"#FC4C02"} fontSize={{base:"sm", md:"md"}}>Avg. Pace</Text>
                      <Text color={"gray.400"} fontSize={{base:"xs", md:"md"}}>
                        {formatPace(run.average_speed)} min/mile
                      </Text>
                    </Box>
                    <Box width={"45%"}>
                      <Text color={"#FC4C02"} fontSize={{base:"sm", md:"md"}}>Avg. HR</Text>
                      
                      {run.average_heartrate > 0 ? (
                        <Text color={"gray.400"} fontSize={{base:"xs", md:"md"}}>{run.average_heartrate} bpm</Text> ):
                        (<Text color={"gray.400"} fontSize={{base:"xs", md:"md"}}> -- bpm</Text>
                      )}
                    </Box>
                  </Flex>
                </Card.Body>
              </Card.Root>
    )
}