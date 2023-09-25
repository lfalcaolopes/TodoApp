import * as Styled from './styles';
import DatePicker from "../../atoms/DatePicker";

const DateSelector = ({date}: {date: string}) => {
  return (
    <Styled.Container>
      <Styled.Text>Data final</Styled.Text>
      <DatePicker date={date} />
    </Styled.Container>
  );
};

export default DateSelector;
