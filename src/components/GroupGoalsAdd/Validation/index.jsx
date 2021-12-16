import * as yup from 'yup';

export const GoalsAddValidation = yup.object().shape({
  title: yup.string().required('Campo obrigatório'),
  difficulty: yup.string().required('Campo obrigatório').nullable(),
});
