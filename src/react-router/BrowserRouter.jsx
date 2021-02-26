import React from 'react';

import { createHistory } from '../history';

import Router from './Router';

export default function BrowserRouter({ children }) {
  const history = createHistory();

  return (
    <Router history={history}>
      {children}
    </Router>
  );
}
