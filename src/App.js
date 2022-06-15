import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const apiKey = process.env.REACT_APP_API_KEY;

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://newsapi.org/v2/everything?q=tesla&from=2022-05-15&sortBy=publishedAt&apiKey=${apiKey}`)
      .then(response => response.json())
      .then(json => console.log(json))
  }, [])

  console.log(data);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
