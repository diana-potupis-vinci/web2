import path from "node:path";
import {Text, NewText} from "../types";
import { v4 as uuidv4 } from 'uuid';
import { parse, serialize } from "../utils/json";
const jsonDbPath = path.join(__dirname, "/../data/texts.json");

const defaultTexts: Text[] = [
    {
        id: uuidv4(),
        content: "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.",
        level: 'easy'
    },
    {
        id: uuidv4(),
        content: "This article covers advanced topics in TypeScript, including generics and decorators.",
        level: "easy"
    },
    {
        id: uuidv4(),
        content: "A comparison between TypeScript and JavaScript, highlighting the benefits of using TypeScript.",
        level: "medium"
    }
];

function readAllTexts(level: string): Text[] {
    const texts = parse(jsonDbPath, defaultTexts);
    if (!level) {
        return texts;
    }
    if (!["easy", "medium", "hard"].includes(level)) {
        throw new Error("Invalid level parameter");
      }
    const filteredTexts = texts.filter((text) => {
        return text.level === level;
    });
    return filteredTexts;
}

function readOneText(id: string): Text | undefined {
    const texts = parse(jsonDbPath, defaultTexts);
    const text = texts.find((text) => text.id === id);
    if (!text) {
        return undefined;
    }
    return text;
}

function createOneText(newText: NewText) : Text  {
    const texts = parse(jsonDbPath, defaultTexts);
    
  if (!["easy", "medium", "hard"].includes(newText.level)) {
    throw new Error("Invalid level value");
  }

  const createdText = {
    id: uuidv4(),
    ...newText,
  };

  texts.push(createdText);
  serialize(jsonDbPath, texts);

  return createdText;
}

function updateOneText(id: string, newText: NewText): Text | undefined {
    const texts = parse(jsonDbPath, defaultTexts);
    const textIndex = texts.findIndex((text) => text.id === id);
    if (textIndex === -1) {
        return undefined;
    }
    if (!["easy", "medium", "hard"].includes(newText.level)) {
        throw new Error("Invalid level value");
    }
    const updatedText = { id: id, ...newText };
    texts[textIndex] = updatedText;
    serialize(jsonDbPath, texts);
    return updatedText;
}

function deleteOneText(id: string): Text | undefined {
    const texts = parse(jsonDbPath, defaultTexts);
    const index = texts.findIndex((text) => text.id === id);
    if (index === -1) {
        return undefined;
    }
    const deletedText = texts.splice(index, 1)[0];
    serialize(jsonDbPath, texts);
    return deletedText;
}

export {
    readAllTexts,
    readOneText,
    createOneText,
    deleteOneText,
    updateOneText
  };
