import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

const Test = () => <div>Testing</div>
const Title = ({text}) => <div>{text}</div>

function App() {
  const [on, setOn] = useState(false)
  const [input, setInput] = useState('')
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
      <Title text="some title" />
      <ul>
        <li>First</li>
        <li data-test-id="specific-li">Second</li>
        <li>Third</li>
      </ul>
      <ol className="me">
        <li>First</li>
        <li>Second</li>
      </ol>
      <span className='button-state'>{on ? 'Yes!' : 'No!'}</span>
      <button onClick={() => setOn(true)}>Click</button>
      <h2>{input}</h2>
        <input onChange={(e) => setInput(e.currentTarget.value)} type='text' />
      <Test />
    </div>
  );
}

export const Link = ({address, hide})  => (
hide ? null : <a href={address}>Click</a>
)

export default App;
