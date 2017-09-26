import React from 'react';
import { connect } from '@cerebral/react';
import { state, signal, props } from 'cerebral/tags';

import { Wrapper } from './elements';

export default connect(
  {
    todo: state`app.todos.${props`todoKey`}`,
    removeTodoClicked: signal`app.removeTodoClicked`
  },
  function Todo({ className, todo, todoKey, removeTodoClicked }) {
    return (
      <Wrapper
        className={className}
        onClick={() => removeTodoClicked({ todoKey })}
      >
        <h2>{todo.id.substring(0, 5)}</h2>
      </Wrapper>
    );
  }
);
