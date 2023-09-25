import * as Select from "@radix-ui/react-select";
import * as Styled from "./styles";
import {CaretDown, Check} from "@phosphor-icons/react";
import {useState} from "react";

const CategoryPicker = ({category}: {category: string}) => {
  const [value, setValue] = useState(category);
  return (
    <Select.Root value={value} onValueChange={setValue}>
      <Styled.Trigger>
        <Select.Value placeholder="Escolha uma caregoria" >
          {value}
        </Select.Value>
        <Styled.Icon asChild>
          <CaretDown size={16} weight="bold" />
        </Styled.Icon>
      </Styled.Trigger>

      <Select.Portal>
        <Styled.Content position={"popper"} sideOffset={5}>
          <Styled.Viewport>
            <Styled.Item value="inside">
              <Select.ItemText>Trabalho</Select.ItemText>
              <Select.ItemIndicator><Check size={10} weight="bold" /></Select.ItemIndicator>
            </Styled.Item>
            <Styled.Item value="outsite">
              <Select.ItemText>Estudos</Select.ItemText>
              <Select.ItemIndicator><Check size={10} weight="bold" /></Select.ItemIndicator>
            </Styled.Item>
            <Styled.Item value="teste">
              <Select.ItemText>Pessoal</Select.ItemText>
              <Select.ItemIndicator><Check size={10} weight="bold" /></Select.ItemIndicator>
            </Styled.Item>
          </Styled.Viewport>
        </Styled.Content>
      </Select.Portal>
    </Select.Root>
  );
};

export default CategoryPicker;