import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsAuth } from './store/selectors/user';

import AuthPage from './pages/AuthPage/AuthPage';
import HomePage from './pages/HomePage/HomePage';

const App = () => {
  const isAuth = useSelector(getIsAuth);
  return (
    <div className='wrapper'>
      <Switch>
        <Route
          exact
          path={['/signup/verify', '/signin', '/signup']}
          component={AuthPage}
        />
        <Route
          path='/'
          exact
          render={() => (isAuth ? <HomePage /> : <Redirect to='/signin' />)}
        />
      </Switch>
    </div>
  );
};

export default App;
