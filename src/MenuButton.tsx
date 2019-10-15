import styled from "./Theme";
export const MenuButton = styled.button`
  flex: 0 1 auto;
  background-color: ${props => props.theme.background.medium};
  color: ${props => props.theme.primary.medium};
  cursor: pointer;
  user-select: none;
  border-radius: 3px;
  border: 2px solid ${props => props.theme.background.light};
  text-align: center;
  font-size: 24px;
  outline: 0;
  &:focus {
    outline: 0;
    border: 2px solid ${props => props.theme.accent.light};
  }
  &:hover {
    outline: 0;
    background-color: ${props => props.theme.accent.dark};
    border: 2px solid ${props => props.theme.accent.light};
  }
  transition: all 0.5s;
  padding: 0.25em 1em;
  margin: 0.5em 0em;
  max-width: 15em;
`;
