import * as Styled from "./styles";
import {Check} from "@phosphor-icons/react";
import React from "react";

export interface CheckboxProps {
  color: string;
  checked: boolean | "indeterminate"
  setChecked:  React.Dispatch<React.SetStateAction<boolean | "indeterminate">>;
}

const Checkbox = ({color, checked, setChecked}: CheckboxProps) => {
  return (
    <Styled.Root color={color} checked={checked} onCheckedChange={setChecked}>
      <Styled.Indicator  asChild>
        <Check size={16} weight="bold" />
      </Styled.Indicator>
    </Styled.Root>
  );
};

export default Checkbox;