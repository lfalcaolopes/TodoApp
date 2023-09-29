import * as Styled from './styles';

export interface ProgressBarProps {
  progress: number;
  color: string;
}

const ProgressBar = ({progress, color}: ProgressBarProps) => {
  return (
    <Styled.Root value={progress} max={100}>
      <Styled.Indicator style={{ transform: `translateX(-${100 - progress}%)` }} color={color} />
    </Styled.Root>
  );
};

export default ProgressBar;