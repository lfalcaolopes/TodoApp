import * as Styled from './styles';
import CategoryCard from "../../molecules/CategoryCard";

interface CategoriesData {
  category: {
    title: string;
    total: number;
    completed: number;
    color: string;
  }[]
}
const Categories = (categories : CategoriesData) => {
  return (
    <Styled.Container>
      <Styled.Title>Categorias</Styled.Title>
      
      <Styled.Content>
        {categories.category.map((category) => (
          <CategoryCard cardData={category} key={category.title} />
          ))}
      </Styled.Content>
      
    </Styled.Container>
  );
};

export default Categories;
