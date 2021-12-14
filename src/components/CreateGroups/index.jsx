import { Modal } from "../Modal";
import { Container } from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Input } from "../Input";
import { Button } from "../Button";
import api from "../../services/api";
import { toast } from "react-toastify";
import { useAuth } from "../../providers/Auth";

export const CreateGroup = ({ setModal }) => {
  const lastTest = () => {
    setModal(false);
  };

  const schema = yup
    .object({
      name: yup.string().required("Campo Obrigatório"),
      description: yup.string().required("Campo Obrigatório"),
      category: yup.string().required("Campo Obrigatório"),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { access } = useAuth();
  console.log(access);

  const formValue = (data) => {
    api
      .post(`groups/`, data, {
        headers: { Authorization: `Bearer ${access}` },
      })
      .then((response) => {
        toast.success("Grupo criado com sucesso");
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <Modal onClick={lastTest} />
      <Container onSubmit={handleSubmit(formValue)}>
        <h2>Adicionar Grupo</h2>
        <section>
          <Input
            register={register}
            errors={errors}
            name="name"
            placeholder="Nome"
          />
          <Input
            register={register}
            errors={errors}
            name="description"
            placeholder="Descrição"
          />
          <Input
            register={register}
            errors={errors}
            name="category"
            placeholder="Categoria"
          />
        </section>

        <div className="button">
          <Button>Adicionar</Button>
        </div>
      </Container>
    </>
  );
};
