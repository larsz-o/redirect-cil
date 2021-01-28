import logo from './bear.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Looking for the <a
          className="App-link"
          href="https://chaplaincy-innovation-lessons.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Chaplaincy Innovation Lab lessons?
        </a> </p>
      </header>
    </div>
  );
}

export default App;
