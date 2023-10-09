import { zodResolver } from "@hookform/resolvers/zod";
import { Check, Eyedropper, X } from "@phosphor-icons/react";
import * as Popover from "@radix-ui/react-popover";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import * as Styled from "./styles";

const createCategorySchema = z.object({
  name: z.string().max(20),
  color: z.string().max(7).regex(new RegExp("^#(?:[0-9a-fA-F]{3}){1,2}$")),
});

type createCategoryProps = z.infer<typeof createCategorySchema>;

const defaultColors = [
  "#FFBF00",
  "#EA8953",
  "#E05F1D",
  "#79DE79",
  "#6CBDE9",
  "#C154C1",
  "#0F5132",
  "#2B35AF",
  "#800000",
];

const NewCategoryForm = () => {
  const [selectedColor, setSelectedColor] = useState<string>("#fff");
  const { register, handleSubmit, reset } = useForm<createCategoryProps>({
    resolver: zodResolver(createCategorySchema),
  });

  function createCategory(data: createCategoryProps) {
    data.color = selectedColor;
    console.log(data);
  }

  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedColor(event.target.value);
  };

  function handleFormReset() {
    reset();
    setSelectedColor("#fff");
  }

  return (
    <Styled.Form onSubmit={handleSubmit(createCategory)}>
      <Styled.Fields>
        <Popover.Root>
          <Popover.Trigger asChild>
            <Styled.ColorPreview color={selectedColor} />
          </Popover.Trigger>

          <Popover.Portal>
            <Styled.Content sideOffset={10}>
              <Styled.Grid>
                {defaultColors.map((color) => (
                  <Styled.DefaultColor
                    key={color}
                    color={color}
                    onClick={() => setSelectedColor(color)}
                  />
                ))}
              </Styled.Grid>

              <Styled.ColorInput>
                <div>
                  <Eyedropper size={16} weight="bold" />
                  <p>Escolher cor</p>
                </div>
                <input
                  type="color"
                  value={selectedColor}
                  {...register("color", {
                    onChange: (e) => handleColorChange(e),
                  })}
                />
              </Styled.ColorInput>
            </Styled.Content>
          </Popover.Portal>
        </Popover.Root>

        <Styled.NameInput defaultValue="" {...register("name")} />
      </Styled.Fields>

      <Styled.ActionButtons>
        <button type="submit">
          <p>
            <Check size={20} weight="bold" />
          </p>
        </button>
        <button type="button" onClick={() => handleFormReset()}>
          <p>
            <X size={20} weight="bold" />
          </p>
        </button>
      </Styled.ActionButtons>
    </Styled.Form>
  );
};

export default NewCategoryForm;
