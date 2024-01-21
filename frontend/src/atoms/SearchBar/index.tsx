import { useForm } from 'react-hook-form';
import * as Styled from './styles';
import {MagnifyingGlass} from "@phosphor-icons/react";
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import api from '../../utils/Axios';
import { useContext, useEffect } from 'react';
import { DataContext } from '../../utils/dataContext';
import { ToastContext } from '../../utils/toastContext';

const searchSchema = z.object({
  search: z.string().min(1)
});

type searchProps = z.infer<typeof searchSchema>;

interface searchFormProps {
  hideSearchBar: () => void;
  searchBarIsVisible: boolean;
  searchBarRef: React.MutableRefObject<HTMLInputElement | null>; 
}

const SearchBar = ({hideSearchBar, searchBarIsVisible, searchBarRef} : searchFormProps) => {
  const { setTodoTaskData } = useContext(DataContext);
  const { addToast } = useContext(ToastContext);
  const { register, handleSubmit, reset } = useForm<searchProps>({
    resolver: zodResolver(searchSchema)
  });
  const { ref, ...rest } = register('search');


  function onSubmit(data: searchProps) {
    api.get(`/todotasks/search?name=${data.search}`).then(response => {
      setTodoTaskData(response.data);
    }).catch(error => {
      if (error.response.status === 404)
        addToast({type: "warning", message: "Nenhuma atividade encontrada"});
      else
        addToast({type: "error", message: "Erro interno"});
    });
    
    hideSearchBar();
    reset();
  }

  useEffect(() => {
    if (!searchBarIsVisible) {
      reset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchBarIsVisible]);

  return (
    <Styled.Form onSubmit={handleSubmit(onSubmit)} onBlur={hideSearchBar} >
      <Styled.Input 
        {...rest}
        placeholder="Pesquisar..."
        name='search'
        ref={(e) => {
          ref(e);
          searchBarRef.current = e;
        }}
        autoFocus
        />

      <Styled.Button>
        <MagnifyingGlass size={24} weight="bold"/>
      </Styled.Button>
    </Styled.Form>
  );
};

export default SearchBar;