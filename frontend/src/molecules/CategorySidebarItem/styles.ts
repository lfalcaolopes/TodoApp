import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const CategoryIcon = styled.div<{ iconColor: string }>`
  background-color: ${({ iconColor }) => iconColor};
  width: 20px;
  height: 20px;
  border-radius: 50%;
`;

const Text = styled.p`
  font-weight: 600;
`;

export {Container, Text, IconWrapper, CategoryIcon}