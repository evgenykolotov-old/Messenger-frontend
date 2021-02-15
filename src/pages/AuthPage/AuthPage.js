import React from 'react';
import { Route } from 'react-router-dom';

import './AuthPage.css';
import LoginForm from '../../modules/LoginFrom';
import RegisterForm from '../../modules/RegisterForm';
import CheckEmailInfo from '../../components/CheckEmailInfo/CheckEmailInfo';

const AuthPage = () => (
  <section className='auth'>
    <div className='auth-content'>
      <Route exact path={['/', '/signin']} component={LoginForm} />
      <Route exact path='/signup' component={RegisterForm} />
      <Route exact path='/signup/verify' component={CheckEmailInfo} />
    </div>
  </section>
);

export default AuthPage;
