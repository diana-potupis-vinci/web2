import { useState } from "react";
import RandomDog from "../RandomDog";
import "./App.css";

function App() {
  const [keys, setKeys] = useState([0, 1, 2]);

  const fetchImages = () => {
    setKeys([Math.random(), Math.random(), Math.random()]);
  };

  return (
    <div>
      <h1>Random Dog</h1>
      <RandomDog key={keys[0]} />
      <RandomDog key={keys[1]} />
      <RandomDog key={keys[2]} />
      <div>
        <button onClick={fetchImages}>Fetch!</button>
      </div>
    </div>
  );
}

export default App;
