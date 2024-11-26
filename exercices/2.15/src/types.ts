interface Movie {
  id: number;
  title: string;
  director: string;
  duration: number;
  description?: string;
  budget?: number;
  link?: string;
}

interface MovieContext {
  movies: Movie[];
  setMovie: (movies: Movie[]) => void;
  addMovie: (newMovie: NewMovie) => void;
}

type NewMovie = Omit<Movie, "id">;
export type { Movie, NewMovie, MovieContext };
