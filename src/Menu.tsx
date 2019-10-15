import * as React from "react";
import styled, { keyframes } from "./Theme";
import { FlexRow } from "./Row";
import { Column, FlexColumn } from "./Column";
import { MenuButton } from "./MenuButton";

const TitleAnimation = keyframes`
    0% {
        opacity: 0;
    }

    12% {
        opacity: .7
    }

    25% {
        opacity: .3
    }

    37% {
        opacity: 1
    }

    50% {
        opacity: 1
    }

    100% {
        opacity: 1;
    }
`;
const Title = styled.div`
    ${FlexRow}
    color: ${props => props.theme.accent.light};
    font-size: 4rem;
    text-shadow: 0px 0px 10px ${props => props.theme.accent.light};
    padding: .5em .5em 0 .5em;
    user-select: none;
    text-align: center;
    animation: 2s ease-in-out 2.5s alternate infinite ${TitleAnimation};
`;

const CenterRow = styled.div`
  ${FlexRow}
  justify-content: center;
  align-items: center;
`;

const ButtonColumn = styled.div`
  ${FlexColumn}
  justify-content: center;
`;

const TitleRow = styled(CenterRow)`
  border-bottom: 3px solid ${props => props.theme.accent.light};
  margin-bottom: 3em;
`;

interface IProps {
  onNewGame: () => void;
  onContinue: () => void;
  canContinue: boolean;
}

export const Menu: React.FunctionComponent<IProps> = props => (
  <Column>
    <TitleRow shrink>
      <Title shrink>CyText</Title>
    </TitleRow>
    <CenterRow shrink>
      <ButtonColumn shrink>
        {props.canContinue && (
          <MenuButton onClick={props.onContinue}>Continue</MenuButton>
        )}
        <MenuButton onClick={props.onNewGame}>New Game</MenuButton>
      </ButtonColumn>
    </CenterRow>
  </Column>
);
