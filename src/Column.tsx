import * as React from "react";
import styled, { css } from "./Theme";

export const FlexColumn = css<{ shrink?: boolean }>`
  display: flex;
  flex: ${props => (props.shrink ? "0" : "1")} 1 auto;
  flex-direction: Column;
`;

export const Column = styled.div`
  ${FlexColumn}
`;
