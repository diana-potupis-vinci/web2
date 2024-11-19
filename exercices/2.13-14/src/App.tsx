import { useEffect, useState } from "react";
interface Joke {
  category: string;
  joke: string;
}

function App() {
  const [joke, setJoke] = useState<Joke | null>(null);
  useEffect(() => {
    fetch("https://v2.jokeapi.dev/joke/Any?type=single")
      .then((response) => {
        if (!response.ok)
          throw new Error(
            `fetch error : ${response.status} : ${response.statusText}`
          );
        return response.json();
      })
      .then((joke) => setJoke(joke))
      .catch((err) => {
        console.error("HomePage::error: ", err);
      });
  }, []);
  console.log(joke);
  if (!joke) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h1>Random Joke</h1>
      <div>
        <h2> Category: {joke.category}</h2>
        <p> Joke: {joke.joke}</p>
      </div>
    </div>
  );
}

export default App;
