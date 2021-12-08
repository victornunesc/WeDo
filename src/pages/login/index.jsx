import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export const Login = () => {
  const schema = yup
    .object({
      username: yup
        .string()
        .min(6, "minimo 6 caracteres")
        .required("username obrigatório!"),
      password: yup.string().required("senha obrigatoria"),
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
    <form onSubmit={handleSubmit(formValue)}>
      <label>username</label>
      <input type="text" {...register("username")} />
      {errors.username?.message}
      <label>password</label>
      <input type="password" {...register("password")} />
      {errors.password?.message}
      <button type="submit">Login</button>
    </form>
  );
};
