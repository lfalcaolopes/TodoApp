import * as ScrollArea from '@radix-ui/react-scroll-area';
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  overflow: hidden;
`;

const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.xLarge.toString()};
  color: ${({ theme }) => theme.colors.secondaryText.toString()};
  font-weight: bold;
  
  letter-spacing: 0.1rem;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const NoContent = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.small.toString()};
  color: ${({ theme }) => theme.colors.secondaryText.toString()};

  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const ScrollareaRoot = styled(ScrollArea.Root)`
  height: 100%;
  width: 100%;
  overflow: hidden;

  .viewport {
    height: 100%;
    width: 100%;
    padding-right: 13px;
  }

  .scrollbar {
    display: flex;
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

export { NoContent, Container, Title, Content, ScrollareaRoot }