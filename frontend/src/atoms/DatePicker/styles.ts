import styled from "styled-components";

const Container = styled.div`
  display: inline-block;
  position: relative;
  
  &:after {
    position: absolute;
    top: clamp(0px, 0.1vw, 2px);
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
  border-radius: 8px;
  padding: 3px 8px;
  min-width: 128px;
  height: 28px;
  
  &::-webkit-calendar-picker-indicator{
    opacity: 0;
    z-index: 100;
    cursor: pointer;
  }
  
`;

export { Container, Date };

