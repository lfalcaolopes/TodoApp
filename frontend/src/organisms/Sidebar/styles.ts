import styled from "styled-components";

const Container = styled.aside`
  background-color: ${({ theme }) => theme.colors.primaryCard.toString()};
  width: 30rem;
  height: 100%;
  
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  
  padding: 2rem 1.5rem;
  border-radius: 2rem;

  > * {
    cursor: pointer;
    line-height: 1;
  }
`;

export { Container };
