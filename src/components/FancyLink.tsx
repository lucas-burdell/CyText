import styled from "../Theme";
export const FancyLink = styled.a`
  color: ${(props) => props.theme.primary.medium};
  border: none;
  border-bottom: 2px solid transparent;
  cursor: pointer;
  user-select: none;

  &:hover,
  &:focus {
    color: ${(props) => props.theme.primary.light};
    border-color: ${(props) => props.theme.accent.medium};
    outline: 0;
  }

  &:link {
    color: ${(props) => props.theme.primary.medium};
  }

  &:visited {
    color: ${(props) => props.theme.primary.medium};
  }

  *:active {
    color: ${(props) => props.theme.accent.medium};
  }

  transition: all 0.5s;
`;
