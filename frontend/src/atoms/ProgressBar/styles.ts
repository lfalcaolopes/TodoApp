import * as Progress from "@radix-ui/react-progress";
import styled from "styled-components";
import {ProgressBarProps} from "./index.tsx";

const Root = styled(Progress.Root)`
  width: 100%;
  height: 3px;
  
  overflow: hidden;
  border-radius: 0.5rem;
  
  background-color: white;
`;

const Indicator = styled(Progress.Indicator)<ProgressBarProps>`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.color};
`;

export {Root, Indicator};