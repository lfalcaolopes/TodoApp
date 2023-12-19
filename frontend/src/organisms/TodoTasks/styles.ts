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
  flex-direction: column;
  gap: 1rem;
`;

const NoContent = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.small.toString()};
  color: ${({ theme }) => theme.colors.secondaryText.toString()};

  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export { NoContent, Container, Title, Content }