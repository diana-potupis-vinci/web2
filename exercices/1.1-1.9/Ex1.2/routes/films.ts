import { Router } from "express";
import { Film } from "../types";

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

router.get("/", (_req, res) => {
  return res.json(films);
});

export default router;
