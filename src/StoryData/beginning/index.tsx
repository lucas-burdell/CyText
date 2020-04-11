import * as React from "react";
import { Result, Choice } from "Types/Story";
import { CharacterPosessives, CharacterObjectives } from "Types/Character";
import {
  SpacedText,
  GoodText,
  AccentText,
} from "components/story-utilities/TextAugments";

export const Choices: Choice[] = [
  {
    id: "b2-c1",
    display: () => '"No idea."',
    result: "b3-r1",
  },
  {
    id: "b2-c2",
    display: () => (
      <>
        "It's all <AccentText>your</AccentText> fault!"
      </>
    ),
    result: "b3-r2",
  },
];

export const Results: Result[] = [
  {
    id: "b1",
    next: "b2",
    display: (character) => {
      return (
        <>
          <SpacedText>
            <AccentText>{character.name}.</AccentText>
          </SpacedText>
          <SpacedText>
            That was {CharacterPosessives[character.pronoun]} name. It was
            probably hard for {CharacterObjectives[character.pronoun]} to read
            the list of names on the dark video screen, but{" "}
            {CharacterPosessives[character.pronoun]} was there.
          </SpacedText>
        </>
      );
    },
  },
  {
    id: "b2",
    next: ["b2-c1", "b2-c2"],
    display: (character) => (
      <>
        <SpacedText>
          In a dark, smokey apartment room big enough for a table, a couch and a
          bed to barely fit, five individuals gathered around a small laptop
          screen. The group sat with the hushed seriousness of a funeral
          gathering. Grim expressions wore heavily on the sillhouetted faces in
          the dim blue light of the screen.
        </SpacedText>
        <SpacedText>
          <GoodText>'How could they have traced it to us?!?'</GoodText> A young
          woman in the group shouts, her voice trembling with fear.
        </SpacedText>
        <SpacedText>
          Her name floats across the screen as well.{" "}
          <GoodText>Emilee.</GoodText>
        </SpacedText>
      </>
    ),
  },
];
