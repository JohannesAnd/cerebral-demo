import { push } from 'cerebral/operators';
import { state, props } from 'cerebral/tags';

// Push the new todo onto the list of todos
export default [push(state`app.todos`, props`todo`)];
