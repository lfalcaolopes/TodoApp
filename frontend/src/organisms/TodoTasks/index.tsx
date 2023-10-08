import TodoTaskCard from "../../molecules/TodoTaskCard";
import { todoTaskListProps } from "../../utils/Props";
import * as Styled from "./styles";


const TodoTasks = ({todoTasksData}: {todoTasksData: todoTaskListProps | undefined}) => {

  return (
    <Styled.Container>
      <Styled.Title>Todas as atividades</Styled.Title>
      
      <Styled.Content>
        {todoTasksData?.map((todoTask) => (
          <TodoTaskCard todoTask={todoTask} key={todoTask.name} />
          ))}
      </Styled.Content>
    </Styled.Container>
  );
};

export default TodoTasks;
