import {zodResolver} from "@hookform/resolvers/zod";
import {DotsThreeOutlineVertical} from "@phosphor-icons/react";
import {useContext, useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import {z} from "zod";
import ActionButton from "../../atoms/ActionButton/index.tsx";
import Checkbox from "../../atoms/Checkbox";
import api from "../../utils/Axios.ts";
import {categoryProps, todoTaskProps} from '../../utils/Props';
import {DataContext} from "../../utils/dataContext.tsx";
import DateSelector from "../DateSelector";
import * as Styled from './styles';


const updateTodoTaskSchema = z.object({
  dueDate: z.string().refine((date) => {
    const now = new Date().toISOString().split('T')[0];
    const dueDate = new Date(date).toISOString().split('T')[0];

    return dueDate >= now;
  }, {message: "A data deve ser no futuro"})
});

type updateTodoTaskProps = z.infer<typeof updateTodoTaskSchema>;

interface TodoTaskCardProps {
  todoTask: todoTaskProps;
}

const TodoTaskCard = ({ todoTask }: TodoTaskCardProps) => {
  const { categoryData } = useContext(DataContext);
  const { setTodoTaskData, updateSidebar } = useContext(DataContext);
  const { register, handleSubmit, reset, watch} = useForm<updateTodoTaskProps>({
    resolver: zodResolver(updateTodoTaskSchema)
  });

  const [checked, setChecked] = useState<boolean | "indeterminate">(todoTask.isComplete);
  const [updateTodoTaskFormIsVisible, setUpdateTodoTaskFormIsVisible] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const watchDueDate = watch("dueDate");
  const categoryById = categoryData?.find(
    (category: categoryProps) => category.id ===  todoTask.categoryId
  )

  function handleCheck(checked: boolean | "indeterminate") {
    const updateTodoTaskData = (isComplete: boolean) => {
      setTodoTaskData((prev) => {
        return prev?.map(item => {
          if (item.id === todoTask.id) {
            updateSidebar();
            return {...item, isComplete};
          }
          return item;
        });
      });
    };

    api.patch(`/todotasks/${todoTask.id}/toggle-completion`).then((response) => {
      updateTodoTaskData(response.data.isComplete);
    });

    setChecked(checked);
  }

  function onSubmit(data: updateTodoTaskProps) {

    const updateTodoTask = {dueDate: new Date(data.dueDate).toISOString()}

    api.put(`/todotasks/${todoTask.id}`, updateTodoTask).then(response => {
      console.log("TaskCardUpdate", response)

      setTodoTaskData((prev) => {
        return prev?.map(item => {
          if (item.id === todoTask.id) {
            return {...item, dueDate: response.data.dueDate};
          }
          return item;
        });
      });
    });

    setUpdateTodoTaskFormIsVisible(false);
    reset();
  }

  useEffect(() => {
    if (!watchDueDate) return;


    if (watchDueDate !== todoTask.dueDate.split('T')[0]) {

      setIsEditing(true);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watchDueDate]);

  useEffect(() => {
    if (!updateTodoTaskFormIsVisible) {
      setIsEditing(false);
      reset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [updateTodoTaskFormIsVisible]);

  return (
    <Styled.Container>
      <Styled.TaskHeader>

        <Styled.TaskData>
          <Checkbox color={categoryById?.color || "#fff"} checked={checked} handleCheck={handleCheck}/>
          <p>{todoTask.name}</p>
        </Styled.TaskData>
        <DotsThreeOutlineVertical size={24} weight="fill" onClick={() => setUpdateTodoTaskFormIsVisible(prevState => !prevState)}/>
      </Styled.TaskHeader>
      {
        updateTodoTaskFormIsVisible &&
          <Styled.Form onSubmit={handleSubmit(onSubmit)}>
              <DateSelector date={todoTask.dueDate} register={register}/>

            {isEditing && <ActionButton text="Salvar" />}
          </Styled.Form>
      }
    </Styled.Container>
  );
};

export default TodoTaskCard;