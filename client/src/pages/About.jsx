import { Box, Heading, Text, Container, Image, Flex, Stack} from "@chakra-ui/react";

export default function About() {
  return (
    <Container maxW="4xl" py={16} backgroundColor={"blackAlpha.900"} marginTop={10} borderRadius={"1rem"}>
    <Flex color={"gainsboro"} justifyContent={"space-evenly"}>
    <Image src="/images/me.jpg" boxSize="250px" borderRadius="full" />
    <Stack alignSelf={"center"}>
        <Text>Personal Records 🔥</Text>
        <Box>
            <Text >🏆Marathon: 3:58:55</Text>
             <Text fontSize={"0.65rem"}>(2025 Boulderthon)</Text>
        </Box>
        <Box>
            <Text>🏆Half-Marathon: 1:35:27 </Text>
            <Text fontSize={"0.65rem"}>(2020 Verona Half Marathon)</Text>
        </Box>
        <Box>
            <Text>🏆10K: 41:41 </Text>
            <Text fontSize={"0.65rem"}>(2020 Vicenza 10 Miler)</Text>
        </Box>
        <Box>
            <Text>🏆5K: 19:58 </Text>
            <Text fontSize={"0.65rem"}>(2020 Vicenza 10 Miler)</Text>
        </Box>
    </Stack>
    
    </Flex>
      <Heading mb={6} color={"gainsboro"} textAlign={"center"} padding={"1rem 0 0 0"}>About Dave</Heading>
      <Text fontSize="lg" color={"gainsboro"}>
      Running was once a big part of my life. I trained consistently and was fully invested in the sport. Over time, life shifted and my focus turned more toward weightlifting and building strength and size. Running took a back seat as priorities changed.
       <br />
       <br />
        Now running is more than training for me it’s about chasing big goals and pushing my limits with every mile. My long-term mission is to run all World Major Marathons and qualify for the Boston Marathon along the way. Every training cycle, every early morning run, and every tough workout is a step toward that goal.
This site tracks my progress, miles, and races as I work toward becoming stronger, faster, and more consistent. The journey is long, but the standard is high and I’m committed to putting in the work to get there.
        <br />
        <br />
        Currently, I am training for the Colfax Marathon where I am hoping to break a 3:30 marathon time. I have also been selected to run with the Think Pink Rocks charity
        this fall in the NYC Marathon. This will be my first World Major Marathon and I look forward to running my first Major in NYC. I am hoping my training for the Colfax Marathon goes
        well and helps me build to an even faster pace in NYC.
      </Text>
    </Container>
  );
}