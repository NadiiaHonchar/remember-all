import { TodoItem, TodoText } from "./TodoList.styled";
export const TodoList = ({ todos, onDeleteTodo, onToggleCompleted }) => (
  <ul>
    {todos.map(({ id, text, completed }) => (
      <TodoItem key={id}>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => onToggleCompleted(id)}
        ></input>
        <TodoText>{text}</TodoText>
        <button onClick={() => onDeleteTodo(id)}>DEL</button>
      </TodoItem>
    ))}
  </ul>
);
