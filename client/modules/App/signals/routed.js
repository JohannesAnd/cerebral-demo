import { state, props } from 'cerebral/tags';
import { set, when } from 'cerebral/operators';
import { getStorage } from '@cerebral/storage/operators';

export default [
  getStorage('todos'),
  // Check if there was any todos in local storage
  when(props`value`),
  {
    // If there was, set them to state
    true: [set(state`app.todos`, props`value`)],
    // Else do nothing
    false: []
  }
];
