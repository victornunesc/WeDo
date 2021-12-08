import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export const Login = () => {
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
      <input {...register("username")} />
      <label>password</label>
      <input {...register("password")} />
    </form>
  );
};
