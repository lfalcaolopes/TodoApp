import * as Styled from './styles';

const DatePicker = ({date}: {date: string}) => {
  return (
    <Styled.Container>
      <Styled.Date value={date} />
    </Styled.Container>
  );
};

export default DatePicker;
