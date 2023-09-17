import {Plus} from "@phosphor-icons/react";
import * as Styled from "./styles";

const NewTodoTask = () => {
  return (
    <Styled.Button>
      <Plus size={20} weight="bold" />
      NOVA ATIVIDADE
    </Styled.Button>
  );
};

export default NewTodoTask;