import * as yup from 'yup';

const registerSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup
    .string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
  confirmPassword: yup
    .string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required')
    .oneOf([yup.ref('password'), ''], 'Passwords Must Match'),
});

export default registerSchema;
