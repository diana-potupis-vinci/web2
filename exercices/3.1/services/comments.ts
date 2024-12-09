import path from "node:path";
import { Comment, NewComment} from "../types";
import { parse, serialize } from "../utils/json";

const jsonDbPath = path.join(__dirname, "/../data/comments.json");

const defaultComments: Comment[] = [];

function readAllComments(filmId?: number): Comment[] {
    const comments = parse(jsonDbPath, defaultComments);
    if (filmId) {
      return comments.filter(comment => comment.filmId === filmId);
    }
    return comments;
  }

  function createOneComment(newComment: NewComment, userId: number, username: string): Comment {
    const comments = parse(jsonDbPath, defaultComments);

    const nextId = comments.reduce((maxId, comment) => (comment.id > maxId ? comment.id : maxId), 0) + 1;
 
    const createdComment: Comment = {
        id: nextId,
        filmId: newComment.filmId,
        userId,
        username,
        content: newComment.content,
        createdAt: new Date().toISOString(),
      };

    comments.push(createdComment);
    serialize(jsonDbPath, comments);
    
    return createdComment;
  }

  function deleteOneComment(commentId: number, userId: number): Comment | undefined {
    const comments = parse(jsonDbPath, defaultComments);
    const commentIndex = comments.findIndex((comment) => comment.id === commentId && comment.userId === userId);
    if (commentIndex === -1) {
      return undefined;
    }
    const deletedComment = comments.splice(commentIndex, 1)[0];
    serialize(jsonDbPath, comments);
    return deletedComment;
  }

  export { readAllComments, createOneComment, deleteOneComment };
