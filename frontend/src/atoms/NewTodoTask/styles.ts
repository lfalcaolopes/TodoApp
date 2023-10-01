import styled from "styled-components";

const Button = styled.button`
  background-color: ${({theme}) => theme.colors.accent.toString()};
  color: ${({theme}) => theme.colors.accentText.toString()};
  font-size: ${({theme}) => theme.fontSizes.small.toString()};
  letter-spacing: 0.1rem;
  
  border: none;
  border-radius: 0.5rem;
  padding: 0.75rem 1rem;
  
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  
  transition: box-shadow 0.2s ease-in-out;
   
  &:hover {
    // make the button darker
    box-shadow: inset 0 0 0 100px rgba(0, 0, 0, 0.1); 
  }
`;

export { Button };