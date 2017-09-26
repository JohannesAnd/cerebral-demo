import React from 'react';
import { render } from 'react-dom';
import { Container } from '@cerebral/react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import App from 'client/App';
import controller from './controller';

render(
  <Container controller={controller}>
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  </Container>,
  document.querySelector('#app')
);
