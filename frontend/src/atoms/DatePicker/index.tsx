import * as Styled from './styles';

const DatePicker = ({date}: {date: string}) => {
  const formattedDate = date.split('T')[0]
  return (
    <Styled.Container>
      <Styled.Date value={formattedDate} />
    </Styled.Container>
  );
};

export default DatePicker;
