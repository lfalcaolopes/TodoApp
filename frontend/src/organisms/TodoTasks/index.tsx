import { useContext } from "react";
import TodoTaskCard from "../../molecules/TodoTaskCard";
import { DataContext } from "../../utils/dataContext";
import * as Styled from "./styles";

interface TodoTasksProps {
  selectedCategory: string;
}

const TodoTasks = ({selectedCategory} : TodoTasksProps) => {
  const { todoTaskData } = useContext(DataContext);

  return (
    <Styled.Container>
      <Styled.Title>{selectedCategory}</Styled.Title>
      
      <Styled.Content>
        {todoTaskData?.map((todoTask) => (
          <TodoTaskCard todoTask={todoTask} key={todoTask.id} />
          ))}
      </Styled.Content>
    </Styled.Container>
  );
};

export default TodoTasks;
