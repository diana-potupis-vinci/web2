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
  let filteredFilms = [...films];

  if (req.query["minimum-duration"]) {
  const durationMin = Number(req.query["minimum-duration"]);
  filteredFilms = films.filter((film) => film.duration >= durationMin);
  }

   if (req.query["minimum-budget"]) {
    const budgetMin = Number(req.query["minimum-budget"]);
    filteredFilms = filteredFilms.filter((film) => typeof film.budget != "undefined" && film.budget >= budgetMin);
  }

  if (req.query["startsWith"]) {
    const startsWith = String(req.query["startsWith"]).toLowerCase();
    filteredFilms = filteredFilms.filter((film) =>
      film.title.toLowerCase().startsWith(startsWith)
    );
  }
  if(req.query["limit"] && req.query["offset"]) {
    let limit: number = Number(req.query["limit"]);
    let offset: number = Number(req.query["offset"]);

    const start = offset > 0 ? offset * limit : 0;
    const end = start + limit;

    filteredFilms = filteredFilms.slice(start, end);
  }
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

export default router;
