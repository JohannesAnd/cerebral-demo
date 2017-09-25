import routed from './signals/routed';
import addTodoClicked from './signals/addTodoClicked';

export default {
  state: {
    todos: []
  },
  signals: {
    routed,
    addTodoClicked
  }
};
