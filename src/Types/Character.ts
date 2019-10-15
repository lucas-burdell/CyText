export enum CharacterPronoun {
  he,
  she,
  it
}
export const CharacterPronouns = ["he", "she", "it"];
export const CharacterPosessives = ["his", "hers", "its"];
export const CharacterObjectives = ["him", "her", "it"];

export interface Character {
  currency: number;
  name: string;
  pronoun: CharacterPronoun;
  tags: { [key: string]: boolean | undefined };
  stats: { [key: string]: number | undefined };
  currentResult: string;
}
