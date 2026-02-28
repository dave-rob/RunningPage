// import React from 'react';
// import '../../styles/Landing.css' // Import the CSS file
// import { BrowserRouter,Link } from 'react-router-dom'; // Use Link for navigation
// import { Image } from '@chakra-ui/react';

// const Navbar = () => {
//   return (
//     <BrowserRouter>
//       <header className="header">
//       <div className="logo">
//         <Link to="/"><Image src='/images/runlogo.png'width={"100px"}></Image></Link>
//       </div>
//       <nav className="main-menu">
//         <ul>
//           <li><Link to="/about">About</Link></li>
//           <li><Link to="/contact">Contact</Link></li>
//           <li><Link to="/login">Past Races</Link></li>
//         </ul>
//       </nav>
//     </header>
//     </BrowserRouter>

//   );
// };

// export default Navbar;

// import {
//   Box,
//   Flex,
//   HStack,
//   IconButton,
//   Image,
//   Link as ChakraLink,
//   VStack,
//   useBreakpointValue,
//   Drawer,
// } from "@chakra-ui/react";
// import { Menu, X } from "lucide-react";
// import { Link } from "react-router-dom";

// export default function Navbar() {
//   const isMobile = useBreakpointValue({ base: true, md: false });

//   return (
//     <Box bg="gray.900" px={6} py={4} boxShadow="md">
//       <Flex align="center" justify="space-between">
//         {/* Logo */}
//         <Link to="/">
//           <Image src="/images/runlogo.png" width="100px" />
//         </Link>

//         {/* Desktop Menu */}
//         {!isMobile && (
//           <HStack gap={8}>
//             <ChakraLink as={Link} to="/about" color="white">
//               About
//             </ChakraLink>
//             <ChakraLink as={Link} to="/contact" color="white">
//               Contact
//             </ChakraLink>
//             <ChakraLink as={Link} to="/login" color="white">
//               Past Races
//             </ChakraLink>
//           </HStack>
//         )}

//         {/* Mobile Drawer */}
//         {isMobile && (
//           <Drawer.Root placement="right">
//             <Drawer.Trigger asChild>
//               <IconButton
//                 aria-label="Open menu"
//                 variant="ghost"
//                 color="white"
//               >
//                 <Menu size={20} />
//               </IconButton>
//             </Drawer.Trigger>

//             <Drawer.Backdrop />
//             <Drawer.Content bg="gray.900" p={6}>
//               <Flex justify="flex-end">
//                 <Drawer.CloseTrigger asChild>
//                   <IconButton
//                     aria-label="Close menu"
//                     variant="ghost"
//                     color="white"
//                   >
//                     <X size={20} />
//                   </IconButton>
//                 </Drawer.CloseTrigger>
//               </Flex>

//               <VStack gap={6} align="start" mt={8}>
//                 <ChakraLink as={Link} to="/about" color="white">
//                   About
//                 </ChakraLink>
//                 <ChakraLink as={Link} to="/contact" color="white">
//                   Contact
//                 </ChakraLink>
//                 <ChakraLink as={Link} to="/login" color="white">
//                   Past Races
//                 </ChakraLink>
//               </VStack>
//             </Drawer.Content>
//           </Drawer.Root>
//         )}
//       </Flex>
//     </Box>
//   );
// }

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
          <ChakraLink as={Link} to="/about" color="white" _hover={{ color: "#FC4C02" }}>
            About
          </ChakraLink>
          <ChakraLink as={Link} to="/contact" color="white" _hover={{ color: "#FC4C02" }}>
            Contact
          </ChakraLink>
          <ChakraLink as={Link} to="/login" color="white" _hover={{ color: "#FC4C02" }}>
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
            <ChakraLink as={Link} to="/about" color="white" onClick={() => setOpen(false)} _hover={{ color: "#FC4C02" }}>
              About
            </ChakraLink>
            <ChakraLink as={Link} to="/contact" color="white" onClick={() => setOpen(false)} _hover={{ color: "#FC4C02" }}>
              Contact
            </ChakraLink>
            <ChakraLink as={Link} to="/login" color="white" onClick={() => setOpen(false)} _hover={{ color: "#FC4C02" }}>
              Past Races
            </ChakraLink>
          </VStack>
        </Box>
      </Presence>
    </Box>
  );
}