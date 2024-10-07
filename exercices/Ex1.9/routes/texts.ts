import { Router } from "express";
import {NewText } from "../types";
import {  readAllTexts, readOneText,createOneText, deleteOneText, updateOneText } from "../services/texts";
const router = Router();

router.get("/", (req, res) => {
    const level = req.query.level as string;
    const texts = readAllTexts(level);
    return res.json(texts);
  });

router.get("/:id", (req, res) => {
    const id = req.params.id;
    const text = readOneText(id);
    if (!text) {
      return res.sendStatus(404);
    }
    return res.json(text);
  });

  