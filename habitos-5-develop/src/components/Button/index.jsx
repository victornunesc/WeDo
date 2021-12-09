import { Container, ContainerIcon } from './style';

import { FiPlus, FiCheck } from 'react-icons/fi';

export const Button = ({ children, ...rest }) => {
  return <Container {...rest}>{children}</Container>;
};

export const IconButton = ({
  add,
  check,
  sizeSmall,
  primaryColor,
  ...rest
}) => {
  return (
    <ContainerIcon sizeSmall={sizeSmall} primaryColor={primaryColor} {...rest}>
      {add && <FiPlus />}
      {check && <FiCheck />}
    </ContainerIcon>
  );
};