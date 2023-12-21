import { Plus } from "@phosphor-icons/react";
import * as Styled from './styles';

interface NewCategorySidebarItemProps {
  ShowCategoryForm: () => void;
}

const NewCategorySidebarItem = ({ ShowCategoryForm }: NewCategorySidebarItemProps) => {
  return (
    <Styled.Container onClick={ ShowCategoryForm }>
      <Styled.IconWrapper>
        <Plus size={24} weight="bold"/>
        <Styled.Text>Adicionar categoria</Styled.Text>
      </Styled.IconWrapper>
    </Styled.Container>
  );
};

export default NewCategorySidebarItem;