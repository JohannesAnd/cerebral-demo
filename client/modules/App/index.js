import routed from './signals/routed';
import addTodoClicked from './signals/addTodoClicked';
import removeTodoClicked from './signals/removeTodoClicked';
import toggleTodoClicked from './signals/toggleTodoClicked';

export default {
  state: {
    todos: {}
  },
  signals: {
    routed,
    addTodoClicked,
    removeTodoClicked,
    toggleTodoClicked
  }
};
