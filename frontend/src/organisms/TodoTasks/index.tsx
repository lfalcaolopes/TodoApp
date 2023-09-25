import * as Styled from "./styles";
import TodoTaskCard from "../../molecules/TodoTaskCard";

interface TodoTasksData {
  todoTask: {
    title: string;
    category: string;
    isComplete: boolean;
    dueDate: string;
  }[]
}

const TodoTasks = (todoTask : TodoTasksData) => {
  return (
    <Styled.Container>
      <Styled.Title>Todas as atividades</Styled.Title>
      
      <Styled.Content>
        {todoTask.todoTask.map((todoTask) => (
          <TodoTaskCard todoTask={todoTask} color={"blue"} key={todoTask.title} />
          ))}
      </Styled.Content>
    </Styled.Container>
  );
};

export default TodoTasks;
