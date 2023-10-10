import { Plus } from "@phosphor-icons/react";
import * as Styled from './styles';

interface NewCategorySidebarItemProps {
  NewCategoryFormVisible: () => void;
}

const NewCategorySidebarItem = ({ NewCategoryFormVisible }: NewCategorySidebarItemProps) => {
  return (
    <Styled.Container onClick={ NewCategoryFormVisible }>
      <Styled.IconWrapper>
        <Plus size={24} weight="bold"/>
        <Styled.Text>Adicionar categoria</Styled.Text>
      </Styled.IconWrapper>
    </Styled.Container>
  );
};

export default NewCategorySidebarItem;