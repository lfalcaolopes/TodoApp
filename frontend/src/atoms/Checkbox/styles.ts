import * as Checkbox from "@radix-ui/react-checkbox";
import styled from "styled-components";
import {CheckboxProps} from "./index.tsx";

const Root = styled(Checkbox.Root)<CheckboxProps>`
  background-color: ${props => props.checked ? props.color : "transparent"};
  width: 1.5rem;
  height: 1.5rem;
  
  border: 2px solid ${props => props.color};
  border-radius: 50%;
  
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Indicator = styled(Checkbox.Indicator)`
  `;

export { Root, Indicator }