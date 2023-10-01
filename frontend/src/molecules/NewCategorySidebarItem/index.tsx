import * as Styled from './styles';
import {Plus} from "@phosphor-icons/react";

const NewCategorySidebarItem = () => {
  return (
    <Styled.Container>
      <Styled.IconWrapper>
        <Plus size={24} weight="bold"/>
        <Styled.Text>Adicionar categoria</Styled.Text>
      </Styled.IconWrapper>
    </Styled.Container>
  );
};

export default NewCategorySidebarItem;