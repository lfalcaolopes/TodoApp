import styled from "styled-components";

const Form = styled.form`
  background-color: ${props => props.theme.colors.primaryCard.toString()};
  border: none;
  padding: 0;
  border-radius: 0.5rem;
  
  display: flex;
  justify-content: space-between;
  
  position: relative;
`;

const Input = styled.input`
  background-color: transparent;
  color: ${props => props.theme.colors.primaryText.toString()};
  font-size: ${props => props.theme.fontSizes.small.toString()};

  width: 100%;
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem 3rem 0.5rem 0.5rem;
`;

const Button = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  
  background-color: transparent;
  border: none;
  
  display: flex;
  align-items: center;
  justify-content: center;
  
  margin: auto 1rem auto 0.5rem;
  
  svg {
    color: ${props => props.theme.colors.primaryText.toString()};
  }
`;

export { Input, Button, Form };