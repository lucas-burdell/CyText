import * as React from "react";
import styled, { css } from "./Theme";

export const FlexRow = css<{ shrink?: boolean }>`
  display: flex;
  flex: ${props => (props.shrink ? "0" : "1")} 1 auto;
`;

export const Row = styled.div`
  ${FlexRow}
`;
