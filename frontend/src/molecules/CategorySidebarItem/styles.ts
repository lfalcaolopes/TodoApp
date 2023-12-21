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

const CategoryIcon = styled.div<{ color: string }>`
  background-color: ${({ color }) => color};
  width: 20px;
  height: 20px;
  margin: 2px;
  border-radius: 50%;
`;

const Text = styled.p`
  font-weight: 600;
`;

export { CategoryIcon, Container, IconWrapper, Text };

