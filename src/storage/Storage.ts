import { Character } from "Types/Character";

export function LoadCharacter() {
  return JSON.parse(window.localStorage.getItem("character")) as Character;
}

export function SaveCharacter(character: Character) {
  window.localStorage.setItem("character", JSON.stringify(character));
}
