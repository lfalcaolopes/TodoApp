import styled from "styled-components";
import * as ScrollArea from '@radix-ui/react-scroll-area';

const ScrollareaRoot = styled(ScrollArea.Root)<{ $sidebarIsVisible: boolean }>`
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

  @media (max-width: 991px) {
    display: ${({ $sidebarIsVisible }) => $sidebarIsVisible ? 'flex' : 'none'};
    width: clamp(20rem, 40vw, 30rem);
    padding: 24px 16px;

    position: absolute !important;
    top: 0;
    left: 0;

    border-radius: 0;
    z-index: 1000;

    box-shadow: 0 0 0 100vw rgba(0, 0, 0, 0.6);
  }
`;

export { ScrollareaRoot };

