import styled from 'styled-components';

import TodoComponent from './Todo';

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Text = styled.h1`
  color: red;
  text-align: center;
`;

export const Button = styled.button`
  color: green;
  width: 100px;
`;

export const Todo = styled(TodoComponent)`border-top: 1px solid gray;`;
