import { Todo } from "components/Todo/Todo";
import { TodoItem } from "./TodoList.styled";
export const TodoList = ({ todos, onDeleteTodo, onToggleCompleted }) => (
  <ul>
    {todos.map(({ id, text, completed }) => (
      <TodoItem key={id}>
        <Todo
          text={text}
          completed={completed}
          onToggleCompleted={() => onToggleCompleted(id)}
          onDeleteTodo={() => onDeleteTodo(id)}
        ></Todo>
      </TodoItem>
    ))}
  </ul>
);
