import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 20rem;

  @media (max-width: 490px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
const Text = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.small.toString()};
  color: ${({ theme }) => theme.colors.secondaryText.toString()};
`;

export { Container, Text }