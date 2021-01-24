import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import Button from '../../../components/Button/Button';
import Block from '../../../components/Block/Block';

const LoginForm = (props) => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
  } = props;

  return (
    <>
      <div className="auth-header">
        <h2 className="auth-header__title">Войти в аккаунт</h2>
        <p className="auth-header__content">
          Пожалуйста, войдите в свой аккаунт
        </p>
      </div>

      <Block>
        <Form name="normal_login" className="login-form">
          <Form.Item name="username" hasFeedback>
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
              size="large"
              name="email"
            />
          </Form.Item>

          <Form.Item name="password" hasFeedback>
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
              size="large"
              name="password"
            />
          </Form.Item>

          <Form.Item>
            <Button onClick={handleSubmit} type="primary" size="large">
              Войти в аккаунт
            </Button>
          </Form.Item>

          <Link className="auth__register-link" to="/register">
            Зарегистрироваться
          </Link>
        </Form>
      </Block>
    </>
  );
};

export default LoginForm;
