import { zodResolver } from '@hookform/resolvers/zod';
import { X } from '@phosphor-icons/react';
import * as Dialog from '@radix-ui/react-dialog';
import { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import ActionButton from '../../atoms/ActionButton';
import api from '../../utils/Axios';
import { DataContext } from '../../utils/dataContext';
import CategorySelector from '../CategorySelector';
import DateSelector from '../DateSelector';
import * as Styled from './styles';
import { ToastContext } from '../../utils/toastContext';

const createTodoTaskSchema = z.object({
  name: z.string().max(40, {message: "O nome da atividade deve ter no máximo 40 caracteres"}),
  categoryId: z.string().max(20),
  dueDate: z.string().refine((date) => {
    const now = new Date().toISOString().split('T')[0];
    const dueDate = new Date(date).toISOString().split('T')[0];

    return dueDate >= now;
  }, {message: "A data deve ser no futuro"})
});

type createTodoTaskProps = z.infer<typeof createTodoTaskSchema>;

interface NewTodoTaskModalProps {
  todoTaskFormIsVisible: boolean;
  closeModal: () => void;
}

function NewTodoTaskModal({todoTaskFormIsVisible, closeModal} : NewTodoTaskModalProps) {
  const { addToast } = useContext(ToastContext);
  const { setTodoTaskData, updateSidebar } = useContext(DataContext);
  const { register, control, handleSubmit, reset, formState: {errors} } = useForm<createTodoTaskProps>({
    resolver: zodResolver(createTodoTaskSchema)
  });

  function handleFormSubmit(data: createTodoTaskProps) {
    const createTodoTask = {...data, dueDate: new Date(data.dueDate).toISOString(), categoryId: parseInt(data.categoryId)}

    api.post('/todotasks', createTodoTask).then(response => {
      console.log("createTask", response)
      if (response.status === 200) {
        setTodoTaskData((prev) => [...(prev || []), response.data]);
        updateSidebar();

        addToast({type: "success", message: "Atividade criada com sucesso" });
      } else {
        addToast({type: "error", message: response.data.message || "Erro ao criar atividade"});
      }
    });

    reset();
    closeModal();
  }

  useEffect(() => {
    reset();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [todoTaskFormIsVisible]);

  return (
    <Dialog.Portal>
      <Styled.Overlay />

      <Styled.Content>
        <Dialog.Title>Nova atividade</Dialog.Title>
        <Styled.Close> <X size={20} weight="bold" /> </Styled.Close>

        <Styled.Form onSubmit={handleSubmit(handleFormSubmit)}>
          <Styled.Input placeholder="Nome da atividade" {...register("name")} />
          {errors.name && <Styled.Error>{errors.name.message}</Styled.Error>}

          <CategorySelector control={control} />
          {errors.categoryId && <Styled.Error>{errors?.categoryId.message}</Styled.Error>}

          <DateSelector register={register} />
          {errors.dueDate && <Styled.Error>{errors?.dueDate.message}</Styled.Error>}

          <ActionButton text="CRIAR NOVA ATIVIDADE" />
        </Styled.Form>
        
      </Styled.Content>
    </Dialog.Portal>
  )
}

export default NewTodoTaskModal