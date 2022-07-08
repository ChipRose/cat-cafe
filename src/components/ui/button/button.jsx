import close from '../../../assets/icons/close.svg';

import { 
  StyledButton,
  StyledCloseButton,
} from "./style";

function Button({ ...props }) {
  switch (props.typeOfButton) {
    case 'close':
      return (
        <StyledCloseButton
          type='button'
          onClick={props.onClick}
        >
          <img
            width='20px'
            height='20px'
            src={close}
            alt='Кнопка закрыть'
          />
        </StyledCloseButton>
      );
    default:
      return (
        <StyledButton type={props.type} width={props.minWidth ? `${props.minWidth}px` : '260px'} disabled={props.disabled} className={props.className} onClick={props.onClick}>
          {props.children}
        </StyledButton>);
  }

};

export default Button;
