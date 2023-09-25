import * as Styled from './styles';
import TaskAmountIndicator from "../../atoms/TaskAmountIndicator";
import {ReactNode} from "react";

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
        {children ? children : <Styled.CategoryIcon iconColor={color || ""} />}
        <Styled.Text>{categoryTitle}</Styled.Text>
      </Styled.IconWrapper>
      {amount !== undefined && <TaskAmountIndicator amount={amount}/>}
    </Styled.Container>
  );
};

export default CategorySidebarItem;