import { withFormik } from 'formik';
import validateForm from '../../../utils/validate';
import RegisterForm from '../components/RegisterForm';
import { fetchUserRegister } from '../../../store/actions/user';
import { store } from '../../../store/store';

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
  handleSubmit: (values, { setSubmitting, props }) => {
    store
      .dispatch(fetchUserRegister(values))
      .then(({ status }) => {
        if (status === 'success') {
          props.history.push('/im');
        }
        setSubmitting(false);
      })
      .catch(() => {
        setSubmitting(false);
      });
  },
  displayName: 'RegisterForm',
})(RegisterForm);
