import * as Popover from "@radix-ui/react-popover";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

const Fields = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ActionButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  > * {
    border: none;
    background-color: transparent;
    cursor: pointer;
    height: 100%;

    > * {
      display: flex;
      align-items: center;
    }
  }
`;

const NameInput = styled.input.attrs({ type: "text" })`
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #000;
`;

const Content = styled(Popover.Content)`
  background-color: ${({ theme }) => theme.colors.secondaryCard.toString()};
  width: 8.5rem;
  height: 10rem;
  padding: 1rem;
  border-radius: 0.5rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:focus {
    box-shadow: none;
    outline: none;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  row-gap: 0.5rem;
`;

const DefaultColor = styled.div<{ color: string }>`
  background-color: ${({ color }) => color};
  width: 20px;
  height: 20px;
  margin: 2px;
  border-radius: 50%;
  cursor: pointer;
`;

const ColorInput = styled.div`
  position: relative;
  font-size: ${({ theme }) => theme.fontSizes.xSmall.toString()};

  input[type="color"] {
    cursor: pointer;
    height: 20px;
    width: 100%;
    opacity: 0;
  }

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    position: absolute;
  }
`;

const ColorPreview = styled.div<{ color: string }>`
  background-color: ${({ color }) => color};
  width: 20px;
  height: 20px;
  margin: 2px;
  border-radius: 50%;
`;

export {
  ActionButtons, ColorInput, ColorPreview, Content,
  DefaultColor,
  Fields,
  Form,
  Grid,
  NameInput
};

