import { Movie } from "../types.ts";

interface MovieProps {
  movies: Movie[];
}
const MovieList = ({ movies }: MovieProps) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Movie</th>
          <th>Director</th>
          <th>Duration</th>
          <th>Description</th>
          <th>Budget</th>
          <th>Link</th>
        </tr>
      </thead>
      <tbody>
        {movies.map((movie) => (
          <tr key={movie.id}>
            <td>{movie.title}</td>
            <td>{movie.director}</td>
            <td>{movie.duration}</td>
            <td>{movie.description}</td>
            <td>{movie.budget}</td>
            <td>
              {movie.link ? (
                <a href={movie.link} target="_blank" rel="noopener noreferrer">
                  Visit
                </a>
              ) : (
                "No link"
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MovieList;
