import { TodoItem, TodoText } from "./TodoList.styled";
export const TodoList = ({ todos, onDeleteTodo }) => (
  <ul>
    {todos.map(({ id, text, comleted }) => (
      <TodoItem key={id}>
        <TodoText>{text}</TodoText>
        <button onClick={() => onDeleteTodo(id)}>DEL</button>
      </TodoItem>
    ))}
  </ul>
);
