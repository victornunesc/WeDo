import { useEffect } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import { useActivities } from '../../providers/Activities';

import { Modal } from '../Modal';
import { Input } from '../Input';
import { Button } from '../Button';

import { activityEditValidation } from './Validation';

import { Container } from './style';

export const ActivityEdit = ({ setOpenModalEdit, id }) => {
  const { deleteActivity, updateActivity, restoreInfos } = useActivities();

  const schema = activityEditValidation;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleEditActivity = (data) => {
    updateActivity(id, data, setOpenModalEdit);
    setOpenModalEdit(false);
  };

  useEffect(() => {
    restoreInfos(id, reset);
  }, []);

  return (
    <>
      <Modal onClick={() => setOpenModalEdit(false)} />
      <Container>
        <h2>Editar Atividade</h2>
        <form onSubmit={handleSubmit(handleEditActivity)}>
          <section className="inputs">
            <Input
              register={register}
              errors={errors}
              name="title"
              placeholder="Título"
              isEmpty={false}
            />
            <Input
              maxLength={10}
              maskInput
              date
              isEmpty={false}
              register={register}
              errors={errors}
              name="realization_time"
              placeholder="Data"
            />
          </section>
          <Button type="submit">Atualizar</Button>
          <Button type="button" secondary onClick={() => deleteActivity(id)}>
            Deletar
          </Button>
        </form>
      </Container>
    </>
  );
};
