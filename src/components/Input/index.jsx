import { useEffect, useState } from 'react';

import { FiEye, FiEyeOff } from 'react-icons/fi';

import { Container, ContainerPassword } from './style';

export const Input = ({ placeholder, register, name, errors }) => {
  const [haveText, setHaveText] = useState(false);
  const [isErrored, setIsErrored] = useState(false);

  useEffect(() => {
    setIsErrored(!!errors[name]?.message);
  }, [errors[name]?.message]);

  return (
    <Container haveText={haveText} isErrored={isErrored}>
      <input
        type="text"
        {...register(name, {
          onChange: (event) => setHaveText(event.target.value.trim() !== ''),
        })}
      />
      <p className="placeholder">{placeholder}</p>
      {isErrored && <p className="error">{errors[name]?.message}</p>}
    </Container>
  );
};

export const InputPassword = ({ placeholder, register, name, errors }) => {
  const [haveText, setHaveText] = useState(false);
  const [isErrored, setIsErrored] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    setIsErrored(!!errors[name]?.message);
  }, [errors[name]?.message]);

  return (
    <ContainerPassword haveText={haveText} isErrored={isErrored}>
      <input
        type={showPassword ? 'text' : 'password'}
        {...register(name, {
          onChange: (event) => setHaveText(event.target.value.trim() !== ''),
        })}
      />

      {showPassword ? (
        <FiEyeOff onClick={() => setShowPassword(!showPassword)} />
      ) : (
        <FiEye onClick={() => setShowPassword(!showPassword)} />
      )}

      <p className="placeholder">{placeholder}</p>
      {isErrored && <p className="error">{errors[name]?.message}</p>}
    </ContainerPassword>
  );
};
