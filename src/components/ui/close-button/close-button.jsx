import React from 'react';

import close from '../../../assets/icons/close.svg';
import { StyledCloseButton } from './style';

function CloseButton({ ...props }) {

  return (
    <StyledCloseButton
      type='button'
      onClick={props.onClick}
    >
      <img
        width="20px"
        height="20px"
        src={close}
        alt='Кнопка закрыть'
      />
    </StyledCloseButton>
  );
}

export default CloseButton;