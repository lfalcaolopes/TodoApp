import ProgressBar from "../../atoms/ProgressBar";
import * as Styled from "./styles";

interface CategoryCardProps {
  cardData: {
  title: string;
  total: number;
  completed: number;
  color: string;
  }
}

const CategoryCard = ({ cardData }: CategoryCardProps) => {
  const progress = (cardData.completed / cardData.total) * 100;
  return (
    <Styled.Container>
      <Styled.Description>{cardData.total} tarefas</Styled.Description>
      <Styled.Title>{cardData.title}</Styled.Title>
      <ProgressBar progress={progress} color={cardData.color}/>
    </Styled.Container>
  );
};

export default CategoryCard;