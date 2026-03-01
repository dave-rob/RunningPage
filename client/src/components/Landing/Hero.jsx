import "../../styles/Landing.css";
// import { Container } from "@chakra-ui/react"
// import { Heading, Text, Button, Stack, Container, Image, Flex, Carousel,  IconButton, AspectRatio} from "@chakra-ui/react";
import { forwardRef } from "react";
import CountdownTimer from "./Countdown";

// const ActionButton = forwardRef<HTMLButtonElement, IconButtonProps>(
//   function ActionButton(props, ref) {
//     return (
//       <IconButton
//         {...props}
//         ref={ref}
//         size="xs"
//         variant="outline"
//         rounded="full"
//         position="absolute"
//         zIndex="1"
//         bg="bg"
//       />
//     )
//   },
// )

// const Title = () => {
//     const raceDate = '2026-05-17T06:00:00'
//     return (
//         <Container maxW={"100%"} margin={0} className='hero'>
//             <Container maxW={"7xl"} >
//                 <Stack
//                     align={"center"}
//                     spacing={{ base: 8, md: 10 }}
//                     py={{ base: 20, md: 28 }}
//                     direction={{ base: "column", lg: "row" }}
//                 >
//                     <Stack flex={1} spacing={{ base: 5, md: 10 }}>
//                     <Heading
//                         lineHeight={1.1}
//                         fontWeight={600}
//                         fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
//                     >
//                         <Text as={"span"} color={"#FC4C02"}>
//                         Run With Me
//                         </Text>
//                         <br />
//                         {/* <Text as={"span"}>follow as I train for my next race</Text> */}
//                     </Heading>
//                     <Text color={"gray.600"} fontSize={{ base: "md", lg: "lg" }}>
//                         Follow me as I train for my next race
//                     </Text>
//                     <Stack spacing={{ base: 4, sm: 6 }} direction={{ base: "column", sm: "row" }}>
//                         <Button rounded={"full"} size={"lg"} colorScheme={"blue"}>
//                         Get Started
//                         </Button>
//                         <Button rounded={"full"} size={"lg"}>
//                         How it works
//                         </Button>
//                     </Stack>
//                     </Stack>
//                     <Flex flex={1} justify={"center"} align={"center"} position={"relative"} w={"full"}>
//                     <Box position={"relative"} height={"30%"} rounded={"2xl"} boxShadow={"2xl"} width={"full"} overflow={"hidden"}>
//                         <CountdownTimer targetDate={ raceDate } marathon={"Colfax Marathon"}/>
//                     </Box>
//                     </Flex>
//                 </Stack>
//             </Container>
//         </Container>
//     )
// }

// export default Title;

import {
    Box,
    Container,
    Stack,
    Heading,
    Text,
    Button,
    Flex,
    Image,
    IconButton,
    Carousel,
} from "@chakra-ui/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useState, useEffect, useRef } from "react";
import Autoplay from "embla-carousel-autoplay";

