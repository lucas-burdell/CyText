import React, { FunctionComponent } from "react";
import { render } from "react-dom";
import "./assets/styles/main.css";
import { BrowserRouter } from "react-router-dom";
import styled, { ThemeProvider, theme, createGlobalStyle } from "./Theme";
import { ContentArea } from "./ContentArea";
import { Header } from "./Header";
import { StoryBox } from "./StoryBox";
import { ChoiceList } from "./ChoiceList";
import { Menu } from "./Menu";
import { Narrator } from "./Narrator";
import { Character } from "./Types/Character";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const BodyTheme = createGlobalStyle`
  body {
    background-color: ${props => props.theme.background.dark};
    color: ${props => props.theme.primary.medium};
  }
`;

const character: Character = {
  name: null,
  currency: null,
  pronoun: null,
  tags: null,
  stats: null,
  currentResult: null
};

Object.keys(character).map(key => {
  const charObj = character as any;
  charObj[key] = window.localStorage.getItem(key);
});

const App: FunctionComponent = () => {
  const [appState, setAppState] = React.useState({
    isPlaying: false,
    isNewGame: true
  });
  return (
    <ThemeProvider theme={theme}>
      <>
        <BodyTheme />
        <Header />
        <AppContainer>
          <ContentArea>
            {appState.isPlaying && (
              <Narrator
                loadedCharacter={character.name ? character : undefined}
                newGame={appState.isNewGame}
              />
            )}
            {!appState.isPlaying && (
              <Menu
                onContinue={() =>
                  setAppState({ isNewGame: false, isPlaying: true })
                }
                onNewGame={() =>
                  setAppState({ isNewGame: true, isPlaying: true })
                }
                canContinue={!!character.name}
              />
            )}
          </ContentArea>
        </AppContainer>
      </>
    </ThemeProvider>
  );
};

render(<App />, document.getElementById("root"));
