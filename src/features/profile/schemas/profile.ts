import * as yup from 'yup';

export const profileSchema = yup.object().shape({
  image: yup.string().optional(),
  username: yup.string().optional(),
  password: yup.string().optional(),
});
