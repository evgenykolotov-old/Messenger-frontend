import { withFormik } from 'formik';
import validateForm from '../../../utils/validate';
import RegisterForm from '../components/RegisterForm';

export default withFormik({
  enableReinitialize: true,
  mapPropsToValues: () => ({
    email: '',
    username: '',
    password: '',
    repeat: '',
  }),
  validate: (values) => {
    const errors = {};
    validateForm({ isAuth: false, values, errors });
    return errors;
  },
  handleSubmit: () => {},
  displayName: 'RegisterForm',
})(RegisterForm);
