import { CalendarBlank, Check, House } from "@phosphor-icons/react";
import dayjs from "dayjs";
import { useContext, useState } from "react";
import CategorySidebarItem from "../../molecules/CategorySidebarItem";
import NewCategoryForm from "../../molecules/NewCategoryForm";
import NewCategorySidebarItem from "../../molecules/NewCategorySidebarItem";
import {
  categoryProps
} from "../../utils/Props";
import { DataContext } from "../../utils/dataContext";
import * as Styled from "./styles";

const Sidebar = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const { categoryData, todoTaskData, setCategoryData } = useContext(DataContext);

  const allTasksAmount = todoTaskData?.length;
  const categoriesTasksAmount: Record<number, number> = {};
  let dueTodayAmount = 0;
  let completedTasksAmount = 0;

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

  for (const todoTask of todoTaskData || []) {
    const dueDate = dayjs(todoTask.dueDate);

    // eslint-disable-next-line no-prototype-builtins
    if (categoriesTasksAmount.hasOwnProperty(todoTask.categoryId)) {
      categoriesTasksAmount[todoTask.categoryId]++;
    } else {
      categoriesTasksAmount[todoTask.categoryId] = 1;
    }

    if (todoTask.isComplete === true) {
      completedTasksAmount += 1;
    }

    if (dayjs().isSame(dueDate, "day")) {
      dueTodayAmount += 1;
    }
  }

  return (
    <Styled.Container>
      <CategorySidebarItem
        categoryTitle={"Todas as atividades"}
        amount={allTasksAmount}
      >
        <House size={24} weight="bold" />
      </CategorySidebarItem>
      <CategorySidebarItem categoryTitle={"Para hoje"} amount={dueTodayAmount}>
        <CalendarBlank size={24} weight="bold" />
      </CategorySidebarItem>

      {categoryData?.map((category) => {
        return (
          <CategorySidebarItem
            key={category.id}
            categoryTitle={category.name}
            amount={categoriesTasksAmount[category.id]}
            color={category.color}
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
        amount={completedTasksAmount}
      >
        <Check size={24} weight="bold" />
      </CategorySidebarItem>

      <NewCategorySidebarItem NewCategoryFormVisible={NewCategoryFormVisible} />
    </Styled.Container>
  );
};

export default Sidebar;
