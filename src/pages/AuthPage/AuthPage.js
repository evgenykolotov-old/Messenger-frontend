import React from 'react';
import { Route } from 'react-router-dom';

import './AuthPage.css';
import LoginForm from '../../modules/LoginFrom';

const AuthPage = () => (
  <section className="auth">
    <div className="auth__content">
      <Route exact path={['/', '/login']} component={LoginForm} />
    </div>
  </section>
);

export default AuthPage;
