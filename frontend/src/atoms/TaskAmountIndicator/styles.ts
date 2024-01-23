import styled from "styled-components";

const Container = styled.div`
  color: ${({theme}) => theme.colors.primaryText.toString()};
  background-color: ${({theme}) => theme.colors.secondaryCard.toString()};
  font-size: ${({theme}) => theme.fontSizes.small.toString()};
  
  display: flex;
  justify-content: center;
  border-radius: 0.5rem;
  
  width: 2.0rem;
  height: 1.5rem;
`;

export { Container };

