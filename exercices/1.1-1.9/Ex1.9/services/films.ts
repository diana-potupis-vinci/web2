import path from "node:path";
import { Film, NewFilm } from "../types";
import { parse, serialize } from "../utils/json";
const jsonDbPath = path.join(__dirname, "/../data/films.json");


const defaultFilms: Film[] = [
    {
      id: 1,
      title: "Inception",
      director: "Christopher Nolan",
      duration: 148,
      budget: 160,
      description: "A mind-bending thriller that dives into the world of dreams.",
      imageUrl: "https://example.com/inception.jpg"
    },
    {
      id: 2,
      title: "The Matrix",
      director: "The Wachowskis",
      duration: 136,
      budget: 63,
      description: "A computer hacker learns about the true nature of reality.",
      imageUrl: "https://example.com/matrix.jpg"
    },
    {
      id: 3,
      title: "Parasite",
      director: "Bong Joon-ho",
      duration: 132,
      budget: 11,
      description: "A dark satire that explores class divide in modern-day Korea.",
      imageUrl: "https://example.com/parasite.jpg"
    }
  ];
  function readAllFilms(durationMin: number): Film[] {
    const films= parse(jsonDbPath, defaultFilms);
  if (!durationMin) {
    return films;
  }

  const duration= Number(durationMin);

  const filteredDrinks = films.filter((film) => {
    return film.duration >= duration;
  });
  return filteredDrinks;
  } 

  function readOneFilm(id: number): Film | undefined {
    const films = parse(jsonDbPath, defaultFilms);
    const film = films.find((film) => film.id === id);
    if (!film) {
      return undefined;
    }
    return film;
  }
  

  function createOneFilm(newFilm: NewFilm): Film | undefined {
    const films = parse(jsonDbPath, defaultFilms);
  
    const nextId =
      films.reduce((maxId, film) => (film.id > maxId ? film.id : maxId), 0) +
      1;
      
  
    const createdFilm = {
      id: nextId,
      ...newFilm,
    };

    
    if (createdFilm.title && createdFilm.director) {
      const existingFilm = films.find(
        (f) => f.title === newFilm.title && f.director === newFilm.director 
      );
      if (existingFilm) {
        return undefined;
      }
    }
  
    films.push(createdFilm);
    serialize(jsonDbPath, films);
  
    return createdFilm;
  }
  



  function deleteOneFilm(filmId: number): Film | undefined {
    const films = parse(jsonDbPath, defaultFilms);
    const index = films.findIndex((film) => film.id === filmId);
    if (index === -1) {
      return undefined;
    }
  
    const deletedElements = films.splice(index, 1);
    serialize(jsonDbPath, films);
    return deletedElements[0];
  }
  
  function updateOneFilm(
    filmId: number,
    newFilm: Partial<NewFilm>
  ): Film | undefined {
    const films = parse(jsonDbPath, defaultFilms);
    const film = films.find((film) => film.id === filmId);
    if (!film
    ) {
      return undefined;
    }
    if (newFilm.title && newFilm.director) {
      const existingFilm = films.find(
        (f) => f.title === newFilm.title && f.director === newFilm.director && f.id !== filmId);
      if (existingFilm) {
        return undefined;
      }
    }
  
  
    if (newFilm.title !== undefined) {
        film.title = newFilm.title!;
      }
      if (newFilm.director !== undefined) {
        film.director = newFilm.director!;
      }
      if (newFilm.duration !== undefined) {
        film.duration = newFilm.duration!;
      }
      if (newFilm.budget !== undefined) {
        film.budget = newFilm.budget!;
      }
      if (newFilm.description !== undefined) {
        film.description = newFilm.description!;
      }
      if (newFilm.imageUrl !== undefined) {
        film.imageUrl = newFilm.imageUrl!;
      }
      serialize(jsonDbPath, films);
    return film;
  }

  function replaceOneFilm(filmId: number, newFilm: NewFilm): Film | undefined {
    const films = parse(jsonDbPath, defaultFilms);
    const index = films.findIndex((film) => film.id === filmId);
    if (index === -1) {
      return undefined;
    }

    if (newFilm.title && newFilm.director) {
      const existingFilm = films.find(
        (f) => f.title === newFilm.title && f.director === newFilm.director && f.id !== filmId
      );
      if (existingFilm) {
        return undefined;
      }
    }
    
    const updatedFilm = { id: filmId, ...newFilm };
    films[index] = updatedFilm;
    serialize(jsonDbPath, films);
    return updatedFilm;
  }
  
  export {
    readAllFilms,
    readOneFilm,
    createOneFilm,
    deleteOneFilm,
    updateOneFilm,
    replaceOneFilm
  };
