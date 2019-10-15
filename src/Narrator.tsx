import * as React from "react";
import { Character, CharacterPronoun } from "./Types/Character";
import { usePartialState } from "./usePartialState";
import { CharacterCreation } from "./CharacterCreation";
import { useTransition, animated } from "react-spring";
import * as Story from "Story";
import { StoryBox } from "StoryBox";
import { ChoiceList, DisplayChoice } from "ChoiceList";

interface IProps {
  newGame: boolean;
  loadedCharacter?: Character;
}

export const Narrator: React.FunctionComponent<IProps> = (props) => {
  const [createdCharacter, setCreatedCharacter] = React.useState(
    !props.newGame
  );
  const [character, updateCharacter] = usePartialState<Character>(
    props.newGame
      ? {
          currency: 0,
          name: "",
          pronoun: 0,
          tags: {},
          stats: {},
          currentResult: "b1"
        }
      : props.loadedCharacter
  );
  const [currentResult, setResult] = React.useState(
    Story.Results.get(character.currentResult)
  );

  if (createdCharacter) {
    const next = currentResult.next;
    const choices: DisplayChoice[] = [];

    if (Array.isArray(next)) {
      next.forEach((choiceId) => {
        const choice = Story.Choices.get(choiceId);
        if (choice.condition && !choice.condition(character)) {
          return;
        }
        choices.push({ element: choice.display(character), id: choiceId });
      });
    } else {
      choices.push({ element: "Next", id: "next" });
    }
    return (
      <>
        <StoryBox>{currentResult.display(character)}</StoryBox>
        <ChoiceList
          choices={choices}
          onChoiceSelected={(choiceId) => {
            if (choiceId === "next") {
              setResult(Story.Results.get(currentResult.next as string));
            } else {
              const choice = Story.Choices.get(choiceId);
              if (choice.makeChanges) {
                updateCharacter(choice.makeChanges(character));
              }
              setResult(Story.Results.get(choice.result));
            }
          }}
        ></ChoiceList>
      </>
    );
  } else {
    return (
      <CharacterCreation
        onCharacterCreate={(char) => {
          updateCharacter(char);
          setCreatedCharacter(true);
        }}
      />
    );
  }
};
