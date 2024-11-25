import { useState, useEffect } from "react";
import RandomDog from "../RandomDog";
import "./App.css";

function App() {
  const [keys, setKeys] = useState([0, 1, 2]);

  useEffect(() => {
    const interval = setInterval(() => {
      setKeys([Math.random(), Math.random(), Math.random()]);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Random Dog</h1>
      <RandomDog key={keys[0]} />
      <RandomDog key={keys[1]} />
      <RandomDog key={keys[2]} />
    </div>
  );
}

export default App;
