import styled from "styled-components";
import * as ScrollArea from '@radix-ui/react-scroll-area';

const ScrollareaRoot = styled(ScrollArea.Root)`
  background-color: ${({ theme }) => theme.colors.primaryCard.toString()};
  width: 30rem;
  height: 100%;
  overflow: hidden;
  
  padding: 2rem 1.5rem;
  border-radius: 2rem;



  .viewport {
    height: 100%;
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    
    > * {
      cursor: pointer;
      display: flex !important;
      flex-direction: column;
      gap: 0.5rem;


    }
 }

  .scrollbar {
    display: flex;
    margin: 2rem 0;
    margin-right: 10px;
    /* ensures no selection */
    user-select: none;
    /* disable browser handling of all panning and zooming gestures on touch devices */
    touch-action: none;
    padding: 2px;
    background-color: transparent;

    &[data-orientation="vertical"] {
      width: 10px;
    }

    &[data-orientation="horizontal"] {
      flex-direction: column;
      height: 10px;
    }
  }

  .thumb {
    flex: 1;
    background: ${({ theme }) => theme.colors.secondaryCard.toString()};
    border-radius: 1rem;
    position: relative;
  }
`;

export { ScrollareaRoot };

