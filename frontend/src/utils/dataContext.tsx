import React, { ReactNode, useEffect, useState } from 'react';
import api from './Axios';
import { categoryListSchema, categoryProps, todoTaskListSchema, todoTaskProps } from './Props';

interface DataContextProps {
  categoryData?: categoryProps[];
  setCategoryData: React.Dispatch<React.SetStateAction<categoryProps[] | undefined>>;
  todoTaskData?: todoTaskProps[];
  setTodoTaskData: React.Dispatch<React.SetStateAction<todoTaskProps[] | undefined>>;
}

export const DataContext = React.createContext<DataContextProps>(
  {
    categoryData: [], 
    setCategoryData: () => {},
    todoTaskData: [],
    setTodoTaskData: () => {}
  }
  );

const DataProvider = ({ children }: { children: ReactNode}) => {
  const [categoryData, setCategoryData] = useState<categoryProps[]>()
  const [todoTaskData, setTodoTaskData] = useState<todoTaskProps[]>()

  useEffect(() => {
    api.get('/categories').then((categoryResponse) => {
      setCategoryData(categoryListSchema.parse(categoryResponse.data.data))
    })

    api.get('/todotasks').then((taskResponse) => {

      setTodoTaskData(todoTaskListSchema.parse(taskResponse.data.data))
    })
  }, []);

 return (
  <DataContext.Provider value={{ categoryData, todoTaskData, setCategoryData, setTodoTaskData }}>
    {children}
  </DataContext.Provider>
 );
};

export default DataProvider;
