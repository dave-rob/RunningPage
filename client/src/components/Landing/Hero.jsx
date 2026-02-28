import '../../styles/Landing.css'
// import { Container } from "@chakra-ui/react"
import { Box, Heading, Text, Button, Stack, Container, Image, Flex } from "@chakra-ui/react";
import CountdownTimer from './Countdown';

const Title = () => {
    const raceDate = '2026-05-17T06:00:00'
    return (
        <Container maxW={"100%"} margin={0} className='hero'>
            <Container maxW={"7xl"} >
                <Stack
                    align={"center"}
                    spacing={{ base: 8, md: 10 }}
                    py={{ base: 20, md: 28 }}
                    direction={{ base: "column", lg: "row" }} 
                >
                    <Stack flex={1} spacing={{ base: 5, md: 10 }}>
                    <Heading
                        lineHeight={1.1}
                        fontWeight={600}
                        fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }} 
                    >
                        <Text as={"span"} color={"#FC4C02"}>
                        Run With Me
                        </Text>
                        <br />
                        {/* <Text as={"span"}>follow as I train for my next race</Text> */}
                    </Heading>
                    <Text color={"gray.600"} fontSize={{ base: "md", lg: "lg" }}>
                        Follow me as I train for my next race
                    </Text>
                    <Stack spacing={{ base: 4, sm: 6 }} direction={{ base: "column", sm: "row" }}>
                        <Button rounded={"full"} size={"lg"} colorScheme={"blue"}>
                        Get Started
                        </Button>
                        <Button rounded={"full"} size={"lg"}>
                        How it works
                        </Button>
                    </Stack>
                    </Stack>
                    <Flex flex={1} justify={"center"} align={"center"} position={"relative"} w={"full"}>
                    <Box position={"relative"} height={"30%"} rounded={"2xl"} boxShadow={"2xl"} width={"full"} overflow={"hidden"}>
                        <CountdownTimer targetDate={ raceDate } marathon={"Colfax Marathon"}/>
                    </Box>
                    </Flex>
                </Stack>
            </Container>
        </Container>
    )
}

export default Title;