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

function NewTodoTaskModal({open, closeModal} : {open: boolean, closeModal: () => void}) {
  const { register, control, handleSubmit, reset, formState: {errors} } = useForm<createTodoTaskProps>({
    resolver: zodResolver(createTodoTaskSchema)
  });
  const { setTodoTaskData, updateSidebar } = useContext(DataContext);

  function handleFormSubmit(data: createTodoTaskProps) {

    const createTodoTask = {...data, dueDate: new Date(data.dueDate).toISOString(), categoryId: parseInt(data.categoryId)}

    api.post('/todotasks', createTodoTask).then(response => {
      setTodoTaskData((prev) => [...(prev || []), response.data.data[0]]);
      updateSidebar();
    });

    reset();
    closeModal();
  }

  useEffect(() => {

    reset();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

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