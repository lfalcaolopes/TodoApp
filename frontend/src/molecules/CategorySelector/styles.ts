import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
const Text = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.small.toString()};
  color: ${({ theme }) => theme.colors.secondaryText.toString()};
`;

export { Container, Text }