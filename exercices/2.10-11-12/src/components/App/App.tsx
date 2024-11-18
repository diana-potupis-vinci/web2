import { Outlet } from "react-router-dom";
import Header from "../Layot/Header.tsx";
import NavBar from "../Layot/NavBar.tsx";
import Footer from "../Layot/Footer.tsx";
import { MovieContext, NewMovie, Movie } from "../../types.ts";
import { useState } from "react";

const initialMovies = [
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

const App = () => {
  const [movies, setMovies] = useState<Movie[]>(initialMovies);

  const addMovie = (newMovie: NewMovie) => {
    const movieAdded = { ...newMovie, id: nextMovieId(movies) };
    setMovies([...movies, movieAdded]);
  };

  const fullMovieContext: MovieContext = {
    movies,
    setMovie: setMovies,
    addMovie,
  };

  return (
    <div>
      <Header />
      <NavBar />
      <main>
        <Outlet context={fullMovieContext} />
      </main>
      <Footer />
    </div>
  );
};

const nextMovieId = (movies: Movie[]) => {
  const ids = movies.map((movie) => movie.id);
  return Math.max(...ids) + 1;
};

export default App;
