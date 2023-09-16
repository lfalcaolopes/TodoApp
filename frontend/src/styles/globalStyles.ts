import { createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }

    @media (max-width: 720px) {
      font-size: 87.5%; // 14px
    }
  }
  
  body {
    background: ${(props) => props.theme.background};
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
  }
  
  body, input, button {
    font-family: "Nunito", sans-serif;
    font-weight: 500;
    font-size: ${(props) => props.theme.fontSizes.medium};
    color: ${(props) => props.theme.primaryText};
  }
  
  button {
    cursor: pointer;
  }
  
  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
  
  :focus{
    outline: 0;
    box-shadow: 0 0 0 2px ${( props ) => props.theme.accent};
  }
`;

export default GlobalStyle;