import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  width: 40rem;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Text = styled.p`
  font-weight: 600;
`;

export {Container, Text, IconWrapper}