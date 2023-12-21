import { CalendarBlank, Check, House } from "@phosphor-icons/react";
import dayjs from "dayjs";
import { useContext, useState } from "react";
import CategorySidebarItem from "../../molecules/CategorySidebarItem";
import NewCategoryForm from "../../molecules/NewCategoryForm";
import NewCategorySidebarItem from "../../molecules/NewCategorySidebarItem";
import {
  categoryProps, todoTaskListSchema
} from "../../utils/Props";
import { DataContext } from "../../utils/dataContext";
import * as Styled from "./styles";
import api from "../../utils/Axios";
import * as ScrollArea from '@radix-ui/react-scroll-area';

interface sidebarProps {
  setSelectedCategory: (category: string) => void;
}

const Sidebar = ({setSelectedCategory} : sidebarProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const { categoryData, categoriesTasksAmount, setCategoryData, setTodoTaskData } = useContext(DataContext);

  function NewCategoryFormVisible() {
    setIsVisible(true);
  }

  function NewCategoryFormInvisible() {
    setIsVisible(false);
  }

  function AddCategory(newCategory: categoryProps) {
    setCategoryData((prev) => [...(prev || []), newCategory]);
    NewCategoryFormInvisible();
  }

  function showSpecificCategory(categoryIdentifier?: number | "all" | "today" | "completed") {
    api.get('/todotasks').then((taskResponse) => {

      const parsedData = todoTaskListSchema.parse(taskResponse.data.data);

      if (categoryIdentifier === "all") {
        setTodoTaskData(parsedData);
        setSelectedCategory("Todas as atividades");
      }
      else if (categoryIdentifier === "today") {
        setTodoTaskData(parsedData.filter((todoTask) => dayjs().isSame(todoTask.dueDate, "day")));
        setSelectedCategory("Para hoje");
      }
      else if (categoryIdentifier === "completed") {
        setTodoTaskData(parsedData.filter((todoTask) => todoTask.isComplete === true));
        setSelectedCategory("Completos");
      }
      else {
        setTodoTaskData(parsedData.filter((todoTask) => todoTask.categoryId === categoryIdentifier));
        setSelectedCategory(categoryData?.find((category) => category.id === categoryIdentifier)?.name || "");
      }
    })
  }

  return (
    <Styled.ScrollareaRoot>
      <ScrollArea.Viewport className="viewport">
        <CategorySidebarItem categoryTitle={"Todas as atividades"} amount={categoriesTasksAmount?.get("all")} changeShownCategory={() => showSpecificCategory("all")}>
          <House size={24} weight="bold" />
        </CategorySidebarItem>
        <CategorySidebarItem categoryTitle={"Para hoje"} amount={categoriesTasksAmount?.get("today")} changeShownCategory={() => showSpecificCategory("today")}>
          <CalendarBlank size={24} weight="bold" />
        </CategorySidebarItem>

        {categoryData?.map((category) => {
          return (
            <CategorySidebarItem
              key={category.id}
              categoryTitle={category.name}
              amount={categoriesTasksAmount?.get(category.id.toString())}
              color={category.color}
              changeShownCategory={() => showSpecificCategory(category.id)}
            />
          );
        })}

        <NewCategoryForm
          isVisible={isVisible}
          NewCategoryFormInvisible={NewCategoryFormInvisible}
          AddCategory={AddCategory}
        />

        <CategorySidebarItem
          categoryTitle={"Completos"}
          amount={categoriesTasksAmount?.get("completed")}
          changeShownCategory={() => showSpecificCategory("completed")}
        >
          <Check size={24} weight="bold" />
        </CategorySidebarItem>

        <NewCategorySidebarItem NewCategoryFormVisible={NewCategoryFormVisible} />
      </ScrollArea.Viewport>

      <ScrollArea.Scrollbar className="scrollbar" orientation="vertical">
        <ScrollArea.Thumb className="thumb"/>
      </ScrollArea.Scrollbar>
    </Styled.ScrollareaRoot>
  );
};

export default Sidebar;
