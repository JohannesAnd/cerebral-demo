import React, { Component } from 'react';
import { connect } from '@cerebral/react';
import { state, signal } from 'cerebral/tags';

import { Wrapper, Text, Button, Todo } from './elements';

// Connect to cerebral
export default connect(
  {
    // Get state from the state tree
    todos: state`app.todos`,
    // Get a signal (function) from the app-module
    addTodoClicked: signal`app.addTodoClicked`
  },
  class App extends Component {
    render() {
      // Make a Todo-component for each todo
      const todos = this.props.todos
        ? this.props.todos.map((todo, index) => <Todo key={index}>{todo}</Todo>)
        : null;

      return (
        <Wrapper>
          <Text>{'My todos'}</Text>
          {todos}
          {/*Trigger the signal when the button is clicked*/}
          <Button onClick={() => this.props.addTodoClicked({ todo: 'Foo!' })}>
            {'Add new todo'}
          </Button>
        </Wrapper>
      );
    }
  }
);