export default function Hero({ raceDate }) {
    const autoplay = useRef(
        Autoplay({ delay: 4500, stopOnInteraction: false }),
    );

    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
        autoplay.current,
    ]);

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState([]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;

        setScrollSnaps(emblaApi.scrollSnapList());
        onSelect();

        emblaApi.on("select", onSelect);
    }, [emblaApi, onSelect]);

    return (
        <Box position="relative">
            {/* Carousel */}
            <Box
                ref={emblaRef}
                onMouseEnter={autoplay.current.stop}
                onMouseLeave={autoplay.current.play}>
                <Flex>
                    {/* Slide 1 */}
                    <Box flex="0 0 100%" className="hero" backgroundImage={'url("/images/runwithme.jpg")'} backgroundSize={{base:"cover"}} backgroundPosition={"50% 10%"} backgroundRepeat={"no-repeat"}>
                        <Container maxW="7xl">
                            <Stack
                                align="center"
                                spacing={{ base: 8, md: 10 }}
                                py={{ base: 20, md: 28 }}
                                direction={{ base: "column", lg: "row" }}>
                                <Stack flex={1} spacing={{ base: 5, md: 10 }} textAlign={{base: "center", lg:"left"}} align={{base:"center", lg:"start"}}>
                                    <Heading
                                        lineHeight={1.1}
                                        fontWeight={600}
                                        fontSize={{
                                            base: "3xl",
                                            sm: "4xl",
                                            lg: "6xl",
                                        }}>
                                        <Text as="span" color="#FC4C02">
                                            Run With Me
                                        </Text>
                                    </Heading>

                                    <Text
                                        color="black"
                                        fontSize={{ base: "md", lg: "lg" }}>
                                        Follow me as I train for my next race
                                    </Text>

                                    <Stack
                                        spacing={{ base: 4, sm: 6 }}
                                        direction={{
                                            base: "column",
                                            sm: "row",
                                        }}>
                                        <Button rounded="full" size="lg">
                                            Check Out My Training
                                        </Button>
                                    </Stack>
                                </Stack>

                                <Flex flex={1} justify="center" align="center">
                                    <Box
                                        position={"relative"}
                                        height={"30%"}
                                        rounded={"2xl"}
                                        boxShadow={"2xl"}
                                        width={"full"}
                                        overflow={"hidden"}>
                                        <CountdownTimer
                                            targetDate={raceDate}
                                            marathon="Colfax Marathon"
                                        />
                                    </Box>
                                </Flex>
                            </Stack>
                        </Container>
                    </Box>

                    {/* Slide 2 */}
                    <Box flex="0 0 100%" className="hero" backgroundImage={ "linear-gradient(to right, white,  #e93acc)"}backgroundSize={{base:"cover"}} backgroundPosition={"50% 10%"} backgroundRepeat={"no-repeat"}>
                        <Container maxW="7xl">
                            <Stack
                                align="center"
                                spacing={{ base: 8, md: 10 }}
                                py={{ base: 20, md: 28 }}
                                direction={{ base: "column", lg: "row" }}>
                                <Stack flex={1} spacing={{ base: 5, md: 10 }} textAlign={{base: "center", lg:"left"}} align={{base:"center", lg:"start"}}>
                                    <Heading
                                        lineHeight={1.1}
                                        fontWeight={600}
                                        width={"90%"}
                                        fontSize={{
                                            base: "2xl",
                                            sm: "3xl",
                                            lg: "5xl",
                                        }}>
                                        <Text as="span" color="black">
                                            I am running the <br/> 2026 NYC Marathon
                                        </Text>
                                    </Heading>

                                    <Text
                                        color="black"
                                        fontSize={{ base: "md", lg: "lg" }}>
                                        I am running with the charity team Think Pink Rocks
                                    </Text>

                                    <Stack
                                        spacing={{ base: 4, sm: 6 }}
                                        direction={{
                                            base: "column",
                                            sm: "row",
                                        }}>
                                        <Button rounded="full" size="lg" _hover={{color:"#dd8fd0"}} alignSelf={"center"} backgroundColor={"gray.600"} onClick={()=> window.open('https://fundraisers.nyrr.org/davethinkspink')}>
                                            Donate Today
                                        </Button>
                                        
                                    </Stack>
                                </Stack>

                                <Flex flex={1} justify="center" align="center">
                                    <Box
                                        position={"relative"}
                                        height={"30%"}
                                        rounded={"2xl"}
                                        boxShadow={"2xl"}
                                        width={"auto"}
                                        overflow={"hidden"}>
                                        <Image src={"/images/thinkpink.jpg"} />
                                    </Box>
                                </Flex>
                            </Stack>
                        </Container>
                    </Box>
                        {/* Slide 3 */}
                    {/* <Box flex="0 0 100%">
                        <Container maxW="7xl" py={{ base: 20, md: 28 }}>
                            <Heading size="2xl" mb={6}>
                                Road to Boston
                            </Heading>
                            <Text fontSize="lg">
                                Training with one goal in mind — qualifying for
                                Boston and chasing all six World Major
                                Marathons.
                            </Text>
                        </Container>
                    </Box> */}
                </Flex>
                
            </Box>
            <Box display="flex" justifyContent="center" gap={3} mt={6}>
                {scrollSnaps.map((_, index) => (
                    <Box
                        key={index}
                        w="10px"
                        h="10px"
                        borderRadius="full"
                        cursor="pointer"
                        transition="all 0.3s ease"
                        bg={index === selectedIndex ? "#FC4C02" : "gray.400"}
                        transform={
                            index === selectedIndex ? "scale(1.2)" : "scale(1)"
                        }
                        onClick={() => {
                        if (!emblaApi) return;
                        emblaApi.scrollTo(index) 
                        autoplay.current.stop()
                        autoplay.current.play()
                        }}
                    />
                ))}
            </Box>
        </Box>
    );
}
