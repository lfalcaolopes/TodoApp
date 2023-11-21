import * as Dialog from '@radix-ui/react-dialog';
import { useState } from 'react';
import NewTodoTask from '../../atoms/NewTodoTask';
import SearchBar from "../../atoms/SearchBar";
import NewTodoTaskModal from '../../molecules/NewTodoTaskForm';
import * as Styled from './styles';

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <Styled.Container>
      <SearchBar />

      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Trigger asChild>
          <NewTodoTask openModal={()=> setOpen(true)}/>
        </Dialog.Trigger>

        <NewTodoTaskModal open={open} closeModal={()=> setOpen(false)} />
      </Dialog.Root>
    </Styled.Container>
  );
};

export default Header;
