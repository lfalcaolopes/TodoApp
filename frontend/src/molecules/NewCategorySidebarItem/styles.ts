import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  cursor: pointer;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Text = styled.p`
  font-weight: 600;
`;

export { Container, IconWrapper, Text };

