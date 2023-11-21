import Header from "../../organisms/Header";
import Sidebar from "../../organisms/Sidebar";
import TodoTasks from "../../organisms/TodoTasks";
import * as Styled from "./styles";

const Home = () => {


  return (
    <Styled.Container>
      <Sidebar />
      
      <Styled.Content>
        <Header />
        {/*<Categories category={categoryData}/>*/}
        <TodoTasks />
        
      </Styled.Content>

    </Styled.Container>
  );
};

export default Home;