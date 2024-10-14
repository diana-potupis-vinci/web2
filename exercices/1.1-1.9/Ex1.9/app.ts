import express, { ErrorRequestHandler } from "express";

import filmRouter from "./routes/films";
import textRouter from "./routes/texts";

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/films", filmRouter);
app.use("/texts", textRouter);

const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
  console.error(err.stack);
  return res.status(500).send("Something broke!");
};

app.use(errorHandler);
  
export default app;

