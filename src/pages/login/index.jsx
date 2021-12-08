import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "react-toastify/dist/ReactToastify.css";
import { useHistory } from "react-router";
import { Container, Button, Input } from "./styles";

export const Login = () => {
  const history = useHistory();
  const schema = yup
    .object({
      username: yup.string().required("username obrigatório!"),
      password: yup
        .string()
        .min(6, "minimo 6 caracteres")
        .required("senha obrigatoria"),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const formValue = (data) => console.log(data);
  return (
    <Container>
      <form onSubmit={handleSubmit(formValue)}>
        <div className="inputs">
          <label>Username</label>
          <Input type="text" {...register("username")} />
          {errors.username?.message}
        </div>
        <div className="inputs">
          <label>Password</label>
          <Input type="password" {...register("password")} />
          {errors.password?.message}
        </div>
        <Button type="submit">Login</Button>

        <p className="redirect">
          Não uma possui conta?{" "}
          <span
            className="span-redirect"
            onClick={() => {
              history.push("/signup");
            }}
          >
            Cadastre-se
          </span>
        </p>
      </form>
    </Container>
  );
};
