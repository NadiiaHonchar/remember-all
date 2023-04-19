import { TodoText } from "./Todo.styled";
export const Todo = ({ text, completed, onToggleCompleted, onDeleteTodo }) => {
  return (
    <>
      <input
        type="checkbox"
        checked={completed}
        onChange={onToggleCompleted}
      ></input>
      <TodoText>{text}</TodoText>
      <button onClick={onDeleteTodo}>DEL</button>
    </>
  );
};
