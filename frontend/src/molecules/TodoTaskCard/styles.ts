import styled from "styled-components";

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.primaryCard.toString()};
  border-radius: 0.5rem;
  
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  
  padding: 0.5rem 1rem;
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
  height: 3.5rem;

  gap: 1rem;

  button {
    justify-self: flex-end;
    margin-right: 0.5rem;
  }
`;

export { Container, Form, TaskData, TaskHeader };