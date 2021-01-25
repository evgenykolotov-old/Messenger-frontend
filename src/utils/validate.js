const validate = ({ isAuth, values, errors }) => {
  const rules = {
    email: (value) => {
      if (!value) {
        Object.assign(errors, { email: 'Введите email' });
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        Object.assign(errors, { email: 'Невалидный email address' });
      }
    },
    password: (value) => {
      if (!value) {
        Object.assign(errors, { password: 'Введите пароль' });
      } else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i.test(value)) {
        Object.assign(errors, {
          password: isAuth ? 'Некорректный пароль' : 'Слишком лёгкий пароль',
        });
      }
    },
  };
  Object.keys(values).forEach((key) => rules[key] && rules[key](values[key]));
};

export default validate;
