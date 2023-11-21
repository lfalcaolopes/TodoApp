import styled from "styled-components";

const Container = styled.div`
  display: inline-block;
  position: relative;
  
  &:after {
    position: absolute;
    top: 2px;
    right: 5px;
    content: "📅";
    font-size: 20px;
    pointer-events: none;
  }
`;

const Date = styled.input.attrs({type: "date"})`
   background-color: ${({ theme }) => theme.colors.secondaryCard.toString()};
  font-size: ${({ theme }) => theme.fontSizes.xSmall.toString()};
  border: none;
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  min-width: 8rem;
  height: 1.75rem;
  
  &::-webkit-calendar-picker-indicator{
    opacity: 0;
    z-index: 100;
    cursor: pointer;
  }
  
`;

export { Container, Date };

