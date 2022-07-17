import styled, { css } from "styled-components";

import {Fieldset} from '../../styled/index.js';

const StyledFormWrapper = styled.div`
  width: 800px;
  min-height: 500px;
  position: absolute;
  z-index: 10;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const StyledForm = styled.form.attrs(() => ({
  method: "post",
  action: "#",
  enctype: "multipart/form-data",
}))`
  padding: ${(props) => props.theme.indent};
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${(props) => props.theme.bgColor.contrast};
  border-radius: ${(props) => props.theme.borderRadius.main};
  box-shadow: ${(props) => props.theme.mainShadow};
`;

const InputBlock = styled(Fieldset)`
  width: 100%;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
`;

const StyledField = css`
  padding: 15px;
  box-sizing: border-box;
  font-size: ${(props) => props.theme.mainText.size};
  color: ${(props) => props.theme.txtColor.main};
  background: ${(props) => props.theme.inputBgColor.main};
  border: none;
  border-radius: ${(props) => props.theme.borderRadius.main};
`;

const StyledNameInput = styled.input.attrs((props) => ({
  type: props.type
}))`
  ${StyledField};
  width: 50%;
  min-height: 48px;
  margin-bottom: 20px;
`;

const StyledTextarea = styled.textarea`
  ${StyledField};
  width: 100%;
  min-height: 200px;
  resize: none;
`;

const NewFormTextarea = styled(StyledTextarea)`
  margin-bottom: 20px;
`;

const ButtonsBlock = styled(Fieldset)`
  display: flex;
  justify-content: center;
  button[type="submit"]{
    margin-right: 20px;
  }
`;

export {
  StyledFormWrapper,
  StyledForm,
  InputBlock,
  ButtonsBlock,
  StyledNameInput,
  NewFormTextarea,
};