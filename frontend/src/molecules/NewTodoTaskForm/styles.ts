import * as Dialog from '@radix-ui/react-dialog';
import styled from 'styled-components';

const Overlay = styled(Dialog.Overlay)`
  background-color: #00000080;
  position: fixed;
  inset: 0;
`;

const Content = styled(Dialog.Content)`
  background-color: ${(props) => props.theme.colors.background.toString()};
  border-radius: .5rem;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  max-width: 450px;
  max-height: 85vh;
  padding: 25px;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;


const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  
  width: 100%;
`;

const Close = styled(Dialog.Close)`
  position: absolute;
  top: 25px;
  right: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.primaryText.toString()};
`;

const Input = styled.input`
  background-color: ${props => props.theme.colors.primaryCard.toString()};
  color: ${props => props.theme.colors.primaryText.toString()};
  font-size: ${props => props.theme.fontSizes.small.toString()};

  width: 100%;
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem 0.5rem;
`;

const Button = styled.button`
  background-color: ${({theme}) => theme.colors.accent.toString()};
  color: ${({theme}) => theme.colors.accentText.toString()};
  font-size: ${({theme}) => theme.fontSizes.small.toString()};
  letter-spacing: 0.1rem;
  
  border: none;
  border-radius: 0.5rem;
  padding: 0.75rem 1rem;
  margin-top: 1rem;
  
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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  width: 100%;
`;

const Error = styled.span`
  color: red;
  font-size: ${({theme}) => theme.fontSizes.xSmall.toString()};
  letter-spacing: 0.1rem;
`;

export { Button, Close, Content, Error, Form, Input, ModalHeader, Overlay };

