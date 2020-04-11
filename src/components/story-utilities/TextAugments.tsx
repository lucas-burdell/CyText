import { keyframes, theme } from "Theme";
import { FlexRow } from "Row";
import styled from "Theme";

export { GlitchText } from "./GlitchText";

export const SpacedText = styled.div`
  margin-bottom: 2em;
`;

export const GoodText = styled.span`
  color: #00ff2f;
`;
export const EvilText = styled.span`
  color: #ff3414;
`;
export const CurrencyText = styled.span`
  color: #f6ff47;
`;

export const AccentText = styled.span<{
  accentType?: "light" | "medium" | "dark";
}>`
  color: ${(props) => props.theme.accent[props.accentType || "light"]};
`;
