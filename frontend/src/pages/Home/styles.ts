import styled from "styled-components";

const Container = styled.div`
  height: 100dvh;
  max-width: 100rem;
  
  display: flex;
  gap: 8rem;
  
  margin: 0 auto;
  padding: 5rem;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  width: 100%;
`;

export { Container, Content }