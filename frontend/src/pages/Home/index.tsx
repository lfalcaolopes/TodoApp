import { useState } from "react";
import Header from "../../organisms/Header";
import Sidebar from "../../organisms/Sidebar";
import TodoTasks from "../../organisms/TodoTasks";
import * as Styled from "./styles";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todas as atividades");


  return (
    <Styled.Container>
      <Sidebar setSelectedCategory={(catergory) => setSelectedCategory(catergory)} />
      
      <Styled.Content>
        <Header />
        {/*<Categories category={categoryData}/>*/}
        <TodoTasks selectedCategory={selectedCategory}/>
        
      </Styled.Content>

    </Styled.Container>
  );
};

export default Home;