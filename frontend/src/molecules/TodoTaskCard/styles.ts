import styled from "styled-components";

const Container = styled.div<{isOpen: Boolean}>`
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
`;

const TaskData = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  `;

const Options = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10rem;
  padding: 0 0.5rem 0.5rem 0.5rem;
`;

export { Container, TaskHeader, TaskData, Options }