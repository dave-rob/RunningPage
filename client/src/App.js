import logo from './logo.svg';
import Navbar from './components/Header/Navbar';
import Title from './components/Header/Title'
import './App.css';

function App() {
  return (
    <div className="Body">
      <Navbar />
      <Title/>
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to relo or somethingad.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
         This wil be a running page
        </a>
      </header> */}
    </div>
  );
}

export default App;
