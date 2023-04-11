import { CounterControls, CounterButton } from "./Counter.styled";

export const Controls = ({ onIncrement, onDecrement }) => (
  <CounterControls>
    <CounterButton onClick={onDecrement}>-1</CounterButton>
    <CounterButton onClick={onIncrement}>+1</CounterButton>
  </CounterControls>
);
