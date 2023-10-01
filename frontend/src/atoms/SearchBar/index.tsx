import * as Styled from './styles';
import {MagnifyingGlass} from "@phosphor-icons/react";

const SearchBar = () => {
  return (
    <Styled.Form>
      <Styled.Input placeholder="Pesquisar..."/>

      <Styled.Button>
        <MagnifyingGlass size={24} weight="bold"/>
      </Styled.Button>
    </Styled.Form>
  );
};

export default SearchBar;