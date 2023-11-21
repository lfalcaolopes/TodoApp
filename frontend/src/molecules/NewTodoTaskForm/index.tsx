import { zodResolver } from '@hookform/resolvers/zod';
import { X } from '@phosphor-icons/react';
import * as Dialog from '@radix-ui/react-dialog';
import { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import api from '../../utils/Axios';
import { DataContext } from '../../utils/dataContext';
import CategorySelector from '../CategorySelector';
import DateSelector from '../DateSelector';
import * as Styled from './styles';

const createTodoTaskSchema = z.object({
  name: z.string().max(40),
  categoryId: z.string().max(20),
  dueDate: z.string().max(10)
});

type createTodoTaskProps = z.infer<typeof createTodoTaskSchema>;

function NewTodoTaskModal({open, closeModal} : {open: boolean, closeModal: () => void}) {
  const { register, control, handleSubmit, reset, formState: {errors} } = useForm<createTodoTaskProps>({
    resolver: zodResolver(createTodoTaskSchema)
  });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { setTodoTaskData } = useContext(DataContext);

  function handleFormSubmit(data: createTodoTaskProps) {

    const createTodoTask = {...data, dueDate: new Date(data.dueDate).toISOString(), categoryId: parseInt(data.categoryId)}
    console.log(createTodoTask);

    api.post('/todotasks', createTodoTask).then(response => {
      console.log(response.data) 

      setTodoTaskData((prev) => [...(prev || []), response.data]);
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

          <Styled.Button type="submit">CRIAR NOVA ATIVIDADE</Styled.Button>
        </Styled.Form>
        
      </Styled.Content>
    </Dialog.Portal>
  )
}

export default NewTodoTaskModal