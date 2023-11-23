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

const TodoTaskCard = ({ todoTask }: { todoTask: todoTaskProps }) => {
  const [checked, setChecked] = useState<boolean | "indeterminate">(todoTask.isComplete);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const { categoryData } = useContext(DataContext);

  const categoryById = categoryData?.find(
    (category: categoryProps) => category.id ===  todoTask.categoryId
  )

  const { setTodoTaskData } = useContext(DataContext);
  
  const { register, handleSubmit, reset, watch} = useForm<updateTodoTaskProps>({
    resolver: zodResolver(updateTodoTaskSchema)
  });

  const watchDueDate = watch("dueDate");

  function onSubmit(data: updateTodoTaskProps) {

    const updateTodoTask = {dueDate: new Date(data.dueDate).toISOString()}
    api.put(`/todotasks/${todoTask.id}`, updateTodoTask).then(response => {

      setTodoTaskData((prev) => {
        return prev?.map(item => {
          if (item.id === todoTask.id) {
            return {...item, dueDate: response.data.data[0].dueDate};
          }
          return item;
        });
      });
    });

    setIsOpen(false);
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
    if (!isOpen) {
      setIsEditing(false);
      reset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

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
              <DateSelector date={todoTask.dueDate} register={register}/>

            {isEditing && <ActionButton text="Salvar" />}
          </Styled.Form>
      }
    </Styled.Container>
  );
};

export default TodoTaskCard;