import * as Styled from './styles';
import SearchBar from "../../atoms/SearchBar";
import NewTodoTask from "../../atoms/NewTodoTask";

const Header = () => {
  return (
    <Styled.Container>
      <SearchBar />
      <NewTodoTask />
    </Styled.Container>
  );
};

export default Header;
