import { Component } from "react";
import shortid from "shortid";

import friends from "../../friends.json";

import { BookTitle } from "components/BookTitle/BookTitle";
import { ContactBoard } from "components/ContactBoard/ContactBoard";
import { Counter } from "components/Counter/Counter";
import { Dropdown } from "components/Dropdown/Dropdown";
import { TodoList } from "components/TodoList";
import { Container } from "./App.styled";
import { Form } from "components/Form";
import { TodoEditor } from "components/TodoEditor";
import { Filter } from "components/Filter";
import { LoginForm } from "components/LoginForm";
import { Modal } from "components/Modal/Modal";
import { Clock } from "components/Clock";
import { Example } from "components/Exampe";

export class App extends Component {
  state = {
    todos: [],
    filter: "",
    showModal: false,
  };

  componentDidMount() {
    const parsTodos = JSON.parse(localStorage.getItem("todos"));
    if (parsTodos) {
      this.setState({ todos: parsTodos });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.todos !== prevState.todos) {
      localStorage.setItem("todos", JSON.stringify(this.state.todos));
    }
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  deleteTodo = (todoId) => {
    this.setState(({ todos }) => ({
      todos: todos.filter((todo) => todo.id !== todoId),
    }));
  };

  toggleCompleted = (todoId) => {
    this.setState(({ todos }) => ({
      todos: todos.map((todo) => {
        if (todo.id === todoId) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      }),
    }));
  };

  addTodo = (text) => {
    const todo = {
      id: shortid.generate(),
      text,
      completed: false,
    };
    this.setState((prevState) => ({
      todos: [todo, ...prevState.todos],
    }));
  };

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleTodos = () => {
    const { todos, filter } = this.state;
    const normalizedFilter = filter.toLocaleLowerCase();
    return todos.filter((todo) =>
      todo.text.toLocaleLowerCase().includes(normalizedFilter)
    );
  };

  calculateCompletedTodos = () => {
    const { todos } = this.state;
    return todos.reduce((acc, todo) => (todo.completed ? acc + 1 : acc), 0);
  };

  formSubmitHandler = ({ name, lastName }) => {
    console.log(name, lastName);
  };

  render() {
    const { todos, filter, showModal } = this.state;

    const completedTodos = this.calculateCompletedTodos();
    const visibleTodos = this.getVisibleTodos();

    return (
      <>
        <Container>
          <Clock />
          <BookTitle text="My contacts" />
          <ContactBoard events={friends} />
          <Counter initialValue={0} />
          <Dropdown />
          <div>Total number of tasks: {todos.length}</div>
          <div>The number of completed tasks: {completedTodos}</div>
          <TodoList
            todos={visibleTodos}
            onDeleteTodo={this.deleteTodo}
            onToggleCompleted={this.toggleCompleted}
          />
          <TodoEditor onSubmit={this.addTodo} />
          <Filter value={filter} onChange={this.changeFilter} />
          <Form onSubmit={this.formSubmitHandler} />
          <button type="button" onClick={this.toggleModal}>
            Open modal
          </button>
          {showModal && (
            <Modal onClose={this.toggleModal}>
              <LoginForm />
              <button type="button" onClick={this.toggleModal}>
                Close modal
              </button>
            </Modal>
          )}
          <Example />
        </Container>
      </>
    );
  }
}
