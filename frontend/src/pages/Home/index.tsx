import { useState } from "react";
import Header from "../../organisms/Header";
import Sidebar from "../../organisms/Sidebar";
import TodoTasks from "../../organisms/TodoTasks";
import * as Styled from "./styles";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todas as atividades");
  const [sidebarIsVisible, setSidebarIsVisible] = useState(false);

  return (
    <Styled.Container>
      <Sidebar 
        sidebarIsVisible={sidebarIsVisible} 
        setSidebarIsVisible={(isOpen: boolean) => setSidebarIsVisible(isOpen)} 
        setSelectedCategory={(catergory) => setSelectedCategory(catergory)} 
      />
      
      <Styled.Content>
        <Header showSidebar={() => setSidebarIsVisible(true)} />
        {/*<Categories category={categoryData}/>*/}
        <TodoTasks selectedCategory={selectedCategory}/>
        
      </Styled.Content>

    </Styled.Container>
  );
};

export default Home;