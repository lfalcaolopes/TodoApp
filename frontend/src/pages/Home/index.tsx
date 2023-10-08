import { useEffect, useState } from "react";
import Header from "../../organisms/Header";
import Sidebar from "../../organisms/Sidebar";
import TodoTasks from "../../organisms/TodoTasks";
import api from "../../utils/Axios";
import { todoTaskListSchema, todoTaskProps } from "../../utils/Props";
import * as Styled from "./styles";

const Home = () => {
  const [todoTasksData, setTodoTasksData] = useState<todoTaskProps[]>()

  useEffect(() => {
    api.get('/todotasks').then((taskResponse) => {

      setTodoTasksData(todoTaskListSchema.parse(taskResponse.data.data))
    })
  }, [])

  return (
    <Styled.Container>
      <Sidebar todoTasksData={todoTasksData}/>
      
      <Styled.Content>
        <Header />
        {/*<Categories category={categoryData}/>*/}
        <TodoTasks todoTasksData={todoTasksData} />
        
      </Styled.Content>

    </Styled.Container>
  );
};

export default Home;