import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined, InfoCircleTwoTone } from '@ant-design/icons';

import Button from '../../../components/Button/Button';
import Block from '../../../components/Block/Block';
import validateField from '../../../utils/validateField';

const success = true;

const RegisterForm = (props) => {
  const { values, touched, errors, handleChange, handleBlur, handleSubmit } = props;

  return (
    <>
      <div className="auth-header">
        <h2 className="auth-header__title">Регистрация</h2>
        <p className="auth-header__content">Для входа в чат, вам необходимо зарегистрироваться</p>
      </div>

      <Block>
        {success ? (
          <Form name="normal_login" className="login-form">
            <Form.Item
              name="email"
              validateStatus={validateField('email', touched, errors)}
              help={!touched.email ? null : errors.email}
              hasFeedback
            >
              <Input
                prefix={<MailOutlined className="site-form-item-icon" />}
                placeholder="E-Mail"
                size="large"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                name="email"
              />
            </Form.Item>
            <Form.Item name="username" hasFeedback>
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Ваше имя"
                size="large"
              />
            </Form.Item>
            <Form.Item
              name="password"
              validateStatus={validateField('password', touched, errors)}
              help={!touched.password ? null : errors.password}
              hasFeedback
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Пароль"
                size="large"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                name="password"
              />
            </Form.Item>
            <Form.Item name="repeat" hasFeedback>
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Повторите пароль"
                size="large"
              />
            </Form.Item>
            <Form.Item>
              <Button onClick={handleSubmit} type="primary" size="large">
                Зарегистрироваться
              </Button>
            </Form.Item>
            <Link className="auth-register__link" to="/login">
              Войти в аккаунт
            </Link>
          </Form>
        ) : (
          <div className="auth-success">
            <div>
              <InfoCircleTwoTone style={{ fontSize: '48px' }} />
            </div>
            <h2 className="auth-success__title">Подтвердите свой аккаунт</h2>
            <p className="auth-success__content">
              На вашу почту отправлено письмо с ссылкой на подтверждение аккаунта
            </p>
          </div>
        )}
      </Block>
    </>
  );
};

export default RegisterForm;
