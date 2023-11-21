import { UseFormRegister } from 'react-hook-form';
import * as Styled from './styles';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const DatePicker = ({date, register}: {date?: string, register: UseFormRegister<any>}) => {
  // const formattedDate = date.split('T')[0]
  let formattedDate = '';

  if(date) {
    formattedDate = date.split('T')[0];
  }
  else {
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();

    formattedDate = `${year}-${month}-${day}`;
  }

  return (
    <Styled.Container>
      <Styled.Date defaultValue={formattedDate} {...register("dueDate")}/>
    </Styled.Container>
  );
};

export default DatePicker;
