import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from 'react-router';
import { Container, Button, Form, Span } from './styles';

import { Input, InputPassword } from '../../components/Input';
import { useAuth } from '../../providers/AuthContext';
import { toast } from 'react-toastify';
import logoLogin from '../../assets/logoLogin.png';
import flowersLogin from '../../assets/flowersLogin.png';

export const Login = () => {
  const history = useHistory();
  const schema = yup
    .object({
      username: yup.string().required('username obrigatório!'),
      password: yup
        .string()
        .min(6, 'minimo 6 caracteres')
        .required('senha obrigatoria'),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  //const { signIn } = useAuth();

  const formValue = (data) => {
    /* signIn(data).catch((err) => {
      toast.error("Email ou senha inválida");
    }); */
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(formValue)}>
        <Input
          placeholder="Username"
          register={register}
          name="username"
          errors={errors}
        />
        <InputPassword
          placeholder="Senha"
          register={register}
          name="password"
          errors={errors}
        />
        <Button type="submit">Login</Button>

        <p className="redirect">
          Não possui uma conta?{' '}
          <span
            className="span-redirect"
            onClick={() => {
              history.push('/signup');
            }}
          >
            Cadastre-se
          </span>
        </p>
        <img className="flower" src={flowersLogin} alt="flower" />
      </Form>
      <img className="image" src={logoLogin} alt="yoga" />
    </Container>
  );
};
