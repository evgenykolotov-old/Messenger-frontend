const validateField = (key, touched, errors) => {
  if (touched[key]) {
    if (errors[key]) {
      return 'error';
    }
    return 'success';
  }
  return '';
};

export default validateField;
