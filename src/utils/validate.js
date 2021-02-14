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
      } else if (!isAuth && !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i.test(value)) {
        Object.assign(errors, { password: 'Слишком лёгкий пароль' });
      }
    },
    password_2: (value) => {
      if (!isAuth && value !== values.password) {
        errors.password_2 = 'Пароли не совпадают';
      }
    },
    fullname: (value) => {
      if (!isAuth && !value) {
        errors.fullname = 'Укажите свое имя и фамилию';
      }
    },
  };
  Object.keys(values).forEach((key) => rules[key] && rules[key](values[key]));
};

export default validate;
