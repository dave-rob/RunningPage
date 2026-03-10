
import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import About from './pages/About';
import Colfax from './pages/Colfax';
import Boulder from './pages/Marathon/boulderthon';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import RaceHistory from './pages/RaceHistory';
import { Box, Flex } from '@chakra-ui/react';

function App() {
  const raceDate = '2026-05-17T06:00:00'
  return (
    <Flex minHeight={"100vh"} direction={"column"}>
      <Navbar />
      <Box flex={1}>
      <Routes flex={1}>
        <Route path="/" element={<Landing />} />
        <Route path="/About" element={<About />} />
        <Route path="/Marathon/Colfax" element={<Colfax race={"Colfax"}/>} />
        <Route path="/Pastraces" element={<RaceHistory/>} />
        <Route path="/Marathon/Boulderthon" element={<Boulder race="Boulder"/>} />
      </Routes>
      </Box>
      <Footer />
    </Flex>
  );
}

export default App;
