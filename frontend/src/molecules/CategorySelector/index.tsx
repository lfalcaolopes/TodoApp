import { Control } from 'react-hook-form';
import CategoryPicker from "../../atoms/CategoryPicker";
import * as Styled from './styles';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CategorySelector = ({category, control}: {category?: string, control: Control<any>}) => {
  return (
    <Styled.Container>
      <Styled.Text>Categoria</Styled.Text>
      <CategoryPicker definedCategory={category} control={control}/>
    </Styled.Container>
  );
};

export default CategorySelector;
