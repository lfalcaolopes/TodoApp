import * as Styled from './styles';
import CategoryPicker from "../../atoms/CategoryPicker";

const CategorySelector = ({category}: {category: string}) => {
  return (
    <Styled.Container>
      <Styled.Text>Categoria</Styled.Text>
      <CategoryPicker category={category}/>
    </Styled.Container>
  );
};

export default CategorySelector;
