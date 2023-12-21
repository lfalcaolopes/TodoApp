import * as Styled from "./styles";
import {Check} from "@phosphor-icons/react";

export interface CheckboxProps {
  color: string;
  checked: boolean | "indeterminate"
  handleCheck: (checked: boolean | "indeterminate") => void;
}

const Checkbox = ({color, checked, handleCheck}: CheckboxProps) => {
  return (
    <Styled.Root color={color} checked={checked} onCheckedChange={handleCheck}>
      <Styled.Indicator  asChild>
        <Check size={16} weight="bold" />
      </Styled.Indicator>
    </Styled.Root>
  );
};

export default Checkbox;