import styled from "styled-components";

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.primaryCard.toString()};
  border-radius: 0.5rem;
  
  display: flex;
  flex-direction: column;
  gap: clamp(0.5rem, 2vw, 1rem);
  
  padding: 0.5rem 1rem;

  @media (max-width: 490px) {
    padding: 0.5rem;
  }
`;

const TaskHeader = styled.div`
  width: 100%;
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  > * {
    &:last-child {
      cursor: pointer;
    }
  }
`;

const TaskData = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  `;

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 0.5rem 0.5rem 0.5rem;

  gap: 1rem;

  button {
    justify-self: flex-end;
    align-self: center;
    height: fit-content;
    margin-right: 0.5rem;
  }

  .date-selector {
    max-width: 20rem;

    @media (max-width: 490px) {
      flex-direction: column;
      align-items: flex-start;
    }
  }
`;

export { Container, Form, TaskData, TaskHeader };