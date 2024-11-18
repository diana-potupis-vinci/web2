import { useOutletContext, useParams } from "react-router-dom";
import { MovieContext } from "../../types";

const MovieListPage = () => {
  const { id } = useParams();
  const { movies }: MovieContext = useOutletContext();

  const movie = movies.find((movie) => movie.id === parseInt(id!));
  if (!movie) {
    return <h1>Movie not found</h1>;
  }

  return (
    <div>
      <h1>My Favorite Movies</h1>
      <h4> {movie.title} </h4>
      <p>Director: {movie.director}</p>
      <p>Duration: {movie.duration} minutes</p>
      <p>Description: {movie.description}</p>
      <p>Budget: {movie.budget}</p>
      <p>Link: {movie.link}</p>
    </div>
  );
};

export default MovieListPage;
