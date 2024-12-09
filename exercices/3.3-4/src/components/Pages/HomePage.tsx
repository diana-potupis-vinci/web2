import { useOutletContext } from "react-router-dom";
import { MovieContext } from "../../types";
import { Link } from "react-router-dom";
const HomePage = () => {
  const { movies, deleteMovie }: MovieContext = useOutletContext();

  return (
    <div>
      <h2>Welcome to iMovies</h2>
      <p>
        This application allows you to view movies from UGC cinemas and keep
        track of your favorite movies!
      </p>
      <h3>My Favorite Movies</h3>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <h4>
              <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
              <button onClick={() => deleteMovie(movie.id)}>Remove</button>
            </h4>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
