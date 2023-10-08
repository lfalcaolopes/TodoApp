import { DotsThreeOutlineVertical } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import Checkbox from "../../atoms/Checkbox";
import api from "../../utils/Axios";
import { categoryListSchema, categoryProps, todoTaskProps } from '../../utils/Props';
import CategorySelector from "../CategorySelector";
import DateSelector from "../DateSelector";
import * as Styled from './styles';

const TodoTaskCard = ({ todoTask }: { todoTask: todoTaskProps }) => {
  const [categoryData, setCategoryData] = useState<categoryProps>()
  const [checked, setChecked] = useState<boolean | "indeterminate">(todoTask.isComplete);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    api.get('/categories').then((categoryResponse) => {
      const categoryById = categoryListSchema.parse(categoryResponse.data.data).find(
        (category: categoryProps) => category.id ===  todoTask.categoryId
      )

      setCategoryData(categoryById)
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Styled.Container>
      <Styled.TaskHeader>

        <Styled.TaskData>
          <Checkbox color={categoryData?.color || "#fff"} checked={checked} setChecked={setChecked}/>
          <p>{todoTask.name}</p>
        </Styled.TaskData>
        <DotsThreeOutlineVertical size={24} weight="fill" onClick={() => setIsOpen(prevState => !prevState)}/>
      </Styled.TaskHeader>
      {
        isOpen &&
          <Styled.Options>
              <CategorySelector category={categoryData?.name || "TodoTaskCard Error"}/>
              <DateSelector date={todoTask.dueDate} />
          </Styled.Options>
      }
    </Styled.Container>
  );
};

export default TodoTaskCard;