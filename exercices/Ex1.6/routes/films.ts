import { Router } from "express";
import { Film, NewFilm } from "../types";

let getRequestCount = 0;
const films: Film[] = [
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
 
const router = Router();

router.use((req, _res, next) => {
  if (req.method === "GET") {
    getRequestCount++;
  }
  console.log(`GET counter: ${getRequestCount}`);
  next();
});

router.get("/", (req, res) => {
  if (!req.query["minimum-duration"]) {
    return res.json(films);
  }
  const durationMin = Number(req.query["minimum-duration"]);
  const filteredFilms = films.filter((film) => {
    return film.duration >= durationMin;
  });
  return res.json(filteredFilms);
});
router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  const film = films.find((film) => film.id === id);
  if (!film) {
    return res.sendStatus(404);
  }
  return res.json(film);

});

router.post("/", (req, res) => {
  const body: unknown = req.body;
  if (
    !body ||
    typeof body !== "object" ||
    !("title" in body) ||
    !("director" in body) ||
    !("duration" in body) ||
    typeof body.title !== "string" ||
    typeof body.director !== "string" ||
    typeof body.duration !== "number" ||
    !body.title.trim() ||
    !body.director.trim() ||
    body.duration <= 0 ||
    ("budget" in body && (typeof body.budget !== "number" || body.budget < 0))
  ) {
    return res.sendStatus(400);
  }

  const { title, director, duration, budget, description , imageUrl } = body as NewFilm;

  const existingFilm = films.find((film) => film.title === title && film.director === director);

  if (existingFilm) {
    return res.sendStatus(409);
  }

  const nextId =
    films.reduce((maxId, film) => (film.id > maxId ? film.id : maxId), 0) +
    1;

  const newFilm: Film = {
    id: nextId,
    title,
    director,
    duration,
    budget,
    description,
    imageUrl
  };

  films.push(newFilm);
  return res.json(newFilm);
});

router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = films.findIndex((film) => film.id === id);
  if (index === -1) {
    return res.sendStatus(404);
  }
  const deletedElements = films.splice(index, 1); // splice() returns an array of the deleted elements
  return res.json(deletedElements[0]);
});

router.patch("/:id", (req, res) => {
  const id = Number(req.params.id);
  const film = films.find((film) => film.id === id);
  if (!film) {
    return res.sendStatus(404);
  }

  const body: unknown = req.body;

  if (
    !body ||
    typeof body !== "object" ||
    ("title" in body &&
      (typeof body.title !== "string" || !body.title.trim())) ||
    ("director" in body &&
      (typeof body.director !== "string" || !body.director.trim())) ||
    ("duration" in body &&
      (typeof body.duration!== "number" || body.duration <= 0)) ||
    ("budget" in body && (typeof body.budget !== "number" || body.budget<= 0))
  ) {
    return res.sendStatus(400);
  }

  const { title, director, duration, budget, description, imageUrl }: Partial<NewFilm> = body;

  if (title) {
    film.title = title;
  }
  if (director) {
    film.director = director;
  }
  if (duration) {
    film.duration = duration;
  }
  if (budget) {
    film.budget = budget;
  }
  if (description) {
    film.description = description;
  }
  if (imageUrl) {
    film.imageUrl = imageUrl;
  }

  return res.json(film);
});

router.put("/:id", (req, res) => {
  const id = Number(req.params.id);
  
  if (id <= 0) {
    return res.sendStatus(400);
  }

  const body: unknown = req.body;

  if (
    !body ||
    typeof body !== "object" ||
    ("title" in body &&
      (typeof body.title !== "string" || !body.title.trim())) ||
    ("director" in body &&
      (typeof body.director !== "string" || !body.director.trim())) ||
    ("duration" in body &&
      (typeof body.duration!== "number" || body.duration <= 0)) ||
    ("budget" in body && (typeof body.budget !== "number" || body.budget<= 0))
  ) {
    return res.sendStatus(400);
  }

  const { title, director, duration, budget, description, imageUrl } = body as NewFilm;

  const filmIndex = films.findIndex((film) => film.id === id);

  if (filmIndex !== -1) {
    films[filmIndex] = {
      id,
      title,
      director,
      duration,
      budget,
      description: description || "", 
      imageUrl: imageUrl || ""
    };
    return res.json(films[filmIndex]);
  } else {
    const newFilm: Film = {
      id,
      title,
      director,
      duration,
      budget,
      description: description || "", 
      imageUrl: imageUrl || ""
    };

    films.push(newFilm);
    return res.json(newFilm);
  }  
});

export default router;
