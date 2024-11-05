import sound from "../../assets/sounds/Infecticide-11-Pizza-Spinoza.mp3";
import "./Main.css";
import PizzaMenu from "./PizzaMenu.tsx";
import { SyntheticEvent, useState, useRef, useEffect } from "react";
import { Pizza } from "../../types.ts";


const defaultPizzas = [
  {
    id: 1,
    title: "4 fromages",
    content: "Gruyère, Sérac, Appenzel, Gorgonzola, Tomates",
  },
  {
    id: 2,
    title: "Vegan",
    content: "Tomates, Courgettes, Oignons, Aubergines, Poivrons",
  },
  {
    id: 3,
    title: "Vegetarian",
    content: "Mozarella, Tomates, Oignons, Poivrons, Champignons, Olives",
  },
  {
    id: 4,
    title: "Alpage",
    content: "Gruyère, Mozarella, Lardons, Tomates",
  },
  {
    id: 5,
    title: "Diable",
    content: "Tomates, Mozarella, Chorizo piquant, Jalapenos",
  },
];


const Main = () => {

  const [pizza, setPizza] = useState("");
  const [description, setDescription] = useState("");
  const [pizzas, setPizzas] = useState(defaultPizzas);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleHeaderClick = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      if (isPlaying) {
        audio.play();
      } else {
        audio.pause();
      }
    }
  }, [isPlaying]);

  
  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    console.log("submit:", form.pizza.value, form.description.value);
    const newPizza = {
      id: nextPizzaId(pizzas),
      title: pizza,
      content: description,
    };
    
    setPizzas([...pizzas, newPizza]);
  };

  const handlePizzaChange = (e: SyntheticEvent) => {
    const pizzaInput = e.target as HTMLInputElement;
    console.log("change in pizzaInput:", pizzaInput.value);
    setPizza(pizzaInput.value);
  };

  const handleDescriptionChange = (e: SyntheticEvent) => {
    const descriptionInput = e.target as HTMLInputElement;
    console.log("change in descriptionInput:", descriptionInput.value);
    setDescription(descriptionInput.value);
  };

  return (
    <main>
      <header onClick={handleHeaderClick}>  Click here to start/stop the music</header>
      <p>My HomePage</p>
      <p>
        Because we love JS, you can also click on the header to stop / start the
        music ; )
      </p>
      <audio id="audioPlayer" ref={audioRef} controls>
        <source src={sound} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <PizzaMenu pizzas={pizzas}/>
  
      <div>
        <br />
        <form onSubmit={handleSubmit}>
          <label htmlFor="pizza">Pizza</label>
          <input value={pizza}  type="text" id="pizza" name="pizza" onChange={handlePizzaChange}
            required />
          <label htmlFor="description">Description</label>
          <input value={description} type="text" id="description" name="description"   onChange={handleDescriptionChange}
            required/>
          <button type="submit">Ajouter</button>
        </form>
      </div>
    </main>
  );
};

const nextPizzaId = (pizzas: Pizza[]) => {
  return pizzas.reduce((maxId, pizza) => Math.max(maxId, pizza.id), 0) + 1;
};

export default Main;
