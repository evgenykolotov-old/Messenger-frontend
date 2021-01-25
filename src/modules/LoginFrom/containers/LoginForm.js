import { withFormik } from 'formik';
import validateForm from '../../../utils/validate';
import LoginForm from '../components/LoginForm';

export default withFormik({
  enableReinitialize: true,
  mapPropsToValues: () => ({
    email: '',
    password: '',
  }),
  validate: (values) => {
    const errors = {};
    validateForm({ isAuth: true, values, errors });
    return errors;
  },
  handleSubmit: () => {},
  displayName: 'LoginForm',
})(LoginForm);
