import MovieList from "../MovieList";
import { useOutletContext } from "react-router-dom";
import { MovieContext } from "../../types";

const MovieListPage = () => {
  const { movies }: MovieContext = useOutletContext();

  return (
    <div>
      <h1>My Favorite Movies</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default MovieListPage;
