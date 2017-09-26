import { unset } from 'cerebral/operators';
import { state, props } from 'cerebral/tags';

// Remove todo from todos
export default [unset(state`app.todos.${props`todoKey`}`)];
