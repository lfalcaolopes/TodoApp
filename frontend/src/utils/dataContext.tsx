import React, { ReactNode, useEffect, useState } from 'react';
import api from './Axios';
import { categoryListSchema, categoryProps, todoTaskListSchema, todoTaskProps } from './Props';
import dayjs from 'dayjs';

interface DataContextProps {
  categoryData?: categoryProps[];
  setCategoryData: React.Dispatch<React.SetStateAction<categoryProps[] | undefined>>;
  todoTaskData?: todoTaskProps[];
  setTodoTaskData: React.Dispatch<React.SetStateAction<todoTaskProps[] | undefined>>;
  updateSidebar: () => void;
  categoriesTasksAmount?: Map<string, number>;
}

export const DataContext = React.createContext<DataContextProps>(
  {
    categoryData: [], 
    setCategoryData: () => {},
    todoTaskData: [],
    setTodoTaskData: () => {},
    updateSidebar: () => {},
    categoriesTasksAmount: new Map<string, number>()
  }
  );

const DataProvider = ({ children }: { children: ReactNode}) => {
  const [categoryData, setCategoryData] = useState<categoryProps[]>()
  const [todoTaskData, setTodoTaskData] = useState<todoTaskProps[]>()
 const [categoriesTasksAmount, setCategoriesTasksAmount] = useState<Map<string, number>>(new Map<string, number>());

 function updateTasksAmountMap(updater: (prevMap: Map<string, number>) => Map<string, number>) {
   setCategoriesTasksAmount(prevMap => updater(prevMap));
 }

 function updateSidebar() {
   api.get('/todotasks').then((taskResponse) => {
     const todoTasksDataForUpdate = todoTaskListSchema.parse(taskResponse.data.data)

     setCategoriesTasksAmount(new Map<string, number>());

     updateTasksAmountMap(prevMap => {
       return new Map(prevMap.set("all", todoTasksDataForUpdate?.length || 0));
     });

     for (const todoTask of todoTasksDataForUpdate || []) {
       const dueDate = dayjs(todoTask.dueDate);

       updateTasksAmountMap(prevMap => {
         const currentValue = prevMap.get(todoTask.categoryId.toString()) || 0;
         return new Map(prevMap.set(todoTask.categoryId.toString(), currentValue + 1));
       });

       if (todoTask.isComplete === true) {
         updateTasksAmountMap(prevMap => {
           const currentValue = prevMap.get("completed") || 0;
           return new Map(prevMap.set("completed", currentValue + 1));
         });
       }

       if (dayjs().isSame(dueDate, "day")) {
         updateTasksAmountMap(prevMap => {
           const currentValue = prevMap.get("today") || 0;
           return new Map(prevMap.set("today", currentValue + 1));
         });
       }
     }
   })
 }

  useEffect(() => {
    api.get('/categories').then((categoryResponse) => {
      setCategoryData(categoryListSchema.parse(categoryResponse.data.data))
    })

    api.get('/todotasks').then((taskResponse) => {

      setTodoTaskData(todoTaskListSchema.parse(taskResponse.data.data))
    })

    updateSidebar();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

 return (
  <DataContext.Provider value={{ categoryData, todoTaskData, setCategoryData, setTodoTaskData, updateSidebar, categoriesTasksAmount }}>
    {children}
  </DataContext.Provider>
 );
};

export default DataProvider;
