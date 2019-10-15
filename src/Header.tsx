import * as React from "react";
import { FlexRow } from "./Row";
import styled from "./Theme";
import { Radio } from "./Radio";

const StyledHeader = styled.div`
    ${FlexRow}
    background-color: ${props => props.theme.background.medium};
    color: ${props => props.theme.accent.light};
    justify-content: space-between;
`;

const Controls = styled.div`
  ${FlexRow}
  justify-content: flex-end;
  align-items: flex-end;
`;

const TitleContainer = styled.div`
  ${FlexRow}
  justify-content: flex-start;
  align-items: flex-start;
`;

const Title = styled.div`
    ${FlexRow}
    color: ${props => props.theme.accent.light};
    font-size: 26px;
    text-shadow: 0px 0px 10px ${props => props.theme.accent.light};
    padding: .5em;
    user-select: none;
    cursor: pointer;
`;

export const Header: React.FunctionComponent = () => (
  <StyledHeader shrink>
    <TitleContainer>
      <Title shrink>CyText</Title>
    </TitleContainer>
    <Controls>
      <Radio />
    </Controls>
  </StyledHeader>
);
