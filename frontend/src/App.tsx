import GlobalStyle from "./styles/globalStyles.ts";
import {ThemeProvider} from "styled-components";
// import {darkTheme} from "./styles/themes/dark.ts";
import {lightTheme} from "./styles/themes/light.ts";

function App() {

  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle/>

      <p>Hello World</p>
    </ThemeProvider>
  )
}

export default App
