import styled from "styled-components";

const Container = styled.aside`
  background-color: ${({ theme }) => theme.colors.primaryCard.toString()};
  width: 22rem;
  height: 100%;
  
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  
  padding: 2rem 1.5rem;
  border-radius: 2rem;
`;

export { Container }