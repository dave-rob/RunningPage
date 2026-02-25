import logo from './logo.svg';
import Navbar from './components/Landing/Navbar';
import Hero from './components/Landing/Hero'
import CountdownTimer from './components/Landing/Countdown';
import './App.css';

function App() {
  const raceDate = '2026-05-17T09:00:00'
  return (
    <div>
      <Navbar />
      <Hero/>
      <CountdownTimer targetDate={ raceDate } marathon={"Colfax Marathon"}/>
    </div>
  );
}

export default App;
