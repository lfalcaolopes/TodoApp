import { UseFormRegister } from 'react-hook-form';
import DatePicker from "../../atoms/DatePicker";
import * as Styled from './styles';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const DateSelector = ({date, register}: {date?: string, register: UseFormRegister<any>}) => {
  return (
    <Styled.Container>
      <Styled.Text>Data final</Styled.Text>
      <DatePicker date={date} register={register} />
    </Styled.Container>
  );
};

export default DateSelector;
