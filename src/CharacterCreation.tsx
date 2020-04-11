import * as React from "react";
import {
  Character,
  CharacterPronoun,
  CharacterPronouns,
} from "./Types/Character";
import { Column } from "./components/Column";
import { MenuButton } from "./menu/MenuButton";

interface IProps {
  onCharacterCreate: (character: Partial<Character>) => void;
}

export const CharacterCreation: React.FunctionComponent<IProps> = (props) => {
  const [name, setName] = React.useState<string>("");
  const [pronoun, setPronoun] = React.useState<CharacterPronoun>(
    CharacterPronoun.he
  );

  return (
    <Column>
      <label>Your Name</label>
      <input
        value={name}
        placeholder="Your name"
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <label>Your preferred pronoun</label>
      {CharacterPronouns.map((value, index) => (
        <label key={value}>
          <input
            value={value}
            type="radio"
            checked={index == pronoun}
            onChange={(e) => setPronoun(index)}
          />
          {value}
        </label>
      ))}
      <MenuButton
        onClick={() => {
          if (name !== "") {
            props.onCharacterCreate({ name, pronoun: pronoun as any });
          }
        }}
      >
        Create Character
      </MenuButton>
    </Column>
  );
};
