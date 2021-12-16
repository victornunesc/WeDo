import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { useGoals } from '../../providers/Goals';

import { Input, InputRadio, InputRadioContainer } from '../Input';
import { Button } from '../Button';

import { goalsEditValidation } from './Validation';

import { Container } from './style';

export const GroupGoalsEdit = ({
  goalId,
  groupId,
  toggleEdit,
  toggleShowDelete,
}) => {
  const schema = goalsEditValidation;

  const { getGoal, updateGoal } = useGoals();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    getGoal(goalId, reset);
  }, []);

  const handleEditGoal = (data) => {
    updateGoal(data, goalId, groupId, toggleEdit);
  };

  return (
    <Container>
      <h2>Editar Meta</h2>
      <form onSubmit={handleSubmit(handleEditGoal)}>
        <section className="inputs">
          <Input
            isEmpty={false}
            register={register}
            errors={errors}
            name="title"
            placeholder="Título"
          />

          <InputRadioContainer
            register={register}
            errors={errors}
            name="difficulty"
            title="Dificuldade"
          >
            <InputRadio
              register={register}
              name="difficulty"
              label="Muito Fácil"
              sizeBigger
            />
            <InputRadio
              register={register}
              name="difficulty"
              label="Fácil"
              sizeBigger
            />
            <InputRadio
              register={register}
              name="difficulty"
              label="Médio"
              sizeBigger
            />
            <InputRadio
              register={register}
              name="difficulty"
              label="Difícil"
              sizeBigger
            />
            <InputRadio
              register={register}
              name="difficulty"
              label="Muito Difícil"
              sizeBigger
            />
          </InputRadioContainer>
        </section>
        <footer>
          <Button type="submit">Atualizar</Button>
          <Button type="button" secondary onClick={toggleShowDelete}>
            Deletar
          </Button>
        </footer>
      </form>
    </Container>
  );
};
