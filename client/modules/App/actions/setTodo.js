import uuid from 'uuid';

export default function setTodo({ props, state }) {
  const id = uuid.v4();
  const todo = {
    id: id,
    text: props.todo,
    done: false
  };
  state.set(`app.todos.${id}`, todo);
}
