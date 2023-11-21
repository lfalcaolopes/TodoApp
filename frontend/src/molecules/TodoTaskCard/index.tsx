import { zodResolver } from "@hookform/resolvers/zod";
import { DotsThreeOutlineVertical } from "@phosphor-icons/react";
import {useContext, useState} from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Checkbox from "../../atoms/Checkbox";
import { categoryProps, todoTaskProps } from '../../utils/Props';
import CategorySelector from "../CategorySelector";
import DateSelector from "../DateSelector";
import * as Styled from './styles';
import {DataContext} from "../../utils/dataContext.tsx";


const updateTodoTaskSchema = z.object({
  category: z.string().max(19),
  dueDate: z.string().max(10)
});

type updateTodoTaskProps = z.infer<typeof updateTodoTaskSchema>;

const TodoTaskCard = ({ todoTask }: { todoTask: todoTaskProps }) => {
  const [checked, setChecked] = useState<boolean | "indeterminate">(todoTask.isComplete);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { categoryData } = useContext(DataContext);

  const categoryById = categoryData?.find(
    (category: categoryProps) => category.id ===  todoTask.categoryId
  )
  
  const { register, control, handleSubmit, reset } = useForm<updateTodoTaskProps>({
    resolver: zodResolver(updateTodoTaskSchema)
  });

  function onSubmit(data: updateTodoTaskProps) {
    console.log(data);
    setIsOpen(false);
    reset();
  }

  return (
    <Styled.Container>
      <Styled.TaskHeader>

        <Styled.TaskData>
          <Checkbox color={categoryById?.color || "#fff"} checked={checked} setChecked={setChecked}/>
          <p>{todoTask.name}</p>
        </Styled.TaskData>
        <DotsThreeOutlineVertical size={24} weight="fill" onClick={() => setIsOpen(prevState => !prevState)}/>
      </Styled.TaskHeader>
      {
        isOpen &&
          <Styled.Form onSubmit={handleSubmit(onSubmit)}>
              <CategorySelector category={categoryById?.name || "TodoTaskCard Error"} control={control}/>
              <DateSelector date={todoTask.dueDate} register={register}/>
          </Styled.Form>
      }
    </Styled.Container>
  );
};

export default TodoTaskCard;