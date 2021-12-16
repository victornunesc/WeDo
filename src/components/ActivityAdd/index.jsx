import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

import { useActivities } from '../../providers/Activities';

import { Input } from '../Input';
import { Button } from '../Button';

import { Modal } from '../Modal';
import { Container } from './style';

export const ActivityAdd = ({ setOpenModal }) => {
  const params = useParams();

  const { addActivity } = useActivities();

  const schema = yup.object().shape({
    title: yup.string().required('Campo Obrigatório'),
    realization_time: yup.string().required('Campo Obrigatório'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleAddActivity = (data) => {
    addActivity(data, params.id);
    setOpenModal(false)
  };

  return (
    <>
      <Modal onClick={() => setOpenModal(false)} />
      <Container>
        <h2>Adicionar Atividade</h2>
        <form onSubmit={handleSubmit(handleAddActivity)}>
          <section className="inputs">
            <Input
              register={register}
              errors={errors}
              name="title"
              placeholder="Título"
            />
            <input type="datetime-local" {...register('realization_time')} />
          </section>
          <Button type="submit">Adicionar</Button>
        </form>
      </Container>
    </>
  );
};
