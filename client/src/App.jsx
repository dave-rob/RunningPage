
import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import About from './pages/About';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';

function App() {
  const raceDate = '2026-05-17T06:00:00'
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/About" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
