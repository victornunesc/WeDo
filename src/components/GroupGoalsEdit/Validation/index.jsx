import * as yup from 'yup';

export const GoalsEditValidation = yup.object().shape({
  title: yup.string().required('Campo obrigatório'),
  difficulty: yup.string().required('Campo obrigatório').nullable(),
});
