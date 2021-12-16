import * as yup from 'yup';

export const signupValidation = yup.object().shape({
  username: yup.string().required('Campo obrigatório'),
  email: yup.string().required('Campo obrigatório').email('Email inválido'),
  password: yup
    .string()
    .required('Campo obrigatório')
    .min(6, 'São necessários no mínimo 6 caracteres'),
  confirmPassword: yup
    .string()
    .required('Campo obrigatório')
    .oneOf([yup.ref('password')], 'As senhas devem ser iguais'),
});
