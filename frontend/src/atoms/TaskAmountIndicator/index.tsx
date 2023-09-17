import * as Styled from './styles';

interface TaskAmountIndicatorProps {
  amount: number;
}

const TaskAmountIndicator = ({amount}: TaskAmountIndicatorProps) => {
  return (
    <Styled.Container>
      <span>{amount <= 100 ? amount : "99+"}</span>
    </Styled.Container>
  );
};

export default TaskAmountIndicator;