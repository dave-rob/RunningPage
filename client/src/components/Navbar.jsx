import {
  Box,
  Flex,
  HStack,
  VStack,
  IconButton,
  Image,
  Link as ChakraLink,
  Presence,
} from "@chakra-ui/react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <Box bg="gray.900" boxShadow="md">
      <Flex
        align="center"
        justify="space-between"
        px={6}
        // py={4}
      >
        {/* Logo */}
        <Link to="/">
          <Image src="/images/runlogo.png" width="100px" />
        </Link>

        {/* Desktop Menu */}
        <HStack
          gap={8}
          display={{ base: "none", md: "flex" }}
        >
          <ChakraLink as={Link} to="/about" color="white" _hover={{ color: "#FC4C02" }} _focus={{outline:"none"}}>
            About
          </ChakraLink>
          <ChakraLink as={Link} to="/marathon/colfax" color="white" _hover={{ color: "#FC4C02" }} _focus={{outline:"none"}}>
            Colfax Marathon
          </ChakraLink>
          <ChakraLink as={Link} to="/pastraces" color="white" _hover={{ color: "#FC4C02" }} _focus={{outline:"none"}}>
            Past Races
          </ChakraLink>
        </HStack>

        {/* Mobile Toggle */}
        <Box display={{ base: "block", md: "none" }}>
          <IconButton
            aria-label="Toggle menu"
            variant="ghost"
            color="white"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </IconButton>
        </Box>
      </Flex>

      {/* Mobile Dropdown */}
      <Presence present={open}>
        <Box
          display={{ base: "block", md: "none" }}
          bg="gray.800"
          px={6}
          pb={6}
        >
          <VStack align="start" gap={4}>
            <ChakraLink as={Link} to="/about" color="white" onClick={() => setOpen(false)} _hover={{ color: "#FC4C02" }} _focus={{outline:"none"}}>
              About
            </ChakraLink>
            <ChakraLink as={Link} to="/marathon/colfax" color="white" onClick={() => setOpen(false)} _hover={{ color: "#FC4C02" }} _focus={{outline:"none"}}>
              Colfax Marathon
            </ChakraLink>
            <ChakraLink as={Link} to="/pastraces" color="white" onClick={() => setOpen(false)} _hover={{ color: "#FC4C02" }} _focus={{outline:"none"}}>
              Past Races
            </ChakraLink>
          </VStack>
        </Box>
      </Presence>
    </Box>
  );
}