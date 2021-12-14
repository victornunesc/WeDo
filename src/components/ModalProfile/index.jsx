import { useContext } from 'react';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';

import { AuthContext } from '../../providers/Auth';
import api from '../../services/api';

import { Input } from '../Input/index';
import { Button } from '../Button/index';

import {
  ShowOnlyContainer,
  Container,
  ContainerModal,
  HeaderModal,
  MainModal,
  Form,
  FixForm,
} from './style';

export const ModalProfile = ({ hideModalProfile }) => {
  const { access, user } = useContext(AuthContext);

  const schema = yup.object().shape({
    username: yup.string().required('Campo Obrigatório'),
    email: yup.string().email('Email inválido').required('Campo Obrigatório'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const sendUserEdit = (data) => {
    api
      .patch(`users/${user.user_id}/`, data, {
        headers: { Authorization: `Bearer ${access}` },
      })
      .then((response) => {
        toast.success('Perfil Atualizado!');
      })
      .catch((err) => {
        console.log(err);
        toast.error('Não foi possível atualizar perfil');
      });
  };

  return (
    <>
      <Container>
        <ContainerModal>
          <HeaderModal>
            <h2>Editar perfil</h2>
          </HeaderModal>
          <MainModal>
            <Form onSubmit={handleSubmit(sendUserEdit)}>
              <FixForm>
                <Input
                  register={register}
                  errors={errors}
                  name="username"
                  placeholder="Nome"
                />
                <Input
                  register={register}
                  errors={errors}
                  name="email"
                  placeholder="Email"
                />
              </FixForm>
              <Button type="submit">Atualizar</Button>
            </Form>
          </MainModal>
        </ContainerModal>
      </Container>
      <ShowOnlyContainer onClick={() => hideModalProfile()} />
    </>
  );
};
