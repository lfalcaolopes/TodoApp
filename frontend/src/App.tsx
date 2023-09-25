import GlobalStyle from "./styles/globalStyles.ts";
import {ThemeProvider} from "styled-components";
import Home from "./pages/Home";
import {darkTheme} from "./styles/themes/dark.ts";

function App() {

  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle/>

      <Home  />
    </ThemeProvider>
  )
}

export default App
