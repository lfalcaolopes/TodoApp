import { CaretDown, Check } from "@phosphor-icons/react";
import * as Select from "@radix-ui/react-select";
import { useContext } from "react";
import { Control, Controller } from "react-hook-form";
import { DataContext } from "../../utils/dataContext";
import * as Styled from "./styles";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CategoryPicker = ({definedCategory, control}: {definedCategory?: string, control: Control<any>}) => {
  const { categoryData } = useContext(DataContext);

  return (
    <Controller 
      name="categoryId"
      control={control}
      defaultValue={definedCategory}
      render={({ field }) => (
        <Select.Root value={field.value} onValueChange={field.onChange}>
          <Styled.Trigger>
            <Select.Value placeholder="Escolha uma caregoria" >
              {definedCategory ? field.value : definedCategory}
            </Select.Value>
            <Styled.Icon asChild>
              <CaretDown size={18} weight="bold" />
            </Styled.Icon>
          </Styled.Trigger>

          <Select.Portal>
            <Styled.Content position={"popper"} sideOffset={5}>
              <Styled.Viewport>
                {categoryData?.map((category) => (
                  <Styled.Item key={category.id} value={category.id.toString()}>
                    <Select.ItemText>{category.name}</Select.ItemText>
                    <Select.ItemIndicator><Check size={14} weight="bold" /></Select.ItemIndicator>
                  </Styled.Item>
                )
                )}
              </Styled.Viewport>
            </Styled.Content>
          </Select.Portal>
        </Select.Root>
      )}
    />
  );
};

export default CategoryPicker;