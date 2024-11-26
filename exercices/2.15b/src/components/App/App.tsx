import { Outlet } from "react-router-dom";
import Header from "../Layot/Header.tsx";
import NavBar from "../Layot/NavBar.tsx";
import Footer from "../Layot/Footer.tsx";
import { MovieContext, NewMovie, Movie } from "../../types.ts";
import { useEffect, useState } from "react";

const App = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const data = await getAllMovies();
      setMovies(data);
    } catch (error) {
      console.log(error);
    }
  };

  async function getAllMovies() {
    try {
      const response = await fetch("/api/films");
      if (!response.ok) {
        throw new Error(
          `fetch error : ${response.status} : ${response.statusText}`
        );
      }
      return await response.json();
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  const addMovie = async (newMovie: NewMovie) => {
    try {
      const options = {
        method: "POST",
        body: JSON.stringify(newMovie),
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await fetch("/api/films", options);
      if (!response.ok) {
        throw new Error(
          `fetch error : ${response.status} : ${response.statusText}`
        );
      }
      const movieAdded = await response.json();
      setMovies([...movies, movieAdded]);
    } catch (err) {
      console.error(err);
    }
  };

  const deleteMovie = async (id: number) => {
    try {
      const options = {
        method: "DELETE",
      };
      const response = await fetch(`/api/films/${id}`, options);
      if (!response.ok) {
        throw new Error(
          `fetch error : ${response.status} : ${response.statusText}`
        );
      }
      const movieDeleted = await response.json();
      setMovies(movies.filter((movie) => movie.id !== movieDeleted.id));
    } catch (err) {
      console.error(err);
    }
  };

  const fullMovieContext: MovieContext = {
    movies,
    setMovie: setMovies,
    addMovie,
    deleteMovie,
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

export default App;
