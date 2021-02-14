import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import Button from '../../../components/Button/Button';
import Block from '../../../components/Block/Block';
import validateField from '../../../utils/validateField';

const LoginForm = (props) => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    isValid,
    isSubmitting,
  } = props;

  return (
    <>
      <div className='auth-header'>
        <h2 className='auth-header__title'>Войти в аккаунт</h2>
        <p className='auth-header__content'>Пожалуйста, войдите в свой аккаунт</p>
      </div>

      <Block>
        <Form name='normal_login' className='login-form'>
          <Form.Item
            name='username'
            validateStatus={validateField('email', touched, errors)}
            help={!touched.email ? null : errors.email}
            hasFeedback
          >
            <Input
              prefix={<UserOutlined className='site-form-item-icon' />}
              placeholder='E-mail'
              size='large'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              name='email'
            />
          </Form.Item>
          <Form.Item
            name='password'
            validateStatus={validateField('password', touched, errors)}
            help={!touched.password ? null : errors.password}
            hasFeedback
          >
            <Input
              prefix={<LockOutlined className='site-form-item-icon' />}
              type='password'
              placeholder='Password'
              size='large'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              name='password'
            />
          </Form.Item>
          <Form.Item>
            {isSubmitting && !isValid && <span>Ошибка!</span>}
            <Button
              disabled={isSubmitting}
              onClick={handleSubmit}
              type='primary'
              size='large'
            >
              Войти в аккаунт
            </Button>
          </Form.Item>
          <Link className='auth-register__link' to='/signup'>
            Зарегистрироваться
          </Link>
        </Form>
      </Block>
    </>
  );
};

export default LoginForm;
