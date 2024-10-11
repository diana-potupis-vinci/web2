import { Router } from "express";
import {NewText } from "../types";
import {  readAllTexts, readOneText,createOneText, deleteOneText, updateOneText } from "../services/texts";
const router = Router();

router.get("/", (req, res) => {
    const filtreLevel = req.query["level"];
    const texts = readAllTexts(filtreLevel as string);
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

  router.post("/", (req, res) => {
    const body: unknown = req.body;
    if (!body ||
      typeof body !== "object" ||
      !("content" in body) ||
      !("level" in body) ||
      typeof body.content !== "string" ||
      typeof body.level !== "string") {
      return res.sendStatus(400);
    }
    const { content, level } = body as NewText;
    const createdText = createOneText({ content, level });
    return res.json(createdText);
  });

  router.delete("/:id", (req, res) => {
    const id = req.params.id;
    console.log(`Received request for ID: ${id}`);
    const deletedText = deleteOneText(id);
    if (!deletedText) {
      return res.sendStatus(404);
    }
    return res.json(deletedText);
  });

  router.put("/:id", (req, res) => {
    const body: unknown = req.body;
    const id = req.params.id;
    if (!body ||
      typeof body !== "object" ||
      !("content" in body) ||
      !("level" in body) ||
      typeof body.content !== "string" ||
      typeof body.level !== "string") {
      return res.sendStatus(400);
    }
    const { content, level } = body as NewText;
    const updatedText = updateOneText(id, { content, level });
    if (!updatedText) {
      return res.sendStatus(404);
    }
    return res.json(updatedText);
  }
  );
  
  export default router;
  