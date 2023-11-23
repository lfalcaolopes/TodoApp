import { Plus } from "@phosphor-icons/react";
import * as Styled from "./styles";

interface ActionButtonProps {
  openModal?: () => void;
  text: string;
}

const ActionButton = ({openModal, text}: ActionButtonProps) => {
  return (
    <>
      {openModal ? (
        <Styled.Button onClick={openModal} >
          <Plus size={20} weight="bold" />
          {text}
        </Styled.Button>
        ) : (
        <Styled.Button type="submit">
          {text}
        </Styled.Button>
        )
      }
    </>
  );
};

export default ActionButton;