import React from 'react';
import { Route } from 'react-router-dom';

import AuthPage from './pages/AuthPage/AuthPage';
import HomePage from './pages/HomePage/HomePage';

const App = () => (
  <div className="wrapper">
    <Route exact path={['/', '/login', '/register']} component={AuthPage} />
    <Route exac path="/im" component={HomePage} />
  </div>
);

export default App;
