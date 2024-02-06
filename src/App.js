import { ThemeProvider, createGlobalStyle } from "styled-components";
import logo from "./logo.svg";
import "./App.css";
import StyledButton, {
  FancyButton,
  SubmitButton,
} from "./components/Button/Button";
import { AnimatedLogo, DarkButton } from "./components/Button/Button.styles";

// theming
const theme = {
  dark: {
    primary: "#000",
    text: "#fff",
  },
  light: {
    primary: "#fff",
    text: "#000",
  },
  fontFamily: "Segoe UI",
};

// global styles
const GlobalStyle = createGlobalStyle`
  button {
    /* font-family: Roboto; */
    font-family: ${(props) => props.theme.fontFamily};
  }
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
        <div>
          <AnimatedLogo src={logo} />
        </div>
        <StyledButton type="submit">Styled Button</StyledButton>
        <br />
        <br />
        <StyledButton variant="outline">Outline Button</StyledButton>
        <br />
        <br />
        <FancyButton as="a">Fancy Button</FancyButton>
        <br />
        <br />
        <SubmitButton>submit</SubmitButton>
        <br />
        <br />
        <DarkButton>Dark Theme</DarkButton>
      </div>
    </ThemeProvider>
  );
}

export default App;
