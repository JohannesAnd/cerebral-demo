import uuid from 'uuid';

export default function setTodo({ props, state }) {
  const id = uuid.v4();
  const todo = {
    id: id,
    text: props.todo
  };
  state.set(`app.todos.${id}`, todo);
}
