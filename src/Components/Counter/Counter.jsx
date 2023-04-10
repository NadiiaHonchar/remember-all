import {
  CounterWrapper,
  CounterValue,
  CounterControls,
  CounterButton,
} from "./Counter.styled";
export const Counter = () => {
  return (
    <CounterWrapper>
      <CounterValue>0</CounterValue>
      <CounterControls>
        <CounterButton>+1</CounterButton>
        <CounterButton>-1</CounterButton>
      </CounterControls>
    </CounterWrapper>
  );
};
