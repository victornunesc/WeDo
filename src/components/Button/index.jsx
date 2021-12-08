import { Container, ContainerIcon } from './style';

import { FiPlus, FiCheck } from 'react-icons/fi';

export const Button = ({ children }) => {
  return <Container>{children}</Container>;
};

export const IconButton = ({ add, check, sizeSmall, primaryColor }) => {
  return (
    <ContainerIcon sizeSmall={sizeSmall} primaryColor={primaryColor}>
      {add && <FiPlus />}
      {check && <FiCheck />}
    </ContainerIcon>
  );
};
