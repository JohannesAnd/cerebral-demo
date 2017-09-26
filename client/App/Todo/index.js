import React from 'react';
import { connect } from '@cerebral/react';
import { state, signal, props } from 'cerebral/tags';

import { Wrapper, Check } from './elements';

export default connect(
  {
    todo: state`app.todos.${props`todoKey`}`,
    removeTodoClicked: signal`app.removeTodoClicked`,
    toggleTodoClicked: signal`app.toggleTodoClicked`
  },
  function Todo({
    className,
    todo,
    todoKey,
    removeTodoClicked,
    toggleTodoClicked
  }) {
    return (
      <Wrapper className={className}>
        <Check
          onClick={() => toggleTodoClicked({ todoKey })}
          checked={todo.done}
        />
        <h2 onClick={() => removeTodoClicked({ todoKey })}>
          {todo.id.substring(0, 5)}
        </h2>
      </Wrapper>
    );
  }
);
