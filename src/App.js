import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Deployed React Using <code>Github Actions By </code> Qausian Manzoor 
        </p>
        <a
          className="App-link"
          href="https://github.com/Qausain"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Profile
        </a>
      </header>
    </div>
  );
}

export default App;
