import { withFormik } from 'formik';
import validateForm from '../../../utils/validate';
import LoginForm from '../components/LoginForm';
import { fetchUserLogin } from '../../../store/actions/user';
import { store } from '../../../store/store';

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
  handleSubmit: (values, { setSubmitting, props }) => {
    store
      .dispatch(fetchUserLogin(values))
      .then(({ status }) => {
        if (status === 'success') {
          props.history.push('/');
        }
        setSubmitting(false);
      })
      .catch(() => {
        setSubmitting(false);
      });
  },
  displayName: 'LoginForm',
})(LoginForm);
