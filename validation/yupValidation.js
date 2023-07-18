import * as yup from 'yup';

const loginValidationSchema = yup.object().shape({
  email: yup.string().email('Please enter a valid email').required('Email is required'),
  password: yup
    .string()
    .required('Password is required')
    .min(6, 'Password is too short - should be 6 chars minimum')
    .matches('^(?=.*d)(?=.*[a-zA-Z]).{6,}$'),
});

const registrationValidationSchema = loginValidationSchema.shape({
  login: yup.string().required('Login is required'),
});

export { loginValidationSchema, registrationValidationSchema };
