import { useState } from "react";
export interface Movie {
  title: string;
  director: string;
  description?: string;
}

interface CinemaProps {
  name: string;
  movies: Movie[];
}

const Movie = ({ name, movies }: CinemaProps) => {
  const [clickedIndex, setClickIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setClickIndex(clickedIndex === index ? null : index);
  };

  return (
    <div>
      <h2>{name}</h2>
      <ul>
        {movies.map((movie, index) => (
          <li key={index}>
            <strong onClick={() => handleClick(index)}>{movie.title}</strong> -
            Réalisateur : {movie.director}
            {clickedIndex === index && <p>{movie.description}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movie;
