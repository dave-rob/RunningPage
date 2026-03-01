import {
    Box,
    Container,
    Flex,
    Text,
    HStack,
    VStack,
    Image,
    Link as ChakraLink,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Instagram } from "lucide-react";

export default function Footer() {
    return (
        <Box bg="gray.900" color="gray.400" mt={20} py={5}>
            <Container maxW="6xl">
                <Flex
                    direction={{ base: "column", md: "row" }}
                    justify="space-between"
                    align={{ base: "center", md: "flex-start" }}
                    gap={8}>
                    {/* Left Side */}
                    <VStack align={{ base: "center", md: "start" }} gap={2}>
                        <Text fontSize="lg" fontWeight="bold" color="white">
                            Running Journey
                        </Text>
                        <Text fontSize="sm">
                            Chasing the World Majors. Qualifying for Boston.
                        </Text>
                    </VStack>

                    {/* Social Icons */}
                    <HStack gap={4}>
                        <ChakraLink
                            href="https://www.instagram.com/daverunsagain/"
                            isExternal
                            _hover={{ color: "#FC4C02" }}
                            _focus={{ outline: "none" }}
                            color="gray"
                            target="_blank">
                            <Instagram size={20} />
                        </ChakraLink>
                        <ChakraLink
                            href="https://www.strava.com/athletes/124407344"
                            isExternal
                            _hover={{ fill: "#FC4C02" }}
                            _focus={{ outline: "none" }}
                            fill={"gray"}
                            target="_blank">
                            <svg
                                width="20px"
                                height="20px"
                                viewBox="0 0 32 32"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.516 23.927l-2.786-5.49h-4.083l6.87 13.563 6.865-13.563h-4.083zM13.953 10.974l3.781 7.464h5.563l-9.344-18.438-9.333 18.438h5.557z" />
                            </svg>
                        </ChakraLink>
                    </HStack>
                </Flex>

                {/* Bottom Line */}
                <Box
                    mt={10}
                    pt={6}
                    borderTop="1px solid"
                    borderColor="gray.700"
                    textAlign="center">
                    <Text fontSize="sm">
                        © {new Date().getFullYear()} Running Journey. All rights
                        reserved.
                    </Text>
                </Box>
            </Container>
        </Box>
    );
}
