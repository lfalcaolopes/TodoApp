import * as Styled from './styles';
import CategorySidebarItem from "../../molecules/CategorySidebarItem";
import NewCategorySidebarItem from "../../molecules/NewCategorySidebarItem";
import {CalendarBlank, Check, House} from "@phosphor-icons/react";

interface CategoriesData {
  category: {
    title: string;
    total: number;
    completed: number;
    color: string;
  }[]
}

const Sidebar = (data: CategoriesData) => {
  return (
    <Styled.Container>
      <CategorySidebarItem categoryTitle={"Todas as atividades"} amount={10}>
        <House size={20} weight="bold"/>
      </CategorySidebarItem>
      <CategorySidebarItem categoryTitle={"Para hoje"} amount={14}>
        <CalendarBlank size={20} weight="bold"/>
      </CategorySidebarItem>
      
      {data.category.map((category) => {
        return (
          <CategorySidebarItem categoryTitle={category.title} amount={category.total} color={category.color}/>
        )
      })}
      
      <CategorySidebarItem categoryTitle={"Completos"} amount={0}>
        <Check size={20} weight="bold"/>
      </CategorySidebarItem>
      
      <NewCategorySidebarItem/>
    </Styled.Container>
  );
};

export default Sidebar;
