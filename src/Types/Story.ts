import { Character } from "./Character";

export interface Result {
  id: string;
  display: (character: Character) => React.ReactNode;
  next: string | string[];
}

export interface Choice {
  id: string;
  display: (character: Character) => React.ReactNode;
  condition?: (character: Character) => boolean;
  result: string;
  makeChanges?: (character: Character) => Partial<Character>;
}
