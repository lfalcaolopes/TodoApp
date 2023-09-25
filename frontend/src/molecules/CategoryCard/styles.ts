import styled from "styled-components";

const Container = styled.div`
  background-color: ${({theme}) => theme.colors.primaryCard.toString()};
  
  width: 10rem;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  
  padding: 0.75rem;
  border-radius: 0.5rem;
  
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.1), 4px 4px 8px rgba(0, 0, 0, 0.04);
`;

const Title = styled.h2`
  color: ${({theme}) => theme.colors.primaryText.toString()};
  font-size: ${({theme}) => theme.fontSizes.large.toString()};
  font-weight: 700;
`;

const Description = styled.p`
  color: ${({theme}) => theme.colors.secondaryText.toString()};
  font-size: ${({theme}) => theme.fontSizes.xSmall.toString()};
  font-weight: 600;
`;

export {Container, Title, Description}