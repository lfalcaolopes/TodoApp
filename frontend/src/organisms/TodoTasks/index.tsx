import { useContext } from "react";
import TodoTaskCard from "../../molecules/TodoTaskCard";
import { DataContext } from "../../utils/dataContext";
import * as Styled from "./styles";


const TodoTasks = () => {
  const { todoTaskData } = useContext(DataContext);

  return (
    <Styled.Container>
      <Styled.Title>Todas as atividades</Styled.Title>
      
      <Styled.Content>
        {todoTaskData?.map((todoTask) => (
          <TodoTaskCard todoTask={todoTask} key={todoTask.name} />
          ))}
      </Styled.Content>
    </Styled.Container>
  );
};

export default TodoTasks;
