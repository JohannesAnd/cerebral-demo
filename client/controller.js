import { Controller } from 'cerebral';
import Devtools from 'cerebral/devtools';
import StorageProvider from '@cerebral/storage';
import Router from '@cerebral/router';

import AppModule from './modules/App';

export default Controller({
  devtools:
    process.env.NODE_ENV === 'production'
      ? null
      : Devtools({
          host: 'localhost:8787'
        }),
  state: {},
  modules: {
    app: AppModule,
    router: Router({
      routes: [
        {
          path: '/',
          signal: 'app.routed'
        }
      ]
    })
  },
  providers: [
    StorageProvider({
      target: localStorage,
      sync: {
        todos: 'app.todos'
      },
      prefix: '@myApp'
    })
  ]
});
