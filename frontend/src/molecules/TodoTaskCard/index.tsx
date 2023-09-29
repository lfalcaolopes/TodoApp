import * as Styled from './styles';
import Checkbox from "../../atoms/Checkbox";
import {DotsThreeOutlineVertical} from "@phosphor-icons/react";
import {useState} from "react";
import CategorySelector from "../CategorySelector";
import DateSelector from "../DateSelector";

interface TodoTaskProps {
  todoTask: {
    title: string;
    category: string;
    isComplete: boolean;
    dueDate: string;
  }
  color: string;
}

const TodoTaskCard = ({todoTask, color}: TodoTaskProps) => {
  const [checked, setChecked] = useState<boolean | "indeterminate">(todoTask.isComplete);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Styled.Container>
      <Styled.TaskHeader>

        <Styled.TaskData>
          <Checkbox color={color} checked={checked} setChecked={setChecked}/>
          <p>{todoTask.title}</p>
        </Styled.TaskData>
        <DotsThreeOutlineVertical size={20} weight="fill" onClick={() => setIsOpen(prevState => !prevState)}/>
      </Styled.TaskHeader>
      {
        isOpen &&
          <Styled.Options>
              <CategorySelector category={todoTask.category}/>
              <DateSelector date={todoTask.dueDate} />
          </Styled.Options>
      }
    </Styled.Container>
  );
};

export default TodoTaskCard;