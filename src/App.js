import React from "react";
import LocalStorageHelper from './utils/helpers/local-storage-helper/local-storage-helper';
import TodoList from './components/todo-list/todo-list';
import TodoForm from './components/todo-form/todo-form';
import { Container, Row, Col } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";


class Home extends React.Component {
  state = {
    todos: LocalStorageHelper.getTodos()
  }

  addTodo = (todo) => {
    this.setState(previousState => ({
      todos: [...previousState.todos, todo]
    }));
  }

  removeTodo = (id) => {
    LocalStorageHelper.removeTodo(id);
    let todos = this.state.todos.filter((todo) => {
      return todo.id !== id;
    });

    this.setState({
      todos
    });
  }

  render() {
    const {todos} = this.state;

    return (
      <Container className="App">
        <Row>
          <Col>
            <h1>Todo List</h1>
          </Col>
        </Row>
        <TodoForm addTodo={this.addTodo}/>
        <TodoList todos={todos} removeTodo={this.removeTodo} />
      </Container>
    );
  }
}

export default Home
