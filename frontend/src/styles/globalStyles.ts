import { createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  :focus{
    outline: 0;
    box-shadow: 0 0 0 2px ${( props ) => props.theme.accent};
  }
  
  body {
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme.primaryText};
    -webkit-font-smoothing: antialiased;
  }
  
  body, input, button {
    font-family: 'Nunito', sans-serif;
    font-size: 1rem;
    font-weight: 500;
  }
`;

export default GlobalStyle;