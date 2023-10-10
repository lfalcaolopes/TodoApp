import { ReactNode } from "react";
import TaskAmountIndicator from "../../atoms/TaskAmountIndicator";
import * as Styled from './styles';

interface CategorySidebarItemProps {
  categoryTitle: string;
  amount?: number;
  color?: string;
  children?: ReactNode;
}

const CategorySidebarItem = ({categoryTitle, amount, color, children}: CategorySidebarItemProps) => {
  return (
    <Styled.Container>
      <Styled.IconWrapper>
        {children ? children : <Styled.CategoryIcon color={color || ""} />}
        <Styled.Text>{categoryTitle}</Styled.Text>
      </Styled.IconWrapper>
       <TaskAmountIndicator amount={amount || 0}/>
    </Styled.Container>
  );
};

export default CategorySidebarItem;