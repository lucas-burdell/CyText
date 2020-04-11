import * as React from "react";
import styled from "./Theme";
import { FlexColumn } from "./components/Column";

const StyledStoryBox = styled.div`
  ${FlexColumn}
  justify-content: center;
  text-align: center;
  font-size: 20px;
  max-height: 50vh;
  position: relative;
  border-radius: 5px;
  border: 2px solid ${(props) => props.theme.primary.dark};
  background-color: ${(props) => props.theme.background.medium};
  color: ${(props) => props.theme.primary.light};
`;

const ScrollContent = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  overflow-y: auto;
  padding: 0.5em 1em;
  text-align: justify;
`;

export const StoryBox: React.FunctionComponent = (props) => (
  <StyledStoryBox>
    <ScrollContent>{props.children}</ScrollContent>
  </StyledStoryBox>
);
