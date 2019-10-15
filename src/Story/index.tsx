import * as beginnings from "./beginning";
import { Result, Choice } from "Types/Story";

export const Results: Map<string, Result> = new Map();
export const Choices: Map<string, Choice> = new Map();

beginnings.Results.forEach((result) => {
  Results.set(result.id, result);
});

beginnings.Choices.forEach((choice) => {
  Choices.set(choice.id, choice);
});
