import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function App() {
  const[val, setVal] = useState(0)

  function increment() {
    setVal(val+1)
  }

  function decrement() {
    setVal(val-1)
  }
  return (
    <>
    <h1><center>Counter-App</center></h1>

    {val}
    <button onClick={increment}>Increase</button>
    <button onClick={decrement}>Decrease</button>
    </>
  );
}

export default App;
