import logo from './logo.svg';
import Navbar from './components/Landing/Navbar';
import Hero from './components/Landing/Hero'
import CountdownTimer from './components/Landing/Countdown';
import RecentRuns from './components/Landing/Recent';
import './App.css';
import "leaflet/dist/leaflet.css";

function App() {
  const raceDate = '2026-05-17T06:00:00'
  return (
    <div>
      <Navbar />
      <Hero/>
      <RecentRuns />
      <CountdownTimer targetDate={ raceDate } marathon={"Colfax Marathon"}/>
    </div>
  );
}

export default App;
