import { Container, ContainerIcon } from './style';

import { FiPlus, FiCheck, FiEdit } from 'react-icons/fi';

export const Button = ({ children, ...rest }) => {
  return <Container {...rest}>{children}</Container>;
};

export const IconButton = ({
  add,
  check,
  edit,
  card,
  primaryColor,
  ...rest
}) => {
  return (
    <ContainerIcon card={card} primaryColor={primaryColor} {...rest}>
      {add && <FiPlus />}
      {check && <FiCheck />}
      {edit && <FiEdit />}
      +
    </ContainerIcon>
  );
};
