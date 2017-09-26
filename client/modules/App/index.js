import routed from './signals/routed';
import addTodoClicked from './signals/addTodoClicked';
import removeTodoClicked from './signals/removeTodoClicked';

export default {
  state: {
    todos: {}
  },
  signals: {
    routed,
    addTodoClicked,
    removeTodoClicked
  }
};
