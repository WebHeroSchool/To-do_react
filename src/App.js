import logo from './logo.svg';
import './App.css';
import {count, length} from './number.js'


const message = 'NUMBER'
const number = 6
const calculate = 2+10
const result = true
const age = 26;
const beverage = (age >= 21) ? "Beer" : "Juice";
let x;

true || (x = 1)




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p style={{
          color: 'blue',
          fontSize: 45
        }}>
          Hello world!
        </p>
        <p>
          {}
        </p>
        <p>
          {message}
        </p>
        <p>
          {number}
        </p>
        <p>
          {calculate}
        </p>
        <p>
          {beverage}
        </p>
        <p>
          {result && 'result is true'}
        </p>
        <p>
          {x}
          count * length = {count*length}
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
