import * as Dialog from '@radix-ui/react-dialog';
import { useEffect, useRef, useState } from 'react';
import ActionButton from '../../atoms/ActionButton';
import SearchBar from "../../atoms/SearchBar";
import NewTodoTaskModal from '../../molecules/NewTodoTaskForm';
import * as Styled from './styles';
import { List, MagnifyingGlass, Plus } from '@phosphor-icons/react';

interface headerProps {
  showSidebar: () => void;
}

const Header = ({showSidebar} : headerProps) => {
  const [todoTaskFormIsVisible, setTodoTaskFormIsVisible] = useState(false);
  const [searchBarIsVisible, setSearchBarIsVisible] = useState(false);
  const searchBarRef = useRef<HTMLInputElement>(null);

  function openSearchBar() {
    setSearchBarIsVisible(true);
  }

  useEffect(() => {
    if (searchBarIsVisible) {
      searchBarRef.current?.focus();
    }
  }, [searchBarIsVisible]);

  return (
    <Styled.Container $searchBarIsVisible={searchBarIsVisible}>
      <SearchBar
       searchBarRef={searchBarRef}
       searchBarIsVisible={searchBarIsVisible}
       hideSearchBar={() => setSearchBarIsVisible(false)} />

      <div className="mobile-header">
        <List size={24} weight="bold" className="sidebar-icon" onClick={showSidebar}/>

        <MagnifyingGlass size={24} weight="bold" onClick={openSearchBar}/>
      </div>

      <Dialog.Root open={todoTaskFormIsVisible} onOpenChange={setTodoTaskFormIsVisible}>
        <Dialog.Trigger asChild>
          <div className='modal-triggers'>
            <ActionButton text="Nova atividade" openModal={()=> setTodoTaskFormIsVisible(true)}/>

            <Styled.MobileButton className="mobile" onClick={() => setTodoTaskFormIsVisible(true)}>
              <Plus size={20} weight="bold" />
            </Styled.MobileButton>
          </div>
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
