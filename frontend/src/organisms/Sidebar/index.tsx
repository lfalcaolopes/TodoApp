import { CalendarBlank, Check, House } from "@phosphor-icons/react";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import { useContext, useEffect, useRef, useState } from "react";
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
  setSidebarIsVisible: (isOpen: boolean) => void;
  sidebarIsVisible: boolean;
}

dayjs.extend(utc);

const Sidebar = ({setSelectedCategory, setSidebarIsVisible, sidebarIsVisible} : sidebarProps) => {
  const { categoryData, categoriesTasksAmount, setCategoryData, setTodoTaskData } = useContext(DataContext);
  const [categoryFormIsVisible, setCategoryFormIsVisible] = useState<boolean>(false);

  const sidebarRef = useRef<HTMLDivElement>(null);

  function AddCategory(newCategory: categoryProps) {
    setCategoryData((prev) => [...(prev || []), newCategory]);
  }

  function showSpecificCategory(categoryIdentifier?: number | "all" | "today" | "completed") {
    api.get('/todotasks').then((taskResponse) => {
      const parsedData = todoTaskListSchema.parse(taskResponse.data);
      let filteredData = parsedData;
      let selectedCategory = "";

      switch (categoryIdentifier) {
        case "all":
          selectedCategory = "Todas as atividades";
          break;
        case "today":
          filteredData = parsedData.filter(
            (todoTask) => dayjs.utc(todoTask.dueDate).format('YYYY-MM-DD') === dayjs.utc().format('YYYY-MM-DD'));
          selectedCategory = "Para hoje";
          break;
        case "completed":
          filteredData = parsedData.filter((todoTask) => todoTask.isComplete === true);
          selectedCategory = "Completos";
          break;
        default:
          filteredData = parsedData.filter((todoTask) => todoTask.categoryId === categoryIdentifier);
          selectedCategory = categoryData?.find((category) => category.id === categoryIdentifier)?.name || "";
          break;
      }

      setTodoTaskData(filteredData);
      setSelectedCategory(selectedCategory);
      setSidebarIsVisible(false);
    });
  }

const handleClickOutside = (event: MouseEvent) => {
  // Get the current width of the sidebar
  const sidebarWidth = sidebarRef.current?.offsetWidth;

  if (sidebarWidth && event.clientX > sidebarWidth) {
    // Click happened outside the sidebar, close it
    setSidebarIsVisible(false);
  }
};

  useEffect(() => {
    // Add the event listener when the component mounts
    document.addEventListener('mousedown', handleClickOutside);

    // Remove the event listener when the component unmounts
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if(!sidebarIsVisible) {
      setCategoryFormIsVisible(false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sidebarIsVisible]);

  return (
    <Styled.ScrollareaRoot ref={sidebarRef} $sidebarIsVisible={sidebarIsVisible}>
      <ScrollArea.Viewport  className="viewport">
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
          isVisible={categoryFormIsVisible}
          HideCategoryForm={() => setCategoryFormIsVisible(false)}
          AddCategory={AddCategory}
        />

        <CategorySidebarItem
          categoryTitle={"Completos"}
          amount={categoriesTasksAmount?.get("completed")}
          changeShownCategory={() => showSpecificCategory("completed")}
        >
          <Check size={24} weight="bold" />
        </CategorySidebarItem>

        <NewCategorySidebarItem ShowCategoryForm={() => setCategoryFormIsVisible(true)} />
      </ScrollArea.Viewport>

      <ScrollArea.Scrollbar className="scrollbar" orientation="vertical">
        <ScrollArea.Thumb className="thumb"/>
      </ScrollArea.Scrollbar>
    </Styled.ScrollareaRoot>
  );
};

export default Sidebar;
