import { Router } from "express";
import {NewComment } from "../types";
import { readAllComments, createOneComment, deleteOneComment} from "../services/comments";
import { authorize } from "../utils/auths";

const router = Router();

router.get("/", (req, res) => {
  const filmId = Number(req.query["filmId"]);
  const comments = readAllComments(filmId);
  return res.json(comments);
});

router.post("/", authorize, (req, res) => {
  const body: unknown = req.body;
  if (
    !body ||
    typeof body !== "object" ||
    !("filmId" in body) ||
    !("content" in body) ||
    typeof body.filmId !== "number" ||
    typeof body.content !== "string" ||
    !body.content.trim()
  ) {
    return res.sendStatus(400);
  }

  const { filmId, content } = body as NewComment;
  const userId = (req as any).user.id;
  const userName = (req as any).user.username;
  const newComment = createOneComment({ filmId, content, userId, username: userName, createdAt: new Date().toISOString() }, userId, userName);
  return res.json(newComment);
});

router.delete("/:id", authorize, (req, res) => {
  const id = Number(req.params.id);
  const userId = (req as any).user.id;
  const deletedComment = deleteOneComment(id, userId);
  if (!deletedComment) {
    return res.sendStatus(404);
  }
  return res.json(deletedComment);
});

export default router;