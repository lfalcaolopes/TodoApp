import * as Styled from "./styles";
import Sidebar from "../../organisms/Sidebar";
import Header from "../../organisms/Header";
import TodoTasks from "../../organisms/TodoTasks";

const categoryData = [
  {
    title: "Trabalho",
    total: 16,
    completed: 10,
    color: "green"
  },
  {
    title: "Estudos",
    total: 22,
    completed: 4,
    color: "red"
  },
  {
    title: "Pessoal",
    total: 8,
    completed: 2,
    color: "blue"
  }]

const todoTaskData = [
  {
    title: "Ler 50 páginas",
    category: "Estudos",
    isComplete: false,
    dueDate: "2022-10-10"
  },
  {
    title: "Fazer 10 questões",
    category: "Estudos",
    isComplete: false,
    dueDate: "2023-10-10"
  },
  {
    title: "Fazer redação",
    category: "Estudos",
    isComplete: false,
    dueDate: "2020-10-10"
  },
  {
    title: "Pesquisar estrategias de estudo",
    category: "Estudos",
    isComplete: false,
    dueDate: "2021-10-10"
  }
]

const Home = () => {
  return (
    <Styled.Container>
      <Sidebar category={categoryData}/>
      
      <Styled.Content>
        <Header />
        {/*<Categories category={categoryData}/>*/}
        <TodoTasks todoTask={todoTaskData}/>
        
      </Styled.Content>

    </Styled.Container>
  );
};

export default Home;