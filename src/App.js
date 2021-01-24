import React from 'react';
import { Route } from 'react-router-dom';

import AuthPage from './pages/AuthPage/AuthPage';

const App = () => (
  <div className="wrapper">
    <Route exact path={['/', '/login', '/register']} component={AuthPage} />
  </div>
);

export default App;
