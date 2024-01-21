import styled from "styled-components";

const Container = styled.div`
  height: 100dvh;
  max-width: 100rem;
  
  display: flex;
  gap: clamp(16px, 3vw, 80px);
  
  margin: 0 auto;
  padding: clamp(24px, 5vw, 80px) clamp(16px, 3vw, 80px);
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(1.5rem, 3vw, 5rem);
  width: 100%;
`;

export { Container, Content }