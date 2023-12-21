import { useForm } from 'react-hook-form';
import * as Styled from './styles';
import {MagnifyingGlass} from "@phosphor-icons/react";
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import api from '../../utils/Axios';
import { useContext } from 'react';
import { DataContext } from '../../utils/dataContext';
import { ToastContext } from '../../utils/toastContext';

const searchSchema = z.object({
  search: z.string().min(1)
});

type searchProps = z.infer<typeof searchSchema>;

const SearchBar = () => {
  const { setTodoTaskData } = useContext(DataContext);
  const { addToast } = useContext(ToastContext);
  const { register, handleSubmit, reset } = useForm<searchProps>({
    resolver: zodResolver(searchSchema)
  });

  function onSubmit(data: searchProps) {
    api.get(`/todotasks/search?name=${data.search}`).then(response => {
      if (response.data.success) {
        setTodoTaskData(response.data.data);
      } else {
        addToast({type: "error", message: "Atividade não encontrada" });
      }
    });
    
    reset();
  }

  return (
    <Styled.Form onSubmit={handleSubmit(onSubmit)}>
      <Styled.Input 
        placeholder="Pesquisar..."
        {...register("search")}
        />

      <Styled.Button>
        <MagnifyingGlass size={24} weight="bold"/>
      </Styled.Button>
    </Styled.Form>
  );
};

export default SearchBar;