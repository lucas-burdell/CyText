import * as React from "react";
import styled from "./Theme";
import { FancyLink } from "./FancyLink";

const StyledList = styled.ul`
  font-size: 20px;
`;

const StyledElement = styled.li`
  margin-bottom: 0.25em;
`;

export type DisplayChoice = {
  element: React.ReactNode;
  id: string;
};

interface IProps {
  choices: DisplayChoice[];
  onChoiceSelected: (id: string) => void;
}

export const ChoiceList: React.FunctionComponent<IProps> = props => {
  return (
    <StyledList>
      {props.choices.map(choice => (
        <StyledElement key={choice.id}>
          <FancyLink onClick={() => props.onChoiceSelected(choice.id)}>
            {choice.element}
          </FancyLink>
        </StyledElement>
      ))}
    </StyledList>
  );
};
