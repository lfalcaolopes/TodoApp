import * as Dialog from '@radix-ui/react-dialog';
import { useState } from 'react';
import ActionButton from '../../atoms/ActionButton';
import SearchBar from "../../atoms/SearchBar";
import NewTodoTaskModal from '../../molecules/NewTodoTaskForm';
import * as Styled from './styles';

const Header = () => {
  const [todoTaskFormIsVisible, setTodoTaskFormIsVisible] = useState(false);

  return (
    <Styled.Container>
      <SearchBar />

      <Dialog.Root open={todoTaskFormIsVisible} onOpenChange={setTodoTaskFormIsVisible}>
        <Dialog.Trigger asChild>
          <ActionButton text="Nova atividade" openModal={()=> setTodoTaskFormIsVisible(true)}/>
        </Dialog.Trigger>

        <NewTodoTaskModal
          todoTaskFormIsVisible={todoTaskFormIsVisible}
          closeModal={()=> setTodoTaskFormIsVisible(false)}
        />
      </Dialog.Root>
    </Styled.Container>
  );
};

export default Header;
