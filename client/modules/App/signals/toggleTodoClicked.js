import { toggle } from 'cerebral/operators';
import { state, props } from 'cerebral/tags';

// Set the state of the todo
export default [toggle(state`app.todos.${props`todoKey`}.done`)];
