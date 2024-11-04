import MovieList from "./MovieList";
import { Movie } from "../../types";
import { SyntheticEvent, useState } from "react";

const defaultMovies: Movie[] = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    director: "Frank Darabont",
    duration: 142,
    description: "Two imprisone",
    budget: undefined,
    link: undefined,
  },
  {
    id: 2,
    title: "The Godfather",
    director: "Francis Ford Coppola",
    duration: 175,
    description:
      "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    budget: 6000000,
    link: undefined,
  },
  {
    id: 3,
    title: "The Dark Knight",
    director: "Christopher Nolan",
    duration: 152,
    description:
      "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    budget: 185000000,
    link: "https://www.imdb.com/title/tt0468569/",
  },
  {
    id: 4,
    title: "12 Angry",
    director: "Sidney Lumet",
    duration: 96,
    description:
      "A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.",
    budget: undefined,
    link: "https://www.imdb.com/title/tt0050083/",
  },
  {
    id: 5,
    title: "Schindler's List",
    director: "Steven Spielberg",
    duration: 195,
    description:
      "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution",
    budget: 22000000,
    link: undefined,
  },
];

const Main = () => {
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [duration, setDuration] = useState(0);
  const [description, setDescription] = useState<string | undefined>("");
  const [budget, setBudget] = useState<number | undefined>(0);
  const [link, setLink] = useState<string | undefined>("");
  const [movies, setMovies] = useState(defaultMovies);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    const newMovie = {
      id: movies.length + 1,
      title: title,
      director: director,
      duration: duration,
      description: description || undefined,
      budget: budget || undefined,
      link: link || undefined,
    };
    setMovies([...movies, newMovie]);
  };

  const handleTitleChange = (e: SyntheticEvent) => {
    const titleInput = e.target as HTMLInputElement;
    console.log("change in titleInput:", titleInput.value);
    setTitle(titleInput.value);
  };

  const handleDirectorChange = (e: SyntheticEvent) => {
    const directorInput = e.target as HTMLInputElement;
    console.log("change in directorInput:", directorInput.value);
    setDirector(directorInput.value);
  };

  const handleDurationChange = (e: SyntheticEvent) => {
    const durationInput = e.target as HTMLInputElement;
    console.log("change in durationInput:", durationInput.value);
    setDuration(parseInt(durationInput.value));
  };

  const handleDescriptionChange = (e: SyntheticEvent) => {
    const descriptionInput = e.target as HTMLInputElement;
    console.log("change in descriptionInput:", descriptionInput.value);
    setDescription(descriptionInput.value);
  };

  const handleBudgetChange = (e: SyntheticEvent) => {
    const budgetInput = e.target as HTMLInputElement;
    console.log("change in budgetInput:", budgetInput.value);
    setBudget(budgetInput.value ? parseInt(budgetInput.value) : undefined);
  };

  const handleLinkChange = (e: SyntheticEvent) => {
    const linkInput = e.target as HTMLInputElement;
    console.log("change in linkInput:", linkInput.value);
    setLink(linkInput.value);
  };

  return (
    <main>
      <h1>Movies</h1>
      <MovieList movies={movies} />
      <form onSubmit={handleSubmit}>
        <h2>Add a movie</h2>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={title}
            onChange={handleTitleChange}
            required
          />
        </label>
        <label>
          Director:
          <input
            type="text"
            name="director"
            value={director}
            onChange={handleDirectorChange}
            required
          />
        </label>
        <label>
          Duration:
          <input
            type="number"
            name="duration"
            value={duration}
            onChange={handleDurationChange}
            required
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            name="description"
            value={description}
            onChange={handleDescriptionChange}
          />
        </label>
        <label>
          Budget:
          <input
            type="number"
            name="budget"
            value={budget}
            onChange={handleBudgetChange}
          />
        </label>
        <label>
          Link:
          <input
            type="text"
            name="link"
            value={link}
            onChange={handleLinkChange}
          />
        </label>
        <button type="submit">Add movie</button>
      </form>
    </main>
  );
};

export default Main;
