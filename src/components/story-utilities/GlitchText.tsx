import * as React from "react";
import styled, { keyframes } from "Theme";

const NoiseAnim = keyframes`
@keyframes noise-anim {
  0% {
    clip-path: inset(34% 0 28% 0);
  }
  5% {
    clip-path: inset(86% 0 12% 0);
  }
  10% {
    clip-path: inset(25% 0 68% 0);
  }
  15% {
    clip-path: inset(2% 0 75% 0);
  }
  20% {
    clip-path: inset(42% 0 26% 0);
  }
  25% {
    clip-path: inset(93% 0 7% 0);
  }
  30% {
    clip-path: inset(7% 0 6% 0);
  }
  35% {
    clip-path: inset(70% 0 5% 0);
  }
  40% {
    clip-path: inset(97% 0 2% 0);
  }
  45% {
    clip-path: inset(3% 0 78% 0);
  }
  50% {
    clip-path: inset(12% 0 51% 0);
  }
  55% {
    clip-path: inset(56% 0 32% 0);
  }
  60% {
    clip-path: inset(80% 0 6% 0);
  }
  65% {
    clip-path: inset(95% 0 5% 0);
  }
  70% {
    clip-path: inset(13% 0 1% 0);
  }
  75% {
    clip-path: inset(97% 0 2% 0);
  }
  80% {
    clip-path: inset(39% 0 33% 0);
  }
  85% {
    clip-path: inset(43% 0 44% 0);
  }
  90% {
    clip-path: inset(5% 0 21% 0);
  }
  95% {
    clip-path: inset(63% 0 17% 0);
  }
  100% {
    clip-path: inset(71% 0 12% 0);
  }
}
`;

const NoiseAnim2 = keyframes`
  0% {
    clip-path: inset(67% 0 34% 0);
  }
  5% {
    clip-path: inset(18% 0 49% 0);
  }
  10% {
    clip-path: inset(33% 0 44% 0);
  }
  15% {
    clip-path: inset(53% 0 17% 0);
  }
  20% {
    clip-path: inset(36% 0 7% 0);
  }
  25% {
    clip-path: inset(21% 0 63% 0);
  }
  30% {
    clip-path: inset(68% 0 21% 0);
  }
  35% {
    clip-path: inset(61% 0 13% 0);
  }
  40% {
    clip-path: inset(26% 0 65% 0);
  }
  45% {
    clip-path: inset(81% 0 3% 0);
  }
  50% {
    clip-path: inset(63% 0 29% 0);
  }
  55% {
    clip-path: inset(65% 0 4% 0);
  }
  60% {
    clip-path: inset(87% 0 12% 0);
  }
  65% {
    clip-path: inset(36% 0 60% 0);
  }
  70% {
    clip-path: inset(50% 0 28% 0);
  }
  75% {
    clip-path: inset(11% 0 24% 0);
  }
  80% {
    clip-path: inset(74% 0 19% 0);
  }
  85% {
    clip-path: inset(99% 0 1% 0);
  }
  90% {
    clip-path: inset(85% 0 1% 0);
  }
  95% {
    clip-path: inset(24% 0 5% 0);
  }
  100% {
    clip-path: inset(62% 0 1% 0);
  }
}
`;

const GlitchTextStyle = styled.span<{ content: string }>`
  position: relative;
  display: flex;
  margin: 0 auto;
  background-color: ${(props) => props.theme.background.medium};
  color: currentColor;

  &::after {
    content: ${(props) => props.content};
    background-color: ${(props) => props.theme.background.medium};
    position: absolute;
    left: 2px;
    text-shadow: -1px 0 blue;
    top: 0;
    color: currentColor;
    overflow: hidden;
    animation: ${NoiseAnim2} 2s infinite linear alternate-reverse;
  }

  &::before {
    content: ${(props) => props.content};
    background-color: ${(props) => props.theme.background.medium};
    position: absolute;
    left: -2px;
    text-shadow: 1px 0 red;
    top: 0;
    color: currentColor;
    overflow: hidden;
    animation: ${NoiseAnim} 12s infinite linear alternate-reverse;
  }
`;

interface IProps {
  children?: string;
}
export const GlitchText: React.FunctionComponent<IProps> = (props) => (
  <GlitchTextStyle content={props.children}>{props.children}</GlitchTextStyle>
);
