import { Plus } from "@phosphor-icons/react";
import * as Styled from "./styles";

const NewTodoTask = ({openModal}: {openModal: ()=> void}) => {
  return (
    <Styled.Button onClick={openModal}>
      <Plus size={20} weight="bold" />
      NOVA ATIVIDADE
    </Styled.Button>
  );
};

export default NewTodoTask;