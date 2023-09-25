import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.xLarge.toString()};
  color: ${({ theme }) => theme.colors.secondaryText.toString()};
  font-weight: bold;
  
  letter-spacing: 0.1rem;
`;

const Content = styled.div`
  display: flex;
  gap: 2rem;
`;

export { Container, Title, Content }