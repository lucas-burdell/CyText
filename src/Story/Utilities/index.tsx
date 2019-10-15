import styled, { keyframes, theme } from "Theme";
import { FlexRow } from "Row";
export { GlitchText } from "./GlitchText";

export const AccentElement = styled.span<{
  accentType?: "light" | "medium" | "dark";
}>`
  color: ${(props) => props.theme.accent[props.accentType || "light"]};
`;

export const CurrencyElement = styled.span`
  color: #f6ff47;
`;

export const GoodElement = styled.span`
  color: #00ff2f;
`;

export const EvilElement = styled.span`
  color: #ff3414;
`;

export const SpacedElement = styled.div`
  margin-bottom: 2em;
`;
