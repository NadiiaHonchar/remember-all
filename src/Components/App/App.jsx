import { BookTitle } from "components/BookTitle/BookTitle";
import { ContactBoard } from "components/ContactBoard/ContactBoard";
import { Counter } from "components/Counter/Counter";
import { Dropdown } from "components/Dropdown/Dropdown";
import { TodoList } from "components/TodoList";
import { Container } from "./App.styled";
import friends from "../../friends.json";
import { Component } from "react";
import { Form } from "components/Form";

export class App extends Component {
  state = {
    todos: [
      { id: "id-1", text: "Todo1", completed: false },
      { id: "id-2", text: "Todo2", completed: false },
      { id: "id-3", text: "Todo3", completed: true },
      { id: "id-4", text: "Todo4", completed: false },
    ],
  };

  deleteTodo = (todoId) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.id !== todoId),
    }));
  };

  formSubmitHandler = ({ name, lastName }) => {
    console.log(name, lastName);
  };

  render() {
    const { todos } = this.state;
    const completedTodos = todos.reduce(
      (acc, todo) => (todo.completed ? acc + 1 : acc),
      0
    );
    return (
      <>
        <Container>
          <BookTitle text="My contacts" />
          <ContactBoard events={friends} />
          <Counter initialValue={0} />
          <Dropdown />
          <div>Total number of tasks: {todos.length}</div>
          <div>The number of completed tasks: {completedTodos}</div>
          <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
          <Form onSubmit={this.formSubmitHandler} />
        </Container>
      </>
    );
  }
}
