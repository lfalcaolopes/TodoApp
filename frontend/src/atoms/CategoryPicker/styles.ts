import * as Select from "@radix-ui/react-select";
import styled from "styled-components";

const Trigger = styled(Select.Trigger)` 
  background-color: ${({ theme }) => theme.colors.secondaryCard.toString()};
  border: none;
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 8rem;
  gap: 0.5rem;
  
  font-size: ${({ theme }) => theme.fontSizes.xSmall.toString()};
`;

const Icon = styled(Select.Icon)` `;
const Content = styled(Select.Content)` 
  background-color: ${({ theme }) => theme.colors.secondaryCard.toString()};
  font-size: ${({ theme }) => theme.fontSizes.xSmall.toString()};
  
  box-shadow: 0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2);
  border-radius: 0.5rem;
  
  top: 10px;
`;
const Viewport = styled(Select.Viewport)` 
  padding: 0.2rem;
  min-width: 8rem;
  
`;
const Item = styled(Select.Item)`
  padding: 0.2rem 0.5rem;
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  cursor: pointer;
  
  &:hover {
    // make the button darker
    box-shadow: inset 0 0 0 100px rgba(0, 0, 0, 0.1);
  }
  
  &:first-child {
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
  }
  &:last-child {
    border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
  }
`;

export { Trigger, Icon, Content, Viewport, Item,  }