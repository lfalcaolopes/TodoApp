import { ThemeProvider } from "styled-components";
import Home from "./pages/Home";
import GlobalStyle from "./styles/globalStyles.ts";
import { darkTheme } from "./styles/themes/dark.ts";
import DataProvider from "./utils/dataContext.tsx";
import ToastProvider from "./utils/toastContext.tsx";

function App() {


  return (
    <ThemeProvider theme={darkTheme}>
      <DataProvider>
        <ToastProvider>
          <GlobalStyle/>

          <Home  />
        </ToastProvider>
      </DataProvider>
    </ThemeProvider>
  )
}

export default App
